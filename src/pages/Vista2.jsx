import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carro } from '../components/Carro';
import { Lista } from '../components/Lista';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

function Vista2() {
  const enlaces = useNavigate();

  const [losProductos, setlosProductos] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [contarProductos, setcontarProductos] = React.useState(0);

  const irAVista1 = React.useCallback(() => {
    enlaces('/');
  }, [enlaces]);

  const botonEstilo = {
    backgroundColor: '#cc9900',
    position: 'absolute',
    top: '20%',
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
     <br /><br /><br /><br />
      <Carro
        losProductos={losProductos}
        setlosProductos={setlosProductos}
        total={total}
        setTotal={setTotal}
        contarProductos={contarProductos}
        setcontarProductos={setcontarProductos}
      />
      <br /><br /><br />
      <Lista
        losProductos={losProductos}
        setlosProductos={setlosProductos}
        total={total}
        setTotal={setTotal}
        contarProductos={contarProductos}
        setcontarProductos={setcontarProductos}
      />
      <div className='vista2'>
        <Button onClick={irAVista1} text="Volver al Inicio" style={botonEstilo} />
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
       <Footer />
    </>
  );
}

export default Vista2;
