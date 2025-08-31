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
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = $_ENV['SMTP_PORT'];

        $mail->setFrom($_ENV['SMTP_USERNAME'], 'Laundry 24 Orlando Contact');
        // Add multiple recipients if $to is an array
        if (is_array($to)) {
            foreach ($to as $email) {
                $mail->addAddress($email);
            }
        } else {
            $mail->addAddress($to);
        }
        $mail->addReplyTo($_ENV['SMTP_USERNAME'], 'Laundry 24 Orlando');
        
        // Add headers to improve deliverability
        $mail->addCustomHeader('X-Mailer', 'Laundry24Orlando Contact Form');
        $mail->addCustomHeader('List-Unsubscribe', '<mailto:' . $_ENV['SMTP_USERNAME'] . '?subject=unsubscribe>');
        
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->isHTML(false);

        $mail->send();
        error_log("Email sent successfully to: " . (is_array($to) ? implode(', ', $to) : $to));
        return true;
    } catch (Exception $e) {
        error_log("PHPMailer error: " . $e->getMessage());
        error_log("SMTP Host: " . $_ENV['SMTP_HOST']);
        error_log("SMTP Port: " . $_ENV['SMTP_PORT']);
        error_log("SMTP Username: " . $_ENV['SMTP_USERNAME']);
        throw $e; // Re-throw to get detailed error in contact_handler
    }
}
?>