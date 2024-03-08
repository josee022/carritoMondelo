import React from 'react';
import '../home.css';
import portada1Img from '../assets/imagenes/portada1.jpg';
import portadaImg from '../assets/imagenes/portada.jpg';
import mujerImg from '../assets/imagenes/mujer.jpg';
import gymmmImg from '../assets/imagenes/gymmm.jpg';
import asesoramientoImg from '../assets/imagenes/asesoramiento.jpg';
import nutricionImg from '../assets/imagenes/nutricion.jpg';
import g1Img from '../assets/imagenes/g1.jpg';
import g2Img from '../assets/imagenes/g2.jpg';
import g3Img from '../assets/imagenes/g3.jpg';
import g4Img from '../assets/imagenes/g4.jpg';
import fondoPequenoImg from '../assets/imagenes/fondoPequeño.jpg';
import fondoImg from '../assets/imagenes/fondo.jpg';

const HomePage = () => {
    return (
        <div>
            <section>
                <div className="contenedor">
                    <img src={portada1Img} alt="Imagen izquierda" className="portada" />
                    <div className="texto-superpuesto">
                        <h1 className="titulo">THE GYM MONDELO</h1>
                    </div>
                    <div className="texto-superpuesto2">
                        <h2 className="nopnog">NO PAIN NO GAIN</h2>
                    </div>
                    <div className="texto-superpuesto3">
                        <p className="textindice">El camino hacia el éxito siempre está en construcción.</p>
                    </div>
                    <img src={portadaImg} alt="Imagen derecha" className="portada" />
                </div>
                <br /><br /><br /><br />
                <div>
                </div>
                <center>
                    <div className="cuadro dorado">
                        <h2 className="empieza_ya" >¡EMPIEZA YA!</h2>
                    </div>
                </center>
                <br /><br /><br /><br /><br /><br /><br />
                <h2 className="qq">¿ Qué ofrecemos a nuestros clientes?</h2>
            </section>

            <section>
                <div className="fila">
                    <div className="columna">
                        <img className="tru" src={gymmmImg} alt="resultados" />
                        <h2 className="inde" style={{ color: '#ffffff' }}>RESULTADOS</h2>
                    </div>
                    <div className="columna">
                        <img className="tru" src={asesoramientoImg} alt="asesoramiento" />
                        <h2 className="inde" style={{ color: '#ffffff' }}>ASESORAMIENTO</h2>
                    </div>
                    <div className="columna">
                        <img className="tru" src={nutricionImg} alt="nutricion" />
                        <h2 className="inde" style={{ color: '#ffffff' }}>NUTRICIÓN</h2>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <h2 className="text7" style={{ color: '#ffffff' }}>¿ Por qué lo hacemos ?</h2><br /><br />
                    <p className="text8" style={{ color: '#ffffff' }}>
                        En Gym Mondelo, nuestra pasión es promover un estilo de vida activo y saludable.<br />
                        Valoramos la cultura física y te invitamos a unirte a nuestra comunidad para experimentar <br />los beneficios del fitness.
                        Ofrecemos orientación personalizada,<br />una comunidad solidaria y un enfoque en el bienestar integral.<br />
                        ¡Únete a Gym Mondelo y comienza tu viaje hacia una vida más saludable hoy mismo!
                    </p>
                    <img className="mujer" src={mujerImg} alt="mujer ejercicio" />
                </div>
            </section>

            <section>
                <div>
                    <div className="fila">
                        <div className="columna">
                            <img className="fal" src={g1Img} alt="filas" />
                        </div>
                        <div className="columna">
                            <img className="fal" src={g2Img} alt="columnas" />
                        </div>
                    </div> <br /><br /><br />
                    <div>
                        <div className="columna">
                            <img className="fal" src={g3Img} alt="columnas" />
                        </div>
                        <div className="columna">
                            <img className="fal" src={g4Img} alt="filas" />
                        </div>
                    </div>
                    <h2 className="disponemos">Disponemos de una gran variación<br /> de cursos:</h2><br /><br />
                    <ul>
                        <li className="lista">Entrenamiento con pesas.</li><br />
                        <li className="lista">Circuito de abdominales</li><br />
                        <li className="listad">Entrenadores personales</li><br />
                        <li className="lista">Venta de ropa deportiva.</li><br />
                        <li className="lista">Clases de spinning.</li><br />
                        <li className="lista">Step.</li><br />
                        <li className="lista">Venta de suplementos alimenticios.</li>
                    </ul>
                </div>
            </section>
            <br /><br /><br /><br /><br /><br /><br /><br />

            <section>
                <div className="contenedorIndex">
                    <picture>
                        <source media="(max-width: 799px)" srcSet={fondoPequenoImg} />
                        <source media="(min-width: 800px)" srcSet={fondoImg} />
                        <source srcSet={fondoImg} />
                        <img className="fondo" src={fondoImg} alt="fondo gym" />
                    </picture>
                    <div className="cuadrofrase">
                        <p className="text-cuadro">¡NO ESPERES A EMPEZAR TU CAMBIO!<br /><span className="flecha">→</span></p>
                    </div>
                </div>
                <br /><br />
                <div>
                    <h2 className="text-cuadro-otro">ELIGE EL CAMINO CORRECTO</h2>
                    <h3 className="subscripcion">Subscripciones que ofrecemos</h3>
                </div>
                <div className="caja">
                    <div className="caja11">
                        <h3 className="unh3">Plan Básico</h3>
                        <br /><br /><br /><br />
                        <div className="planes">
                            <p><span className="flechadorada">→</span>&nbsp; Acceso a nuestras instalaciones</p>
                            <p><span className="flechadorada">→</span>&nbsp; Acceso a rutinas semanales</p>
                            <p><span className="flechadorada">→</span>&nbsp; Acceso a vestuarios</p>
                        </div>
                        <p className="precio">24.95€/M</p>
                    </div>
                </div>
                <div className="caja1">
                    <div className="caja12">
                        <h3 className="unh3">Plan Prémiun</h3>
                        <br /><br /><br /><br />
                        <div className="planes">
                            <p><span className="flechadorada">→</span>&nbsp; Acceso a nuestras instalaciones</p>
                            <p><span className="flechadorada">→</span>&nbsp; Rutinas/dietas personales</p>
                            <p><span className="flechadorada">→</span>&nbsp; Acceso a vestuario y taquilla</p>
                            <p><span className="flechadorada">→</span>&nbsp; Acceso a cursos específicos</p>
                            <p><span className="flechadorada">→</span>&nbsp; Acceso a material exclusivo</p>
                        </div>
                        <p className="precio1">42.95€/M</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
