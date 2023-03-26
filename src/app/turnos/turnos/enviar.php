<?php 
	$nombre = $_POST['formularioNombre'];
    $dni = $_POST['formularioDni'];
    $especialidad = $_POST['especialidad'];
    $obraSocial = $_POST['obraSocial'];
    $telefono = $_POST['telefono'];
	$email = 'dario97_12@hotmail.com';
	$asunto = 'Nuevo turno';
	$mensaje = "Nombre: ".$nombre" <br> Dni: $dni <br> Telefono: $telefono <br>Especialidad: $especialidad <br> ObraSocial: $obraSocial<br>;


	if(mail('dario12bifa@gmail.com', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>