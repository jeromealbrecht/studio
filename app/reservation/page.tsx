"use client";

import { useState } from "react";
import Stepper, { Step } from "@/components/stepper";
import { CheckCircle } from "lucide-react";

export default function ReservationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");

  const services = [
    "Prise de son + mixage",
    "Mixage Stereo Voix",
    "Mixage Analogique",
    "Sound Design JV",
    "Autre",
  ];

  const handleFinalStep = () => {
    // Here you would typically send the data to your backend or an email service
    console.log("Form submitted!", { name, email, service });
    alert(
      "Merci ! Votre demande a été envoyée. Nous vous recontacterons bientôt."
    );
  };

  return (
    <div className="bg-[#121212] text-white min-h-screen py-16 md:py-24 px-4">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Réservez votre <span className="text-[#d4af37]">Session</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Suivez les étapes pour nous fournir les détails de votre projet. C'est
          simple et rapide.
        </p>
      </header>

      <Stepper
        onFinalStepCompleted={handleFinalStep}
        backButtonText="Précédent"
        nextButtonText="Suivant"
        finishButtonText="Envoyer la demande"
      >
        <Step>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Quel service vous intéresse ?
            </h2>
            <p className="text-zinc-400">
              Choisissez une option ci-dessous pour commencer.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 max-w-lg mx-auto">
              {services.map((s) => (
                <button
                  key={s}
                  onClick={() => setService(s)}
                  className={`p-3 text-sm font-medium rounded-lg border-2 transition-all duration-200 ${
                    service === s
                      ? "bg-[#d4af37]/20 border-[#d4af37] text-white"
                      : "bg-zinc-800 border-zinc-700 text-zinc-300 hover:border-zinc-500"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </Step>
        <Step>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Vos informations
            </h2>
            <p className="text-zinc-400">
              Comment pouvons-nous vous contacter ?
            </p>
            <div className="max-w-sm mx-auto space-y-4 pt-4 text-left">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom complet"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse e-mail"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>
        </Step>
        <Step>
          <div className="space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h2 className="text-2xl font-semibold text-white">
              Prêt à envoyer
            </h2>
            <p className="text-zinc-400 max-w-md mx-auto">
              Vérifiez vos informations. En cliquant sur "Envoyer la demande",
              nous recevrons votre projet et vous contacterons sous 48h.
            </p>
            <div className="text-left bg-zinc-800/50 p-4 rounded-lg max-w-sm mx-auto space-y-2 border border-zinc-700">
              <p className="text-sm text-zinc-400">
                Nom:{" "}
                <span className="font-semibold text-white">
                  {name || "Non spécifié"}
                </span>
              </p>
              <p className="text-sm text-zinc-400">
                Email:{" "}
                <span className="font-semibold text-white">
                  {email || "Non spécifié"}
                </span>
              </p>
              <p className="text-sm text-zinc-400">
                Service:{" "}
                <span className="font-semibold text-white">
                  {service || "Non spécifié"}
                </span>
              </p>
            </div>
          </div>
        </Step>
      </Stepper>
    </div>
  );
}
