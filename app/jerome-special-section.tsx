"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mic, Settings, Zap } from "lucide-react";
import Image from "next/image";

const cabineFeatures = [
  {
    id: 1,
    icon: Mic,
    title: "Acoustique soignée",
    subtitle: "Un espace adapté",
    paragraph:
      "La cabine a été aménagée avec attention pour limiter les résonances et offrir de bonnes conditions d'enregistrement, sans prétention.",
    bulletPoints: [
      "Traitement acoustique simple et efficace",
      "Isolement correct pour la plupart des projets",
      "Ambiance calme et détendue",
    ],
  },
  {
    id: 2,
    icon: Settings,
    title: "Équipement accessible",
    subtitle: "Des outils pour s'adapter",
    paragraph:
      "Nous mettons à disposition plusieurs micros et préamplis, choisis pour leur polyvalence et leur fiabilité, afin de s'adapter à chaque voix ou instrument.",
    bulletPoints: [
      "Sony C-80 + SSL VHD PRE",
      "AT 4040, AT 2020, Aston Element",
      "Monitoring Dynaudio simple et précis",
    ],
  },
  {
    id: 3,
    icon: Zap,
    title: "Confort & simplicité",
    subtitle: "Un lieu à taille humaine",
    paragraph:
      "L'espace est pensé pour que chacun se sente à l'aise, sans chichi, que ce soit pour une courte prise ou une session plus longue.",
    bulletPoints: [
      "Éclairage doux et modulable",
      "Ventilation discrète",
      "Accueil chaleureux",
    ],
  },
];

const FeatureCard = ({ item }: { item: (typeof cabineFeatures)[0] }) => {
  const Icon = item.icon;
  return (
    <motion.div
      className="bg-zinc-800 p-6 md:p-8 rounded-xl shadow-lg flex flex-col h-full border border-zinc-700 hover:border-zinc-600 transition-colors duration-300"
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
      }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div className="mb-4">
        <Icon className={`w-10 h-10 md:w-12 md:h-12 text-[#D4AF37]`} />
        <h3 className="text-2xl md:text-3xl font-semibold mt-2 text-[#D4AF37]">
          {item.title}
        </h3>
        <p className="text-lg font-medium text-zinc-300 mt-1">
          {item.subtitle}
        </p>
      </div>

      <p className="text-zinc-400 text-sm leading-relaxed mb-5 line-clamp-3 h-[4.5rem]">
        {item.paragraph}
      </p>

      <ul className="space-y-2 text-sm text-zinc-300 mt-auto">
        {item.bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-4 h-4 text-[#D4AF37] mr-2 mt-0.5 shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function JeromeSpecialSection() {
  return (
    <section className="bg-[#121212] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          Notre <span className="text-[#D4AF37]">Cabine de Studio</span>
        </h2>
        <p className="text-center text-zinc-300 max-w-2xl mx-auto mb-10 text-lg">
          Nous avons aménagé notre cabine avec simplicité et soin, pour
          accueillir tous types de projets dans une ambiance détendue et
          accessible à tous.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cabineFeatures.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
