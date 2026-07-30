export default function CV() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-center text-5xl font-bold text-cyan-400">
          Curriculum Vitae
        </h1>

        <p className="mt-4 text-center text-gray-300">
          Yao Akaffou Jésus Martial
        </p>

<div className="mt-6 text-center text-gray-300 space-y-2">
  <p>📞 +225 07 59 21 23 22</p>
  <p>📧 akaffoumartial148@gmail.com</p>
  <p>📍 Abidjan, Côte d'Ivoire</p>
  <p>🌐 www.linkedin.com/in/akaffou-yao-022189262</p>
</div>
<section className="mt-8 rounded-3xl bg-slate-900 p-8">
  <h2 className="text-3xl font-bold text-cyan-400">
    Références
  </h2>

  <p className="mt-5 text-gray-300">
    Disponibles sur demande.
  </p>
</section>
        {/* Profil */}

        <section className="mt-12 rounded-3xl bg-slate-900 p-8">

          <h2 className="text-3xl font-bold text-cyan-400">
            Profil Professionnel
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed">
  Digital Marketer, Project Manager, spécialiste en transformation digitale et innovation Fintech. Passionné par le développement des compétences, le marketing numérique, la gestion de projets et la formation. J'accompagne les entreprises, organisations et particuliers dans leur croissance grâce à des solutions digitales innovantes.
</p>

        </section>



        {/* Formation */}

        <section className="mt-8 rounded-3xl bg-slate-900 p-8">

          <h2 className="text-3xl font-bold text-cyan-400">
            Formation & Certifications
          </h2>


          <ul className="mt-5 space-y-3 text-gray-300">

            <li>
              🎓 Gestion de projet - Global Executive College Accra
              (Cambridge UK) | 2024-2025
            </li>

            <li>
              🎓 Digital Marketing - Perez University College Accra
              | 2023-2024
            </li>

            <li>
              🎓 English Proficiency
            </li>

            <li>
              🎓 Baccalauréat A2 - Côte d'Ivoire | 2014
            </li>

          </ul>

        </section>



        {/* Expériences */}

        <section className="mt-8 rounded-3xl bg-slate-900 p-8">

          <h2 className="text-3xl font-bold text-cyan-400">
            Expériences Professionnelles
          </h2>


          <ul className="mt-5 space-y-4 text-gray-300">


            <li>
              💼 Webmate Ghana / Côte d'Ivoire  
              <br />
              Digital Transformation - VSLA Digitization
            </li>


            <li>
              💼 Hamburg International School Accra  
              <br />
              Enseignant Français-Anglais | 2024-2026
            </li>


            <li>
              💼 New Heights Academy Accra  
              <br />
              Enseignant de Français | 2023-2024
            </li>


            <li>
              💼 Get Together International School  
              <br />
              Enseignant Français-Anglais | 2025-2026
            </li>


          </ul>

        </section>



        {/* Compétences */}

        <section className="mt-8 rounded-3xl bg-slate-900 p-8">

          <h2 className="text-3xl font-bold text-cyan-400">
            Compétences
          </h2>


          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div>💻 Digital Marketing</div>

            <div>📊 Gestion de projet</div>

            <div>🚀 Transformation digitale</div>

            <div>🌍 Communication professionnelle</div>

            <div>🎓 Formation & Coaching</div>

            <div>💡 Innovation Fintech</div>

          </div>

        </section>
        <section className="mt-8 rounded-3xl bg-slate-900 p-8">
  <h2 className="text-3xl font-bold text-cyan-400">
    Langues
  </h2>

  <ul className="mt-5 space-y-3 text-gray-300">
    <li>🇫🇷 Français : Courant</li>
    <li>🇬🇧 Anglais : Professionnel</li>
  </ul>
</section>


      </div>

    </main>
  );
}