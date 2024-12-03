"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type OnboardingStep = "welcome" | "create-username" | "set-pin" | "confirm-pin";

interface OnboardingContextType {
  pin: string;
  setPin: (pin: string) => void;
  step: OnboardingStep;
  setStep: (step: OnboardingStep) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined,
);

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [pin, setPin] = useState("");
  const [step, setStep] = useState<OnboardingStep>("welcome");

  return (
    <OnboardingContext.Provider value={{ pin, setPin, step, setStep }}>
      {children}
    </OnboardingContext.Provider>
  );
};
