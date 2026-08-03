"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    icon: "🌾",
    title: "VSLA Digitization",
    category: "Fintech • Digital Transformation",
    description:
      "Projet de digitalisation des groupes d'épargne communautaires avec Webmate Ghana / Côte d'Ivoire en partenariat avec Beyond Beans.",
    result:
      "Accompagnement vers des solutions numériques adaptées aux communautés.",
  },

  {
    icon: "🎓",
    title: "Global Academy Program",
    category: "Formation • Leadership",
    description:
      "Programme de développement des compétences en langues, digital skills, leadership et management.",
    result:
      "Formation et accompagnement des apprenants vers l'excellence professionnelle.",
  },

  {
    icon: "📈",
    title: "Digital Marketing",
    category: "Marketing Digital • Branding",
    description:
      "Création de stratégies digitales, communication en ligne, réseaux sociaux et développement de visibilité.",
    result:
      "Aide aux entreprises et organisations à renforcer leur présence numérique.",
  },

  {
    icon: "📊",
    title: "Project Management",
    category: "Gestion de Projet",
    description:
      "Planification, organisation, coordination d'équipes et suivi de projets innovants.",
    result:
      "Application des méthodes de gestion pour atteindre les objectifs.",
  },

  {
    icon: "🚀",
    title: "Fintech & Innovation",
    category: "Technologie • Innovation",
    description:
      "Exploration des technologies financières et des solutions numériques pour répondre aux nouveaux défis.",
    result:
      "Création d'une vision orientée vers l'innovation digitale.",
  },
];


export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">

      <div className="mx-auto max-w-6xl">

        <Link
          href="/"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Retour à l'accueil
        </Link>


        <h1 className="mt-10 text-center text-5xl font-bold text-cyan-400">
          Mon Portfolio
        </h1>


        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-300">
          Découvrez mes réalisations dans le digital,
          la formation, la gestion de projets et l'innovation technologique.
        </p>



        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 shadow-xl"
            >

              <div className="text-5xl">
                {project.icon}
              </div>


              <h2 className="mt-6 text-2xl font-bold text-cyan-400">
                {project.title}
              </h2>


              <p className="mt-3 text-sm text-cyan-300">
                {project.category}
              </p>


              <p className="mt-5 text-gray-300">
                {project.description}
              </p>


              <div className="mt-5 rounded-xl bg-slate-950 p-4">
                <h3 className="font-bold text-white">
                  Résultat :
                </h3>

                <p className="mt-2 text-gray-400">
                  {project.result}
                </p>
              </div>


              <button
                className="mt-6 rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                Voir le projet
              </button>


            </motion.div>

          ))}

        </div>


      </div>

    </main>
  );
}