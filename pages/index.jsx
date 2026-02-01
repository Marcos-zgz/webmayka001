import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
      <Head>
        <title>Mayka Menacho | Intuición y Estrategia</title>
      </Head>

      {/* CABECERA PROFESIONAL */}
      <nav style={{ padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '2px', color: '#1A1A1A' }}>MAYKA MENACHO</div>
        <div style={{ display: 'flex', gap: '25px', fontWeight: '400', fontSize: '0.9rem', textTransform: 'uppercase' }}>
          <a href="#servicios" style={{ textDecoration: 'none', color: '#1A1A1A' }}>Servicios</a>
          <a href="#contacto" style={{ textDecoration: 'none', color: '#1A1A1A' }}>Contacto</a>
        </div>
      </nav>
      
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px', justifyContent: 'center' }}>
          
          {/* LADO IZQUIERDO: MENSAJE POTENTE Y WHATSAPP */}
          <div style={{ flex: '1', minWidth: '320px' }}>
            <p style={{ fontSize: '2.2rem', lineHeight: '1.3', fontWeight: '300', marginBottom: '40px', color: '#1A1A1A' }}>
              &iquest;Buscas claridad en tu vida? <br/>
              <strong>Une tu intuici&oacute;n y estrategia</strong> para alcanzar tu prop&oacute;sito.
            </p>

            {/* BOTÓN WHATSAPP CON TU NÚMERO YA CONFIGURADO */}
            <a 
              href="https://wa.me/34644267361" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '12px', 
                textDecoration: 'none',
                backgroundColor: '#FFFFFF',
                padding: '14px 30px',
                borderRadius: '50px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease'
              }}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                style={{ width: '28px', height: '28px' }}
              />
              <span style={{ color: '#1A1A1A', fontWeight: '700', fontSize: '1.1rem' }}>Contactar por WhatsApp</span>
            </a>
          </div>

          {/* LADO DERECHO: FOTO */}
          <div style={{ flex: '1', minWidth: '320px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src="/images/projects-img/big-unsplash-party.png" 
                alt="Mayka Menacho"
                style={{ width: '100%', maxWidth: '420px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              />
            </div>
          </div>

        </div>
      </main>

      {/* PIE DE PÁGINA */}
      <footer id="contacto" style={{ padding: '60px 20px', textAlign: 'center', marginTop: '40px' }}>
        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>&copy; 2026 Mayka Menacho. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
