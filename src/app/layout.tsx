import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://martialakaffou.com"),

  title:
    "Martial Akaffou | Digital Marketer | Project Manager | Fintech & Digital Innovation",

  description:
    "Martial Akaffou accompagne les entreprises et organisations dans la transformation digitale, le marketing numérique, la gestion de projets et la formation professionnelle.",

  keywords: [
    "Martial Akaffou",
    "Digital Marketer Côte d'Ivoire",
    "Project Manager Abidjan",
    "Fintech",
    "Digital Innovation",
    "Transformation digitale",
    "Formation professionnelle",
    "Global Academy Program",
  ],

  authors: [
    {
      name: "Martial Akaffou",
    },
  ],

  creator: "Martial Akaffou",

  icons: {
    icon: "/favicon.png",
  },


  openGraph: {
    title:
      "Martial Akaffou | Digital Marketer & Project Manager",

    description:
      "Découvrez le parcours, les services et les projets digitaux de Martial Akaffou.",

    url: "https://martialakaffou.com",

    siteName: "Martial Akaffou",

    locale: "fr_FR",

    type: "website",

    images: [
      {
        url: "/images/martial.jpg",
        width: 800,
        height: 800,
        alt: "Martial Akaffou",
      },
    ],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">

        {children}

      </body>

    </html>
  );
}