import TarifsSection from "../tarifs-section";
import React from "react";

function formatPromoDeadline(date: Date): string {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

function getTomorrowEndOfDay(): Date {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  tomorrow.setHours(23, 59, 59, 999);
  return tomorrow;
}

export default function Tarifs() {
  return (
    <section className="bg-[#121212] text-white py-12 md:py-16 px-4 sm:px-6 md:px-16">
      <h1 className="text-4xl font-bold mb-6 text-[#d4af37]">Tarifs</h1>
      <p className="text-lg text-zinc-200 mb-4">
        Découvrez les offres pour vos projets audio, voix-off, production
        musicale et plus.
      </p>
      <p className="text-md text-pink-300 mb-6 font-semibold">
        Promos jusqu’au {formatPromoDeadline(getTomorrowEndOfDay())}
      </p>
      <TarifsSection />
    </section>
  );
}
