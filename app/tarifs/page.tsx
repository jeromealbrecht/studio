import TarifsSection from "../tarifs-section";

export default function Tarifs() {
  return (
    <section className="bg-[#121212] text-white py-12 md:py-16 px-4 sm:px-6 md:px-16">
      <h1 className="text-4xl font-bold mb-6 text-[#d4af37]">Tarifs</h1>
      <p className="text-lg text-zinc-200 mb-4">
        Découvrez les offres pour vos projets audio, voix-off, production
        musicale et plus.
      </p>
      <TarifsSection />
    </section>
  );
}
