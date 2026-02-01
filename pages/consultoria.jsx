import React from 'react';
import Head from 'next/head';
import Nav from "../components/nav";

export default function Consultoria() {
  const beneficios = [
    "Reducción de bajas laborales",
    "Incremento del compromiso y la satisfacción",
    "Mejor comunicación interna y resolución de conflictos",
    "Aumento de la creatividad y la eficiencia",
    "Reputación corporativa positiva"
  ];

  const metodologia = [
    { t: "Diagnóstico inicial", d: "Análisis profundo del clima emocional de la organización." },
    { t: "Plan de acción", d: "Diseño de una estrategia holística personalizada." },
    { t: "Talleres y Seguimiento", d: "Realización de dinámicas vivenciales y acompañamiento." },
    { t: "Evaluación", d: "Análisis final con resultados y mejoras observables." }
  ];

  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
      <Head>
        <title>Consultoría Organizacional | Mayka Menacho</title>
      </Head>

      <Nav />

      <main style={{ maxWidth: '850px', margin: '0 auto', paddingTop: '140px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '100px' }}>
        
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'left', marginBottom: '35px', letterSpacing: '1px', lineHeight: '1.3' }}>
          COACH ORGANIZACIONAL PARA EMPRESAS
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'left' }}>
          
          {/* Introducción */}
          <p>
            Vivimos tiempos en los que las empresas enfrentan desafíos cada vez más humanos. El estrés, la desmotivación y la falta de conexión emocional generan bajas laborales, conflictos internos y pérdida de talento. La consultoría holística propone una nueva forma de entender la empresa: <strong>un espacio vivo donde las personas son el corazón de todo.</strong>
          </p>

          {/* IMAGEN DE CONSULTORÍA */}
          <div style={{ width: '100%', margin: '10px 0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <img 
              src="/assets/consultoria.jpg" // CAMBIA ESTO POR EL NOMBRE DE TU FOTO
              alt="Consultoría Organizacional Mayka Menacho" 
              style={{ width: '100%', display: 'block' }}
            />
          </div>

          {/* Objetivo */}
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginTop: '20px' }}>Objetivo del Proyecto</h2>
          <p>
            Promover una cultura organizacional consciente y saludable, donde el bienestar emocional y la conexión interior se traduzcan en mayor productividad, motivación y cohesión de equipo.
          </p>

          {/* Enfoque */}
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginTop: '20px' }}>Enfoque de Trabajo</h2>
          <p>
            A través de un acompañamiento personalizado, la consultoría holística combina dinámicas de autoconocimiento, liderazgo consciente y conexión emocional. Se realizan talleres vivenciales, meditaciones guiadas y sesiones grupales para fomentar la comunicación y la cooperación entre empleados y directivos.
          </p>

          {/* Beneficios con checkmarks */}
          <div style={{ padding: '35px', borderRadius: '25px', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'rgba(255,255,255,0.2)', marginTop: '20px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Beneficios para la Empresa</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {beneficios.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: '#BDE0FE', fontWeight: 'bold' }}>•</span> {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Metodología */}
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginTop: '30px' }}>Metodología</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {metodologia.map((m, i) => (
              <div key={i} style={{ padding: '20px', borderLeft: '3px solid #BDE0FE', backgroundColor: 'rgba(0,0,0,0.02)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', opacity: 0.5 }}>Fase 0{i+1}</span>
                <h4 style={{ fontWeight: 'bold', marginBottom: '5px' }}>{m.t}</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{m.d}</p>
              </div>
            ))}
          </div>

          {/* Modalidades */}
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginTop: '30px' }}>Modalidades y Contratación</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Consultoría individual para cada empresa</li>
            <li>Talleres grupales puntuales o mensuales</li>
            <li>Programas anuales con seguimiento integral</li>
          </ul>

          {/* Cita Final */}
          <div style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '40px' }}>
            <p style={{ fontSize: '1.4rem', fontStyle: 'italic', color: '#1A1A1A' }}>
              “Transformando la productividad desde la conexión humana”
            </p>
            <p style={{ fontWeight: 'bold', marginTop: '10px' }}>— Mayka Menacho López</p>
          </div>
        </div>

        {/* CONTACTO */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <p style={{ marginBottom: '25px' }}>Si quieres más información, contacta conmigo por WhatsApp o por email.</p>
          
          <a 
            href="https://wa.me/34644267361?text=Hola%20Mayka,%20estoy%20interesado%20en%20vuestra%20Consultoría%20para%20Empresas" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: '#25D366', 
              color: '#FFFFFF', 
              padding: '16px 40px', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontSize: '1rem', 
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
              textTransform: 'uppercase'
            }}
          >
            MÁS INFORMACIÓN POR WHATSAPP
          </a>
        </div>

      </main>

      <footer style={{ padding: '60px 20px', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        &copy; 2026 Mayka Menacho
      </footer>
    </div>
  );
}
