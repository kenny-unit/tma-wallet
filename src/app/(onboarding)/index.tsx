"use client";

import { useState } from "react";

import WelcomePage from "./components/WelcomePage";

type OnboardingStep = "welcome" | "create-username" | "set-pin" | "confirm-pin";

const OnboardingPage = () => {
  const [step, setStep] = useState<OnboardingStep>("welcome");
  return (
    <div className="w-full max-w-[400px] px-6">
      {step === "welcome" && (
        <WelcomePage onNext={() => setStep("create-username")} />
      )}
    </div>
  );
};

export default OnboardingPage;
