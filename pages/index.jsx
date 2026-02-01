import React from 'react';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
      
      {/* MENU SUPERIOR */}
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MM</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>Servicios</span>
          <span>Contacto</span>
        </div>
      </nav>
      
      {/* CUERPO PRINCIPAL */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px', justifyContent: 'center' }}>
          
          {/* TEXTO */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Mayka Menacho</h1>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.4', fontWeight: '300', marginBottom: '40px' }}>
              ¿Buscas claridad en tu vida? <br/>
              Une tu intuición y estrategia para alcanzar tu propósito.
            </p>

            <a 
              href="https://wa.me/+34644267361" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '12px', 
                textDecoration: 'none',
                backgroundColor: '#25D366',
                color: 'white',
                padding: '12px 25px',
                borderRadius: '50px',
                fontWeight: 'bold'
              }}
            >
              <span>WhatsApp</span>
            </a>
          </div>

          {/* FOTO */}
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/images/projects-img/big-unsplash-party.png" 
              alt="Mayka Menacho"
              style={{ width: '100%', maxWidth: '400px', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            />
          </div>

        </div>
      </main>
    </div>
  );
}
