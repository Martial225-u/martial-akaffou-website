"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  icon: string;
  description: string;
}

export default function ProjectCard({
  title,
  icon,
  description,
}: ProjectCardProps) {

  return (
    <motion.div
      whileHover={{
        y: -12,
      }}
      transition={{
        duration: 0.4,
      }}
      className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950 p-8 shadow-xl transition-all hover:border-cyan-400"
    >

      {/* Glow effect */}
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl transition group-hover:bg-cyan-400/30"
      ></div>


      {/* Icon */}
      <motion.div
        whileHover={{
          scale: 1.2,
          rotate: 5,
        }}
        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-5xl shadow-lg"
      >
        {icon}
      </motion.div>


      {/* Title */}
      <h3
        className="relative z-10 mt-6 text-2xl font-bold text-white transition group-hover:text-cyan-400"
      >
        {title}
      </h3>


      {/* Description */}
      <p
        className="relative z-10 mt-4 leading-relaxed text-gray-400"
      >
        {description}
      </p>


      {/* Button */}
      <button
        className="relative z-10 mt-6 rounded-full border border-cyan-400 px-6 py-2 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
      >
        Découvrir →
      </button>


    </motion.div>
  );
}