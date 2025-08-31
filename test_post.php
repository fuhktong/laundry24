<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

echo "Testing POST to contact_handler.php...\n\n";

$testData = [
    'name' => 'Test User',
    'email' => 'test@example.com',
    'message' => 'Test message'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://laundry24orlando.com/contact_handler.php');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($testData));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_VERBOSE, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "HTTP Code: " . $httpCode . "\n";
echo "Response: " . $response . "\n";
?>