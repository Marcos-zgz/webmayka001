import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";
import Link from "next/link";

export default function Conversaciones() {
  const secciones = [
    {
      q: "¿Cuál es mi horario de trabajo?",
      a: "Mi horario es variable y difícil de establecer, pues a veces atiendo de urgencia a personas que lo necesitan. Contacta conmigo y cuando tenga un hueco te contestaré, será pronto."
    },
    {
      q: "¿En qué consisten las sesiones privadas?",
      a: "Las sesiones privadas son entre la persona interesada y yo. Estas no tienen un tiempo estimado de duración pues no depende de nosotros los mensajes que se van a recibir. El precio es de 65€."
    },
    {
      q: "¿En qué consisten las sesiones grupales?",
      a: "En las sesiones grupales ocurre lo mismo que las privadas, salvo que habrá un máximo de 4-5 personas. El tiempo es variable. El precio por persona es de 45€."
    },
    {
      q: "Conversaciones con Mayka",
      a: "Estas sesiones abarcan un amplio abanico de herramientas para tu ayuda, desde un punto de vista del Coaching holístico. Te servirán para aprender a mejorar tu vida y a desbloquear energías atascadas en nuestro ser. Herramientas terapéuticas 3.0, terapia transpersonal, PNL, Coaching, método PRAE, análisis de sueños y muchas más a tu servicio. Sesiones de 60 min, 65€."
    },
    {
      q: "Terapia del duelo",
      a: "Un enfoque terapéutico transpersonal diseñado para ayudar a las personas a enfrentar y superar el dolor emocional asociado con la pérdida de un ser querido. Exploramos y expresamos emociones para desarrollar estrategias de afrontamiento y encontrar significado. Puede realizarse de manera individual o grupal, facilitando la adaptación a la nueva realidad."
    },
    {
      q: "¿Métodos de pago?",
      a: "Efectivo, Bizum, PayPal..."
    }
  ];

  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Conversaciones con Mayka</title>
      </Head>

      <Nav />

      <main style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '140px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '100px' }}>
        
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '40px', letterSpacing: '1px' }}>
          Conversaciones con Mayka
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {secciones.map((item, index) => (
            <div key={index} style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '30px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '15px', color: '#1A1A1A' }}>
                {item.q}
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', textAlign: 'left' }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* BOTÓN ESTILO SERVICIOS */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="/#contacto" style={{ 
            backgroundColor: '#BDE0FE', 
            color: '#1A1A1A', 
            padding: '12px 35px', 
            borderRadius: '50px', 
            textDecoration: 'none', 
            fontSize: '0.8rem', 
            fontWeight: '700',
            letterSpacing: '1px',
            display: 'inline-block',
            textTransform: 'uppercase'
          }}>
            RESERVAR SESIÓN
          </Link>
        </div>
      </main>

      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 Mayka Menacho
      </footer>
    </div>
  );
}
