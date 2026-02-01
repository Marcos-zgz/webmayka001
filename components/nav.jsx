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
    <nav style={{ 
      position: 'fixed', top: 0, width: '100%', zIndex: 1000, 
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
      padding: '20px 40px', backgroundColor: 'rgba(245, 225, 215, 0.8)', // Fondo nude con transparencia
      backdropFilter: 'blur(10px)' 
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>{logo}</div>
      
      {/* BOTÓN HAMBURGUESA */}
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', zIndex: 1100 }}>
        <div style={{ width: '25px', height: '2px', backgroundColor: '#1A1A1A', margin: '5px 0', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }}></div>
        <div style={{ width: '25px', height: '2px', backgroundColor: '#1A1A1A', margin: '5px 0', opacity: isOpen ? 0 : 1 }}></div>
        <div style={{ width: '25px', height: '2px', backgroundColor: '#1A1A1A', margin: '5px 0', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }}></div>
      </div>

      {/* PANEL LATERAL (EL MENÚ) */}
      <div style={{
        position: 'fixed', top: 0, right: isOpen ? 0 : '-100%', 
        width: '300px', height: '100vh', 
        backgroundColor: '#ECE1ED', // TU NUEVO COLOR MORADO SUAVE
        boxShadow: '-10px 0 30px rgba(0,0,0,0.05)',
        transition: 'right 0.4s ease-in-out',
        display: 'flex', flexDirection: 'column', 
        padding: '100px 40px', boxSizing: 'border-box'
      }}>
        {menuItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            onClick={() => setIsOpen(false)}
            style={{ 
              textDecoration: 'none', 
              color: '#1A1A1A', 
              fontSize: '0.9rem', // FUENTE MÁS PEQUEÑA Y ELEGANTE
              fontWeight: '300', 
              marginBottom: '20px',
              letterSpacing: '1px',
              fontFamily: 'Helvetica, Arial, sans-serif', // MÁS LEGIBLE
              transition: 'opacity 0.2s'
            }}
            onMouseOver={(e) => e.target.style.opacity = 0.5}
            onMouseOut={(e) => e.target.style.opacity = 1}
          >
            {item.name.toUpperCase()}
          </a>
        ))}
      </div>

      {/* OVERLAY PARA CERRAR AL HACER CLIC FUERA */}
      {isOpen && <div onClick={() => setIsOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.02)' }}></div>}
    </nav>
  );
}
