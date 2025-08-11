"use client";

import React from "react";
import { Check } from "lucide-react";

const getTomorrowEndOfDayIso = (): string => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  tomorrow.setHours(23, 59, 59, 999);
  return tomorrow.toISOString();
};

const pricingPlans = [
  {
    id: 1,
    title: "Stéréo - Voix",
    description:
      "Mixage Piste Stéréo + Intégration Voix\nIdéal Youtube, Soundcloud, RS",
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
    promoEndDate: getTomorrowEndOfDayIso(),
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
    promoEndDate: getTomorrowEndOfDayIso(),
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
    promoEndDate: getTomorrowEndOfDayIso(),
    promoText: "PROMO",
  },
];

const PricingCard = ({ plan }: { plan: (typeof pricingPlans)[0] }) => {
  const now = Date.now();
  const promoActive =
    plan.promoPrice &&
    plan.promoEndDate &&
    now < new Date(plan.promoEndDate).getTime();

  return (
    <div
      className={`bg-zinc-800 p-6 md:p-8 rounded-xl shadow-xl border border-zinc-700 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl ${
        plan.isFeatured ? "ring-2 ring-[#d4af37]" : ""
      }`}
      style={{
        display: "grid",
        gridTemplateRows: "auto auto auto 1fr auto auto", // 6 sections avec des hauteurs définies
        minHeight: "700px", // Hauteur minimale pour toutes les cartes
      }}
    >
      {/* Section 1: Titre - hauteur fixe */}
      <div
        className="mb-4"
        style={{
          minHeight: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h3
          className={`text-2xl md:text-3xl font-semibold text-white ${plan.accentColor}`}
        >
          {plan.title}
        </h3>
      </div>

      {/* Section 2: Description - hauteur fixe */}
      <div
        className="mb-4"
        style={{
          minHeight: "90px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {plan.description.split("\n").map((line, index) => (
          <p
            key={index}
            className="text-sm text-zinc-400 mt-1 whitespace-pre-line"
          >
            {line}
          </p>
        ))}
      </div>

      {/* Section 3: Prix - hauteur fixe */}
      <div
        className="my-4 flex items-center space-x-2"
        style={{ minHeight: "80px" }}
      >
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

      {/* Section 4: Tagline - hauteur fixe */}
      <div style={{ minHeight: "60px", display: "flex", alignItems: "center" }}>
        <p className="text-md font-semibold text-zinc-300">{plan.tagline}</p>
      </div>

      {/* Section 5: Features - prend l'espace restant */}
      <div className="py-4" style={{ minHeight: "200px" }}>
        <ul className="space-y-2 text-sm text-zinc-300">
          {/* Enregistrement INCLUS - toujours en haut */}
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
          {/* Liste des features */}
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
      </div>

      {/* Section 6: Boutons - hauteur fixe en bas */}
      <div className="mt-auto pt-4">
        <a
          href="https://tally.so/r/mKjLJX"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white text-zinc-900 font-semibold py-3 px-6 rounded-lg hover:bg-zinc-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-zinc-800 text-center block"
        >
          {plan.ctaText}
        </a>
        {/* PayPal button seulement pour le premier plan */}
        {plan.id === 1 && (
          <div className="mt-4">
            <div id="paypal-container-FDWDHGBX7Y8DC"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function TarifsSection() {
  return (
    <div className="max-w-6xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-zinc-900 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
