export default function Certifications() {
  const certifications = [
    {
      title: "Digital Marketing",
      school: "Perez University College - Ghana",
      year: "2023 - 2024",
    },
    {
      title: "Project Management",
      school: "Global Executive College - Cambridge UK",
      year: "2024 - 2025",
    },
    {
      title: "Fintech & Digital Innovation",
      school: "Formation professionnelle",
      year: "2025 - Aujourd'hui",
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Certifications & Formations
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-slate-300">
          Un parcours orienté vers le digital, la gestion de projet
          et l’innovation technologique.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {certifications.map((certification, index) => (
            <div
              key={index}
              className="rounded-2xl border border-cyan-500/20 bg-slate-950 p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {certification.title}
              </h3>

              <p className="mt-4 text-slate-300">
                {certification.school}
              </p>

              <p className="mt-3 text-sm text-slate-400">
                {certification.year}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}