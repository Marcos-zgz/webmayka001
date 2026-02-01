import Image from "next/image";
import Nav from "../components/nav"; // Recuperamos el Nav original

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A' }}>
      
      {/* 1. Ponemos el Nav AQUÍ y solo AQUÍ */}
      <Nav logo="MAYKA MENACHO" />
      
      <main className="max-w-7xl mx-auto px-6 pt-10 md:pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* TEXTO Y BOTÓN */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-2xl md:text-3xl font-light mb-10 leading-snug">
              ¿Buscas claridad en tu vida? <br/>
              Une tu intuición y estrategia para alcanzar tu propósito.
            </p>

{/* SECCIÓN WHATSAPP DIRECTA */}
<div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', md: { justifyContent: 'flex-start' } }}>
  <a 
    href="https://wa.me/+34644267361" 
    target="_blank"
    rel="noopener noreferrer"
    style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '15px', 
      textDecoration: 'none',
      backgroundColor: 'rgba(255,255,255,0.3)', // Un fondo muy suave para resaltar
      padding: '10px 20px',
      borderRadius: '15px'
    }}
  >
    {/* Icono de WhatsApp desde una fuente muy fiable */}
    <img 
      src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
      alt="WhatsApp" 
      style={{ width: '35px', height: '35px', display: 'block' }}
    />
    
    <span style={{ 
      color: '#1A1A1A', 
      fontSize: '1.2rem', 
      fontWeight: '600',
    }}>
      WhatsApp
    </span>
  </a>
</div>
          {/* IMAGEN */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects-img/big-unsplash-party.png"
                alt="Mayka Menacho"
                height={500}
                width={450}
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
