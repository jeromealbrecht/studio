"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mic, Settings, Zap } from "lucide-react";
import Image from "next/image";

const cabineFeature = {
  icon: Settings,
  title: "Mon équipement",
  subtitle: "Des outils fiables et adaptés à mes projets",
  paragraph:
    "Je mets à disposition plusieurs micros et préamplis, choisis pour leur polyvalence et leur fiabilité, afin de m'adapter à chaque voix ou instrument. Le monitoring Dynaudio me permet un contrôle précis du rendu sonore. L'espace est pensé pour que chacun se sente à l'aise, sans chichi, dans une ambiance simple et accueillante.",
  bulletPoints: [
    "Sony C-80 + SSL VHD PRE",
    "AT 4040, AT 2020, Aston Element",
    "Monitoring Dynaudio",
    "Chaîne de signal simple et efficace",
  ],
};

const FeatureCard = ({ item }: { item: typeof cabineFeature }) => {
  const Icon = item.icon;
  return (
    <motion.div
      className="bg-zinc-800 p-8 md:p-12 rounded-2xl shadow-lg flex flex-col max-w-full w-full border border-zinc-700 hover:border-zinc-600 transition-colors duration-300 mx-auto"
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
      }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div className="flex flex-col items-start mb-6">
        <Icon className="w-12 h-12 text-[#D4AF37] mb-4" />
        <h3 className="text-3xl md:text-4xl font-semibold text-[#D4AF37] mb-2 text-left">
          {item.title}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col justify-center">
          <p className="text-lg font-medium text-zinc-300 mb-2 text-left">
            {item.subtitle}
          </p>
          <p className="text-zinc-400 text-base leading-relaxed text-left">
            {item.paragraph}
          </p>
        </div>
        <ul className="space-y-4 text-base text-zinc-300 flex flex-col justify-center items-start">
          {item.bulletPoints.map((point, index) => (
            <li key={index} className="flex items-center align-middle">
              <CheckCircle className="w-5 h-5 text-[#D4AF37] mr-2 align-middle" />
              <span className="align-middle leading-tight">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function JeromeSpecialSection() {
  return (
    <section className="bg-[#121212] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          Ma <span className="text-[#D4AF37]">Cabine de Studio</span>
        </h2>
        <p className="text-center text-zinc-300 max-w-2xl mx-auto mb-10 text-lg">
          J'ai aménagé ma cabine avec simplicité et soin, pour accueillir tous
          types de projets dans une ambiance détendue et accessible à tous.
        </p>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/img/cabine.jpeg"
              alt="Cabine de studio professionnelle"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60" />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Studio Couleur de Son
              </h3>
              <p className="text-lg text-zinc-200">
                Un environnement professionnel pour vos projets audio
              </p>
            </div>
          </div>
        </motion.div>
        <FeatureCard item={cabineFeature} />
      </div>
    </section>
  );
}
