<?php


		$your_name = $_POST['username'];
		$your_phone = $_POST['usertelephone'];
		$your_email = $_POST['useremail'];

		$admin_email = 'info@unitrack.com.ua';
		$header .= 'From: ' .$your_name.' <'.$your_email.'>';
		$subject = 'Новая заявка с сайта';
		$message = '
	Новая заявка с сайта Unitrack';
		$message.='

	Имя: ' . $your_name.'
	Телефон: ' . $your_phone.'
	Емейл: ' . $your_email;



mail($admin_email, $subject, $message, $header);


$data = array('data' => array( 'message' => $message ) );
echo json_encode($data);
//$host  = $_SERVER['HTTP_HOST'];
//$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
//$extra = 'success.html';
//header("Location: http://$host$uri/$extra");
//exit;


?>