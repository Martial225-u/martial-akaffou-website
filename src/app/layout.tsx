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
  metadataBase: new URL("https://martialakaffou.com" ),
    openGraph: {
      images: [
  {
    url: "/images/martial.jpg",
    width: 800,
    height: 800,
    alt: "Martial Akaffou",
  },
],
    title:
      "Martial Akaffou | Digital Marketer - Project Manager - Fintech Engineer",
    description:
      "Découvrez le parcours, les projets et les services digitaux de Martial Akaffou.",
    url: "https://martialakaffou.com",
    siteName: "Martial Akaffou",
    locale: "fr_FR",
    type: "website",
  },
  description:
    "Découvrez Martial Akaffou, Digital Marketer, Project Manager et Fintech Engineer. Expert en transformation digitale, gestion de projets, formation et innovation technologique.",

  icons: {
    icon: "/favicon.png",
  },

  keywords: [
    "Martial Akaffou",
    "Digital Marketing",
    "Project Management",
    "Fintech",
    "Transformation Digitale",
    "Formation professionnelle",
    "Global Academy",
  ],

  authors: [
    {
      name: "Martial Akaffou",
    },
  ],

  creator: "Martial Akaffou",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
