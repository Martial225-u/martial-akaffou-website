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
    image: "/diplomas/digital-marketing.jpg",
  },
  {
    title: "Christian Leadership Training",
    school: "Leadership & Ministry Formation",
    year: "2018",
    image: "/diplomas/leadership-chretien.jpg",
  },
];

export default function CertificateGallery() {
  return (
    <section className="bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Mes Certifications
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="rounded-3xl bg-slate-900 p-6 shadow-xl"
            >

              <Image
                src={certificate.image}
                alt={certificate.title}
                width={500}
                height={350}
                className="h-64 w-full rounded-2xl object-cover"
              />

              <h3 className="mt-5 text-xl font-bold text-cyan-400">
                {certificate.title}
              </h3>

              <p className="mt-3 text-gray-300">
                {certificate.school}
              </p>

              <p className="mt-2 text-gray-400">
                {certificate.year}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}