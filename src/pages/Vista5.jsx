
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import curso1 from '../assets/imagenes/curso1.jpg';
import curso2 from '../assets/imagenes/curso2.jpg';
import curso3 from '../assets/imagenes/curso3.jpg';
import curso4 from '../assets/imagenes/curso4.jpg';
import curso5 from '../assets/imagenes/curso5.jpg';
import mensaje1 from '../assets/imagenes/mensaje1.jpg';
import mensaje2 from '../assets/imagenes/mensaje2.jpg';
import mensaje3 from '../assets/imagenes/mensaje3.jpg';

const Vista5 = () => {
  return (
    <div>
      <Header />
      <br /><br /><br /><br />

      <div class="cuadroCursos">
        <p class="flechita">↓</p>
        <h2 class="tituloCursos">
          Prueba nuestros diferentes <br />
          cursos y mejora tu condición
        </h2>
        <p class="flechita1">&nbsp; ↓</p>
      </div>

      <div class="toblanco2">
        <div class="espacio">
          <p class="textoNegrita">Ganar masa muscular:</p>
          <ul>
            <li class="titulin">Programa de entrenamiento de hipertrofia muscular.</li>
            <li class="titulin">Curso de levantamiento de pesas para principiantes.</li>
            <li class="titulin">Entrenamiento específico para aumentar la masa muscular magra</li>
          </ul>
          <img src={curso1} alt="primer curso" class="curso1" />
          <a href="masaMuscular.html">
            <button class="acceder">ACCEDER</button>
          </a>
        </div>

        <div class="espacio">
          <p class="textoNegrita">Pérdida de peso:</p>
          <ul>
            <li class="titulin">Programa de pérdida de grasa corporal.</li>
            <li class="titulin">Clases de entrenamiento de alta intensidad (HIIT).</li>
            <li class="titulin">Nutrición y dieta para la pérdida de peso.</li>
          </ul>
          <img src={curso2} alt="segundo curso" class="curso1" />
          <button class="acceder">ACCEDER</button>
        </div>

        <div class="espacio">
          <p class="textoNegrita">Flexibilidad y movilidad:</p>
          <ul>
            <li class="titulin">Clases de yoga.</li>
            <li class="titulin">Entrenamiento de pilates.</li>
            <li class="titulin">Estiramientos y ejercicios de movilidad</li>
          </ul>
          <img src={curso3} alt="tercer curso" class="curso1" />
          <button class="acceder">ACCEDER</button>
        </div>

        <div class="espacio">
          <p class="textoNegrita">Nutrición y dietética:</p>
          <ul>
            <li class="titulin">Asesoramiento nutricional personalizado.</li>
            <li class="titulin">Planes de alimentación para objetivos específicos.</li>
            <li class="titulin">Información sobre suplementos deportivos.</li>
          </ul>
          <img src={curso4} alt="cuarto curso" class="curso1" />
          <button class="acceder">ACCEDER</button>
        </div>

        <div class="espacio">
          <p class="textoNegrita">Programas para grupos específicos:</p>
          <ul>
            <li class="titulin">Entrenamiento para niños y adolescentes.</li>
            <li class="titulin">Programas de acondicionamiento postparto.</li>
            <li class="titulin">Entrenamiento para personas con necesidades especiales</li>
          </ul>
          <img src={curso5} alt="quinto curso" class="curso1" />
          <button class="acceder">ACCEDER</button>
        </div>

        <div>
          <p class="textoNegrita">MOTIVACIÓN EXTRA PARA NUESTROS CLIENTES</p>
          <iframe
            class="video1"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eaRQF-7hhmo?si=GAu0DlLAOvIYIGJ4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JsKkHIe5OXo?si=qLVTZzWFWOA7fZQ8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rYXPu8XOfXA?si=mPKfr0r91ki-pp9m"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div class="galeria">
          <div class="galeriaxx" onclick="openLightbox(1)">
            <img src={mensaje1} alt="Imagen 1" />
          </div>
          <div class="galeriaxx" onclick="openLightbox(2)">
            <img src={mensaje2} alt="Imagen 2" />
          </div>
          <div class="galeriaxx" onclick="openLightbox(3)">
            <img src={mensaje3} alt="Imagen 3" />
          </div>
        </div>

        <div class="lightbox" id="lightbox">
          <span class="spanGaleria" onclick="closeLightbox()">&times;</span>
          <img src="" alt="Imagen en Lightbox" id="lightbox-img" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vista5;
