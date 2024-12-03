"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { pinSchema } from "@/lib/zod/onboarding";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { useOnboarding } from "../context/OnboardingProvider";

type SetPinFormData = z.infer<typeof pinSchema>;

interface SetPinPageProps
  extends Omit<ComponentPropsWithoutRef<"form">, "onSubmit"> {
  onNext: () => void;
}

const SetPinPage = forwardRef<HTMLFormElement, SetPinPageProps>(
  ({ className, onNext, ...props }, ref) => {
    const { setPin } = useOnboarding();

    const {
      watch,
      setValue,
      handleSubmit,
      formState: { errors },
    } = useForm<SetPinFormData>({
      mode: "onSubmit",
      resolver: zodResolver(pinSchema),
    });

    const onSubmit = async (data: SetPinFormData) => {
      try {
        console.info("Initial PIN:", data);
        setPin(data.pin);
        onNext();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };

    return (
      <form
        className={cn(
          "flex flex-col items-center justify-center gap-y-9",
          className,
        )}
        ref={ref}
        {...props}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center gap-y-1 text-center">
          <h1 className="text-2xl font-semibold">Set Pin</h1>
          <p className="font-inter text-xs text-unit-gray-400">
            This will serve as an alternative authentication method for both
            login and transactions.
          </p>
        </div>

        <InputOTP
          maxLength={6}
          value={watch("pin")}
          onChange={(value) => setValue("pin", value)}
          errorMessage={errors.pin?.message}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <Button type="submit">Next</Button>
      </form>
    );
  },
);

SetPinPage.displayName = "SetPinPage";

export default SetPinPage;
