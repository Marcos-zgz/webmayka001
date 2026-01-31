import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', color: '#1A1A1A', margin: 0, padding: 0 }}>
      <Head>
        <title>Mayka Menacho</title>
      </Head>

      {/* CABECERA LIMPIA (Sin duplicados) */}
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>MM</div>
        <div style={{ display: 'flex', gap: '20px', fontWeight: '300' }}>
          <span>Servicios</span>
          <span>Contacto</span>
        </div>
      </nav>
      
      <main className="max-w-6xl mx-auto px-6 pt-10 md:pt-20">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          
          {/* LADO IZQUIERDO: TEXTO Y BOTÓN */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p style={{ fontSize: '1.6rem', lineHeight: '1.4', fontWeight: '300', marginBottom: '40px', maxWidth: '500px' }}>
              ¿Buscas claridad en tu vida? Une tu intuición y estrategia para alcanzar tu propósito.
            </p>

            {/* BOTÓN CON CONTRASTE BLINDADO */}
            <a 
              href="https://wa.me/34600000000" 
              target="_blank"
              style={{ 
                backgroundColor: '#1A1A1A', 
                padding: '16px 35px', 
                borderRadius: '50px', 
                textDecoration: 'none', 
                display: 'inline-block',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              <span style={{ 
                color: '#FFFFFF', 
                fontSize: '1.1rem', 
                fontWeight: '600',
                display: 'block',
                textAlign: 'center'
              }}>
                Hablemos por WhatsApp
              </span>
            </a>
          </div>

          {/* LADO DERECHO: LA FOTO */}
          <div className="flex justify-center">
            <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
              <Image
                src="/images/projects-img/big-unsplash-party.png"
                alt="Mayka Menacho"
                height={550}
                width={450}
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
