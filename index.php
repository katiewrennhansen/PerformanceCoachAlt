<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: TangledDemo'; 
    $to = 'khansen0415@gmail.com'; 
    $subject = $_POST['subject'];

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
?>


<?php
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) { 
        echo '<p>Your message has been sent!</p>';
    } else { 
        echo '<p>Something went wrong, go back and try again!</p>'; 
    }}
?>