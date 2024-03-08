<?php

// Ruta donde se almacenarán los datos del carrito
$rutaArchivo = __DIR__ . '/datos/DatosGuardados.txt';

// Obtiene los datos del cuerpo de la solicitud
$datos = file_get_contents('php://input');

// Intenta guardar los datos en el archivo
if (file_put_contents($rutaArchivo, $datos) !== false) {
    // Éxito
    echo json_encode(['mensaje' => 'Datos del carrito guardados correctamente']);
} else {
    // Error
    echo json_encode(['error' => 'Error al intentar guardar datos del carrito']);
    // También puedes revisar los mensajes de error del sistema:
    error_log('Error al intentar guardar datos del carrito');
}
?>
