import React from 'react';
import '../home.css';
import gmailImg from '../assets/imagenes/gmail.png';
import telefonoImg from '../assets/imagenes/telefono.png';
import instagramImg from '../assets/imagenes/instagram.png';
import youtubeImg from '../assets/imagenes/youtube.png';

const Footer = () => {
  return (
    <footer>
      <hr className="lineaDorada" />
      <div>
        <div>
          <h2 className="ayudah2">AYUDA</h2><br /><br />
          <p className="terminos">Términos y condiciones</p><br /><br />
          <p className="terminos">Política de privacidad</p><br /><br />
          <p className="terminos">Política de cookies</p><br /><br />
          <p className="terminos">Preguntas frecuentes</p><br /><br />
        </div>

        <div>
          <h2 className="contactah2">CONTACTA CON NOSOTROS</h2><br /><br />
          <p className="terminos2"><img className="gmail" src={gmailImg} alt="gmail" />&nbsp; Gym.mondelo@gmail.com
          </p><br /><br />
          <p className="terminos2"><img className="gmail" src={telefonoImg} alt="telefono" />&nbsp; 622 33 18 27</p>
          <br /><br />
          <p className="terminos2"><img className="gmail" src={instagramImg} alt="instagram" />&nbsp; @GymMondelo_</p>
          <br /><br />
          <p className="terminos2"><img className="gmail" src={youtubeImg} alt="youtube" />&nbsp; GymMondelo Fit</p>
          <br /><br />
        </div>
      </div>
      <div>
      <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">
                <img className="licencia" src="https://licensebuttons.net/l/by/4.0/88x31.png"
                    alt="Creative Commons License"></img>
            </a>
      </div>
    </footer>
  );
};

export default Footer;
