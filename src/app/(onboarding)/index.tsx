"use client";

import ConfirmPinPage from "./components/ConfirmPinPage";
import RegisterUsernamePage from "./components/RegisterUsernamePage";
import SetPinPage from "./components/SetPinPage";
import WelcomePage from "./components/WelcomePage";
import { useOnboarding } from "./context/OnboardingProvider";

const OnboardingPage = () => {
  const { step, setStep } = useOnboarding();

  return (
    <div className="w-full max-w-[400px] px-6">
      {step === "welcome" && (
        <WelcomePage onNext={() => setStep("create-username")} />
      )}
      {step === "create-username" && (
        <RegisterUsernamePage onNext={() => setStep("set-pin")} />
      )}
      {step === "set-pin" && (
        <SetPinPage onNext={() => setStep("confirm-pin")} />
      )}
      {step === "confirm-pin" && <ConfirmPinPage />}
    </div>
  );
};

export default OnboardingPage;
