import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2",
    "w-full font-semibold font-poppins",
    "whitespace-nowrap",
    "rounded-md transition-colors",
    "focus-visible:outline-none",
    "disabled:pointer-events-none",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ),
  {
    variants: {
      variant: {
        default:
          "bg-unit-purple-400 text-white disabled:bg-unit-gray-200 disabled:text-unit-gray-400",
        secondary: "bg-unit-purple-100 text-unit-purple-400",
        outline:
          "bg-transparent border border-unit-purple-400 text-unit-purple-400",
        ghost: "bg-transparent text-unit-gray-600 hover:bg-unit-gray-200",
        "ghost-secondary":
          "bg-transparent text-unit-purple-400 hover:bg-unit-purple-100 disabled:text-unit-gray-200",
        link: "text-unit-purple-600 hover:text-unit-purple-600/90 font-medium",
      },
      size: {
        default: "px-3 py-[0.875rem] text-base",
        small: "py-2 text-sm w-fit px-3 min-w-20 h-fit",
        icon: "w-fit h-fit p-1",
        link: "px-0 py-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, type = "button", ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
