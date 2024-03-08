// Lista.jsx
import React, { useState, useEffect } from 'react';
import productos from '../assets/productos.json';

export const Lista = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [loading, setLoading] = useState(true);
  const [asyncProducts, setAsyncProducts] = useState([]);

  useEffect(() => {
    // Simulamos una carga asíncrona con setTimeout
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulamos una carga asíncrona con setTimeout
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve(productos), 1000)
        );

        setAsyncProducts(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Solo se ejecuta al montar el componente

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, cantida: item.cantida + 1 }
          : item
      );
      setTotal(total + product.precio * product.cantida);
      setCountProducts(countProducts + product.cantida);
      setAllProducts([...products]);
    } else {
      setTotal(total + product.precio * product.cantida);
      setCountProducts(countProducts + product.cantida);
      setAllProducts([...allProducts, product]);
    }
  };

  return (
    <div className='container-items'>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        asyncProducts.map((product) => (
          <div className='item' key={product.id}>
            <figure>
              <img src={product.foto} alt={product.NombreProducto} />
            </figure>
            <div className='info-product'>
              <h2>{product.NombreProducto}</h2>
              <p className='price'>{product.precio} €</p>
              <button onClick={() => onAddProduct(product)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
