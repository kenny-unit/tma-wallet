import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { registerUsernameSchema } from "@/lib/zod/onboarding";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type RegisterUsernameFormData = z.infer<typeof registerUsernameSchema>;

interface RegisterUsernamePageProps extends ComponentPropsWithoutRef<"form"> {
  onNext: () => void;
}

const RegisterUsernamePage = forwardRef<
  HTMLFormElement,
  RegisterUsernamePageProps
>(({ className, onNext, ...props }, ref) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterUsernameFormData>({
    mode: "onChange",
    resolver: zodResolver(registerUsernameSchema),
  });

  const onSubmit = async (data: RegisterUsernameFormData) => {
    try {
      console.info("Form submitted:", data);
      if (data.username === "exists") {
        //TODO: Check if username already exists
        setError("username", { message: "Username already exists" });
      } else {
        onNext();
      }
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
        <h1 className="text-2xl font-semibold">
          Register your unique username
        </h1>
        <p className="font-inter text-xs text-unit-gray-400">
          Secure your unique username to represent your identity on Unit
          Network. This will help others find and connect with you.
        </p>
      </div>
      <Input
        placeholder="Username"
        errorMessage={errors.username?.message}
        {...register("username")}
      />
      <Button type="submit" disabled={isSubmitting}>
        Next
      </Button>
    </form>
  );
});

RegisterUsernamePage.displayName = "RegisterUsernamePage";

export default RegisterUsernamePage;
