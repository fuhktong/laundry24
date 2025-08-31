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

// Disable error display for production
ini_set('display_errors', 0);

if (!loadEnvFile()) {
    error_log("Failed to load .env file");
    http_response_code(500);
    echo json_encode(['error' => 'Configuration error']);
    exit;
}

// Add CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    error_log("Method not allowed: " . $_SERVER['REQUEST_METHOD']);
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

// Prepare email - support multiple recipients
$recipients = explode(',', $_ENV['CONTACT_EMAIL']);
$to = array_map('trim', $recipients);
$subject = 'Contact Form: Laundry 24 Orlando';
$message = "Name: " . $data['name'] . "\n";
$message .= "Email: " . $data['email'] . "\n\n";
$message .= "Message:\n" . $data['message'];

// Debug: Check if environment variables are loaded
if (empty($_ENV['SMTP_HOST']) || empty($_ENV['SMTP_USERNAME']) || empty($_ENV['CONTACT_EMAIL'])) {
    error_log("Missing environment variables");
    http_response_code(500);
    echo json_encode(['error' => 'SMTP configuration missing']);
    exit;
}

// Send email
try {
    if (sendSMTPEmail($to, $subject, $message)) {
        echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email']);
    }
} catch (Exception $e) {
    error_log("Contact handler error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
}
?>