"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import JeromeSpecialSection from "./jerome-special-section";

const sections = [
  {
    title: "Production Musicale",
    text: "Arrangements, mixage, mastering analogique. Des maquettes aux morceaux finalisés, nous accompagnons les artistes dans leur vision musicale.",
    images: [
      {
        src: "/img/production.jpeg",
        alt: "Musician composing music in a studio",
      },
    ],
  },
  {
    title: "Sound Design / Game",
    text: "Ambiances immersives, bruitages percussifs, mixage précis pour une expérience sonore unique. Nous collaborons avec des studios de jeu pour créer des paysages sonores mémorables.",
    images: [
      {
        src: "/img/tycoon.png",
        alt: "Game studio interior for sound design",
      },
      {
        src: "/placeholder.svg?width=400&height=300",
        alt: "Audio mixing console for sound design",
      },
    ],
  },
  {
    title: "Voix Off / TV",
    text: "Prise de voix professionnelle, nettoyage, mixage broadcast-ready. Documentaires, publicités, e-learning ou doublage.",
    images: [
      {
        src: "/img/voixoff.png",
        alt: "Voice recording booth",
      },
    ],
  },
  {
    title: "Composition",
    text: "Musique sur-mesure pour film, publicité ou marque. Création émotionnelle, direction artistique adaptée à chaque message.",
    images: [
      {
        src: "/img/composition.jpg",
        alt: "Composer's desk with equipment",
      },
    ],
  },
  {
    title: "Mastering",
    text: "Optimisation finale de vos projets. Équilibre, volume, spatialisation : un rendu professionnel, prêt à la diffusion.",
    images: [
      {
        src: "/img/mastering-eq.png",
        alt: "Mastering equalizer plugin interface",
      },
    ],
  },
];

export default function StudioSections() {
  return (
    <section className="bg-[#121212] text-white py-12 md:py-16 px-4 sm:px-6 md:px-16">
      <h1 className="text-white text-4xl md:text-6xl font-semibold text-center mb-2 md:mb-3 pt-4 md:pt-6 pb-2 md:pb-3">
        <strong>Studio d&apos;enregistrement</strong> près d&apos;
        <strong className="text-[#D4AF37]">Amiens</strong>
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 md:mb-4">
        Couleur de son
      </h2>
      <p className="text-gray-300 text-center text-lg md:text-xl">
        Production musicale - Mixage sonore - Mastering - Composition - Voix off
      </p>

      {/* Header with background video */}
      <header className="relative w-full h-[240px] md:h-[360px] flex items-center justify-center mt-8 mb-8 md:mt-12 md:mb-12 overflow-hidden rounded-xl">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="/videoStudio.webm" type="video/webm" />
          <source src="/videoStudio.mp4" type="video/mp4" />
          {/* Fallback pour les navigateurs qui ne supportent pas la vidéo */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
            <p className="text-white text-lg">Studio Couleur de Son</p>
          </div>
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10" />
        {/* Optionnel : <div className="relative z-20 text-white text-2xl md:text-4xl font-bold">Votre slogan ici</div> */}
      </header>

      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-24 mt-24 md:mb-24 md:mt-24">
        Découvrez notre univers
      </h2>

      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } ${index === 0 ? "mt-8 md:mt-12" : "mt-12 md:mt-20"}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          <div className="md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
            <h2
              className="text-3xl md:text-5xl font-light"
              style={{ color: "#D4AF37" }}
            >
              {section.title}
            </h2>
            <p className="text-base md:text-lg text-gray-300">{section.text}</p>
            {/* <button className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 hover:bg-[#D4AF37] hover:text-white transition rounded-md text-sm md:text-base">
              En savoir +
            </button> */}
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            {section.images[0] && (
              <div className="relative w-full aspect-video bg-[#121212]">
                <Image
                  src={section.images[0].src || "/placeholder.svg"}
                  alt={section.images[0].alt}
                  fill
                  className="rounded-lg shadow-lg object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            )}
          </div>
        </motion.div>
      ))}
      <JeromeSpecialSection />
    </section>
  );
}
