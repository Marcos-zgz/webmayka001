import Image from "next/image";
import Nav from "../components/nav";
import About from "../components/about";
import Contact from "../components/contact";

import { Playfair_Display, Montserrat } from "@next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh', width: '100%', display: 'block' }}>
      <header style={{ backgroundColor: '#F5E1D7' }}>
        <Nav logo="MM" />
      </header>
      <main style={{ backgroundColor: '#F5E1D7' }}>
         {/* ... resto del código ... */}
        {/* SECCIÓN PRINCIPAL: ¿BUSCAS CLARIDAD? */}
       <section className="py-12 md:py-20 px-6">
 <section className="py-20 px-6 text-center">
  <div className="max-w-3xl mx-auto">
    <About
      welcome="" // Lo dejamos vacío para suprimirlo
      name=""    // Lo dejamos vacío para suprimirlo
      introduction={
        <p className="text-xl md:text-2xl leading-relaxed text-[#1A1A1A] font-light mb-8">
          ¿Buscas claridad en tu vida? Une tu intuición y estrategia para alcanzar tu propósito.
        </p>
      }
      callToActionButton={
        <a 
          href="https://wa.me/34tu_numero_aqui" 
          className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full hover:bg-opacity-80 transition-all shadow-lg inline-block text-lg"
        >
          Hablemos
        </a>
      }
    />
  </div>
</section>
</section>

        {/* SECCIÓN DE SERVICIOS (He simplificado la anterior para que sea elegante) */}
        <section className="bg-white/30 py-20 px-8 text-center" id="servicios">
          <h2 className={`text-4xl mb-10 ${playfair.className}`}>Mis Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white/50 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Canalización</h3>
              <p className="text-sm">Conecta con tu guía interior y recibe mensajes para tu camino.</p>
            </div>
            <div className="p-6 bg-white/50 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Terapia</h3>
              <p className="text-sm">Sana bloqueos y encuentra el equilibrio emocional que necesitas.</p>
            </div>
            <div className="p-6 bg-white/50 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Coaching</h3>
              <p className="text-sm">Estrategia pura aplicada a tus objetivos personales o de negocio.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN CONTACTO */}
        <section className="py-20" id="contact-me">
          <Contact
            title="Contacto"
            firstPara="¿Lista para dar el siguiente paso?"
            secondPara="Hablemos sobre cómo puedo acompañarte. Escríbeme a:"
            email="hola@maykamenacho.com"
          />
        </section>
      </main>

      <footer className="py-10 border-t border-black/10">
        <h2 className="text-center text-xs uppercase tracking-widest">
          Mayka Menacho © 2026 | Intuición y Estrategia
        </h2>
      </footer>
    </div>
  );
}
