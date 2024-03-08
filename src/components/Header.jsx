import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css';
import logoImg from '../assets/imagenes/GYM.png';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#000000' }}>
      <div>
        <img className="logo" src={logoImg} alt="fondo de pagina" />
        <nav aria-label="enlaces web" aria-current="index">
          <div>
            <Link to="/" className="enlace" style={{ color: '#ffffff' }}>Home &nbsp; &nbsp;</Link>
            <Link to="/nosotros" className="enlace" style={{ color: '#ffffff' }}>Nosotros &nbsp; &nbsp;</Link>
            <Link to="/OtherPage" className="enlace" style={{ color: '#ffffff' }}>Productos &nbsp; &nbsp;</Link>
            <Link to="/cursos" className="enlace" style={{ color: '#ffffff' }}>Cursos &nbsp; &nbsp;</Link>
            <Link to="/subscripcion" className="enlace" style={{ color: '#ffffff' }}>Subscripcion &nbsp; &nbsp;</Link>
            <Link to="/contacto" className="enlace" style={{ color: '#ffffff' }}>Contacto &nbsp; &nbsp;</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
