"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Project Management",
    school: "Global Executive College Accra",
    year: "2024 - 2025",
    image: "/certificates/project-management.jpg",
  },
  {
    title: "Digital Marketing Certification",
    school: "Perez University College Accra",
    year: "2023 - 2024",
    image: "/certificates/digital-marketing.jpg",
  },
  {
    title: "Christian Leadership Training",
    school: "Leadership & Ministry Formation",
    year: "2018",
    image: "/certificates/leadership.jpg",
  },
];

export default function CertificateGallery() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Diplômes & Certifications
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-300">
          Quelques documents officiels représentant mon parcours académique,
          professionnel et en leadership.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.a
              key={index}
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10, scale: 1.02 }}
              className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900 shadow-xl transition"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 opacity-0 transition group-hover:opacity-100">
                  <span className="rounded-full border border-cyan-400 px-5 py-2 font-semibold text-cyan-400">
                    Voir le certificat
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400">
                  {certificate.title}
                </h3>

                <p className="mt-3 text-gray-300">
                  {certificate.school}
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  📅 {certificate.year}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}