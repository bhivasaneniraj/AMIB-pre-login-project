<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $recipientEmail = "business_team@example.com"; // Set the business team's email address
  
  $datetime = $_POST["datetime"];
  $phone = $_POST["phone"];
  
  // Compose the email message
  $to = $recipientEmail;
  $subject = "New appointment request";
  $message = "A new appointment request has been submitted:\n\n";
  $message .= "Date and Time: " . $datetime . "\n";
  $message .= "Phone Number: " . $phone . "\n";
  $headers = "From: your_email@gmail.com"; // Set the sender email address here
  
  // Send the email
  if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully";
  } else {
    echo "Failed to send email";
  }
}
?>
