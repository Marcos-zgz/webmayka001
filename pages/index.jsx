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

       {/* SECCIÓN WHATSAPP CON ICONO */}
<div style={{ marginTop: '30px' }}>
  <a 
    href="https://wa.me/+34644267361" // Pon aquí el número de Mayka
    target="_blank"
    rel="noopener noreferrer"
    style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: '12px', 
      textDecoration: 'none',
      transition: 'transform 0.2s ease'
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    {/* ICONO DE WHATSAPP */}
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
      alt="WhatsApp" 
      style={{ width: '40px', height: '40px' }}
    />
    
    {/* TEXTO AL LADO */}
    <span style={{ 
      color: '#1A1A1A', 
      fontSize: '1.2rem', 
      fontWeight: '500',
      borderBottom: '1px solid #1A1A1A' // Una sutil línea debajo para que se sepa que es un link
    }}>
      Contactar por WhatsApp
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
