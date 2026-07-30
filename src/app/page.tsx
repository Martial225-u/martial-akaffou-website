"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";
import ProjectCard from "./components/ProjectCard";
import WhatsAppButton from "./components/WhatsAppButton";
import Certificates from "./components/Certificates";
import Testimonials from "./components/Testimonials";
import FadeIn from "./components/FadeIn";
import emailjs from "@emailjs/browser";
import { useRef, FormEvent } from "react";

export default function Home() {
  const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: FormEvent) => {
  e.preventDefault();

  if (!form.current) return;

  emailjs
 .sendForm(
  "service_rjag7lv",
  "template_261bdac",
  form.current,
  {
    publicKey: "ZbPh5CSzwhsgceblt",
  }
)
    .then(
      () => {
        alert("Message envoyé avec succès !");
        form.current?.reset();
      },
      (error) => {
        console.log("Erreur EmailJS :", error);
        alert("Erreur : " + error.text);
      }
    );
}; // ← cette accolade ferme sendEmail


return (
  <main
    suppressHydrationWarning
    className="min-h-screen bg-slate-950 text-white"
  >

      <Navbar />
      
       className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 pt-28 text-center"

       <motion.div
  animate={{
    x: [0, 80, -80, 0],
    y: [0, -60, 60, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
/>

        <div className="relative z-10 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}

            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              >
               <Image
src="/images/martial.jpg"
alt="Martial Akaffou"
width={300}
height={300}
priority
className="rounded-full mx-auto border-4 border-cyan-400 shadow-xl object-cover"
/>
              </motion.div>

            </motion.div>
          </div>
<div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
  🚀 Disponible pour des projets internationaux
</div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold md:text-7xl"
          >
            Martial Akaffou
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-2xl font-semibold text-cyan-400 md:text-4xl"
          >
            Digital Marketer | Project Manager |
            <br />
           Fintech & Digital Innovation | Évangéliste
          </motion.h2>
         <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 1 }}
  className="mx-auto mt-8 max-w-2xl text-lg text-gray-300"
>
  Bienvenue dans mon univers digital.
  Je transforme les idées en solutions innovantes.
  J'accompagne les personnes, entreprises et organisations
  dans la transformation digitale, la formation et
  la gestion de projets innovants.
</motion.p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
<a
  href="/cv/CV-Martial-Akaffou.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-cyan-500 px-8 py-3 font-bold text-slate-950 transition hover:bg-cyan-400"
>
  Télécharger mon CV
</a>

  <a
    href="#services"
    className="rounded-full border border-cyan-400 px-8 py-3 font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
  >
    Découvrir mes services
  </a>

  <a
    href="#contact"
    className="rounded-full border border-cyan-400 px-8 py-3 font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
  >
    Me contacter
  </a>

</div>



      <section>

      {/* A PROPOS */}

  
      <section
        id="about"
        className="relative bg-slate-900 px-6 py-24 overflow-hidden"
      >

        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 items-center">

          {/* Texte */}
          <div>

            <h2 className="text-4xl font-bold text-cyan-400">
              À propos de moi
            </h2>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Je suis Yao Akaffou Jésus Martial, Digital Marketer,
              Project Manager et passionné par les technologies financières
              (Fintech) et la transformation digitale.

              Avec une expérience dans l'enseignement, le marketing digital
              et la gestion de projets, j'accompagne les organisations,
              entreprises et particuliers dans leur développement
              grâce aux solutions numériques et à la formation.
            </p>

            <p className="mt-5 text-lg text-gray-300 leading-relaxed">
              Mon objectif est d'aider les individus,
              entreprises et organisations à développer
              leurs compétences, optimiser leurs projets
              et adopter les solutions digitales de demain.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-slate-950 p-5">
                <h3 className="text-2xl font-bold text-cyan-400">
                  5+
                </h3>
                <p className="text-gray-400">
                  Années d'expérience
                </p>
              </div>

              <div className="rounded-xl bg-slate-950 p-5">
                <h3 className="text-2xl font-bold text-cyan-400">
                  10+
                </h3>
                <p className="text-gray-400">
                  Projets réalisés
                </p>
              </div>

            </div>

          </div>

          {/* Carte Profil */}
          <div className="rounded-3xl bg-slate-950 p-8 shadow-xl">

            <h3 className="text-2xl font-bold">
              Mon Profil
            </h3>

            <div className="mt-6 grid gap-4">

              <div className="rounded-xl border border-cyan-500/20 bg-slate-900 p-4">
                💻 Digital Marketing
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-slate-900 p-4">
                📊 Project Management
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-slate-900 p-4">
                🚀 Fintech & Digital Innovation
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-slate-900 p-4">
                🎓 Global Academy
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-slate-900 p-4">
   Évangéliste
</div>

<div className="rounded-xl border border-cyan-500/20 bg-slate-900 p-4 transition hover:-translate-y-2 hover:border-cyan-400">

<h4 className="text-lg font-bold text-cyan-400">
🌍 Vision
</h4>

<p className="mt-2 text-gray-400">
Construire un écosystème digital qui combine
technologie, formation et impact social.
</p>

</div>

                 

                </div>
              </div>

            </div>

        

      </section>
      {/* EXPERIENCE PROFESSIONNELLE */}

<section className="py-16">

  <h2 className="text-3xl font-bold text-center text-cyan-400">
    Expérience Professionnelle
  </h2>

  <div className="mt-10 grid gap-6 md:grid-cols-3">

    <div className="rounded-2xl bg-slate-950 p-6 shadow-xl">
      <h3 className="text-xl font-bold">
        🌐 Webmate Ghana / Côte d'Ivoire
      </h3>
      <p className="mt-3 text-gray-400">
        Digital Transformation & VSLA Digitization Project
      </p>
      <p className="mt-2 text-cyan-400">
        2025 - 2026
      </p>
    </div>


    <div className="rounded-2xl bg-slate-950 p-6 shadow-xl">
      <h3 className="text-xl font-bold">
        🎓 Hamburg International School Accra
      </h3>
      <p className="mt-3 text-gray-400">
        French Teacher
      </p>
      <p className="mt-2 text-cyan-400">
        2024 - 2026
      </p>
    </div>


    <div className="rounded-2xl bg-slate-950 p-6 shadow-xl">
      <h3 className="text-xl font-bold">
        🏫 New Heights Academy Accra
      </h3>
      <p className="mt-3 text-gray-400">
        French Teacher
      </p>
      <p className="mt-2 text-cyan-400">
        2023 - 2024
      </p>
    </div>

  </div>

</section>

      {/* VISION & MISSION */}

      <FadeIn>

        <section className="bg-slate-950 px-6 py-24">

          <div className="mx-auto max-w-6xl">

            <h2 className="text-center text-4xl font-bold text-cyan-400">
              Vision & Mission
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-300">
              Une vision tournée vers l'innovation, la technologie,
              la formation et l'impact positif.
            </p>


            <div className="mt-12 grid gap-8 md:grid-cols-2">


              {/* Vision */}

              <motion.div
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 shadow-xl"
              >

                <div className="text-5xl">
                  🌍
                </div>

                <h3 className="mt-6 text-3xl font-bold text-cyan-400">
                  Ma Vision
                </h3>

                <p className="mt-4 leading-relaxed text-gray-300">
                  Construire un écosystème digital qui combine
                  technologie, formation et impact social afin
                  d'aider les individus et organisations à réussir
                  dans le monde numérique.
                </p>

              </motion.div>



              {/* Mission */}

              <motion.div
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 shadow-xl"
              >

                <div className="text-5xl">
                  🎯
                </div>

                <h3 className="mt-6 text-3xl font-bold text-cyan-400">
                  Ma Mission
                </h3>

                <p className="mt-4 leading-relaxed text-gray-300">
                  Accompagner les personnes, entreprises et
                  organisations dans leur transformation digitale
                  grâce au marketing numérique, la gestion de projets,
                  la formation et l'innovation technologique.
                </p>

              </motion.div>


            </div>

          </div>

        </section>

      </FadeIn>
      {/* GLOBAL ACADEMY PROGRAM */}

      <FadeIn>

        <section className="bg-slate-900 px-6 py-24">

          <div className="mx-auto max-w-6xl">

            <h2 className="text-center text-4xl font-bold text-cyan-400">
              Global Academy Program
            </h2>


            <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-300">
              Une plateforme de formation dédiée au développement
              des compétences professionnelles, linguistiques et digitales.
            </p>


            <div className="mt-12 grid gap-8 md:grid-cols-3">


              {/* Formation 1 */}

              <motion.div
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-cyan-500/20 bg-slate-950 p-8 shadow-xl"
              >

                <div className="text-5xl">
                  🌍
                </div>

                <h3 className="mt-6 text-2xl font-bold text-cyan-400">
                  Langues
                </h3>

                <p className="mt-4 text-gray-300">
                  Formation en français et anglais pour améliorer
                  la communication professionnelle et internationale.
                </p>

              </motion.div>



              {/* Formation 2 */}

              <motion.div
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-cyan-500/20 bg-slate-950 p-8 shadow-xl"
              >

                <div className="text-5xl">
                  💻
                </div>

                <h3 className="mt-6 text-2xl font-bold text-cyan-400">
                  Digital Skills
                </h3>

                <p className="mt-4 text-gray-300">
                  Marketing digital, outils numériques,
                  réseaux sociaux et transformation digitale.
                </p>

              </motion.div>



              {/* Formation 3 */}

              <motion.div
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-cyan-500/20 bg-slate-950 p-8 shadow-xl"
              >

                <div className="text-5xl">
                  📊
                </div>

                <h3 className="mt-6 text-2xl font-bold text-cyan-400">
                  Leadership & Management
                </h3>

                <p className="mt-4 text-gray-300">
                  Gestion de projets, leadership et développement
                  des compétences professionnelles.
                </p>

              </motion.div>


            </div>


            <div className="mt-12 text-center">

              <a
                href="#contact"
                className="inline-block rounded-full bg-cyan-500 px-8 py-3 font-bold text-slate-950 transition hover:scale-105"
              >
                Rejoindre Global Academy
              </a>

            </div>


          </div>

        </section>

      </FadeIn>
     {/* DIPLÔMES & CERTIFICATS */}

<section className="bg-slate-900 px-6 py-24 text-white">

  <div className="mx-auto max-w-6xl">

    <h2 className="text-center text-4xl font-bold text-cyan-400 mb-12">
      Diplômes & Certifications
    </h2>


    <div className="grid gap-8 md:grid-cols-2">


      <div className="rounded-3xl bg-slate-950 p-8 border border-cyan-500/20 shadow-xl">
        <h3 className="text-2xl font-bold text-cyan-400">
          ✝️ Certificat de Baptême
        </h3>

        <p className="mt-4 text-gray-300">
          Formation de base et de baptême.
        </p>

        <p className="mt-3 text-gray-400">
          📍 Abidjan — 15/10/2011
        </p>

        <p className="mt-2 text-gray-400">
          Délivré par : Prophète Elisée Kouacou
        </p>
      </div>



      <div className="rounded-3xl bg-slate-950 p-8 border border-cyan-500/20 shadow-xl">
        <h3 className="text-2xl font-bold text-cyan-400">
          🎓 Certificat Formateur des Moniteurs
        </h3>

        <p className="mt-4 text-gray-300">
          École de Dimanche - Building Leaders,
          Rebuilding Communities.
        </p>

        <p className="mt-3 text-gray-400">
          📍 Abidjan — 05 Février 2016
        </p>

        <p className="mt-2 text-gray-400">
          Délivré par : Pastor Larry Williams
        </p>
      </div>



      <div className="rounded-3xl bg-slate-950 p-8 border border-cyan-500/20 shadow-xl">
        <h3 className="text-2xl font-bold text-cyan-400">
          📖 Formation Chrétienne en Leadership
        </h3>

        <p className="mt-4 text-gray-300">
          Sujets :
          <br />
          • Connaître votre appel
          <br />
          • Comprendre votre formation
          <br />
          • Provoquer votre ordination
        </p>

        <p className="mt-3 text-gray-400">
          📅 28 Juillet 2018
        </p>

        <p className="mt-2 text-gray-400">
          Délivré par : Dr Consultant-Formateur Charlit Othniel
        </p>
      </div>



      <div className="rounded-3xl bg-slate-950 p-8 border border-cyan-500/20 shadow-xl">
        <h3 className="text-2xl font-bold text-cyan-400">
          🌍 Membership Certificate
        </h3>

        <p className="mt-4 text-gray-300">
          Perez Église Francophone
        </p>

        <p className="mt-3 text-gray-400">
          📍 Accra — 28/01/2023
        </p>

        <p className="mt-2 text-gray-400">
          Délivré par : Apôtre Francis Agyinasare
        </p>
      </div>



      <div className="rounded-3xl bg-slate-950 p-8 border border-cyan-500/20 shadow-xl md:col-span-2">

        <h3 className="text-2xl font-bold text-cyan-400">
          📚 Certificate In Enhancement Program
        </h3>

        <p className="mt-4 text-gray-300">
          Teacher In-Service Educational Training
        </p>

        <p className="mt-3 text-gray-300">
          Thème :
          <br />
          Classroom Pedagogy to Modern Theories,
          Practicals And Principles of Organizing Time,
          Space, Materials And Students In The Classroom.
        </p>

        <p className="mt-3 text-gray-400">
          📅 Février 2024
        </p>

        <p className="mt-2 text-gray-400">
          SOUTHERN BG EDUCATIONAL CONSULTANCY - SBGGHANA
        </p>

        <p className="mt-2 text-gray-400">
          Affiliation : Cambridge College, Hebron Forger,
          St. Mary Jersey, U.S.A.
        </p>

      </div>


    </div>

  </div>

</section>

{/* FORMATION ACADÉMIQUE & PROFESSIONNELLE */}

<section className="bg-slate-950 px-6 py-24 text-white">

  <div className="mx-auto max-w-6xl">

    <h2 className="text-center text-4xl font-bold text-cyan-400 mb-12">
      Formation Académique & Professionnelle
    </h2>


    <div className="grid gap-8 md:grid-cols-2">


      <div className="rounded-3xl bg-slate-900 p-8 border border-cyan-500/20 shadow-xl">

        <h3 className="text-2xl font-bold text-cyan-400">
          📊 Gestion de Projet (Project Management)
        </h3>

        <p className="mt-4 text-gray-300">
          Global Executive College Accra
        </p>

        <p className="text-gray-400">
          Affiliated to Cambridge UK
        </p>

        <p className="mt-3 text-gray-400">
          📅 2024 - 2025
        </p>

        <p className="mt-4 text-gray-300">
          Formation en gestion de projets,
          leadership, planification stratégique
          et management des équipes.
        </p>

      </div>



      <div className="rounded-3xl bg-slate-900 p-8 border border-cyan-500/20 shadow-xl">

        <h3 className="text-2xl font-bold text-cyan-400">
          📱 Digital Marketing Certification
        </h3>

        <p className="mt-4 text-gray-300">
          Perez University College Accra
        </p>

        <p className="mt-3 text-gray-400">
          📅 2023 - 2024
        </p>

        <p className="mt-4 text-gray-300">
          Formation en marketing digital,
          stratégie de marque, communication digitale
          et croissance en ligne.
        </p>

      </div>



      <div className="rounded-3xl bg-slate-900 p-8 border border-cyan-500/20 shadow-xl">

        <h3 className="text-2xl font-bold text-cyan-400">
          🎓 Baccalauréat Série A2
        </h3>

        <p className="mt-4 text-gray-300">
          Côte d'Ivoire
        </p>

        <p className="mt-3 text-gray-400">
          📅 2014
        </p>

      </div>



      <div className="rounded-3xl bg-slate-900 p-8 border border-cyan-500/20 shadow-xl">

        <h3 className="text-2xl font-bold text-cyan-400">
          🌍 Enseignement Français & Anglais
        </h3>

        <p className="mt-4 text-gray-300">
          Expérience internationale dans l'enseignement
          au Ghana.
        </p>

        <p className="mt-3 text-gray-400">
          Français, anglais, pédagogie et accompagnement
          des apprenants.
        </p>

      </div>


    </div>

  </div>

</section>
<Certificates />
      {/* COMPETENCES */}

      <section className="bg-slate-950 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-bold text-cyan-400">
            Mes Compétences
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-300">
            Mon expertise dans le digital, la gestion de projets,
            la technologie et la formation.
          </p>


          <div className="mt-12 grid gap-8 md:grid-cols-2">


            {/* Skill 1 */}
            <div className="rounded-2xl bg-slate-900 p-6">

              <div className="flex justify-between">
                <h3 className="font-bold">
                  💻 Digital Marketing
                </h3>
                <span className="text-cyan-400">
                  90%
                </span>
              </div>

              <div className="mt-4 h-3 rounded-full bg-slate-800">

                <div className="h-3 w-[90%] rounded-full bg-cyan-400">
                </div>

              </div>

            </div>



            {/* Skill 2 */}
            <div className="rounded-2xl bg-slate-900 p-6">

              <div className="flex justify-between">
                <h3 className="font-bold">
                  📊 Project Management
                </h3>
                <span className="text-cyan-400">
                  85%
                </span>
              </div>

              <div className="mt-4 h-3 rounded-full bg-slate-800">

                <div className="h-3 w-[85%] rounded-full bg-cyan-400">
                </div>

              </div>

            </div>



            {/* Skill 3 */}
            <div className="rounded-2xl bg-slate-900 p-6">

              <div className="flex justify-between">
                <h3 className="font-bold">
                  🚀 Fintech Engineer Fintech & Digital Innovation
                </h3>
                <span className="text-cyan-400">
                  80%
                </span>
              </div>

              <div className="mt-4 h-3 rounded-full bg-slate-800">

                <div className="h-3 w-[80%] rounded-full bg-cyan-400">
                </div>

              </div>

            </div>



            {/* Skill 4 */}
            <div className="rounded-2xl bg-slate-900 p-6">

              <div className="flex justify-between">
                <h3 className="font-bold">
                  🎓 Formation & Leadership
                </h3>
                <span className="text-cyan-400">
                  95%
                </span>
              </div>

              <div className="mt-4 h-3 rounded-full bg-slate-800">

                <div className="h-3 w-[95%] rounded-full bg-cyan-400">
                </div>

              </div>

            </div>


          </div>

        </div>

      </section>

     {/* SERVICES */}

<FadeIn>

<section
id="services"
className="bg-slate-950 px-6 py-24 text-center"
>

<div className="mx-auto max-w-6xl">

<h2 className="text-4xl font-bold text-cyan-400">
Mes Services
</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
J'accompagne les entreprises, organisations et particuliers
dans leurs projets digitaux.
</p>


<div className="mt-12 grid gap-8 md:grid-cols-4">


<ServiceCard
title="Digital Marketing"
icon="💻"
description="Stratégies digitales, réseaux sociaux et croissance en ligne."
/>


<ServiceCard
title="Project Management"
icon="📊"
description="Planification, organisation et pilotage de projets innovants."
/>


<ServiceCard
title="Global Academy"
icon="🎓"
description="Formation professionnelle, langues et développement des compétences."
/>


<ServiceCard
title="Transformation Digitale"
icon="🌍"
description="Accompagnement des organisations vers les solutions numériques."
/>


</div>

</div>

</section>

</FadeIn>
           

      {/* PROJECTS */}

      <FadeIn>

        <section
          id="projects"
          className="bg-slate-900 px-6 py-24 text-center"
        >

          <h2 className="text-4xl font-bold text-cyan-400">
            Mes Projets
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Découvrez mes réalisations dans le digital,
            la formation et l'innovation technologique.
          </p>


          <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">


            <ProjectCard
              icon="🌐"
              title="Digital Transformation"
              description="Solutions digitales pour accompagner les entreprises et organisations vers une nouvelle génération numérique." />


            <ProjectCard
              icon="🎓"
              title="Global Academy Program"
              description="Une plateforme de formation destinée au développement des compétences professionnelles et linguistiques." />


            <ProjectCard
              icon="🚀"
              title="Fintech & Innovation"
              description="Exploration des technologies financières modernes et création de solutions digitales innovantes." />


          </div>


        </section>

      </FadeIn>


      <Testimonials />
    
     {/* Informations Contact */}

<div className="space-y-6">

  <div className="flex items-center gap-4 rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
    <Mail className="h-8 w-8 text-cyan-400" />

    <div>
      <h3 className="text-lg font-semibold text-white">
        Email
      </h3>

      <p className="text-gray-300">
        akaffoumartial148@gmail.com
      </p>
    </div>
  </div>


  <div className="flex items-center gap-4 rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
    <Phone className="h-8 w-8 text-cyan-400" />

    <div>
      <h3 className="text-lg font-semibold text-white">
        Téléphone
      </h3>

      <p className="text-gray-300">
        +225 07 59 21 23 22
      </p>
    </div>
  </div>


  <div className="flex items-center gap-4 rounded-2xl border border-cyan-500/20 bg-slate-900 p-6">
    <MapPin className="h-8 w-8 text-cyan-400" />

    <div>
      <h3 className="text-lg font-semibold text-white">
        Localisation
      </h3>

      <p className="text-gray-300">
        Abidjan, Côte d'Ivoire
      </p>
    </div>
  </div>


  <a
    href="https://wa.me/2250759212322"
    target="_blank"
    className="flex items-center justify-center gap-3 rounded-xl bg-green-500 px-6 py-4 font-semibold text-white transition hover:bg-green-400"
  >
    <MessageCircle className="h-6 w-6" />
    Me contacter sur WhatsApp
  </a>

</div>



              {/* Formulaire */}


              <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 shadow-xl">


                <h3 className="text-2xl font-bold text-cyan-400">
                  Envoyer un message
                </h3>


         <form
  ref={form}
  onSubmit={sendEmail}
  className="mt-8 space-y-5"
>

  <input
    type="text"
    name="name"
    placeholder="Votre nom"
    required
    className="w-full rounded-xl bg-slate-950 px-5 py-3 text-white outline-none border border-slate-700 focus:border-cyan-400"
  />


  <input
    type="email"
    name="email"
    placeholder="Votre email"
    required
    className="w-full rounded-xl bg-slate-950 px-5 py-3 text-white outline-none border border-slate-700 focus:border-cyan-400"
  />


  <input
    type="text"
    name="subject"
    placeholder="Sujet"
    required
    className="w-full rounded-xl bg-slate-950 px-5 py-3 text-white outline-none border border-slate-700 focus:border-cyan-400"
  />


  <textarea
    name="message"
    placeholder="Votre message"
    rows={5}
    required
    className="w-full rounded-xl bg-slate-950 px-5 py-3 text-white outline-none border border-slate-700 focus:border-cyan-400"
  />


  <button
    type="submit"
    className="w-full rounded-full bg-cyan-500 px-8 py-3 font-bold text-slate-950 transition hover:scale-105"
  >
    Envoyer le message
  </button>

</form>


            

          </div>


        </section>

     
     



  

    <div className="mt-10 grid gap-6 md:grid-cols-3">

      <div className="rounded-xl bg-slate-900 p-6">
        <h3 className="text-xl font-bold">📞 Téléphone</h3>
        <p className="mt-3 text-gray-400">
          +225 07 59 21 23 22
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 p-6">
        <h3 className="text-xl font-bold">📧 Email</h3>
        <p className="mt-3 text-gray-400">
          akaffoumartial148@gmail.com
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 p-6">
        <h3 className="text-xl font-bold">💬 WhatsApp</h3>
        <WhatsAppButton />
      </div>

    </div>

    


{/* Pied de page */}

<footer className="bg-slate-950 border-t border-cyan-500/20 py-12">

  <div className="mx-auto max-w-6xl px-6">

    <div className="flex justify-center gap-6">

      <a
        href="https://www.linkedin.com/in/akaffou-yao-022189262"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="rounded-full bg-slate-900 p-4 text-gray-400 transition hover:bg-cyan-500 hover:text-white"
      >
        <FaLinkedin size={30} />
      </a>


      <a
        href="https://www.facebook.com/akaffou.jesusmartial"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="rounded-full bg-slate-900 p-4 text-gray-400 transition hover:bg-blue-600 hover:text-white"
      >
        <FaFacebook size={30} />
      </a>


      <a
        href="https://wa.me/2250759212322"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="rounded-full bg-slate-900 p-4 text-gray-400 transition hover:bg-green-500 hover:text-white"
      >
        <FaWhatsapp size={30} />
      </a>

    </div>


    <p className="mt-8 text-center text-sm text-gray-500">
      © 2026 Martial Akaffou. Tous droits réservés.
    </p>

  </div>

</footer>




{/* Bouton WhatsApp flottant */}

<a
  href="https://wa.me/2250759212322"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contacter Martial Akaffou sur WhatsApp"
  className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition duration-300 hover:scale-110"
>
  <FaWhatsapp size={34} />
</a>

</main>
);
}