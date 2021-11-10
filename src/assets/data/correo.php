<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);
$name = $_POST['nombre'];
$email = $_POST['correo'];
$affair = $_POST['asunto'];
$phone = $_POST['telefono'];
$message = $_POST['mensaje'];

try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'alainox.contacto@gmail.com';                     //SMTP username
    $mail->Password   = 'alainox2021';                               //SMTP password
    $mail->SMTPSecure = 'tls';            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('alainox.contacto@gmail.com');
    $mail->addAddress('toxicmonster@outlook.es');     //Add a recipient
    
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $affair;
    $mail->Body    = $message . "\nAtentamente: " . $name . "\nNumero de contacto: " . $phone . "\nCorreo de contacto: " . $email;

    $mail->send();
    echo "<script>alert('El mensaje se envío exitosamente')</script>";
    echo "<script> setTimeout(\"location.href=index.html\",1000) </script>";
} catch (Exception $e) {
    echo "Ocurrio un error: {$mail->ErrorInfo}";
}

?>