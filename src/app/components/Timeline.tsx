"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023",
    title: "New Heights Academy - Accra",
    role: "Enseignant de Français",
    description:
      "Enseignement du français et accompagnement des apprenants dans un environnement international.",
  },
  {
    year: "2024",
    title: "Hamburg International School - Accra",
    role: "French Teacher",
    description:
      "Formation linguistique et développement des compétences communicationnelles.",
  },
  {
    year: "2024 - 2025",
    title: "Global Executive College Accra",
    role: "Project Management",
    description:
      "Formation en gestion de projets, leadership et planification stratégique.",
  },
  {
    year: "2023 - 2024",
    title: "Perez University College Accra",
    role: "Digital Marketing",
    description:
      "Certification en marketing digital, stratégie de marque et communication numérique.",
  },
  {
    year: "2025 - 2026",
    title: "Webmate Ghana / Côte d'Ivoire",
    role: "Digital Transformation & VSLA Digitization",
    description:
      "Participation aux projets de transformation digitale et solutions fintech.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-slate-950 px-6 py-24">

      <div className="mx-auto max-w-5xl">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Mon Parcours Professionnel
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-300">
          Une expérience internationale combinant enseignement,
          marketing digital, gestion de projets et innovation technologique.
        </p>


        <div className="relative mt-16 border-l-2 border-cyan-400/40">

          {experiences.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mb-12 ml-8"
            >

              <div className="absolute -left-[43px] top-2 h-6 w-6 rounded-full bg-cyan-400 shadow-lg">
              </div>


              <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-6 shadow-xl">

                <span className="text-cyan-400 font-bold">
                  {item.year}
                </span>

                <h3 className="mt-3 text-2xl font-bold">
                  {item.title}
                </h3>

                <h4 className="mt-2 text-lg text-cyan-300">
                  {item.role}
                </h4>

                <p className="mt-4 text-gray-300">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}