"use client";

import { motion } from "framer-motion";

const articles = [
  {
    title: "Transformation digitale : pourquoi les entreprises doivent évoluer",
    date: "Août 2026",
    category: "Digital",
    description:
      "Découvrez comment les outils numériques peuvent améliorer la performance des entreprises et organisations.",
  },

  {
    title: "Global Academy Program : développer les compétences de demain",
    date: "Septembre 2026",
    category: "Formation",
    description:
      "Un programme dédié aux langues, compétences digitales et leadership professionnel.",
  },

  {
    title: "Fintech et innovation numérique en Afrique",
    date: "Octobre 2026",
    category: "Innovation",
    description:
      "Les nouvelles technologies financières ouvrent de nouvelles opportunités pour les entrepreneurs africains.",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="bg-slate-950 px-6 py-24"
    >

      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Blog & Actualités
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-300">
          Retrouvez mes réflexions, formations, projets et actualités
          autour du digital, de l'innovation et du développement professionnel.
        </p>


        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {articles.map((article, index) => (

            <motion.article
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 shadow-xl"
            >

              <span className="rounded-full bg-cyan-500/20 px-4 py-1 text-sm text-cyan-300">
                {article.category}
              </span>


              <h3 className="mt-6 text-2xl font-bold text-white">
                {article.title}
              </h3>


              <p className="mt-4 text-gray-400">
                {article.description}
              </p>


              <p className="mt-6 text-sm text-cyan-400">
                📅 {article.date}
              </p>


              <button
                className="mt-6 rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                Lire l'article
              </button>


            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}