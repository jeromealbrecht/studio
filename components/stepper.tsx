"use client";

import React, { useState, Children, isValidElement } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";

// Step component just acts as a wrapper for its children
export const Step = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

interface StepperProps {
  children: React.ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  backButtonText?: string;
  nextButtonText?: string;
  finishButtonText?: string;
}

export default function Stepper({
  children,
  initialStep = 0,
  onStepChange,
  onFinalStepCompleted,
  backButtonText = "Précédent",
  nextButtonText = "Suivant",
  finishButtonText = "Terminer",
}: StepperProps) {
  const steps = Children.toArray(children).filter(isValidElement);
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(1);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const goToNextStep = () => {
    if (!isLastStep) {
      setDirection(1);
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      onStepChange?.(newStep);
    } else {
      onFinalStepCompleted?.();
    }
  };

  const goToPreviousStep = () => {
    if (!isFirstStep) {
      setDirection(-1);
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      onStepChange?.(newStep);
    }
  };

  const stepVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? "50%" : "-50%",
    }),
    visible: {
      opacity: 1,
      x: "0%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? "-50%" : "50%",
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  const stepIndicatorClasses = (index: number) => {
    if (index < currentStep) {
      return "bg-[#d4af37] text-black"; // Completed
    }
    if (index === currentStep) {
      return "border-2 border-[#d4af37] text-[#d4af37]"; // Active
    }
    return "border-2 border-zinc-600 text-zinc-400"; // Upcoming
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 w-full max-w-2xl mx-auto shadow-2xl">
      {/* Step Indicators */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((_, index) => (
          <React.Fragment key={index}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${stepIndicatorClasses(
                index
              )}`}
            >
              {index < currentStep ? <Check size={16} /> : index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 ${
                  index < currentStep ? "bg-[#d4af37]" : "bg-zinc-600"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Content */}
      <div className="overflow-hidden relative min-h-[200px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepVariants as unknown as Variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center"
          >
            {steps[currentStep]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8 pt-4 border-t border-zinc-800">
        <button
          onClick={goToPreviousStep}
          disabled={isFirstStep}
          className="px-4 py-2 text-sm font-semibold text-zinc-300 bg-zinc-700 rounded-md hover:bg-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
        >
          <ArrowLeft size={16} className="mr-2" />
          {backButtonText}
        </button>
        <button
          onClick={goToNextStep}
          className="px-6 py-2 text-sm font-semibold text-black bg-[#d4af37] rounded-md hover:bg-yellow-500 transition-colors flex items-center"
        >
          {isLastStep ? finishButtonText : nextButtonText}
          {!isLastStep && <ArrowRight size={16} className="ml-2" />}
        </button>
      </div>
    </div>
  );
}
