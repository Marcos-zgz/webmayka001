import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Mayka Menacho</title>
      </Head>

      <Nav logo="MM" />
      
      {/* SECCIÓN PRINCIPAL (HERO) */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '120px', paddingLeft: '20px', paddingRight: '20px', paddingBottom: '100px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px', justifyContent: 'center' }}>
          
          <div style={{ flex: '1', minWidth: '300px' }}>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.5', fontWeight: '300', marginBottom: '30px', color: '#333', maxWidth: '450px' }}>
              &iquest;Buscas claridad en tu vida? <br/>
              Une tu intuici&oacute;n y estrategia para alcanzar tu prop&oacute;sito.
            </p>

            <a href="https://wa.me/34644267361" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', backgroundColor: '#FFFFFF', padding: '10px 20px', borderRadius: '50px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '24px', height: '24px' }} />
              <span style={{ color: '#1A1A1A', fontWeight: '600', fontSize: '1rem' }}>WhatsApp</span>
            </a>
          </div>

          <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
            <img src="/images/projects-img/big-unsplash-party.png" alt="Mayka" style={{ width: '100%', maxWidth: '450px', borderRadius: '25px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </main>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" style={{ maxWidth: '1100px', margin: '0 auto', padding: '100px 20px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '300', marginBottom: '60px', textAlign: 'center' }}>Servicios</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          
          {/* SERVICIO 1 */}
          <div style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Estrategia Intuitiva</h3>
            <p style={{ lineHeight: '1.6', color: '#444', marginBottom: '20px' }}>Descubre cómo alinear tus decisiones de negocio con tu propósito más profundo para obtener resultados reales.</p>
            <a href="/estrategia" style={{ color: '#1A1A1A', fontWeight: '600', textDecoration: 'underline', fontSize: '0.9rem' }}>Saber m&aacute;s</a>
          </div>

          {/* SERVICIO 2 */}
          <div style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Mentoria 1 a 1</h3>
            <p style={{ lineHeight: '1.6', color: '#444', marginBottom: '20px' }}>Un proceso personalizado para desbloquear tu potencial y encontrar claridad en momentos de cambio.</p>
            <a href="/mentoria" style={{ color: '#1A1A1A', fontWeight: '600', textDecoration: 'underline', fontSize: '0.9rem' }}>Saber m&aacute;s</a>
          </div>

          {/* SERVICIO 3 */}
          <div style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Talleres Grupales</h3>
            <p style={{ lineHeight: '1.6', color: '#444', marginBottom: '20px' }}>Espacios de aprendizaje colectivo donde la energía del grupo potencia la transformación individual.</p>
            <a href="/talleres" style={{ color: '#1A1A1A', fontWeight: '600', textDecoration: 'underline', fontSize: '0.9rem' }}>Saber m&aacute;s</a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.6, fontSize: '0.8rem' }}>
        &copy; 2026 Mayka Menacho
      </footer>
    </div>
  );
}
