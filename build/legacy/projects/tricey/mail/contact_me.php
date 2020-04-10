<?php

// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
$secret="6LcffzcUAAAAAM3Mmb62ELNycymVavMprtP4KGKT";
$response=$_POST["captcha"];
$verify=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
$captcha_success=json_decode($verify);

if ($captcha_success->success==false) {
  //This user was not verified by recaptcha.
  echo "false";
}
else if ($captcha_success->success==true) {
  // Create the email and send the message

  $to = "Artriclove@digitalseedmedia.co"; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
  $email_subject = "Website Contact Form:  $name";
  $email_body = "You have received a new message from your website contact form.\n \n"."Here are the details:\n \nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
  $headers = "From: noreply@digitalseedmedia.co"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
  $headers .= " Reply-To: $email_address";
  mail($to,$email_subject,$email_body,$headers);
  echo "true";
}
?>
