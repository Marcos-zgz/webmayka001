import React, { useState } from 'react';

export default function Nav({ logo }) {
  const [isOpen, setIsOpen] = useState(false);

  const paginas = ["Quién soy", "Entrevistas", "Talk to Mayka", "Consultoría Organizacional", "Mensajes del Más Allá", "Canalización a Distancia", "Regresiones", "Análisis de Sueños", "Talleres en Grupo", "Terapia del Duelo", "Contacto"];

  return (
    <>
      <nav style={{ 
        position: 'fixed', top: 0, left: 0, width: '100%', height: '80px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '0 40px', backgroundColor: 'rgba(245, 225, 215, 0.98)',
        zIndex: 100000, boxSizing: 'border-box'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px' }}>{logo}</div>
        
        {/* ICONO MODERNO 2 LÍNEAS */}
        <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', zIndex: 100001, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', padding: '10px' }}>
          <div style={{ width: isOpen ? '30px' : '32px', height: '1.5px', backgroundColor: '#1A1A1A', transition: '0.4s', transform: isOpen ? 'rotate(45deg) translate(7px, 7px)' : '' }}></div>
          <div style={{ width: isOpen ? '30px' : '20px', height: '1.5px', backgroundColor: '#1A1A1A', transition: '0.4s', transform: isOpen ? 'rotate(-45deg) translate(0px, 0px)' : '' }}></div>
        </div>
      </nav>

      <div style={{
        position: 'fixed', top: 0, right: 0, width: '320px', height: '100vh', 
        backgroundColor: '#ECE1ED', boxShadow: '-10px 0 50px rgba(0,0,0,0.2)',
        transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        display: 'flex', flexDirection: 'column', padding: '120px 40px', boxSizing: 'border-box',
        zIndex: 99999, overflowY: 'auto'
      }}>
        {paginas.map((p, i) => (
          <a key={i} href="#" style={{ textDecoration: 'none', color: '#1A1A1A', fontSize: '0.75rem', marginBottom: '25px', fontWeight: '400', letterSpacing: '2px', textTransform: 'uppercase' }}>{p}</a>
        ))}
      </div>

      {isOpen && <div onClick={() => setIsOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 99998, backdropFilter: 'blur(3px)' }}></div>}
    </>
  );
}
