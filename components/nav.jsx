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
      
 <div onClick={handleNavOpen} className="fixed right-0 mr-6 mt-4 z-[100001] cursor-pointer">
  <button>
    <Image
      src="/assets/Menu-Icon.svg"
      height={50} // Un poco más ajustado para que quede fino en ambos
      width={50}
      alt="menu icon"
    />
  </button>
</div>

      {/* mobile nav - AHORA LILA */}
      <div className={inter.className}>
        <nav
          className={
            navOpen
? "bg-[#ECE1ED] border-l-[0.025rem] border-l-neutral-200/10 min-h-screen fixed right-0 min-w-[320px] grid grid-flow-row justify-items-center content-start gap-y-10 z-[100000] shadow-[0_0_50px_rgba(0,0,0,0.2)]"
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

     
    </div>
  );
}
