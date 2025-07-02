"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react"; // Corrected import names
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "ACCUEIL" },
    { href: "/portfolio", label: "RÉFÉRENCES" },
    { href: "/tarifs", label: "TARIFS" },
    { href: "/videogame", label: "JEUX VIDÉO" },
    { href: "/reservation", label: "RÉSERVATION" },
  ];

  // Define your site's primary yellow color for active links, or another highlight color
  const customYellow = "#D4AF37";
  const activeLinkColor = "text-yellow-400"; // fallback Tailwind yellow
  const inactiveLinkColor = "text-white";
  const hoverLinkColor = "text-yellow-400";

  // Close mobile menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // Corrected dependency: only pathname, as isMobileMenuOpen is part of the condition

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, height: 0 }, // Start from slightly above and height 0
    visible: {
      opacity: 1,
      y: 0,
      height: "auto", // Animate to auto height
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      height: 0, // Animate to height 0
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav className="bg-zinc-900 sticky top-0 z-50">
      {" "}
      {/* Ensure z-index is high */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-16 md:h-20 relative">
          {" "}
          {/* Added relative for absolute positioning context if needed */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden">
            {" "}
            {/* Positioned absolutely for mobile */}
            <Link
              href="/"
              className="text-xl font-light text-white tracking-widest hover:text-zinc-300 transition-colors"
            >
              Studio Couleur de Son
            </Link>
          </div>
          <div className="hidden md:flex items-baseline space-x-6 md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-1 py-2 text-sm md:text-base font-semibold uppercase tracking-wider transition-colors duration-150
                  ${
                    pathname === item.href ? activeLinkColor : inactiveLinkColor
                  }
                  hover:${hoverLinkColor}
                `}
                style={
                  pathname === item.href ? { color: customYellow } : undefined
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = customYellow;
                }}
                onMouseLeave={(e) => {
                  if (pathname === item.href) {
                    e.currentTarget.style.color = customYellow;
                  } else {
                    e.currentTarget.style.color = "";
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden">
            {" "}
            {/* Positioned absolutely for mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-10" // Ensure button is on top
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-panel" // Changed ID for clarity
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isMobileMenuOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-panel" // Changed ID
            className="md:hidden bg-zinc-900 border-t border-zinc-700 shadow-lg w-full overflow-hidden" // Added overflow-hidden for height animation
            // Removed absolute positioning from here, it will flow naturally below the navbar content
            variants={{
              hidden: { opacity: 0, y: -20, height: 0 },
              visible: {
                opacity: 1,
                y: 0,
                height: "auto",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                },
              },
              exit: {
                opacity: 0,
                y: -20,
                height: 0,
                transition: { duration: 0.3 },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium uppercase tracking-wider transition-colors duration-150
                  ${
                    pathname === item.href
                      ? activeLinkColor + " bg-zinc-800"
                      : inactiveLinkColor
                  }
                  hover:${hoverLinkColor} hover:bg-zinc-800
                `}
                  style={
                    pathname === item.href ? { color: customYellow } : undefined
                  }
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = customYellow;
                  }}
                  onMouseLeave={(e) => {
                    if (pathname === item.href) {
                      e.currentTarget.style.color = customYellow;
                    } else {
                      e.currentTarget.style.color = "";
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
