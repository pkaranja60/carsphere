"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { Ref, TextareaHTMLAttributes } from "react";
import { useId } from "react";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  helperText?: string;
  label?: string;
  ref?: Ref<HTMLTextAreaElement>;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function Textarea({
  className = "",
  error,
  helperText,
  id,
  label,
  ref,
  rows = 3,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = id || generatedId;
  const errorId = `${textareaId}-error`;
  const helperId = `${textareaId}-helper`;

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
          htmlFor={textareaId}
        >
          {label}
          {props.required ? (
            <span aria-hidden="true" className="ml-1 text-error">
              *
            </span>
          ) : null}
        </label>
      ) : null}

      <textarea
        aria-describedby={describedBy}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-lg border bg-surface-bright px-3.5 py-2.5 font-body-sm text-body-sm text-on-surface transition-colors placeholder:text-on-surface-variant/60 focus:border-primary focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60 ${
          error
            ? "border-error focus:border-error focus:ring-error/20"
            : "border-border hover:border-border-strong"
        } ${className}`}
        id={textareaId}
        ref={ref}
        rows={rows}
        {...props}
      />

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
