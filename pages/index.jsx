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

      {/* SECCIÓN SERVICIOS (8 BLOQUES) */}
      <section id="servicios" style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px 100px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '300', marginBottom: '50px', textAlign: 'center', letterSpacing: '2px' }}>SERVICIOS</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
          {servicios.map((s, i) => (
            <div key={i} style={{ padding: '35px 25px', backgroundColor: 'rgba(255,255,255,0.25)', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', letterSpacing: '1px', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.t}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#444', marginBottom: '25px' }}>{s.d}</p>
              </div>
              <a href={s.p} style={{ 
                backgroundColor: '#BDE0FE', // El azulito claro de las fotos
                color: '#1A1A1A', 
                padding: '10px 0', 
                borderRadius: '50px', 
                textDecoration: 'none', 
                fontSize: '0.85rem', 
                fontWeight: '600',
                transition: 'opacity 0.2s'
              }}>
                SABER M&Aacute;S
              </a>
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
