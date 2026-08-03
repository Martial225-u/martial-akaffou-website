"use client";

import Image from "next/image";

const clients = [
  { name: "Webmate", logo: "/clients/webmate.png" },
  { name: "Beyond Beans", logo: "/clients/beyondbeans.png" },
  { name: "Perez University", logo: "/clients/perez.png" },
  { name: "Global Executive College", logo: "/clients/global.png" },
  { name: "Hamburg International School", logo: "/clients/hamburg.png" },
  { name: "Get Together International", logo: "/clients/gettogether.png" },
];

export default function TrustedClients() {
  return (
    <section className="bg-slate-950 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Ils m'ont fait confiance
        </h2>

        <p className="mt-5 text-center text-gray-300">
          Des organisations, établissements et partenaires avec lesquels j'ai eu
          le plaisir de collaborer.
        </p>

        <div className="mt-12 overflow-hidden">
          <div className="flex animate-[scroll_25s_linear_infinite] gap-16 whitespace-nowrap">

            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex min-w-[180px] flex-col items-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={120}
                  className="h-24 w-auto object-contain"
                />

                <p className="mt-4 text-gray-300">
                  {client.name}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}