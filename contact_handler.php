<?php
require_once 'email_helper.php';

// Load environment variables
function loadEnvFile() {
    $envPaths = [
        '../.env',      // Outside public_html (development/production)
        '.env',         // Root directory (local development)
        __DIR__ . '/.env'  // Same directory as this file
    ];
    
    foreach ($envPaths as $envPath) {
        if (file_exists($envPath)) {
            $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($lines as $line) {
                if (strpos($line, '=') !== false) {
                    list($key, $value) = explode('=', $line, 2);
                    $_ENV[trim($key)] = trim($value);
                }
            }
            return true;
        }
    }
    return false;
}

loadEnvFile();

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Basic validation
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields required']);
    exit;
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Prepare email
$to = $_ENV['CONTACT_EMAIL'];
$subject = 'Contact Form: Laundry 24 Orlando';
$message = "Name: " . $data['name'] . "\n";
$message .= "Email: " . $data['email'] . "\n\n";
$message .= "Message:\n" . $data['message'];

// Send email
if (sendSMTPEmail($to, $subject, $message)) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>