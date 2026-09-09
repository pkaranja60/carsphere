"use client";

import {
  Description,
  FieldError,
  Input as HeroInput,
  Label,
  TextField,
} from "@heroui/react";
import type { ComponentProps } from "react";

export interface InputProps
  extends Omit<ComponentProps<typeof TextField>, "children"> {
  description?: string;
  errorMessage?: string;
  inputClassName?: string;
  label?: string;
  placeholder?: string;
  type?: string;
}

export function Input({
  label,
  description,
  errorMessage,
  placeholder,
  type = "text",
  className,
  inputClassName = "",
  ...props
}: InputProps) {
  return (
    <TextField
      className={`flex w-full flex-col gap-1 ${className || ""}`}
      {...props}
    >
      {label ? (
        <Label className="pb-1 font-medium text-foreground">{label}</Label>
      ) : null}

      <HeroInput
        className={`w-full rounded-md border border-border bg-surface px-4 py-2 text-foreground text-sm shadow-sm transition-colors placeholder:text-muted hover:border-primary focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary md:text-base ${inputClassName}`}
        placeholder={placeholder}
        type={type}
      />

      {description ? (
        <Description className="mt-1 text-muted text-xs">
          {description}
        </Description>
      ) : null}

      {errorMessage ? (
        <FieldError className="mt-1 text-red-500 text-xs">
          {errorMessage}
        </FieldError>
      ) : (
        <FieldError className="mt-1 text-red-500 text-xs" />
      )}
    </TextField>
  );
}
