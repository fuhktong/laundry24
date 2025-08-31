<?php
// Simple debug script to test contact handler
ini_set('display_errors', 1);
error_reporting(E_ALL);

echo "Testing contact handler...\n\n";

// Test 1: Check if files exist
echo "1. File existence:\n";
echo "- contact_handler.php: " . (file_exists('contact_handler.php') ? 'EXISTS' : 'MISSING') . "\n";
echo "- email_helper.php: " . (file_exists('email_helper.php') ? 'EXISTS' : 'MISSING') . "\n";
echo "- ../.env: " . (file_exists('../.env') ? 'EXISTS' : 'MISSING') . "\n";
echo "- .env: " . (file_exists('.env') ? 'EXISTS' : 'MISSING') . "\n\n";

// Test 2: Load environment
require_once 'contact_handler.php';

echo "2. Environment variables:\n";
echo "- SMTP_HOST: " . ($_ENV['SMTP_HOST'] ?? 'NOT SET') . "\n";
echo "- SMTP_PORT: " . ($_ENV['SMTP_PORT'] ?? 'NOT SET') . "\n";
echo "- SMTP_USERNAME: " . ($_ENV['SMTP_USERNAME'] ?? 'NOT SET') . "\n";
echo "- CONTACT_EMAIL: " . ($_ENV['CONTACT_EMAIL'] ?? 'NOT SET') . "\n\n";

// Test 3: PHPMailer
echo "3. PHPMailer:\n";
if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
    echo "- PHPMailer class: LOADED\n";
} else {
    echo "- PHPMailer class: NOT FOUND\n";
}

echo "\nDebug complete.\n";
?>