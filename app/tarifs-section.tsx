"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    title: "Stéréo - Voix",
    description: "Mixage Piste Stéréo + Intégration Voix",
    price: 117,
    priceSuffix: "par titre",
    tagline: "Libérez votre créativité !",
    features: [
      "3 heures de Mixage",
      "Équilibre fréquentiel",
      "Effets (reverb, delay, saturation...)",
      "Pré-Mastering",
    ],
    ctaText: "Prendre RDV",
    accentColor: "text-purple-400",
    isFeatured: false,
    promoPrice: 87,
    promoEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
    promoText: "PROMO",
  },
  {
    id: 2,
    title: "Mixage + Master PRO",
    description:
      "Mixage professionnel numérique\nMastering numérique\n25 Pistes Max si Multipiste",
    price: 167,
    priceSuffix: "Par Titre",
    tagline: "LA Formule Mix Master :",
    features: [
      "Mixage Haut de gamme",
      "Équilibre fréquentiel",
      "Effets (reverb, delay, saturation...)",
      "Mastering",
    ],
    ctaText: "Prendre RDV",
    accentColor: "text-pink-400",
    isFeatured: true,
    promoPrice: 137,
    promoEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
    promoText: "PROMO",
  },
  {
    id: 3,
    title: "Business Analog",
    description:
      "Mixage Numérique et Analogique\nIdéal pour projet PRO\nEntreprise, Corporatif, Album, Single",
    price: 217,
    priceSuffix: "Par Titre",
    tagline: "La formule Business PRO",
    features: [
      "Mixage Haut de gamme",
      "Équilibre fréquentiel",
      "Couleur analogique",
      "Effets (reverb, delay, saturation...)",
      "Mastering",
    ],
    ctaText: "Prendre RDV",
    accentColor: "text-teal-400",
    isFeatured: false,
    promoPrice: 167,
    promoEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
    promoText: "PROMO",
  },
];

const PricingCard = ({ plan }: { plan: (typeof pricingPlans)[0] }) => {
  // Promo logic
  const now = Date.now();
  const promoActive =
    plan.promoPrice &&
    plan.promoEndDate &&
    now < new Date(plan.promoEndDate).getTime();

  return (
    <motion.div
      className={`bg-zinc-800 p-6 md:p-8 rounded-xl shadow-xl flex flex-col h-full border border-zinc-700 hover:border-zinc-600 transition-colors duration-300 ${
        plan.isFeatured ? "ring-2 ring-[#d4af37]" : ""
      }`}
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
      }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div className="mb-4">
        <h3
          className={`text-2xl md:text-3xl font-semibold text-white ${plan.accentColor}`}
        >
          {plan.title}
        </h3>
        {plan.description.split("\n").map((line, index) => (
          <p
            key={index}
            className="text-sm text-zinc-400 mt-1 whitespace-pre-line"
          >
            {line}
          </p>
        ))}
      </div>

      <div className="my-4 flex items-center space-x-2">
        {promoActive ? (
          <>
            <span className="text-5xl font-bold text-white">
              {plan.promoPrice}€
            </span>
            <span className="text-sm text-zinc-400 ml-1">
              {plan.priceSuffix}
            </span>
            <span className="ml-2 px-2 py-1 bg-pink-500 text-white text-xs font-bold rounded">
              {plan.promoText || "PROMO"}
            </span>
            <span className="text-zinc-400 line-through ml-3 text-2xl">
              {plan.price}€
            </span>
          </>
        ) : (
          <>
            <span className="text-5xl font-bold text-white">{plan.price}€</span>
            <span className="text-sm text-zinc-400 ml-1">
              {plan.priceSuffix}
            </span>
          </>
        )}
      </div>

      <p className="text-md font-semibold text-zinc-300 mb-5">{plan.tagline}</p>

      <ul className="space-y-2 text-sm text-zinc-300 mb-8">
        {/* Enregistrement INCLUS - always on top, larger font */}
        <li className="flex items-start">
          <Check
            className={`w-5 h-5 ${
              plan.accentColor || "text-green-400"
            } mr-2 mt-0.5 shrink-0`}
          />
          <span className="text-lg font-bold text-white">
            Enregistrement INCLUS
          </span>
        </li>
        {/* Features list, but skip duplicate 'Enregistrement INCLUS' if present */}
        {plan.features.map((feature, index) =>
          feature === "Enregistrement INCLUS" ? null : (
            <li key={index} className="flex items-start">
              <Check
                className={`w-5 h-5 ${
                  plan.accentColor || "text-green-400"
                } mr-2 mt-0.5 shrink-0`}
              />
              <span>{feature}</span>
            </li>
          )
        )}
      </ul>

      <a
        href="https://tally.so/r/mKjLJX"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full bg-white text-zinc-900 font-semibold py-3 px-6 rounded-lg hover:bg-zinc-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-zinc-800 text-center block"
      >
        {plan.ctaText}
      </a>
    </motion.div>
  );
};

export default function TarifsSection() {
  return (
    // Removed the <section> wrapper and title, as this will be part of the page structure
    // The main page component (app/tarifs/page.tsx) will handle the overall page padding and title
    <div className="max-w-6xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
