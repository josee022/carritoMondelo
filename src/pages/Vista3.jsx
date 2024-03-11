
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import contactoImage from '../assets/imagenes/contacto.jpg';

const Vista3 = () => {
    return (
        <div>
            <Header />
            <br /><br /><br /><br />

            <div className="toblanco">
                <div>
                <img className="contacta" src={contactoImage} alt="pagina de contacto" />
                    <div>
                        <div className="cuadroInfo">
                            <h2 className="infoCuadro">CONTÁCTANOS ⬇</h2>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="textoContacto">
                        <span className="tooltip" title="Teléfono de contacto">
                            <span className="textoSpan">Teléfono: </span> 622 33 44 55
                        </span>
                    </p>
                    <p className="textoContacto">
                        <span className="tooltip" title="Email de la empresa">
                            <span className="textoSpan">Email :</span> gym.mondelo@gmail.com
                        </span>
                    </p>
                    <p className="textoContacto">
                        <span className="tooltip" title="Nuestras distintas Redes Sociales">
                            <span className="textoSpan">Redes Sociales:</span> gymMondelo Fit | @gymMondelo_
                        </span>
                    </p>
                    <br />
                    <p className="textoContacto">
                        ⚫&nbsp;
                        <span className="tooltip" title="Ubicación">
                            <span className="textoSpan">Encuéntranos en : </span> Calle Egido, 2 28902 Getafe - Madrid (España)
                        </span>
                    </p>
                </div>

                <div>
                    <iframe
                        className="mapa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.471171563649!2d-3.7283882234676335!3d40.30969946214595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42209582bda273%3A0x9dff343513f45b42!2sC.%20Egido%2C%202%2C%2028902%20Getafe%2C%20Madrid!5e0!3m2!1ses!2ses!4v1701292130783!5m2!1ses!2ses"
                        width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div>
                    <hr className="lineaNegra" />
                    <p className="textoFormulario">Para cualquier consulta no dudes en ponerte en contacto con nosotros.</p>
                    <p className="textoFormulario">Resolveremos cualquier duda lo antes posible</p>
                </div>

                <div>
                    <form action="" method="post">
                        <fieldset>
                            <legend>¡ Atención al cliente !</legend>
                            <div className="formulario">
                                <label className="labelito" htmlFor="nombre">*Obligatorio</label>
                                <input type="text" id="nombre" name="nombre" aria-required placeholder="Nombre :" autoComplete="on" />

                                <label className="labelito" htmlFor="apellido1">*Obligatorio</label>
                                <input type="text" id="apellido1" name="apellido1" aria-required placeholder="Primer apellido :" autoComplete="on" />

                                <input type="text" id="apellido2" name="apellido2" placeholder="Segundo apellido :" autoComplete="on" />

                                <label className="labelito" htmlFor="correo">*Obligatorio</label>
                                <input type="email" id="correo" name="correo" aria-required placeholder="Correo Electrónico :" autoComplete="on" />

                                <label className="labelito" htmlFor="telefono">*Obligatorio</label>
                                <input type="tel" id="telefono" name="telefono" aria-required placeholder="Teléfono de contacto :" autoComplete="on" />

                                <label className="labelito" htmlFor="asunto">*Obligatorio</label>
                                <input type="text" id="asunto" name="asunto" aria-required placeholder="Asunto :" autoComplete="on" />

                                <label className="labelito" htmlFor="mensaje">*Obligatorio</label>
                                <textarea id="mensaje" name="mensaje" rows="4" aria-required placeholder="Mensaje :" autoComplete="on"></textarea>

                                <button type="submit">Enviar</button>
                            </div>
                        </fieldset>
                    </form>
                </div>

                <br /><br />

                <div className="acordeon">
                    <h1 className="rutina" aria-label="Acordeon preguntas frecuentes">Preguntas Frecuentes</h1>

                    <div className="acordeon">
                        <h1 className="rutina" aria-label="Acordeon preguntas frecuentes"></h1>

                        <div className="question">
                            <button className="botonAcordeon" aria-controls="pregunta1" aria-expanded="true">
                                1.- ¿Cuántos días a la semana debo venir al gimnasio?
                            </button>
                        </div>
                        <div className="answer" id="pregunta1">
                            <p>Eso siempre dependerá de su disponibilidad y objetivos. En función de estos planificaré un tipo de
                                entrenamiento. No es lo mismo disponer de 5 días para entrenar o de 2, aunque si se toma en serio, los
                                beneficios pueden ser óptimos en ambos casos.</p>
                        </div>

                        <div className="question">
                            <button className="botonAcordeon" aria-controls="pregunta2" aria-expanded="true">
                                2.- ¿Con qué ejercicio puedo perder la grasa abdominal?
                            </button>
                        </div>
                        <div className="answer" id="pregunta2">
                            <p>No solo dependerá de un ejercicio en concreto, tiene mucho que ver también la alimentación. Con el
                                ejercicio tonificaremos esa zona y, con la alimentación, lo que haremos es reducir grasa corporal de
                                todo el conjunto del cuerpo, no sólo de una parte localizada.
                            </p>
                        </div>

                        <div className="question">
                            <button className="botonAcordeon" aria-controls="pregunta3" aria-expanded="true">
                                3.- Me quiero poner muy fuerte (hipertrofia), ¿Es mejor hacer máquinas o pesas?
                            </button>
                        </div>
                        <div className="answer" id="pregunta3">
                            <p>Para lograr fuerza lo mejor es el de peso libre por el trabajo de peso y coordinación muscular que
                                aporta. Las máquinas consiguen también el objetivo de ganancia de músculo. El peso libre se trabaja
                                progresivamente habiendo realizado un buen trabajo de máquinas previo.</p>
                        </div>

                        <div className="question">
                            <button className="botonAcordeon" aria-controls="pregunta4" aria-expanded="true">
                                4.- ¿Cuánto peso tengo que ponerle a cada ejercicio?
                            </button>
                        </div>
                        <div className="answer" id="pregunta4">
                            <p>Debes colocarle el máximo peso que puedas para hacer el número de repeticiones marcadas previamente
                                por el entrenador según el plan establecido.</p>
                        </div>

                        <div className="question">
                            <button className="botonAcordeon" aria-controls="pregunta5" aria-expanded="true">
                                5.- Vengo mucho al gimnasio y no consigo mis objetivos ¿por qué?
                            </button>
                        </div>
                        <div className="answer" id="pregunta5">
                            <p>Primero deberíamos tener una evaluación personal y asesoramiento para conocer y fijar esos objetivos.
                                Ahí se reajustan los planes de entrenamiento. Deberás también cuidar la alimentación ya que es la base
                                de todo lo que vayamos a conseguir a nivel deportivo.</p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Vista3;
