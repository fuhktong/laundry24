# Basic Contact Form Setup

Simple guide for setting up a contact form that sends emails.

## Required Files

1. `contact.php` - Contact form page
2. `contact_handler.php` - Email processing
3. `email_helper.php` - SMTP email sending

## Step 1: Install PHPMailer

```bash
composer require phpmailer/phpmailer
```

## Step 2: Environment Variables

Create `.env` file:

```env
CONTACT_EMAIL=your-email@gmail.com
SMTP_HOST=your-smtp-host
SMTP_USERNAME=your-smtp-username
SMTP_PASSWORD=your-smtp-password
SMTP_PORT=587
```

## Step 3: Contact Form HTML

```html
<form id="contactForm">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Email" required />
  <input type="text" name="subject" placeholder="Subject" required />
  <textarea name="message" placeholder="Message" required></textarea>
  <button type="submit">Send Message</button>
</form>

<script>
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      fetch("contact_handler.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Message sent successfully!");
            this.reset();
          } else {
            alert("Error: " + data.error);
          }
        });
    });
</script>
```

## Step 4: Email Helper (email_helper.php)

```php
<?php
require_once 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

function sendSMTPEmail($to, $subject, $message) {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = $_ENV['SMTP_HOST'];
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['SMTP_USERNAME'];
        $mail->Password = $_ENV['SMTP_PASSWORD'];
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $_ENV['SMTP_PORT'];

        $mail->setFrom($_ENV['SMTP_USERNAME'], 'Contact Form');
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = $message;

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log("Email error: " . $e->getMessage());
        return false;
    }
}
?>
```

## Step 5: Contact Handler (contact_handler.php)

```php
<?php
require_once 'email_helper.php';

// Load environment variables
if (file_exists('.env')) {
    $lines = file('.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($value);
        }
    }
}

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
$subject = 'Contact Form: ' . $data['subject'];
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
```

## How It Works

1. User fills out contact form
2. JavaScript prevents default submission
3. Form data sent as JSON to `contact_handler.php`
4. Handler validates input and sends email via SMTP
5. Success/error response returned to frontend

## Email Destination

Messages are sent to the email specified in the `CONTACT_EMAIL` environment variable.

## Key Success Factor

Using **PHPMailer with SMTP** instead of PHP's basic `mail()` function ensures reliable email delivery.
