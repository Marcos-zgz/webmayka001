 import React from "react";

const About = ({ introduction }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      {/* El texto de introducción con tamaño normal */}
      <div className="max-w-2xl mb-8">
        <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed font-light">
          {introduction}
        </p>
      </div>

      {/* EL BOTÓN REAL: Fondo negro, Texto blanco, Enlace a WhatsApp */}
      <a
        href="https://wa.me/34600000000" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1A1A1A] text-white !important px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all shadow-lg"
        style={{ color: 'white', backgroundColor: '#1A1A1A', textDecoration: 'none' }}
      >
        Hablemos
      </a>
    </div>
  );
};

export default About;
