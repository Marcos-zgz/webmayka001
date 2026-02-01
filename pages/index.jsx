import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0 }}>
      <Head>
        <title>Mayka Menacho</title>
      </Head>

      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MM</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>Servicios</span>
          <span>Contacto</span>
        </div>
      </nav>
      
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          
          <div style={{ flex: '1', minWidth: '300px' }}>
            <p style={{ fontSize: '1.8rem', lineHeight: '1.4', fontWeight: '300', marginBottom: '40px' }}>
              &iquest;Buscas claridad en tu vida? <br/>
              Une tu intuici&oacute;n y estrategia para alcanzar tu prop&oacute;sito.
            </p>

            <a 
              href="https://wa.me/+34644267361" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '12px', 
                textDecoration: 'none',
                backgroundColor: '#FFFFFF',
                padding: '12px 25px',
                borderRadius: '50px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                style={{ width: '25px', height: '25px' }}
              />
              <span style={{ color: '#1A1A1A', fontWeight: '600' }}>Contactar por WhatsApp</span>
            </a>
          </div>

          <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
             <img 
                src="/images/projects-img/big-unsplash-party.png" 
                alt="Mayka Menacho"
                style={{ width: '100%', maxWidth: '400px', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
             />
          </div>

        </div>
      </main>
    </div>
  );
}
