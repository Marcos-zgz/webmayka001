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

  const testimonios = [
    { n: "Vivian", t: "Una experiencia transformadora. Mayka tiene una sensibilidad única para captar lo que no se dice." },
    { n: "Lola", t: "Me ayudó a encontrar la paz en un momento de mucho ruido mental. Su estrategia es pura magia." },
    { n: "Ana María", t: "Increíble conexión. Los mensajes que recibí me dieron la fuerza que necesitaba para avanzar." },
    { n: "Sofia", t: "El análisis de sueños fue un antes y un después en mi vida. Ahora entiendo mucho mejor mis emociones." },
    { n: "Mari Carmen", t: "Una guía maravillosa. Gracias a sus sesiones he recuperado la ilusión por mis proyectos." },
    { n: "Jose Manuel", t: "Claridad y estrategia. Mayka sabe cómo aterrizar la intuición al mundo real de forma brillante." }
  ];

  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Mayka Menacho</title>
      </Head>

      <Nav logo="MM" />
      
      {/* SECCIÓN HERO (BIENVENIDA) */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '120px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '80px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px', justifyContent: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.5', fontWeight: '300', marginBottom: '30px', color: '#333' }}>
              &iquest;Buscas claridad en tu vida? <br/>
              Une tu intuici&oacute;n y estrategia para alcanzar tu prop&oacute;sito.
            </p>
            <a href="https://wa.me/34644267361" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', backgroundColor: '#FFFFFF', padding: '10px 20px', borderRadius: '50px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '22px', height: '22px' }} />
              <span style={{ color: '#1A1A1A', fontWeight: '600' }}>WhatsApp</span>
            </a>
          </div>
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
            <img src="/images/projects-img/big-unsplash-party.png" alt="Mayka" style={{ width: '100%', maxWidth: '400px', borderRadius: '25px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </main>

      {/* SECCIÓN SERVICIOS (TARJETAS BLANCAS) */}
      <section id="servicios" style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '300', marginBottom: '50px', textAlign: 'center', letterSpacing: '2px' }}>SERVICIOS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
          {servicios.map((s, i) => (
            <div key={i} style={{ padding: '30px 20px', backgroundColor: '#FFFFFF', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '15px', fontWeight: 'bold' }}>{s.t}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#666', marginBottom: '25px' }}>{s.d}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href={s.p} style={{ backgroundColor: 'rgba(189, 224, 254, 0.6)', color: '#1A1A1A', padding: '8px 20px', borderRadius: '50px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '700' }}>SABER M&Aacute;S</a>
              </div>
            </div>
          ))}
        </div>
      </section>

    {/* SECCIÓN TESTIMONIOS (TARJETAS AZUL CIELO) */}
      <section id="testimonios" style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 20px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '300', marginBottom: '50px', textAlign: 'center', letterSpacing: '2px' }}>TESTIMONIOS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {testimonios.map((t, i) => (
            <div key={i} style={{ 
              padding: '35px 30px', 
              backgroundColor: '#A2D2FF', // Un azul más vibrante para asegurar que cambia
              borderRadius: '8px', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.06)', // Sombra un poco más marcada para el efecto flotante
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.5)' // Un brillo sutil en el borde
            }}>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', lineHeight: '1.7', marginBottom: '25px', color: '#2C3E50' }}>
                "{t.t}"
              </p>
              <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1A1A1A', textTransform: 'uppercase', letterSpacing: '1px' }}>
                - {t.n}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 Mayka Menacho
      </footer>
    </div>
  );
}
