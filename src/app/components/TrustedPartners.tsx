"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Webmate Ghana / Côte d'Ivoire",
    icon: "🌐",
    description:
      "Participation aux projets de transformation digitale et de digitalisation des VSLA.",
  },
  {
    name: "Hamburg International School Accra",
    icon: "🎓",
    description:
      "Expérience internationale dans l'enseignement du français.",
  },
  {
    name: "New Heights Academy Accra",
    icon: "🏫",
    description:
      "Accompagnement des apprenants dans le développement linguistique.",
  },
  {
    name: "Perez University College Accra",
    icon: "📚",
    description:
      "Formation en marketing digital et développement professionnel.",
  },
  {
    name: "Global Executive College Accra",
    icon: "📊",
    description:
      "Formation en gestion de projets et leadership.",
  },
  {
    name: "Beyond Beans",
    icon: "🌍",
    description:
      "Collaboration autour des initiatives de transformation digitale.",
  },
];

export default function TrustedPartners() {
  return (
    <section className="bg-slate-900 px-6 py-24">

      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Ils me font confiance
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-300">
          Des collaborations et expériences professionnelles
          dans l'éducation, le digital et l'innovation.
        </p>


        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {partners.map((partner, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-cyan-500/20 bg-slate-950 p-8 shadow-xl"
            >

              <div className="text-5xl">
                {partner.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-cyan-400">
                {partner.name}
              </h3>

              <p className="mt-4 text-gray-300">
                {partner.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}