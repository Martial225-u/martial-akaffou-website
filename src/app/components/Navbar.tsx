"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-cyan-500/20 bg-slate-950/90 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">

  <Image
    src="/logo/logo.png"
    alt="Martial Akaffou Digital"
    width={55}
    height={55}
  className="object-contain"
  />

  <span className="text-2xl font-bold text-cyan-400">
    Martial Akaffou
  </span>

</Link>


        {/* MENU ORDINATEUR */}

        <div className="hidden md:flex items-center gap-8 text-white">
<Link 
href="/portfolio"
className="hover:text-cyan-400 transition"
>
Portfolio
</Link>

          <a href="#about" className="hover:text-cyan-400 transition">
            À propos
          </a>

          <a href="#services" className="hover:text-cyan-400 transition">
            Services
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projets
          </a>
<Link
  href="/cv"
  className="hover:text-cyan-400 transition"
>
  CV
</Link>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>


        <a
          href="#contact"
          className="hidden md:block rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:scale-105"
        >
          Me contacter
        </a>


        {/* BOUTON MOBILE */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-cyan-400"
        >
          ☰
        </button>


      </div>


      {/* MENU MOBILE */}

      {open && (

        <div className="md:hidden bg-slate-950 px-6 pb-6 text-white space-y-4">
          <a href="#portfolio" className="hover:text-cyan-400 transition">
  Portfolio
</a>

<a href="#blog" className="hover:text-cyan-400 transition">
  Blog
</a>

          <a href="#about" onClick={() => setOpen(false)}>
            À propos
          </a>

          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>

          <a href="#projects" onClick={() => setOpen(false)}>
            Projets
          </a>
          <Link
  href="/cv"
  onClick={() => setOpen(false)}
>
  CV
</Link>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

        </div>

      )}

    </nav>
  );
}