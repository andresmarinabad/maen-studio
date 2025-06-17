"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";


const dataServicios = {
  "produccion-audiovisual": {
    titulo: "Producción Audiovisual",
    descripcion: "Desarrollamos ideas desde cero hasta la pantalla. Rodajes impactantes, storytelling visual, y ejecución cinematográfica.",
    imagen: "/servicio1.jpg",
  },
  "direccion-fotografia": {
    titulo: "Dirección de Fotografía",
    descripcion: "Controlamos la luz, el encuadre y el color como herramientas expresivas para emocionar.",
    imagen: "/servicio2.jpg",
  },
  "postproduccion-vfx": {
    titulo: "Postproducción & VFX",
    descripcion: "Elevamos las imágenes con edición precisa, motion design y efectos visuales brutales.",
    imagen: "/servicio3.jpg",
  },
};

export default function ServicioPage() {
  const { slug } = useParams();
  const servicio = dataServicios[slug];

  if (!servicio) return <div className="p-10 text-center">Servicio no encontrado.</div>;

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-24 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl font-bold mb-6">{servicio.titulo}</h1>
        <p className="text-lg text-gray-300 mb-12">{servicio.descripcion}</p>
        <motion.img
          src={servicio.imagen}
          alt={servicio.titulo}
          className="w-full h-auto rounded-xl shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h3 className="text-2xl mb-4">¿Quieres este enfoque en tu proyecto?</h3>
        <a
          href="mailto:hola@maenestudios.com"
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-300 transition"
        >
          HABLEMOS
        </a>
      </motion.div>

      <div className="mt-16 text-center">
        <Link href="/" className="text-gray-400 underline hover:text-white transition">
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
