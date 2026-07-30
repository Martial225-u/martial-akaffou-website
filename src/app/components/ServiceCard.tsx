"use client";

import { motion } from "framer-motion";

export default function ServiceCard({
  title,
  icon,
  description,
}: {
  title: string;
  icon: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        y: -10,
        scale: 1.05
      }}
      className="group rounded-2xl bg-slate-900 p-6 text-left shadow-lg border border-slate-800 hover:border-cyan-400 transition"
    >

      <div className="text-5xl">
        {icon}
      </div>

      <h3 className="mt-5 text-2xl font-bold text-white group-hover:text-cyan-400">
        {title}
      </h3>

      <p className="mt-4 text-gray-400 leading-relaxed">
        {description}
      </p>

      <button className="mt-6 rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950">
        En savoir plus
      </button>

    </motion.div>
  );
}