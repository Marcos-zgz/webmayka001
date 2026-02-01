import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav"; // Recuperamos el menú "chulo"

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
      <Head>
        <title>Mayka Menacho</title>
      </Head>

      {/* AQUÍ ESTÁ EL MENÚ ORIGINAL QUE SE DESPLEGABA */}
      <Nav logo="MM" />
      
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px', justifyContent: 'center' }}>
          
          {/* TEXTO AJUSTADO (MÁS PEQUEÑO) */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.5', fontWeight: '300', marginBottom: '30px', color: '#333', maxWidth: '400px' }}>
              &iquest;Buscas claridad en tu vida? <br/>
              Une tu intuici&oacute;n y estrategia para alcanzar tu prop&oacute;sito.
            </p>

            {/* BOTÓN WHATSAPP SIMPLIFICADO */}
            <a 
              href="https://wa.me/+34644267361" 
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

          {/* FOTO */}
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
