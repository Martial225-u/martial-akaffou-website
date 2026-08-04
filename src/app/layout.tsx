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

  title: {
    default: "Martial Akaffou | Digital Marketer | Project Manager | Fintech Expert",
    template: "%s | Martial Akaffou",
  },

  description:
    "Site officiel de Martial Akaffou. Expert en Digital Marketing, Project Management, Transformation Digitale, Fintech & Innovation. Consultant, Formateur et Évangéliste basé à Abidjan.",

  keywords: [
    "Martial Akaffou",
    "Digital Marketing",
    "Project Management",
    "Fintech",
    "Transformation Digitale",
    "Consultant Digital",
    "Marketing Digital",
    "Formation",
    "Global Academy",
    "Innovation",
    "Abidjan",
    "Côte d'Ivoire",
    "Afrique",
  ],

  authors: [{ name: "Martial Akaffou" }],

  creator: "Martial Akaffou",

  publisher: "Martial Akaffou",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Martial Akaffou | Digital Marketer | Project Manager",
    description:
      "Transformation digitale • Marketing • Fintech • Formation • Innovation",
    url: "https://martialakaffou.com",
    siteName: "Martial Akaffou",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/martial.jpg",
        width: 1200,
        height: 630,
        alt: "Martial Akaffou",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Martial Akaffou | Digital Marketing",
    description:
      "Consultant Digital • Project Manager • Fintech & Innovation",
    images: ["/martial.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}