import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carro } from '../components/Carro';
import { Lista } from '../components/Lista';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';  // Importa el componente Button

function Vista2() {
  const navigate = useNavigate();

  const [allProducts, setAllProducts] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [countProducts, setCountProducts] = React.useState(0);

  const irAVista1 = React.useCallback(() => {
    navigate('/');
  }, [navigate]);

  const botonEstilo = {
    backgroundColor: '#cc9900',
    position: 'absolute',
    top: '17%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
    fontSize: '25px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'white',
  };

  return (
    <>
     <Header />
     <br /><br /><br />
      <Carro
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <br /><br /><br />
      <Lista
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <div className='vista2'>
        <Button onClick={irAVista1} text="Volver al Home" style={botonEstilo} />
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
       <Footer />
    </>
  );
}

export default Vista2;
