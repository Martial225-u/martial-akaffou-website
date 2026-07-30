"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "Digital Marketing",
    level: "90%",
  },
  {
    name: "Project Management",
    level: "85%",
  },
  {
    name: "English Teaching",
    level: "95%",
  },
  {
    name: "Digital Transformation",
    level: "80%",
  },
  {
    name: "Fintech & Innovation",
    level: "75%",
  },
];

export default function Skills() {
  return (
    <section className="bg-slate-900 px-6 py-24">

      <div className="mx-auto max-w-5xl">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Mes Compétences
        </h2>

        <p className="mt-5 text-center text-gray-300">
          Mes domaines d'expertise professionnelle.
        </p>


        <div className="mt-12 space-y-8">

          {skills.map((skill) => (

            <div key={skill.name}>

              <div className="mb-2 flex justify-between">
                <span className="font-semibold text-white">
                  {skill.name}
                </span>

                <span className="text-cyan-400">
                  {skill.level}
                </span>
              </div>


              <div className="h-3 rounded-full bg-slate-800">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-3 rounded-full bg-cyan-400"
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}