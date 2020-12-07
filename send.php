<?php

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

$title = "New message from Best Tour Plan";
if($name != null || $phone != null || $message != null)
{
    $body = "
    <h2>New message from</h2>
    <b>Name:</b> $name<br>
    <b>Phone:</b> $phone<br><br>
    <b>Message:</b><br>$message
    ";
} 
else 
{
    $body = "
    <h2>New subscription from</h2>
    <b>Email:</b> $email<br>";
}

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    $mail->Host       = 'smtp.gmail.com'; 
    $mail->Username   = 'alexandrosherry@gmail.com'; 
    $mail->Password   = 'Sherry1992'; 
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('alexandrosherry@gmail.com', 'Alexander'); 

    $mail->addAddress('alepet.petr1638@yandex.ru');

    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Message is not sent. Error: {$mail->ErrorInfo}";
}

header('Location: thanks.html');