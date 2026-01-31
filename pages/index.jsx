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
        <section className="py-20">
          <About
            welcome="Bienvenida,"
            name="Mayka Menacho"
            introduction="¿Quién soy?

Soy Mayka Menacho López, terapeuta transpersonal y coach holistico y organizacional, canalizadora y acompañante en procesos de transformación interior. Desde hace más de dos décadas guío a personas que buscan comprender su propósito, sanar heridas emocionales y reencontrarse con la voz sabia que habita en su interior.

Mi trabajo une la espiritualidad, la ciencia y la psicología profunda, demostrando que una no anula a la otra, sino que se complementan para ofrecer una visión más amplia y amorosa del ser humano. A través de mis conferencias, talleres y retiros, ayudo a quienes me escuchan a vivir con más verdad, unidad y sentido, comprendiendo que mente, cuerpo y alma forman parte de un mismo tejido.

He dedicado gran parte de mi vida a investigar la conexión entre los seres queridos que ya partieron y quienes aún caminamos aquí, especialmente a través de los sueños y la vibración del alma. En mis acompañamientos en procesos de duelo, ofrezco un espacio seguro para transformar el dolor en comprensión, y la ausencia en una nueva forma de presencia.

Creo profundamente que el amor no muere, solo se transforma, y que los lazos invisibles que nos unen pueden sentirse, comprenderse y honrarse con el apoyo tanto de la ciencia como de la espiritualidad.

Mi camino personal también ha sido un viaje de sanación: aprendí a transformar el dolor en sabiduría, la sensibilidad en fortaleza y la búsqueda en presencia. Hoy acompaño a jóvenes y adultos que desean reconciliarse con su historia, despertar su consciencia y recordar que la paz interior no se busca fuera, sino dentro.

Bienvenido/a a este espacio.
Aquí no vienes a aprender algo nuevo, sino a recordar lo que tu alma ya sabe"
            callToActionButton="Hablemos"
          />
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
