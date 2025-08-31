<?php
require_once 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Handle JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['error' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Load environment variables from .env file
function loadEnvFile() {
    $envPaths = [
        '../.env',      // Outside public_html (development/production)
        '.env',         // Root directory (local development)
        __DIR__ . '/.env'  // Same directory as this file
    ];
    
    foreach ($envPaths as $envPath) {
        if (file_exists($envPath)) {
            $env = parse_ini_file($envPath);
            foreach ($env as $key => $value) {
                $_ENV[$key] = $value;
            }
            return true;
        }
    }
    return false;
}

loadEnvFile();

// Debug info for development
if ($_SERVER['HTTP_HOST'] === 'localhost:8888' || $_SERVER['HTTP_HOST'] === 'localhost:8889') {
    error_log("Debug - SMTP Password set: " . (!empty($_ENV['SMTP_PASSWORD']) ? 'Yes' : 'No'));
    error_log("Debug - Env files checked: " . json_encode([
        '../.env exists' => file_exists('../.env'),
        '.env exists' => file_exists('.env'),
        '__DIR__/.env exists' => file_exists(__DIR__ . '/.env')
    ]));
}

$mail = new PHPMailer(true);

try {
    // Server settings - Using Hostinger SMTP
    $mail->isSMTP();
    $mail->Host       = 'mail.laundry24orlando.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@laundry24orlando.com';  // You'll need to create this email in Hostinger
    $mail->Password   = $_ENV['SMTP_PASSWORD'] ?? getenv('SMTP_PASSWORD');    
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('advancecoin47@gmail.com', 'Laundry 24 Orlando');
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(false);
    $mail->Subject = 'Contact Form Submission - Laundry 24 Orlando';
    $mail->Body    = "Name: $name\nEmail: $email\nMessage: $message";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Thank you for your message. We will get back to you soon!']);
} catch (Exception $e) {
    // Detailed error logging
    $errorDetails = [
        'Exception message' => $e->getMessage(),
        'PHPMailer ErrorInfo' => $mail->ErrorInfo,
        'SMTP Host' => $mail->Host,
        'SMTP Port' => $mail->Port,
        'Username' => $mail->Username,
        'Password set' => !empty($_ENV['SMTP_PASSWORD']) ? 'Yes' : 'No',
        'Env file loaded' => file_exists('../.env') || file_exists('.env') ? 'Yes' : 'No'
    ];
    
    error_log("Contact Form Error: " . json_encode($errorDetails));
    
    // In development, show detailed error
    if ($_SERVER['HTTP_HOST'] === 'localhost:8888' || $_SERVER['HTTP_HOST'] === 'localhost:8889') {
        $debugInfo = [
            'Error' => $e->getMessage(),
            'PHPMailer Error' => $mail->ErrorInfo,
            'Password Set' => !empty($_ENV['SMTP_PASSWORD']) ? 'Yes' : 'No',
            'Env File Found' => file_exists('../.env') || file_exists('.env') ? 'Yes' : 'No',
            'SMTP Host' => $mail->Host,
            'Username' => $mail->Username
        ];
        echo json_encode(['status' => 'error', 'message' => 'Debug Info: ' . json_encode($debugInfo)]);
    } else {
        echo json_encode(['error' => 'Failed to send message. Please try again later.']);
    }
}
?>