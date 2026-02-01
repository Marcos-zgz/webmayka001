import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";
import Image from "next/image";

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
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Mayka Menacho</title>
      </Head>

      <Nav />
      
      {/* SECCIÓN HERO (BIENVENIDA) */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '160px', paddingLeft: '20px', paddingRight: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '50px' }}>
          
          {/* 1. EL LOGO (Protagonista) */}
          <div style={{ width: '100%', maxWidth: '280px' }}>
            <Image 
              src="/assets/logo-mayka.jpg" 
              alt="Logo Mayka Menacho" 
              width={280} 
              height={280} 
              priority
              style={{ borderRadius: '50%', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}
            />
          </div>

          {/* 2. EL TEXTO DE BIENVENIDA */}
          <div style={{ maxWidth: '750px' }}>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.6', color: '#1A1A1A', fontWeight: '300', fontStyle: 'italic' }}>
              "Acompaño tu proceso de transformación conectando con tu esencia más profunda para dar luz a tu camino."
            </p>
          </div>

          {/* 3. FOTO DE CARA DE MAYKA */}
          <div style={{ width: '100%', maxWidth: '450px', marginBottom: '40px' }}>
            <img 
              src="/assets/mayka-cara.jpg" 
              alt="Mayka Menacho" 
              style={{ width: '100%', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
            />
          </div>
        </div>
      </main>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 20px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '300', marginBottom: '60px', textAlign: 'center', letterSpacing: '3px' }}>SERVICIOS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {servicios.map((s, i) => (
            <div key={i} style={{ padding: '40px 25px', backgroundColor: '#FAF3F2', borderRadius: '15px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', fontWeight: '600', letterSpacing: '1px' }}>{s.t}</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#555', marginBottom: '30px' }}>{s.d}</p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href={s.p} style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', padding: '10px 25px', borderRadius: '50px', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px' }}>SABER MÁS</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN TESTIMONIOS */}
      <section id="testimonios" style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 20px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '300', marginBottom: '60px', textAlign: 'center', letterSpacing: '3px' }}>TESTIMONIOS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {testimonios.map((t, i) => (
            <div key={i} style={{ padding: '45px 35px', borderRadius: '20px', backgroundColor: '#FFFFFF', border: '1px solid #FAF3F2', boxShadow: '0 15px 30px rgba(0,0,0,0.02)' }}>
              <p style={{ fontSize: '1.05rem', fontStyle: 'italic', lineHeight: '1.8', color: '#333' }}>"{t.t}"</p>
              <p style={{ fontSize: '0.85rem', fontWeight: '700', marginTop: '25px', color: '#1A1A1A' }}>— {t.n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" style={{ scrollMarginTop: '100px', maxWidth: '1100px', margin: '100px auto', padding: '80px 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px', justifyContent: 'center' }}>
        <div style={{ flex: '1', minWidth: '320px', padding: '50px', borderRadius: '25px', backgroundColor: '#FAF3F2' }}>
          <h2 style={{ fontSize: '2.2rem', fontFamily: 'serif', marginBottom: '25px' }}>Contacto</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
            ¿Sientes que es el momento? Escríbeme y hablemos sobre cómo puedo acompañarte.<br/><br/>
            <a href="mailto:maykamenacholopez@gmail.com" style={{ fontWeight: '600', color: '#1A1A1A', textDecoration: 'underline' }}>maykamenacholopez@gmail.com</a>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center' }}>
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" style={{ width: '35px' }} /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" style={{ width: '35px' }} /></a>
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" style={{ width: '40px' }} /></a>
          <a href="https://wa.me/34644267361"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '35px' }} /></a>
        </div>

        <div style={{ flex: '1', minWidth: '320px', display: 'flex', justifyContent: 'center' }}>
          <img src="/images/projects-img/big-unsplash-party.png" alt="Mayka Menacho" style={{ width: '100%', maxWidth: '400px', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.08)' }} />
        </div>
      </section>

      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem', letterSpacing: '1px' }}>
        &copy; 2026 MAYKA MENACHO
      </footer>
    </div>
  );
}
