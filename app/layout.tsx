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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
