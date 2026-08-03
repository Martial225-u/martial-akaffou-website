"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "VSLA Digitization",
    icon: "🌾",
    description:
      "Digitalisation des groupes d'épargne communautaires avec Webmate en partenariat avec Beyond Beans.",
    tech: "Fintech • Webmate • VSLA",
  },
  {
    title: "Global Academy Program",
    icon: "🎓",
    description:
      "Programme de formation en langues, compétences numériques et leadership.",
    tech: "Education • Leadership",
  },
  {
    title: "Digital Marketing",
    icon: "📈",
    description:
      "Création de stratégies digitales, gestion des réseaux sociaux et développement de marques.",
    tech: "SEO • Social Media • Branding",
  },
  {
    title: "Project Management",
    icon: "📊",
    description:
      "Pilotage de projets, coordination d'équipes et suivi des performances.",
    tech: "Planning • Agile • Leadership",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Mes Réalisations
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-300">
          Quelques projets et domaines dans lesquels j'ai apporté des solutions
          concrètes.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 shadow-xl"
            >
              <div className="text-5xl">{project.icon}</div>

              <h3 className="mt-5 text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {project.description}
              </p>

              <span className="mt-5 inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                {project.tech}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}