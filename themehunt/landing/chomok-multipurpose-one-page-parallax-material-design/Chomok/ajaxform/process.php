
<?php

sleep(1);
$to = 'cpationcoder1@gmail.com';
$subject = 'JustWait Contact Form';

if( isset($_POST['first_name']) &&  isset($_POST['email']) &&  isset($_POST['subject']) && isset($_POST['textarea1'])) {
	$first_name = trim($_POST['first_name']);
	$email = trim($_POST['email']);
	$subject = trim($_POST['subject']);
	$textarea1 = trim($_POST['textarea1']);

	if(!empty($first_name) && !empty($email) && !empty($subject) && !empty($textarea1)) {

		$full_name = $first_name . " " . $lname;
		$body = $full_name . "\n" . $subject;
		$body = $full_name . "\n" . $textarea1;
		$headers = "From  {$full_name}  " . $email; 

		mail($to, $subject, $body, $headers);
	}
} else {
	header('location: ../index.html');
}

?>