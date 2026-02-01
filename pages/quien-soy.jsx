import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";
import Image from "next/image";

export default function QuienSoy() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Quién soy | Mayka Menacho</title>
      </Head>

      <Nav />

      <main style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '160px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '100px' }}>
        
        {/* TÍTULO PRINCIPAL */}
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px', letterSpacing: '2px' }}>
          SOY MAYKA MENACHO
        </h1>

        {/* CONTENEDOR DE TEXTO CON EL TRUCO DEL AZUL */}
        <div style={{ 
          padding: '50px', 
          borderRadius: '30px', 
          border: '2px solid #FFFFFF', 
          backgroundColor: 'transparent',
          boxShadow: 'inset 0 0 0 1000px #EBF8FF, 0 15px 35px rgba(0,0,0,0.05)',
          lineHeight: '1.9',
          fontSize: '1.1rem',
          textAlign: 'justify'
        }}>
          
          <p style={{ marginBottom: '25px' }}>
            Soy <strong>Mayka Menacho López</strong>, terapeuta transpersonal y coach holístico y organizacional, canalizadora y acompañante en procesos de transformación interior. Desde hace más de dos décadas guío a personas que buscan comprender su propósito, sanar heridas emocionales y reencontrarse con la voz sabia que habita en su interior.
          </p>

          <p style={{ marginBottom: '25px' }}>
            Mi trabajo une la espiritualidad, la ciencia y la psicología profunda, demostrando que una no anula a la otra, sino que se complementan para ofrecer una visión más amplia y amorosa del ser humano. A través de mis conferencias, talleres y retiros, ayudo a quienes me escuchan a vivir con más verdad, unidad y sentido, comprendiendo que mente, cuerpo y alma forman parte de un mismo tejido.
          </p>

          <p style={{ marginBottom: '25px' }}>
            He dedicado gran parte de mi vida a investigar la conexión entre los seres queridos que ya partieron y quienes aún caminamos aquí, especialmente a través de los sueños y la vibración del alma. En mis acompañamientos en procesos de duelo, ofrezco un espacio seguro para transformar el dolor en comprensión, y la ausencia en una nueva forma de presencia.
          </p>

          <p style={{ marginBottom: '25px', fontStyle: 'italic', color: '#444' }}>
            Creo profundamente que el amor no muere, solo se transforma, y que los lazos invisibles que nos unen pueden sentirse, comprenderse y honrarse con el apoyo tanto de la ciencia como de la espiritualidad.
          </p>

          <p style={{ marginBottom: '25px' }}>
            Mi camino personal también ha sido un viaje de sanación: aprendí a transformar el dolor en sabiduría, la sensibilidad en fortaleza y la búsqueda en presencia. Hoy acompaño a jóvenes y adultos que desean reconciliarse con su historia, despertar su consciencia y recordar que la paz interior no se busca fuera, sino dentro.
          </p>

          <div style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '30px' }}>
            <p style={{ fontSize: '1.3rem', fontWeight: '600' }}>Bienvenido/a a este espacio.</p>
            <p style={{ fontSize: '1.2rem', color: '#555' }}>Aquí no vienes a aprender algo nuevo, sino a recordar lo que tu alma ya sabe.</p>
          </div>
        </div>

        {/* BOTÓN PARA VOLVER O IR A CONTACTO */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <a href="#contacto" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', padding: '15px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '1px' }}>
            TRABAJEMOS JUNTOS
          </a>
        </div>
      </main>

      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 Mayka Menacho
      </footer>
    </div>
  );
}
