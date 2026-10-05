"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { InputHTMLAttributes, ReactNode, Ref } from "react";
import { useId } from "react";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  helperText?: string;
  icon?: ReactNode;
  label?: string;
  ref?: Ref<HTMLInputElement>;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function Input({
  className = "",
  error,
  helperText,
  icon,
  id,
  label,
  ref,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  let describedBy: string | undefined;
  if (error) {
    describedBy = errorId;
  } else if (helperText) {
    describedBy = helperId;
  }

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label ? (
        <label
          className="font-label-sm font-semibold text-label-sm text-on-surface"
          htmlFor={inputId}
        >
          {label}
          {props.required ? (
            <span aria-hidden="true" className="ml-1 text-error">
              *
            </span>
          ) : null}
        </label>
      ) : null}

      <div className="relative flex w-full items-center">
        {icon ? (
          <div className="pointer-events-none absolute left-3 flex items-center justify-center text-on-surface-variant">
            {icon}
          </div>
        ) : null}

        <input
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          className={`h-11 w-full rounded-lg border bg-surface-bright px-3.5 font-body-sm text-body-sm text-on-surface transition-colors placeholder:text-on-surface-variant/60 focus:border-primary focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60 ${
            icon ? "pl-10" : ""
          } ${
            error
              ? "border-error focus:border-error focus:ring-error/20"
              : "border-border hover:border-border-strong"
          } ${className}`}
          id={inputId}
          ref={ref}
          {...props}
        />
      </div>

      {error ? (
        <p className="font-body-sm text-body-sm text-error" id={errorId}>
          {error}
        </p>
      ) : null}

      {!error && helperText ? (
        <p
          className="font-body-sm text-body-sm text-on-surface-variant"
          id={helperId}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
