import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
      <Head>
        <title>Mayka Menacho | Intuición y Estrategia</title>
      </Head>

      {/* CABECERA */}
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>MM</div>
        <div style={{ display: 'flex', gap: '20px', fontWeight: '300' }}>
          <span>Servicios</span>
          <span>Contacto</span>
        </div>
      </nav>
      
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
          
          {/* LADO IZQUIERDO: TEXTO Y WHATSAPP */}
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
            <p style={{ fontSize: '1.8rem', lineHeight: '1.4', fontWeight: '300', marginBottom: '40px' }}>
              ¿Buscas claridad en tu vida? <br/>
              Une tu intuición y estrategia para alcanzar tu propósito.
            </p>

            {/* WHATSAPP CON ICONO VERDE */}
            <a 
              href="https://wa.me/34600000000" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '12px', 
                textDecoration: 'none',
                backgroundColor: 'white',
                padding: '10px 20px',
                borderRadius: '50px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              }}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                style={{ width: '30px', height: '30px' }}
              />
              <span style={{ color: '#1A1A1A', fontWeight: '600', fontSize: '1.1rem' }}>
                Contactar por WhatsApp
              </span>
            </a>
          </div>

          {/* LADO DERECHO: LA FOTO */}
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
              <Image
                src="/images/projects-img/big-unsplash-party.png"
                alt="Mayka Menacho"
                height={500}
                width={400}
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
