import Image from "next/image";
import { ComponentPropsWithoutRef, forwardRef } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface WelcomePageProps extends ComponentPropsWithoutRef<"div"> {
  onNext: () => void;
}

const WelcomePage = forwardRef<HTMLDivElement, WelcomePageProps>(
  ({ className, onNext, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-y-14",
          className,
        )}
        ref={ref}
        {...props}
      >
        <Image
          src="/images/onboarding.svg"
          alt="logo"
          width={350}
          height={150}
        />
        <div className="flex flex-col items-center gap-y-8">
          <div className="flex flex-col items-center gap-y-3 text-center">
            <h1 className="text-2xl font-semibold">Welcome to Unit Network</h1>
            <p className="font-inter text-xs text-unit-gray-400">
              Secure your username, deposit crypto, swap assets, and earn
              rewards—start now!
            </p>
          </div>
          <Button onClick={onNext}>Get Started</Button>
        </div>
      </div>
    );
  },
);

WelcomePage.displayName = "WelcomePage";

export default WelcomePage;
