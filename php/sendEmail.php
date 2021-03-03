<?php

	// Getting data from requests
	$name = $_POST['contactName'];
	$email = $_POST['contactEmail'];
	$title = $_POST['title'];
	$message = $_POST['contactMessage'];

	$emailTo = "obanijesuadufe8@gmail.com";
	$subject = $title;
	$body = $name. "<br>" .$message;
	$headers = "From: ".$email;

	if (mail($emailTo, $subject, $body, $headers)) {
		echo "The email was sent successfully";
		header("Location: http://localhost/portfolio/index.php");
	} else {
		echo "The email could not be sent";
	}


?>