import GlobalLayout from "@/components/layout/GlobalLayout";

import OnboardingPage from "./(onboarding)";
import { OnboardingProvider } from "./(onboarding)/context/OnboardingProvider";

export default function Home() {
  return (
    <GlobalLayout>
      <OnboardingProvider>
        <OnboardingPage />
      </OnboardingProvider>
    </GlobalLayout>
  );
}
