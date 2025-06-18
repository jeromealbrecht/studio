"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mic, Brain, Rocket } from "lucide-react"; // Using Lucide icons for bullet points and aspects

const jeromeAspects = [
  {
    id: 1,
    icon: Mic,
    title: "La Voix",
    subtitle: "Clarté, émotion et précision",
    paragraph:
      "Allie matériel haut de gamme et sensibilité artistique pour des mixages qui servent autant le message que la voix.",
    redFlagText:
      "Peut passer une heure à égaliser un détail que seuls les chauves-souris et Jérôme entendent.",
    accentColor: "text-[#3B82F6]", // Bleu pour la voix/la clarté
    bulletPoints: [
      "Plébiscité par des pros de la voix (Amandine A., etc.)",
      "Chaîne de mastering analogique + numérique pour chaleur et précision",
      "Mixages clairs et immersifs sur tous les supports",
    ],
  },
  {
    id: 2,
    icon: Brain,
    title: "Le Cerveau",
    subtitle: "Bien plus qu'une exécution : une vision",
    paragraph:
      "Jérôme apporte des solutions, des idées créatives et des alternatives sans ego. C'est votre sparring-partner sonore.",
    redFlagText:
      "Ne peut pas s'empêcher de proposer une (probablement meilleure) version de votre idée.",
    accentColor: "text-[#FBBF24]", // Jaune/Or pour les idées
    bulletPoints: [
      "Résout les problèmes audio avant qu'ils ne deviennent *vos* problèmes",
      "Pense au-delà de la forme d'onde : intention, impact, tonalité",
      "Bouscule les clichés avec tact et créativité",
    ],
  },
  {
    id: 3,
    icon: Rocket,
    title: "La Livraison",
    subtitle: "Rapidité, structure et tranquillité d'esprit",
    paragraph:
      "Fichiers propres, multiples formats, versions détaillées. Vous simplifie la vie, pas seulement le son. Intégration sans accroc.",
    redFlagText:
      "Tellement rapide que vous vous demanderez s'il dort (peu, en fait).",
    accentColor: "text-[#34D399]", // Vert pour la livraison/succès
    bulletPoints: [
      "Exports pro (WAV, MP3, stems, demandes sur-mesure)",
      "Gestion rigoureuse et transparente des versions, pour un suivi sans faille",
      "Livraison 24|48h pour les projets courts",
    ],
  },
];

const AspectCard = ({ item }: { item: (typeof jeromeAspects)[0] }) => {
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
        <Icon className={`w-10 h-10 md:w-12 md:h-12 ${item.accentColor}`} />
        <h3
          className={`text-2xl md:text-3xl font-semibold text-white mt-2 ${item.accentColor}`}
        >
          {item.title}
        </h3>
        <p className="text-lg font-medium text-zinc-300 mt-1">
          {item.subtitle}
        </p>
      </div>

      <p className="text-zinc-400 text-sm leading-relaxed mb-5 line-clamp-3 h-[4.5rem]">
        {" "}
        {/* approx 3 lines */}
        {item.paragraph}
      </p>

      <div className="bg-zinc-900/70 p-3 rounded-md my-4 border border-zinc-700">
        <p className="text-xs text-zinc-400 flex items-center">
          <span className="font-semibold text-orange-400 mr-1">Red Flag:</span>{" "}
          {item.redFlagText}
        </p>
      </div>

      <ul className="space-y-2 text-sm text-zinc-300 mt-auto">
        {item.bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle
              className={`w-4 h-4 ${item.accentColor} mr-2 mt-0.5 shrink-0`}
            />
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
          Ce qui rend <span className="text-[#d4af37]">Jérôme</span> unique
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {jeromeAspects.map((item) => (
            <AspectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
