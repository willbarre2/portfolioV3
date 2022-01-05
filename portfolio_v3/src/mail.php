<?php
$lastname = htmlspecialchars(trim($_POST["nom"]), ENT_QUOTES);
$firstname = htmlspecialchars(trim($_POST["prenom"]), ENT_QUOTES);
$email = htmlspecialchars(trim($_POST["mail"]), ENT_QUOTES);
$subject = htmlspecialchars(trim($_POST["sujet"]), ENT_QUOTES);
$message = htmlspecialchars(trim($_POST["msg"]), ENT_QUOTES);

$toEmail = "willbarre9@gmail.com";
$mailHeaders = "From: " . $firstname . " " . $lastname . "<" . $email . ">\r\n";

if(mail($toEmail, $subject, $message, $mailHeaders)){
    $response = TRUE;
}else{
    $response = FALSE;
}

header('Content-Type: application/json');

echo json_encode($response);
?>