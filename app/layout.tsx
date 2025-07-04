import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Studio de mixage et de mastering",
  description: "Studio de mixage et de mastering",
  generator: "Studio de mixage et de mastering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Méta description qui résume le contenu de la page */}
        <meta
          name="description"
          content="Studio d'enregistrement et de mixage près d'Amiens, mastering pro"
        />
        {/* Méta pour les réseaux sociaux, Twitter ici */}
        <meta
          name="twitter:title"
          content="Studio d'enregistrement Couleur de son"
        />
        <meta
          name="twitter:description"
          content="Studio d'enregistrement et de mixage près d'Amiens"
        />
        <link rel="canonical" href="https://www.couleurdeson.fr/" />
        <link rel="stylesheet" href="styles.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@800&amp;family=Raleway:wght@400;500;600&amp;display=block"
          rel="stylesheet"
        />
        {/* Directives pour les robots d'indexation */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
