export default function Certificates() {
  const certificates = [
    {
      title: "Gestion de Projet",
      school: "Global Executive College Accra",
      year: "2024 - 2025",
      image: "/certificates/gestion-projet.jpg",
    },
    {
      title: "Digital Marketing",
      school: "Perez University College Accra",
      year: "2023 - 2024",
      image: "/certificates/digital-marketing.jpg",
    },
    {
      title: "Leadership & Formation",
      school: "Formation professionnelle",
      year: "2018",
      image: "/certificates/leadership.jpg",
    },
  ];

  return (
    <section className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Mes Certifications
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-300">
          Découvrez mes formations professionnelles, certifications et parcours
          de développement des compétences.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="rounded-3xl border border-cyan-500/20 bg-slate-950 p-6 shadow-xl transition hover:-translate-y-2"
            >

              <div className="h-56 overflow-hidden rounded-xl bg-white">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-contain"
                />
              </div>


              <h3 className="mt-6 text-xl font-bold text-cyan-400">
                {certificate.title}
              </h3>


              <p className="mt-3 text-gray-300">
                {certificate.school}
              </p>


              <p className="mt-2 text-gray-400">
                📅 {certificate.year}
              </p>


              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                Voir le certificat
              </a>


            </div>
          ))}

        </div>

      </div>
    </section>
  );
}