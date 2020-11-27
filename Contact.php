<?php
if(!empty($_POST["send"])) {
	$name = $_POST["Name"];
	$email = $_POST["Email"];
	$content = $_POST["Message"];

	$toEmail = "TrinityFFreeman@gmail.com";
	$mailHeaders = "From: " . $name . "<". $email .">\r\n";
	if(mail($toEmail, $content, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	    $type = "success";
	}
}
?>