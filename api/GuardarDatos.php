<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");

$rutaArchivo = __DIR__ . '/../datos/DatosGuardados.txt';

$datos = file_get_contents('php://input');

if (!empty($datos)) {
    $productos = json_decode($datos, true);

    if (!empty($productos)) {
        $productosFormateados = '';
        $totalPedido = 0;

        foreach ($productos as $indice => $producto) {
            $total = $producto['precio'] * $producto['cantida'];
            $productosFormateados .= ($indice + 1) . 'º PRODUCTO: ID->' . $producto['id'] . ', NOMBRE->' . $producto['NombreProducto'] . ', UNIDADES->' . $producto['cantida'] . ', PRECIO->' . $producto['precio'] . '€, _____TOTAL->' . number_format($total, 2) . '€.' . PHP_EOL . PHP_EOL;
            $totalPedido += $total;
        }

        $productosFormateados .= str_repeat('_', 100) . PHP_EOL . PHP_EOL;

        $productosFormateados .= 'TOTAL DEL PEDIDO -> ' . number_format($totalPedido, 2) . '€.' . PHP_EOL . PHP_EOL;

        if (file_put_contents($rutaArchivo, $productosFormateados) !== false) {
            echo json_encode(['mensaje' => 'Datos del carrito guardados correctamente']);
        } else {
            echo json_encode(['error' => 'Error al intentar guardar datos del carrito']);
            error_log('Error al intentar guardar datos del carrito');
        }
    } else {
        echo json_encode(['error' => 'No hay datos de productos para procesar']);
    }
} else {
    echo json_encode(['error' => 'No se recibieron datos válidos']);
    error_log('No se recibieron datos válidos');
}
?>
