"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { servicios } from "../data/servicios";
import { proyectos } from "../data/proyectos";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const refServicios = useRef(null);
  const refProyectos = useRef(null);
  const isInViewServicios = useInView(refServicios, { once: false, amount: 0.6 });
  const isInViewProyectos = useInView(refProyectos, { once: false, amount: 0.6 });

  
  return (
    <main className="bg-white text-black min-h-screen font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="text-xl font-bold">Maen Studios</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center space-y-12 text-4xl font-bold z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:opacity-70 transition">Inicio</a>
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:opacity-70 transition">Proyectos</a>
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:opacity-70 transition">Estudio</a>
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:opacity-70 transition">Contacto</a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl leading-tight mb-6 animate-fade-in">
          TE <b>CONECTAMOS</b> <br /> CON EL <b>MUNDO</b>
        </h1>
        
      </section>


      {/* About Section */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">QUIÉNES SOMOS</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          Maen Studios es un estudio creativo fundado en 2020 por dos socios ansiosos por crear algo diferente y único. 
          Nuestro objetivo es transformar el concepto desfasado de los estudios por un nuevo enfoque rompedor, disruptivo y eficaz.
          Estamos hechos para todos aquellos negocios que buscan alcanzar lo improbable, que acepten el reto de cambiar el orden de lo establecido y 
          para aquellos que de verdad crean que la comunicación y el branding tienen el poder para cambiar percepciones y comportamientos.
        </p>

      </section>

      {/* Projects Preview */}
      <section className="py-20 px-6 bg-white text-black">
        
        <motion.h2
          ref={refProyectos}
          initial={{ opacity: 0, y: 40 }}
          animate={isInViewProyectos ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-12"
        >
          PROYECTOS
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {proyectos.map(({ slug, titulo, video, thumbnail }) => (
          <Link key={slug} href={`/proyectos/${slug}`}>
            <motion.div
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <video
                src={video}
                poster={thumbnail}
                controls={false}
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-auto aspect-[9/16] object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-60 text-black p-2 text-center font-semibold">
                {titulo}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      </section>

      {/* Servicios */}
      <section className="py-32 px-6 text-center">
        
        <motion.h2
          ref={refServicios}
          initial={{ opacity: 0, y: 40 }}
          animate={isInViewServicios ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-12"
        >
          SERVICIOS
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, index) => (
            <Link href={`/servicios/${servicio.slug}`} key={index}>
              <div className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg">
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{servicio.titulo}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">¿TIENES UN PROYECTO?</h2>
        <p className="mb-8 text-lg">Hablemos. Nos encantan los retos imposibles.</p>
        <a
          href="mailto:hola@maenestudios.com"
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition"
        >
          CONTACTAR
        </a>
      </section>
    </main>
  );
}
