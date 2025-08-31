<?php
// Simple debug script to test PHP and dependencies
echo "PHP Version: " . phpversion() . "<br>";
echo "Current Directory: " . getcwd() . "<br>";
echo "Vendor autoload exists: " . (file_exists('vendor/autoload.php') ? 'Yes' : 'No') . "<br>";
echo "Email helper exists: " . (file_exists('email_helper.php') ? 'Yes' : 'No') . "<br>";
echo ".env file exists: " . (file_exists('.env') ? 'Yes' : 'No') . "<br>";
echo "../.env file exists: " . (file_exists('../.env') ? 'Yes' : 'No') . "<br>";

if (file_exists('vendor/autoload.php')) {
    try {
        require_once 'vendor/autoload.php';
        echo "PHPMailer autoload: Success<br>";
    } catch (Exception $e) {
        echo "PHPMailer autoload error: " . $e->getMessage() . "<br>";
    }
} else {
    echo "Vendor autoload not found<br>";
}

if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
    echo "PHPMailer class available: Yes<br>";
} else {
    echo "PHPMailer class available: No<br>";
}
?>