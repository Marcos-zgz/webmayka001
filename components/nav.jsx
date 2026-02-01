 import React, { useState } from 'react';

export default function Nav({ logo }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Quién soy", "Entrevistas", "Talk to Mayka", "Consultoría Organizacional", 
    "Mensajes del Más Allá", "Canalización a Distancia", "Regresiones", 
    "Análisis de Sueños", "Talleres en Grupo", "Terapia del Duelo", "Contacto"
  ];

  return (
    <>
      {/* BARRA SUPERIOR */}
      <nav style={{ 
        position: 'fixed', top: 0, left: 0, width: '100%', height: '80px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '0 40px', backgroundColor: 'rgba(245, 225, 215, 0.95)',
        zIndex: 5000, boxSizing: 'border-box'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px', color: '#1A1A1A' }}>
          {logo}
        </div>
        
        {/* BOTÓN HAMBURGUESA */}
        <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', zIndex: 5001 }}>
          <div style={{ width: '25px', height: '2px', backgroundColor: '#1A1A1A', margin: '5px 0' }}></div>
          <div style={{ width: '25px', height: '2px', backgroundColor: '#1A1A1A', margin: '5px 0' }}></div>
          <div style={{ width: '25px', height: '2px', backgroundColor: '#1A1A1A', margin: '5px 0' }}></div>
        </div>
      </nav>

      {/* MENÚ LATERAL LILA */}
      <div style={{
        position: 'fixed', top: 0, right: isOpen ? '0' : '-100%', 
        width: '300px', height: '100vh', 
        backgroundColor: '#ECE1ED', // TU LILA
        boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
        transition: '0.4s ease-in-out',
        display: 'flex', flexDirection: 'column', 
        padding: '100px 30px', boxSizing: 'border-box',
        zIndex: 4999, overflowY: 'auto'
      }}>
        {menuItems.map((item, index) => (
          <a 
            key={index} 
            href="#" 
            onClick={() => setIsOpen(false)}
            style={{ 
              textDecoration: 'none', color: '#1A1A1A', 
              fontSize: '0.75rem', fontWeight: '500', 
              marginBottom: '20px', letterSpacing: '1.5px',
              textTransform: 'uppercase', fontFamily: 'sans-serif'
            }}
          >
            {item}
          </a>
        ))}
      </div>

      {/* FONDO OSCURO (Si está abierto) */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 4998
        }}></div>
      )}
    </>
  );
}
