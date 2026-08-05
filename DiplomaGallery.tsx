"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const diplomas = [
  {
    title: "Baccalauréat Série A2",
    image: "/diplomas/baccalaureat-a2.jpg",
  },
 {
  title: "Gestion de Projet",
  image: "/diplomas/project-management.png",
},
  {
    title: "Digital Marketing Certification",
    image: "/diplomas/digital-marketing.jpg",
  },
  {
    title: "English Proficiency",
    image: "/diplomas/english-proficiency.jpg",
  },
  {
    title: "Certificate In Enhancement Program",
    image: "/diplomas/enhancement-program.jpg",
  },
  {
    title: "Certificat de Baptême",
    image: "/diplomas/certificat-bapteme.jpg",
  },
  {
    title: "Certificat Formateur des Moniteurs",
    image: "/diplomas/formateur-moniteurs.jpg",
  },
  {
    title: "Formation Chrétienne en Leadership",
    image: "/diplomas/leadership-chretien.jpg",
  },
];


export default function DiplomaGallery() {

  return (
    <section className="bg-slate-950 px-6 py-24">

      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Galerie des Diplômes & Certifications
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-300">
          Découvrez mes formations, certifications et parcours professionnels.
        </p>


        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {diplomas.map((diploma, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900 p-5 shadow-xl"
            >

              <Image
                src={diploma.image}
                alt={diploma.title}
                width={500}
                height={350}
                className="rounded-xl object-cover"
              />

              <h3 className="mt-5 text-xl font-bold text-cyan-400">
                {diploma.title}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}