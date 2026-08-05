"use client";

import Image from "next/image";

const certificates = [
  {
    title: "Project Management",
    school: "Global Executive College Accra",
    year: "2024 - 2025",
    image: "/diplomas/project-management.png",
  },
  {
    title: "Digital Marketing Certification",
    school: "Perez University College Accra",
    year: "2023 - 2024",
    image: "/diplomas/digital-marketing.png",
  },
  {
    title: "Leadership & Management",
    school: "Global Academy Program",
    year: "2025",
    image: "/diplomas/leadership.png",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Diplômes & Certifications
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-center text-gray-300">
          Découvrez mes formations, certifications professionnelles
          et parcours de développement personnel.
        </p>


        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="rounded-3xl bg-slate-900 p-6 shadow-xl transition hover:-translate-y-2"
            >

              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={500}
                  height={350}
                  className="h-64 w-full object-cover"
                />
              </div>


              <h3 className="mt-6 text-xl font-bold text-cyan-400">
                {certificate.title}
              </h3>

              <p className="mt-3 text-gray-300">
                {certificate.school}
              </p>

              <p className="mt-2 text-sm text-gray-400">
                {certificate.year}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}