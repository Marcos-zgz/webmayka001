import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* 1. Título de la pestaña */}
        <title>Mayka Menacho | Intuición y Estrategia</title>
        
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="author" content="Mayka Menacho" />
        <meta name="description" content="¿Buscas claridad? Une tu intuición y estrategia." />
        
        {/* 2. Permitimos que Google la encuentre (quitamos el noindex) */}
        <meta name="robots" content="index, follow" />
        
        {/* 3. CAMBIAMOS EL COLOR DE LA WEB AL NUDE DE LA TARJETA */}
        <meta name="theme-color" content="#F5E1D7" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* 4. Envolvemos todo en un div con el fondo rosa para asegurar que se vea */}
      <div style={{ backgroundColor: '#F5E1D7', minHeight: '100vh' }}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
}
