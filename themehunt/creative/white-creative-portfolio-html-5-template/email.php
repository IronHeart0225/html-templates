<?php

$subject = "Contact";
$success_message = "Your messege has been sent sucesfully!";
$fail_message = "Sorry, something went wrong! Please try again.";
$admin_email = 'email@domain.com'; //Replace this with your email id

$validate = true;
$name = filter_var($_POST['name'], FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$phone = filter_var($_POST['phone'], FILTER_SANITIZE_SPECIAL_CHARS);
$website = filter_var($_POST['website'], FILTER_VALIDATE_URL);
$message = filter_var($_POST['message'], FILTER_SANITIZE_SPECIAL_CHARS);

if (!($name && $email && $message)) {
	$validate = FALSE;
}

// Message
$message = <<<HTML
<html>
<head>
	<title>$subject-$name</title>
</head>
<body>
	<p> From: $name</p>
	<p> Email: $email</p>
	<p> Phone: $phone</p>
	<p> Website: $website</p>
	<p> Message: $message</p>
</body>
</html>
HTML;

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';
$headers[] = 'From: '.$email ;
$headers[] = 'Reply-To: '.$email ;
$headers[] = 'X-Mailer: PHP/' . phpversion();

// Mail it
if ($validate && mail( $admin_email, "$subject by $name", $message, implode("\r\n", $headers))) {
	echo $success_message;
} else {
	echo $fail_message;
};