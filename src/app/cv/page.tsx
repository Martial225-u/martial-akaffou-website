import Image from "next/image";
import Link from "next/link";

export default function CVPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}

      <section className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 py-20">

        <div className="mx-auto max-w-6xl px-6">

          <div className="grid items-center gap-10 md:grid-cols-2">

            <div>

              <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300">
                Curriculum Vitae
              </span>

              <h1 className="mt-6 text-5xl font-bold text-cyan-400">
                Yao Akaffou Jésus Martial
              </h1>

              <p className="mt-6 text-xl text-gray-300">
                Digital Marketer • Project Manager
                <br />
                Fintech & Digital Innovation • Évangéliste
              </p>

              <div className="mt-8 space-y-3 text-gray-300">

                <p>📞 +225 07 59 21 23 22</p>

                <p>📧 akaffoumartial148@gmail.com</p>

                <p>📍 Abidjan, Côte d'Ivoire</p>

              </div>

              <div className="mt-10 flex gap-4">

                <a
                  href="/cv/CV-Martial-Akaffou.pdf"
                  target="_blank"
                  className="rounded-full bg-cyan-500 px-6 py-3 font-bold text-slate-950"
                >
                  Télécharger PDF
                </a>

                <Link
                  href="/"
                  className="rounded-full border border-cyan-400 px-6 py-3 text-cyan-400"
                >
                  Retour au site
                </Link>

              </div>

            </div>

            <div className="flex justify-center">

              <Image
                src="/images/martial.jpg"
                alt="Martial Akaffou"
                width={330}
                height={330}
                className="rounded-full border-4 border-cyan-400 shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* PROFIL */}

      <section className="py-20">

        <div className="mx-auto max-w-6xl px-6">

          <div className="rounded-3xl bg-slate-900 p-10">

            <h2 className="text-3xl font-bold text-cyan-400">
              Profil Professionnel
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Digital Marketer, Project Manager et spécialiste de la
              transformation digitale avec une expérience internationale dans
              l'enseignement, le marketing numérique, la gestion de projets et
              l'innovation Fintech. J'accompagne les entreprises,
              organisations et particuliers dans leur croissance grâce aux
              solutions numériques, à la formation et au développement des
              compétences.
            </p>

          </div>

        </div>

      </section>

      {/* EXPERIENCES */}

      <section className="py-10">

        <div className="mx-auto max-w-6xl px-6">

          <h2 className="mb-10 text-center text-4xl font-bold text-cyan-400">
            Expériences Professionnelles
          </h2>

          <div className="space-y-8">

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Webmate Ghana / Côte d'Ivoire
              </h3>

              <p className="mt-2 text-cyan-400">
                Digital Transformation • VSLA Digitization
              </p>

              <p className="mt-4 text-gray-300">
                Participation à la digitalisation des groupes d'épargne
                communautaires et à des projets de transformation digitale.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Hamburg International School
              </h3>

              <p className="mt-2 text-cyan-400">
                French Teacher (2024–2026)
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                New Heights Academy
              </h3>

              <p className="mt-2 text-cyan-400">
                Enseignant de Français (2023–2024)
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Get Together International School
              </h3>

              <p className="mt-2 text-cyan-400">
                Enseignant Français-Anglais (2025–2026)
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FORMATIONS */}

      <section className="py-20">

        <div className="mx-auto max-w-6xl px-6">

          <h2 className="mb-10 text-center text-4xl font-bold text-cyan-400">
            Formations
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Gestion de Projet
              </h3>

              <p className="mt-3 text-gray-300">
                Global Executive College Accra
              </p>

              <p className="text-cyan-400">
                2024–2025
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Digital Marketing
              </h3>

              <p className="mt-3 text-gray-300">
                Perez University College
              </p>

              <p className="text-cyan-400">
                2023–2024
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                Baccalauréat Série A2
              </h3>

              <p className="mt-3 text-gray-300">
                Côte d'Ivoire
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">
                English Proficiency
              </h3>

              <p className="mt-3 text-gray-300">
                Niveau professionnel
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* COMPETENCES */}

      <section className="pb-24">

        <div className="mx-auto max-w-6xl px-6">

          <h2 className="mb-10 text-center text-4xl font-bold text-cyan-400">
            Compétences
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-xl bg-slate-900 p-6">
              💻 Digital Marketing
            </div>

            <div className="rounded-xl bg-slate-900 p-6">
              📊 Project Management
            </div>

            <div className="rounded-xl bg-slate-900 p-6">
              🚀 Fintech
            </div>

            <div className="rounded-xl bg-slate-900 p-6">
              🌍 Transformation Digitale
            </div>

            <div className="rounded-xl bg-slate-900 p-6">
              🎓 Formation
            </div>

            <div className="rounded-xl bg-slate-900 p-6">
              🇬🇧 Anglais Professionnel
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}