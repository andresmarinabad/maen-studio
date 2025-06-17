"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { proyectos } from "../../../data/proyectos";

export default function Proyecto() {
  const { slug } = useParams();
  const proyecto = proyectos.find((p) => p.slug === slug);

  if (!proyecto)
    return <div className="p-10 text-center">Proyecto no encontrado.</div>;

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-24 pb-32">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold mb-6 text-center"
      >
        {proyecto.titulo}
      </motion.h1>

      <motion.video
        src={proyecto.video}
        controls
        className="mx-auto rounded-lg shadow-lg max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-8 max-w-xl mx-auto text-lg text-gray-300 text-center"
      >
        {proyecto.descripcion}
      </motion.p>

      <div className="mt-12 text-center">
        <Link href="/" className="text-gray-400 underline hover:text-white">
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
