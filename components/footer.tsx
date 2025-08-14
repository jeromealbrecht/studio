"use client";

import Link from "next/link";
import { ArrowUp, Instagram, Youtube, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const companyLinks = [
    { href: "/", label: "Accueil" },
    { href: "/portfolio", label: "Références" },
    { href: "/videogame", label: "Sound Design JV" },
  ];

  const servicesLinks = [
    { href: "/tarifs", label: "Nos Tarifs" },
    { href: "mailto:ecrire@couleurdeson.fr", label: "Contact" },
    { href: "#devis", label: "Devis Gratuit" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/couleurdeson",
      label: "Instagram",
      icon: Instagram,
    },
    {
      href: "https://www.youtube.com/@ExomOfficiel",
      label: "YouTube",
      icon: Youtube,
    },
    { href: "mailto:ecrire@couleurdeson.fr", label: "Email", icon: Mail },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Top section with links */}
      <div className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                Studio
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-[#d4af37] transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {servicesLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-[#d4af37] transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                Suivez-nous
              </h3>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("mailto:") ? "_self" : "_blank"
                      }
                      rel={
                        link.href.startsWith("mailto:")
                          ? ""
                          : "noopener noreferrer"
                      }
                      className="text-white hover:text-[#d4af37] transition-colors duration-200 text-sm flex items-center"
                    >
                      <link.icon className="w-4 h-4 mr-2" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Statement Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight">
            NOTRE
            <br />
            <span className="text-[#d4af37]">VISION</span>
          </h2>
          <p className="text-zinc-400 mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Transformer chaque projet audio en une expérience mémorable. Allier
            expertise technique et sensibilité artistique pour donner vie à vos
            idées sonores.
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()}, Studio Couleur de Son. Tous droits
              réservés.
            </p>
            {showBackToTop && (
              <button
                onClick={scrollToTop}
                className="text-zinc-400 hover:text-[#d4af37] transition-colors duration-200 text-sm flex items-center mt-4 sm:mt-0"
                aria-label="Retour en haut de page"
              >
                Retour en haut <ArrowUp className="w-4 h-4 ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
