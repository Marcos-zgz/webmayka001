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

            {/* BOTÓN BLINDADO */}
            <a 
              href="https://wa.me/34600000000" 
              target="_blank"
              style={{ 
                backgroundColor: '#1A1A1A', 
                padding: '18px 40px', 
                borderRadius: '50px', 
                textDecoration: 'none', 
                display: 'inline-block'
              }}
            >
              <span style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 'bold' }}>
                Hablemos por WhatsApp
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
