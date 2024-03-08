// Carro.js
import React, { useState, useCallback } from 'react';

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 1.92 1.61h10.8a2 2 0 0 0 1.92-1.61L19 6H4" />
  </svg>
);

export const Carro = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = product => {
    const results = allProducts.filter(
      item => item.id !== product.id
    );

    setTotal(total - product.precio * product.cantida);
    setCountProducts(countProducts - product.cantida);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const redirectToGooglePay = () => {
    window.location.href = 'https://pay.google.com/intl/es_es/about/';
  };

  const onCheckout = async () => {
    try {
      const dataToSend = allProducts.map(product => ({
        id: product.id,
        NombreProducto: product.NombreProducto,
        cantida: product.cantida,
        precio: product.precio,
      }));

      const response = await fetch('/api/GuardarDatos.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log('Datos del carrito guardados correctamente');
        redirectToGooglePay();
      } else {
        console.error('Error al intentar guardar datos del carrito');
      }
    } catch (error) {
      console.error('Error en la llamada a la API:', error);
    }
  };


  return (
    <div className={`cart-container ${active ? 'active' : ''}`}>
      <div className='container-icon' onClick={() => setActive(!active)}>
      <svg className='icon-cart' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 1.92 1.61h10.8a2 2 0 0 0 1.92-1.61L19 6H4" />
        </svg>
        <div className='count-products'>
          <span id='contador-productos'>{countProducts}</span>
        </div>
      </div>

      <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
        {allProducts.length ? (
          <>
            <div className='row-product'>
              {allProducts.map(product => (
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
                    onClick={() => onDeleteProduct(product)}
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
              <h3>Total:</h3>
              <span className='total-pagar'>{total.toFixed(2)} €</span>
            </div>

            <button className='btn-clear-all' onClick={onCleanCart}>
              Vaciar Carrito
            </button>
            <button className='btn-terminar-pago' onClick={onCheckout}>
              Terminar Pago
            </button>

          </>
        ) : (
          <p className='cart-empty'>El carrito está vacío</p>
        )}
      </div>
    </div>
  );
};
