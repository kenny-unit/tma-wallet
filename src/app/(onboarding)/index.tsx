"use client";

import { useState } from "react";

import RegisterUsernamePage from "./components/RegisterUsernamePage";
import WelcomePage from "./components/WelcomePage";

type OnboardingStep = "welcome" | "create-username" | "set-pin" | "confirm-pin";

const OnboardingPage = () => {
  const [step, setStep] = useState<OnboardingStep>("welcome");
  return (
    <div className="w-full max-w-[400px] px-6">
      {step === "welcome" && (
        <WelcomePage onNext={() => setStep("create-username")} />
      )}
      {step === "create-username" && (
        <RegisterUsernamePage onNext={() => setStep("set-pin")} />
      )}
    </div>
  );
};

export default OnboardingPage;
