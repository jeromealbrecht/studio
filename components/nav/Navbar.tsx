"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Pour surligner le lien actif

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/tarifs", label: "Tarifs" },
    // Ajoute d'autres liens ici si besoin
  ];

  return (
    <nav className="bg-zinc-900/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-[#d4af37] hover:text-white transition-colors"
            >
              Studio Couleur de Son
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${
                      pathname === item.href
                        ? "bg-[#d4af37] text-black"
                        : "text-zinc-300 hover:bg-zinc-700 hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Bouton menu mobile (optionnel) */}
        </div>
      </div>
      {/* Menu mobile (optionnel, à activer si besoin) */}
    </nav>
  );
}
