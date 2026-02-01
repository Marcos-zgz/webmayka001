 import React, { useState } from 'react';

export default function Nav({ logo }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { n: "Quién soy", l: "/quien-soy" },
    { n: "Entrevistas", l: "/entrevistas" },
    { n: "Talk to Mayka", l: "/talk-to-mayka" },
    { n: "Consultoría Organizacional", l: "/consultoria" },
    { n: "Mensajes del Más Allá", l: "/mensajes" },
    { n: "Canalización a Distancia", l: "/canalizacion" },
    { n: "Regresiones", l: "/regresiones" },
    { n: "Análisis de Sueños", l: "/suenos" },
    { n: "Talleres en Grupo", l: "/talleres" },
    { n: "Terapia del Duelo", l: "/duelo" },
    { n: "Contacto", l: "#contacto" },
  ];

  return (
    <>
      <nav style={{ 
        position: 'fixed', top: 0, left: 0, width: '100%', height: '80px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '0 40px', backgroundColor: 'rgba(245, 225, 215, 0.96)',
        zIndex: 25000, boxSizing: 'border-box'
      }}>
        {/* LOGO */}
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px', color: '#1A1A1A' }}>
          {logo}
        </div>
        
        {/* ICONO HAMBURGUESA MODERNO */}
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ 
            cursor: 'pointer', zIndex: 26000, padding: '10px',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px'
          }}
        >
          <div style={{ 
            width: isOpen ? '25px' : '28px', 
            height: '2px', backgroundColor: '#1A1A1A', 
            transition: '0.3s', 
            transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : '' 
          }}></div>
          <div style={{ 
            width: '20px', 
            height: '2px', backgroundColor: '#1A1A1A', 
            transition: '0.3s',
            opacity: isOpen ? 0 : 1 
          }}></div>
          <div style={{ 
            width: isOpen ? '25px' : '14px', 
            height: '2px', backgroundColor: '#1A1A1A', 
            transition: '0.3s',
            transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' 
          }}></div>
        </div>
      </nav>

      {/* PANEL LILA (#ECE1ED) */}
      <div style={{
        position: 'fixed', top: 0, right: isOpen ? '0' : '-100%', 
        width: '320px', height: '100vh', 
        backgroundColor: '#ECE1ED', 
        boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
        transition: 'right 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
        display: 'flex', flexDirection: 'column', 
        padding: '120px 40px 40px 40px', boxSizing: 'border-box',
        zIndex: 24000, overflowY: 'auto'
      }}>
        {menuItems.map((item, index) => (
          <a key={index} href={item.l} onClick={() => setIsOpen(false)} style={{ 
            textDecoration: 'none', color: '#1A1A1A', 
            fontSize: '0.8rem', marginBottom: '25px', 
            fontWeight: '400', letterSpacing: '2px',
            textTransform: 'uppercase', fontFamily: 'sans-serif',
            opacity: 0.8
          }}>
            {item.n}
          </a>
        ))}
      </div>

      {/* CAPA DE CIERRE */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.15)', zIndex: 23000
        }}></div>
      )}
    </>
  );
}
