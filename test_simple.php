<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

echo "PHP is working\n";

// Test if vendor/autoload.php exists and loads
if (file_exists('vendor/autoload.php')) {
    echo "vendor/autoload.php exists\n";
    try {
        require_once 'vendor/autoload.php';
        echo "Autoload successful\n";
        
        // Test PHPMailer
        if (class_exists('PHPMailer\PHPMailer\PHPMailer')) {
            echo "PHPMailer class loaded\n";
        } else {
            echo "PHPMailer class NOT found\n";
        }
    } catch (Exception $e) {
        echo "Autoload failed: " . $e->getMessage() . "\n";
    }
} else {
    echo "vendor/autoload.php NOT found\n";
}

// Test env loading
if (file_exists('../.env')) {
    echo "../.env file exists\n";
} else {
    echo "../.env file NOT found\n";
}
?>