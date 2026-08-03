"use client";

import CountUp from "react-countup";

const stats = [
  {
    number: 5,
    suffix: "+",
    title: "Années d'expérience",
  },
  {
    number: 10,
    suffix: "+",
    title: "Projets réalisés",
  },
  {
    number: 100,
    suffix: "+",
    title: "Personnes formées",
  },
  {
    number: 6,
    suffix: "+",
    title: "Partenaires",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-cyan-500/20 bg-slate-950 p-8 text-center shadow-xl"
            >
              <h2 className="text-5xl font-extrabold text-cyan-400">
                <CountUp
                  end={item.number}
                  duration={3}
                />
                {item.suffix}
              </h2>

              <p className="mt-4 text-gray-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}