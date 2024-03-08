import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';
import Button from '../components/Button';

function Vista1() {
  const enlaces = useNavigate();

  const irAVista2 = React.useCallback(() => {
    enlaces('/vista2');
  }, [enlaces]);

  const botonEstilo = {
    backgroundColor: '#cc9900',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '15px',
    fontSize: '25px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'white'
  };

  return (
    <div>
      <Header />
      <br /><br /><br /><br />
      <Body />
      <div className='vista2'>
        <Button onClick={irAVista2} text="Catálogo de productos" style={botonEstilo} />
      </div>
      <br /><br /><br /><br />
      <Footer />
    </div>
  );
}

export default Vista1;
