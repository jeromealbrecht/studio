"use client";

import { useState } from "react";
import Stepper, { Step } from "@/components/stepper";
import { CheckCircle, AlertTriangle, MailCheck } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "@/hooks/use-toast";

export default function ReservationPage() {
  // Formspree hook setup
  const [state, handleSubmit] = useForm("mgvyqoka");

  // Local state for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const services = [
    "Prise de son + mixage",
    "Mixage Stereo Voix",
    "Mixage Analogique",
    "Sound Design JV",
    "Autre",
  ];

  // This function will be called by the stepper on the final step.
  // It triggers the Formspree submission.
  const handleFinalStep = () => {
    handleSubmit({
      name,
      email,
      service,
    });
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canProceed =
    currentStep === 0
      ? !!service
      : currentStep === 1
      ? name.trim() !== "" && isValidEmail(email)
      : true;

  const handleStepChange = (step: number) => {
    // Si on essaie d'aller à l'étape 2 (index 1) et que l'email est invalide, affiche un toast
    if (step === 1 && !isValidEmail(email)) {
      toast({
        title: "Format d'email invalide",
        description: "Merci de saisir une adresse e-mail valide.",
        variant: "destructive",
      });
    }
    setCurrentStep(step);
  };

  // If the form submission was successful, show a thank you message.
  if (state.succeeded) {
    return (
      <div className="bg-[#121212] text-white min-h-screen py-16 md:py-24 px-4 flex flex-col items-center justify-center text-center">
        <MailCheck className="w-20 h-20 text-green-500 mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-white">Merci !</h1>
        <p className="text-zinc-300 mt-4 text-lg max-w-md mx-auto">
          Votre demande a été envoyée avec succès. Nous reviendrons vers vous
          dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#121212] text-white min-h-screen py-16 md:py-24 px-4">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Réservez votre <span className="text-[#d4af37]">Session</span>
        </h1>

        {/* hs2 ou contactez-nous */}
        <h2 className="text-2xl font-semibold text-white">
          Ou contactez-nous par email sur{" "}
          <a href="mailto:ecrire@couleurdeson.fr" className="text-[#d4af37]">
            ecrire@couleurdeson.fr
          </a>
        </h2>

        <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
          Suivez les étapes pour nous fournir les détails de votre projet. C'est
          simple et rapide.
        </p>
      </header>

      {/* We don't need a <form> tag here because we are triggering handleSubmit manually */}
      <Stepper
        onFinalStepCompleted={handleFinalStep}
        onStepChange={handleStepChange}
        backButtonText="Précédent"
        nextButtonText="Suivant"
        finishButtonText={
          state.submitting ? "Envoi en cours..." : "Envoyer la demande"
        }
        canProceed={canProceed}
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
              <div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Votre nom complet"
                  required // Added required attribute
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse e-mail"
                  required // Added required attribute
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-xs mt-1"
                />
              </div>
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
            {Array.isArray(state.errors) && state.errors.length > 0 && (
              <div className="flex items-center justify-center gap-2 text-red-500 mt-4">
                <AlertTriangle size={16} />
                <p className="text-sm font-semibold">
                  Une erreur est survenue. Veuillez vérifier vos informations.
                </p>
              </div>
            )}
          </div>
        </Step>
      </Stepper>
    </div>
  );
}
