"use client";

import { motion } from "framer-motion";

const certificates = [
  {
    title: "CERTIFICAT DE BAPTÊME",
    detail:
      "Formation de base et de baptême. Délivré par le Prophète Elisée Kouacou.",
    date: "Abidjan - 15/10/2011",
  },

  {
    title: "CERTIFICAT FORMATEUR DES MONITEURS",
    detail:
      "École de Dimanche - Building Leaders, Rebuilding Communities. Délivré par Pastor Larry Williams.",
    date: "Abidjan - 05 Février 2016",
  },

  {
    title: "CERTIFICAT DE FORMATION CHRÉTIENNE EN LEADERSHIP",
    detail:
      "Sujets : Connaître votre appel - Comprendre votre formation - Provoquer votre ordination. Délivré par Docteur Consultant-Formateur Charlit Othniel.",
    date: "28 Juillet 2018",
  },

  {
    title: "MEMBERSHIP CERTIFICATE",
    detail:
      "Perez Église Francophone. Délivré par l'Apôtre Francis Agyinasare.",
    date: "Accra - 28/01/2023",
  },

  {
    title: "CERTIFICATE IN ENHANCEMENT PROGRAM",
    detail:
      "Teacher In-Service Educational Training. Classroom Pedagogy to Modern Theories. Délivré par SOUTHERN BG EDUCATIONAL CONSULTANCY - SBGGHANA. Affiliation Cambridge College, Hebron Forger, St. Mary Jersey, U.S.A.",
    date: "Février 2024",
  },
];


export default function Certificates() {

  return (

<section className="bg-slate-950 px-6 py-24 text-white">

<div className="mx-auto max-w-6xl">

<h2 className="text-center text-4xl font-bold text-yellow-400">
  Diplômes & Certificats
</h2>


<p className="mx-auto mt-6 max-w-3xl text-center text-gray-300">
  Mes formations, certifications professionnelles et parcours
  spirituel dans le leadership et la transmission.
</p>


<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">


{certificates.map((certificate,index)=>(

<motion.div

key={index}

whileHover={{
y:-10
}}

transition={{
duration:0.3
}}

className="rounded-3xl border-2 border-yellow-400/50 bg-slate-900 p-8 shadow-xl"

>


<div className="text-4xl">
📜
</div>


<h3 className="mt-5 text-xl font-bold text-yellow-400">
{certificate.title}
</h3>


<p className="mt-4 text-gray-300 leading-relaxed">
{certificate.detail}
</p>


<p className="mt-4 italic text-gray-400">
{certificate.date}
</p>


</motion.div>

))}


</div>

</div>

</section>

  );
}