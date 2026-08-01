import Image from "next/image";

const certifications = [
  {
    title: "International Diploma",
    subtitle: "Project Leadership & Management",
    school: "Cambridge International College",
    year: "2026",
    image: "/certificates/cambridge-project-management.jpg",
  },
  {
    title: "Certificate in Digital Marketing",
    subtitle: "Distinction",
    school: "Perez University College",
    year: "2023",
    image: "/certificates/digital-marketing.jpg",
  },
  {
    title: "Certificate of Proficiency",
    subtitle: "English Language",
    school: "Perez University College",
    year: "2023",
    image: "/certificates/english-language.jpg",
  },
  {
    title: "Leadership Training",
    subtitle: "Afrique en Mission",
    school: "Leadership Program",
    year: "2018",
    image: "/certificates/leadership.jpg",
  },
  {
    title: "Baccalauréat Série A2",
    subtitle: "République de Côte d'Ivoire",
    school: "Enseignement Secondaire",
    year: "2014",
    image: "/certificates/baccalaureat.jpg",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Diplômes & Certifications
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-slate-300">
          Mon parcours académique et professionnel dans les domaines du
          marketing digital, de la gestion de projet, du leadership et de
          l'innovation.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {certifications.map((certification, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-slate-800 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-cyan-500/30"
            >
              <Image
                src={certification.image}
                alt={certification.title}
                width={600}
                height={400}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold text-white">
                  {certification.title}
                </h3>

                <p className="mt-2 text-cyan-400">
                  {certification.subtitle}
                </p>

                <p className="mt-3 text-slate-300">
                  {certification.school}
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  {certification.year}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}