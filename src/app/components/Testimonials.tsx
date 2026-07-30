"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Entreprise Digitale",
    role: "Partenaire",
    message:
      "Martial nous a accompagné dans notre transformation digitale avec professionnalisme et vision.",
    stars: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Apprenant Global Academy",
    role: "Formation",
    message:
      "Une excellente approche pédagogique. Les formations sont pratiques et orientées résultats.",
    stars: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Client Digital",
    role: "Projet Web",
    message:
      "Une collaboration efficace avec une vraie expertise en marketing digital et gestion de projet.",
    stars: "⭐⭐⭐⭐⭐",
  },
];


export default function Testimonials() {

return (

<section className="bg-slate-950 px-6 py-24">


<h2 className="text-center text-4xl font-bold text-cyan-400">
  Témoignages
</h2>


<p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-300">
  Quelques retours sur mes collaborations et accompagnements.
</p>



<div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">


{testimonials.map((item,index)=>(

<motion.div
key={index}
layout
initial={{
  opacity:0,
  y:40
}}
whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6,
delay:index*0.2
}}

viewport={{
  once: true,
  amount: 0.3
}}

className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 shadow-xl"

>


<div className="text-2xl">
{item.stars}
</div>


<p className="mt-5 text-gray-300 leading-relaxed">
"{item.message}"
</p>


<h3 className="mt-6 text-xl font-bold text-cyan-400">
{item.name}
</h3>


<p className="text-gray-400">
{item.role}
</p>


</motion.div>


))}


</div>


</section>

);

}