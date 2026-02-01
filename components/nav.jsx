import React, { useState } from 'react';

export default function Nav({ logo }) {
  const [isOpen, setIsOpen] = useState(false);

  const paginas = [
    "Quién soy", "Entrevistas", "Talk to Mayka", "Consultoría Organizacional", 
    "Mensajes del Más Allá", "Canalización a Distancia", "Regresiones", 
    "Análisis de Sueños", "Talleres en Grupo", "Terapia del Duelo", "Contacto"
  ];

  return (
    <>
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '80px',
        backgroundColor: '#F5E1D7', // Fondo nude sólido para que se vea la barra
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '0 30px', 
        boxSizing: 'border-box',
        zIndex: 10000, // Por encima de todo
        boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
      }}>
        {/* LOGO */}
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px', color: '#1A1A1A' }}>
          {logo}
        </div>
        
        {/* BOTÓN HAMBURGUESA - Forzado visible */}
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ 
            cursor: 'pointer', 
            width: '40px', 
            height: '40px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            gap: '5px',
            backgroundColor: 'rgba(255,255,255,0.3)', // Un pequeño círculo claro de fondo para localizarlo
            borderRadius: '50%'
          }}
        >
          <div style={{ width: '22px', height: '2px', backgroundColor: '#1A1A1A' }}></div>
          <div style={{ width: '22px', height: '2px', backgroundColor: '#1A1A1A' }}></div>
          <div style={{ width: '22px', height: '2px', backgroundColor: '#1A1A1A' }}></div>
        </div>
      </nav>

      {/* PANEL LILA LATERAL */}
      <div style={{
        position: 'fixed', 
        top: 0, 
        right: isOpen ? '0' : '-100%', 
        width: '300px', 
        height: '100vh', 
        backgroundColor: '#ECE1ED', 
        boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
        transition: 'right 0.4s ease-in-out',
        display: 'flex', 
        flexDirection: 'column', 
        padding: '100px 40px', 
        boxSizing: 'border-box',
        zIndex: 9999,
        overflowY: 'auto'
      }}>
        {paginas.map((p, i) => (
          <a key={i} href="#" style={{ 
            textDecoration: 'none', 
            color: '#1A1A1A', 
            fontSize: '0.75rem', 
            marginBottom: '20px', 
            fontWeight: '500', 
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif'
          }}>
            {p}
          </a>
        ))}
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.1)', zIndex: 9998
        }}></div>
      )}
    </>
  );
}
