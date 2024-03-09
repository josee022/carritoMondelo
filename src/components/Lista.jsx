import React, { useState, useEffect } from 'react';
import productos from '../assets/productos.json';

export const Lista = ({
  losProductos,
  setlosProductos,
  contarProductos,
  setcontarProductos,
  total,
  setTotal,
}) => {
  const [cargar, setcargar] = useState(true);
  const [productosAsincronos, setproductosAsincronos] = useState([]);

  useEffect(() => {
    const datosFetch = async () => {
      setcargar(true);
      try {
        const respuesta = await new Promise((resolve) =>
          setTimeout(() => resolve(productos), 1000)
        );

        setproductosAsincronos(respuesta);
      } catch (error) {
        console.error('Error :', error);
      } finally {
        setcargar(false);
      }
    };

    datosFetch();
  }, []);

  const añadirProductos = (product) => {
    if (losProductos.find((item) => item.id === product.id)) {
      const objetos = losProductos.map((item) =>
        item.id === product.id
          ? { ...item, cantida: item.cantida + 1 }
          : item
      );
      setTotal(total + product.precio * product.cantida);
      setcontarProductos(contarProductos + product.cantida);
      setlosProductos([...objetos]);
    } else {
      setTotal(total + product.precio * product.cantida);
      setcontarProductos(contarProductos + product.cantida);
      setlosProductos([...losProductos, product]);
    }
  };

  return (
    <div className='container-items'>
      {cargar ? (
        <p className='cargando'>Cargando productos...</p>
      ) : (
        productosAsincronos.map((product) => (
          <div className='item' key={product.id}>
            <figure>
              <img src={product.foto} alt={product.NombreProducto} />
            </figure>
            <div className='info-product'>
              <h2>{product.NombreProducto}</h2>
              <p className='price'>{product.precio} €</p>
              <button onClick={() => añadirProductos(product)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
