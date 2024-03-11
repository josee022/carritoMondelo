
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import logoPesa from '../assets/imagenes/logo_pesa.png';
import logoBrazos from '../assets/imagenes/logo_brazos.png';
import foto1 from '../assets/imagenes/foto.jpg';
import foto2 from '../assets/imagenes/foto4.jpg';
import foto3 from '../assets/imagenes/foto2.jpg';
import foto4 from '../assets/imagenes/foto3.jpg';

const Vista4 = () => {
  return (
    <div>
      <Header />
      <br /><br /><br /><br /><br />
      <div className="cuadro_blanco">
        <div>
          <img src={logoPesa} alt="logo pesa" className="logo_pesa" />
        </div>
        <div className="posiciones">
          <h2 className="nosotros_tituloh2">THE GYM MONDELO</h2>
          <br /><br />
          <h3 className="nosotros_tituloh3">ÚNETE A NOSOTROS</h3>
          <br /><br />
          <h4 className="nosotros_tituloh4">Y CONVIÉRTETE EN OTRA PERSONA</h4>
        </div>
        <div>
          <img src={logoBrazos} alt="logo pesa" className="logo_brazos" />
        </div>
      </div>

      <div className="cuadrito_dorado">
        <h2 className="titulonosotros">¿ Qué es The Gym Mondelo ?</h2>
      </div>

      <div>
        <div className="cuadroGris">
          <p className="fraseCuadro">
            The Gym Mondelo es mucho más que un gimnasio. <br /> Es el lugar donde transformarás tu cuerpo <br /> y tu
            vida de forma duradera.
          </p>
          <img className="www" src={foto1} alt="foto" />
        </div>
        <div className="cuadroBlanco">
          <p className="fraseCuadro">
            Mucho más que cercanía, The Gym Mondelo <br />
            es una comunidad de apoyo y motivación. <br />
            Ofrecemos consejos nutricionales y <br />
            entrenamiento con profesionales altamente <br />
            cualificados para tu éxito.
          </p>
          <img src={foto2} alt="foto" className="www1" />
        </div>
        <div className="cuadroGris">
          <p className="fraseCuadro">
            Mucho más que una decisión de cambio, <br /> The Gym Mondelo es la guía definitiva para alcanzar <br /> tus
            objetivos, sin perder la motivación, y lograr un <br /> cambio duradero de una vez por todas.
          </p>
          <img src={foto3} alt="foto" className="www" />
        </div>
        <div className="cuadroBlanco">
          <p className="fraseCuadro">
            Mucho más que profesionalidad, en The Gym <br />
            Mondelo todas nuestras rutinas son diseñadas <br />
            por expertos graduados en ejercicio, lo que <br />
            garantiza que se adapten a todos los niveles. <br />
            Incluso ofrecemos rutinas de tan solo 7 <br />
            minutos de duración para eliminar la excusa <br />
            del tiempo.
          </p>
          <img src={foto4} alt="foto" className="www1" />
        </div>
      </div>


      <div className="cuadrito_dorado_grande">
        <p className="titulonosotros2">
          ¿QUÉ INCLUYE? <br /><br />
          ACCESO A TODOS LOS CONTENIDOS DE ENTRENAMIENTO Y NUTRICIÓN
        </p>
        <br /><br />
        <p className="informacion">Una vez que te conviertas en miembro de The Gym Mondelo, sea cual sea tu tipo de
          suscripción, tendrás acceso
          completo a todos nuestros recursos de entrenamiento y nutrición.
        </p>
        <p className="informacion">Ofrecemos planes para adelgazar, ganar masa muscular y mantener tu forma física.
          Además, contamos con planes específicos para glúteos, yoga, principiantes, embarazadas, y mucho más.
          También proporcionamos programas especializados para fuerza, combate, abdominales, cardio-fuerza, baile, y
          más.
        </p>
        <p className="informacion">
          Esto significa que, además de seguir tu plan de entrenamiento principal, tendrás la flexibilidad de elegir
          rutinas adicionales
          de acuerdo a tus preferencias. Todo cuenta.
        </p>
        <p className="informacion">
          Y eso no es todo: <br /><br />
          • Nuestro equipo de profesionales te brinda valiosos consejos nutricionales para personalizar tu dieta según
          tus objetivos,
          sin pasar hambre. <br /><br />
          • Únete a nuestra Comunidad Exclusiva, donde encontrarás personas con objetivos similares dispuestas a
          apoyarte y mantenerte
          motivado. <br /><br />
          • Disfruta de sorpresas y retos mensuales para mantenerte siempre motivado y comprometido. <br /><br />
          • Accede a nuestra aplicación móvil para entrenar en cualquier lugar; podrás descargar las rutinas y usarlas
          sin necesidad de
          conexión a internet.
        </p>
        <p className="informacion">
          Y si en algún momento no estás satisfecho, ofrecemos una garantía de devolución de 15 días. Así que, si
          decides unirte,
          puedes probarlo sin preocupaciones, y si no cumple tus expectativas, simplemente solicita un reembolso.
          Estamos aquí para ayudarte a alcanzar tus objetivos de manera efectiva y sin riesgos
        </p>

        <br /><br />
        <hr className="raya_negra" />

        <p className="titulonosotros2">¿CÓMO FUNCIONAMOS?</p>
        <br /><br />
        <p className="informacionx">1. Distintos Programas</p>
        <p className="informacion">
          Una vez te inscribas, tendrás acceso a una amplia variedad de planes, programas y rutinas de entrenamiento.
          <br /><br />

          -Antes de comenzar, completa tu perfil con tus datos como edad, género, objetivos, preferencias de
          entrenamiento, y más. Al completarlo podrás disfrutar de nuestros servicios. <br /><br />

          -Según tus respuestas, te recomendaremos planes de entrenamiento específicos, como perder grasa, ganar
          músculos... <br /><br />

          -Una vez elijas un plan, hazlo saber a través de la página web o al personal del gimnasio para empezar lo
          antes posible.
          Si en algún momento decides cambiar tu objetivo, puedes cambiar a otro plan sin complicaciones. <br /><br />

          *Si prefieres no unirte a un plan específico o deseas complementarlo con rutinas adicionales, puedes buscar
          y realizar otras
          rutinas sin problema, el caso es encontrar tu zona de confort. <br /><br />

          *Los planes y rutinas son variables para todo tipo de horario, aunque tengas poco tiempo, aprovéchalo con
          nosotros.
        </p>

        <p className="informacionx">2. Haz tu entreno</p>
        <p className="informacion">
          Una vez te registres en un plan, simplemente sigue la rutina asignada para el día. Todos nuestros planes han
          sido desarrollados
          por profesionales.
        </p>

        <p className="informacionx">3. Rutinas de todo tipo</p>
        <p className="informacion">
          Todas nuestras rutinas están diseñadas para adaptarse a tus necesidades y tu disponibilidad de tiempo, desde
          sesiones
          cortas (para aquellos días ocupados) hasta sesiones más largas (para cuando tengas más tiempo y energía).
          Recuerda, la consistencia es clave.
        </p>

        <p className="informacionx">4. Distintos tipos de niveles</p>
        <p className="informacion">
          Nuestros programas se adaptan a cualquier nivel, incluso si estás comenzando. No necesitas equipo especial,
          ya que ofrecemos
          opciones para entrenar con o sin equipo, incluyendo alternativas. Además, puedes llevar tus entrenamientos
          contigo y hacerlos en cualquier lugar y en cualquier momento, ya sea en casa, parque...
        </p>

        <p className="informacionx">5. Método de Pago</p>
        <p className="informacion">
          Aceptamos pagos efectivo, tarjeta o bizum. Recuerda que en The Gym Mondelo operamos con un modelo de
          suscripción, similar a las cuotas de un gimnasio tradicional o a un servicio como otro cualquiera. Puedes
          cancelar tu suscripción
          antes del próximo pago, pero tendrás que abonar el importe si se acaba para seguir.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Vista4;
