"use client";

import { Eye, EyeSlash } from "iconsax-react";
import * as React from "react";

import { cn } from "@/src/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  leftNode?: React.ReactNode;
  rightNode?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      placeholder,
      leftNode,
      rightNode,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const [hasValue, setHasValue] = React.useState(props.value ? true : false);
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    return (
      <>
        <div
          className={cn(
            "relative w-full rounded-lg border border-gray-200 bg-white font-poppins text-base",
            errorMessage && "border-unit-red-400",
          )}
        >
          {leftNode && (
            <div className="absolute left-4 top-1/2 size-6 -translate-y-1/2 text-unit-gray-300">
              {leftNode}
            </div>
          )}
          <input
            type={isPasswordVisible ? "text" : type}
            className={cn(
              "peer",
              "w-full px-4 py-3",
              leftNode && "pl-12",
              rightNode && "pr-12",
              "rounded-lg text-unit-gray-900",
              "focus:pb-1 focus:pt-5",
              hasValue && "pb-1 pt-5",
              "focus-visible:outline-none disabled:cursor-not-allowed",
              className,
            )}
            ref={ref}
            {...props}
            onInput={(e) => {
              setHasValue(!!e.currentTarget.value);
              props.onInput?.(e);
            }}
          />
          <span
            className={cn(
              "absolute left-4 top-3 text-unit-gray-400",
              leftNode && "left-12",
              rightNode && "right-12",
              "transition-all peer-focus:top-1 peer-focus:text-sm",
              hasValue && "top-1 text-sm",
            )}
          >
            {placeholder}
          </span>
          {rightNode && (
            <div className="absolute right-4 top-1/2 size-6 -translate-y-1/2 text-unit-gray-300">
              {rightNode}
            </div>
          )}
          {type === "password" && (
            <div
              className="absolute right-4 top-1/2 size-6 -translate-y-1/2 cursor-pointer text-unit-gray-300"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <Eye /> : <EyeSlash />}
            </div>
          )}
        </div>
        {errorMessage && (
          <p className="text-sm text-unit-red-400">{errorMessage}</p>
        )}
      </>
    );
  },
);
Input.displayName = "Input";

export { Input };
