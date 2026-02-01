import Image from "next/image";
import Link from "next/link";
import { Norican, Inter } from "@next/font/google";
import { useState } from "react";

const norican = Norican({
  weight: "400",
  subsets: ["latin"],
  fallback: ["brush script m7"],
});

const inter = Inter({ subsets: ["latin"], fallback: ["arial"] });

export default function Nav({ logo }) {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  const menuItems = [
    { n: "Quién soy", l: "/quien-soy" },
    { n: "Entrevistas", l: "/entrevistas" },
    { n: "Talk to Mayka", l: "/talk-to-mayka" },
    { n: "Consultoría Organizacional", l: "/consultoria" },
    { n: "Mensajes del Más Allá", l: "/mensajes" },
    { n: "Canalización a Distancia", l: "/canalizacion" },
    { n: "Regresiones", l: "/regresiones" },
    { n: "Análisis de Sueños", l: "/suenos" },
    { n: "Talleres en Grupo", l: "/talleres" },
    { n: "Terapia del Duelo", l: "/duelo" },
    { n: "Contacto", l: "#contacto" },
  ];

  return (
    <div className="flex justify-between bg-[#F5E1D7]/90 backdrop-blur-md border-b-[0.025rem] border-b-neutral-200/20 fixed min-w-full top-0 z-[100000]">
      <div className="ml-6 mt-4 lg:mt-8">
        <div className={norican.className}>
          <h1 className="text-[#1A1A1A] pb-4 text-2xl">
            <Link href="/">{logo}</Link>
          </h1>
        </div>
      </div>
      
    <div onClick={handleNavOpen} className="fixed right-0 mr-6 mt-4 lg:hidden"> 
  {/* El "lg:hidden" hará que desaparezca en pantallas grandes */}
  <button>
    <Image
      src="/assets/Menu-Icon.svg"
      height={60}
      width={60}
      alt="menu icon"
    />
  </button>
</div>

      {/* mobile nav - AHORA LILA */}
      <div className={inter.className}>
        <nav
          className={
            navOpen
              ? "bg-[#ECE1ED] border-l-[0.025rem] border-l-neutral-200/5 min-h-screen fixed right-0 min-w-[300px] grid grid-flow-row justify-items-center content-start gap-y-6 z-[100000] shadow-2xl overflow-y-auto"
              : "hidden"
          }
        >
         
          <ul className="grid grid-flow-row justify-items-center text-sm gap-y-6 px-10 pt-10 uppercase tracking-widest">
            {menuItems.map((item, i) => (
              <li key={i} className="hover:opacity-50 transition-opacity">
                <Link href={item.l} onClick={handleNavOpen}>{item.n}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* desktop nav - OCULTO SEGÚN ESTRUCTURA ORIGINAL */}
      <div className={inter.className}>
        <nav className="hidden lg:grid">
          <ul className="grid grid-flow-col justify-items-center text-xs gap-x-10 items-center mr-10 mt-10 uppercase tracking-widest font-medium">
            <li><Link href="/quien-soy">Quién soy</Link></li>
            <li><Link href="#contacto">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
