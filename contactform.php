<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['status' => 'error', 'message' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
    exit;
}

$to = 'advancecoin47@gmail.com';
$subject = 'Contact Form Submission - Laundry 24 Orlando';
$body = "Name: " . htmlspecialchars($name) . "\n";
$body .= "Email: " . htmlspecialchars($email) . "\n";
$body .= "Message: " . htmlspecialchars($message) . "\n";

$headers = array(
    'From' => $email,
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion()
);

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['status' => 'success', 'message' => 'Thank you for your message. We will get back to you soon!']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to send message. Please try again later.']);
}
?>