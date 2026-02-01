 import React, { useState } from 'react';

export default function Nav({ logo }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Quién soy", link: "/quien-soy" },
    { name: "Entrevistas", link: "/entrevistas" },
    { name: "Talk to Mayka", link: "/talk-to-mayka" },
    { name: "Consultoría Organizacional", link: "/consultoria" },
    { name: "Mensajes del Más Allá", link: "/mensajes" },
    { name: "Canalización a Distancia", link: "/canalizacion" },
    { name: "Regresiones", link: "/regresiones" },
    { name: "Análisis de Sueños", link: "/suenos" },
    { name: "Talleres en Grupo", link: "/talleres" },
    { name: "Terapia del Duelo", link: "/duelo" },
    { name: "Contacto", link: "#contacto" },
  ];

  return (
    <>
      <nav style={{ 
        position: 'fixed', top: 0, width: '100%', zIndex: 2000, 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '20px 40px', backgroundColor: 'rgba(245, 225, 215, 0.9)', 
        backdropFilter: 'blur(10px)',
        boxSizing: 'border-box'
      }}>
        {/* LOGO */}
        <div style={{ fontSize: '1.4rem', fontWeight: 'bold', letterSpacing: '2px', color: '#1A1A1A' }}>
          {logo}
        </div>
        
        {/* BOTÓN HAMBURGUESA (FORZADO VISIBLE) */}
        <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', zIndex: 2100, padding: '10px' }}>
          <div style={{ width: '25px', height: '2px', backgroundColor: '#1A1A1A', margin: '6px 0', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : '' }}></div>
          <div style={{ width: '25px', height: '2px', backgroundColor: '#1A1A1A', margin: '6px 0', opacity: isOpen ? 0 : 1 }}></div>
          <div style={{ width: '25px', height: '2px', backgroundColor: '#1A1A1A', margin: '6px 0', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : '' }}></div>
        </div>
      </nav>

      {/* PANEL LATERAL */}
      <div style={{
        position: 'fixed', top: 0, right: isOpen ? 0 : '-100%', 
        width: '300px', height: '100vh', 
        backgroundColor: '#ECE1ED', 
        boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
        transition: 'right 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
        display: 'flex', flexDirection: 'column', 
        padding: '100px 40px', boxSizing: 'border-box',
        zIndex: 1999,
        overflowY: 'auto' // Por si la lista es larga en móviles
      }}>
        {menuItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            onClick={() => setIsOpen(false)}
            style={{ 
              textDecoration: 'none', 
              color: '#1A1A1A', 
              fontSize: '0.85rem', 
              fontWeight: '400', 
              marginBottom: '18px',
              letterSpacing: '1.5px',
              fontFamily: 'sans-serif',
              opacity: 0.8
            }}
          >
            {item.name.toUpperCase()}
          </a>
        ))}
      </div>

      {/* FONTO OSCURO AL ABRIR */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.1)', zIndex: 1998 }}
        ></div>
      )}
    </>
  );
}
