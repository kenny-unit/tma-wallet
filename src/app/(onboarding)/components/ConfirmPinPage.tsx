"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { confirmPinSchema } from "@/lib/zod/onboarding";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { useOnboarding } from "../context/OnboardingProvider";

type ConfirmPinFormData = z.infer<ReturnType<typeof confirmPinSchema>>;

const ConfirmPinPage = forwardRef<
  HTMLFormElement,
  Omit<ComponentPropsWithoutRef<"form">, "onSubmit">
>(({ className, ...props }, ref) => {
  const { pin, setStep } = useOnboarding();

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmPinFormData>({
    mode: "onSubmit",
    resolver: zodResolver(confirmPinSchema(pin)),
  });

  const onSubmit = async (data: ConfirmPinFormData) => {
    try {
      console.info("PIN set successfully:", data);
      // TODO: Save PIN handler and redirect to home
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
      <h1 className="text-2xl font-semibold">Confirm Pin</h1>

      <InputOTP
        maxLength={6}
        value={watch("confirmPin")}
        onChange={(value) => setValue("confirmPin", value)}
        errorMessage={errors.confirmPin?.message}
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
      <Button variant="link" size="link" onClick={() => setStep("set-pin")}>
        Back
      </Button>
    </form>
  );
});

ConfirmPinPage.displayName = "ConfirmPinPage";

export default ConfirmPinPage;
