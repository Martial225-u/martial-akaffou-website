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
  title:
    "Martial Akaffou | Digital Marketer | Project Manager | Fintech & Digital Innovation",

  description:
    "Site officiel de Martial Akaffou, Digital Marketer, Project Manager et spécialiste en Fintech, transformation digitale, formation professionnelle et innovation numérique.",

  keywords: [
    "Martial Akaffou",
    "Digital Marketing",
    "Project Management",
    "Fintech",
    "Transformation Digitale",
    "Formation professionnelle",
    "Global Academy",
    "Innovation numérique",
  ],

  authors: [
    {
      name: "Martial Akaffou",
    },
  ],

  metadataBase: new URL(
    "https://martialakaffou.com"
  ),

  openGraph: {
    title:
      "Martial Akaffou | Digital Marketer & Project Manager",

    description:
      "Solutions digitales, formation et innovation technologique.",

    url:
      "https://martialakaffou.com",

    siteName:
      "Martial Akaffou Digital",

    images: [
      {
        url:
          "/images/martial.jpg",

        width: 320,
        height: 320,

        alt:
          "Martial Akaffou - Digital Marketer",
      },
    ],

    locale:
      "fr_FR",

    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Martial Akaffou | Digital Marketer",

    description:
      "Digital Marketing, Fintech, Formation et Innovation.",

    images:
      [
        "/images/martial.jpg"
      ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">

      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >

        {children}

      </body>

    </html>
  );
}