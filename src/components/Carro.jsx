import React, { useState } from 'react';

export const Carro = ({
  losProductos,
  setlosProductos,
  total,
  contarProductos,
  setcontarProductos,
  setTotal,
}) => {
  const [activacion, setactivacion] = useState(false);

  const borrarProducto = product => {
    const analisis = losProductos.filter(
      item => item.id !== product.id
    );

    setTotal(total - product.precio * product.cantida);
    setcontarProductos(contarProductos - product.cantida);
    setlosProductos(analisis);
  };

  const vaciarCarrito = () => {
    setlosProductos([]);
    setTotal(0);
    setcontarProductos(0);
  };

  const googlePAY = () => {
    window.location.href = 'https://pay.google.com/intl/es_es/about/';
  };

  const utilizoFetch = async () => {
    try {
      const datitos = losProductos.map((product) => ({
        id: product.id,
        NombreProducto: product.NombreProducto,
        cantida: product.cantida,
        precio: product.precio,
      }));

      const respuesta = await fetch('http://localhost:8000/api/GuardarDatos.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datitos),
        credentials: 'include',
      });

      if (respuesta.ok) {
        console.log('Datos del carrito guardados correctamente');
        googlePAY();
      } else {
        console.error('Error al intentar guardar datos del carrito');
      }
    } catch (error) {
      console.error('Error en la llamada a la API:', error);
    }
  };


  return (
    <div className={`cart-container ${activacion ? 'active' : ''}`}>
      <div className='container-icon' onClick={() => setactivacion(!activacion)}>
      <svg className='icon-cart' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 1.92 1.61h10.8a2 2 0 0 0 1.92-1.61L19 6H4" />
        </svg>
        <div className='count-products'>
          <span id='contador-productos'>{contarProductos}</span>
        </div>
      </div>

      <div className={`container-cart-products ${activacion ? '' : 'hidden-cart'}`}>
        {losProductos.length ? (
          <>
            <div className='row-product'>
              {losProductos.map(product => (
                <div className='cart-product' key={product.id}>
                  <div className='info-cart-product'>
                    <span className='cantidad-producto-carrito'>
                      {product.cantida}
                    </span>
                    <p className='titulo-producto-carrito'>
                      {product.NombreProducto}
                    </p>
                    <span className='precio-producto-carrito'>
                      {product.precio.toFixed(2)} €
                    </span>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='icon-close'
                    onClick={() => borrarProducto(product)}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </div>
              ))}
            </div>

            <div className='cart-total'>
              <h3>Cuenta a pagar :</h3>
              <span className='total-pagar'>{total.toFixed(2)} €</span>
            </div>

            <button className='btn-clear-all' onClick={vaciarCarrito}>
              Vaciar Carrito
            </button>
            <button className='btn-terminar-pago' onClick={utilizoFetch}>
              Terminar Pago
            </button>

          </>
        ) : (
          <p className='cart-empty'>¡Añade tus productos!</p>
        )}
      </div>
    </div>
  );
};
