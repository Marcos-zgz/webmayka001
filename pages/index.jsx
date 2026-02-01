import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
      <Head>
        <title>Mayka Menacho</title>
      </Head>

      {/* CABECERA CON MENÚ DESPLEGABLE ESTILO "CHULO" */}
      <nav style={{ padding: '20px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '2px' }}>MAYKA MENACHO</div>
        
        {/* Este es el icono de las tres rayitas (hamburguesa) */}
        <div style={{ cursor: 'pointer' }}>
          <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="2" fill="#1A1A1A"/>
            <rect y="9" width="30" height="2" fill="#1A1A1A"/>
            <rect y="18" width="20" height="2" fill="#1A1A1A"/>
          </svg>
        </div>
      </nav>
      
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px', justifyContent: 'center' }}>
          
          {/* LADO IZQUIERDO: TEXTO MÁS PEQUEÑO Y BOTÓN WHATSAPP */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.5', fontWeight: '300', marginBottom: '30px', color: '#333', maxWidth: '400px' }}>
              &iquest;Buscas claridad en tu vida? <br/>
              Une tu intuici&oacute;n y estrategia para alcanzar tu prop&oacute;sito.
            </p>

            {/* BOTÓN WHATSAPP SIMPLIFICADO */}
            <a 
              href="https://wa.me/34644267361" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px', 
                textDecoration: 'none',
                backgroundColor: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '50px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
              }}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                style={{ width: '24px', height: '24px' }}
              />
              <span style={{ color: '#1A1A1A', fontWeight: '600', fontSize: '1rem' }}>WhatsApp</span>
            </a>
          </div>

          {/* LADO DERECHO: FOTO */}
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/images/projects-img/big-unsplash-party.png" 
              alt="Mayka Menacho"
              style={{ width: '100%', maxWidth: '380px', borderRadius: '25px', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
            />
          </div>

        </div>
      </main>
    </div>
  );
}
