import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";

export default function Home() {
  const servicios = [
    { t: "TALK TO MAYKA", d: "Sesiones de coaching personalizadas para desbloquear tu potencial.", p: "/talk-to-mayka" },
    { t: "CONSULTORÍA ORGANIZACIONAL", d: "Acompañamiento estratégico para empresas y equipos con alma.", p: "/consultoria" },
    { t: "MENSAJES DEL MÁS ALLÁ", d: "Conexión y guía en tu viaje personal a través de la intuición.", p: "/mensajes" },
    { t: "CANALIZACIÓN A DISTANCIA", d: "Informe detallado o audio personalizado. Aportación: 65€.", p: "/canalizacion" },
    { t: "REGRESIONES", d: "Viaje al pasado para sanar el presente y entender tu historia.", p: "/regresiones" },
    { t: "ANÁLISIS DE SUEÑOS", d: "Descifra el lenguaje de tu subconsciente y sus mensajes ocultos.", p: "/suenos" },
    { t: "TALLERES EN GRUPO", d: "Experiencias colectivas de crecimiento y transformación.", p: "/talleres" },
    { t: "TERAPIA DEL DUELO", d: "Acompañamiento compasivo en procesos de pérdida y transición.", p: "/duelo" }
  ];

  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Mayka Menacho | Servicios</title>
      </Head>

      <Nav logo="MM" />
      
      {/* SECCIÓN BIENVENIDA */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '120px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '80px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px', justifyContent: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.5', fontWeight: '300', marginBottom: '30px', color: '#333' }}>
              &iquest;Buscas claridad en tu vida? <br/>
              Une tu intuici&oacute;n y estrategia para alcanzar tu prop&oacute;sito.
            </p>
            <a href="https://wa.me/+34644267361" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', backgroundColor: '#FFFFFF', padding: '10px 20px', borderRadius: '50px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '22px', height: '22px' }} />
              <span style={{ color: '#1A1A1A', fontWeight: '600' }}>WhatsApp</span>
            </a>
          </div>
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
            <img src="/images/projects-img/big-unsplash-party.png" alt="Mayka" style={{ width: '100%', maxWidth: '400px', borderRadius: '25px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </main>

    {/* SECCIÓN SERVICIOS (TARJETAS FLOTANTES) */}
<section id="servicios" style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px 100px' }}>
  <h2 style={{ fontSize: '1.8rem', fontWeight: '300', marginBottom: '50px', textAlign: 'center', letterSpacing: '2px' }}>SERVICIOS</h2>
  
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
    {servicios.map((s, i) => (
      <div key={i} style={{ 
        padding: '30px 20px', 
        backgroundColor: '#FFFFFF', // Blanco sólido para que la sombra destaque
        borderRadius: '8px', // Bordes redonditos pero pequeños
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        textAlign: 'center',
        boxShadow: '0 10px 20px rgba(0,0,0,0.05)', // Efecto flotante (sombra suave)
        border: '1px solid rgba(0,0,0,0.02)' // Borde casi invisible
      }}>
        <div>
          <h3 style={{ 
            fontSize: '1rem', 
            marginBottom: '15px', 
            letterSpacing: '1px', 
            fontWeight: 'bold', // Títulos en negrita
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            minHeight: '2.5rem'
          }}>
            {s.t}
          </h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#666', marginBottom: '25px' }}>{s.d}</p>
        </div>

        {/* BOTÓN AZUL TRANSPARENTE Y PEQUEÑO */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href={s.p} style={{ 
            backgroundColor: 'rgba(189, 224, 254, 0.6)', // Azul con transparencia
            color: '#1A1A1A', 
            padding: '8px 20px', 
            borderRadius: '50px', 
            textDecoration: 'none', 
            fontSize: '0.75rem', 
            fontWeight: '700',
            letterSpacing: '0.5px',
            display: 'inline-block',
            width: 'auto', // Se ajusta al texto
            transition: 'background 0.3s'
          }}>
            SABER M&Aacute;S
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

      <footer id="contacto" style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 Mayka Menacho
      </footer>
    </div>
  );
}
