"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { MdArrowForward, MdLock } from "react-icons/md";
import { Input, Textarea } from "@/shared/components";
import type { useServicesInquiry } from "../hooks/use-services-inquiry";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ServicesInquiryFormProps {
  inquiryState: ReturnType<typeof useServicesInquiry>;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ServicesInquiryForm({
  inquiryState,
}: ServicesInquiryFormProps) {
  const { form, getFieldError, isSubmitting, onSubmit } = inquiryState;
  const { register } = form;

  return (
    <form
      className="flex flex-col gap-5 sm:gap-6"
      noValidate
      onSubmit={onSubmit}
    >
      {/* Vehicle Identification Fields */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Input
          error={getFieldError("modelYear")}
          label="Model Year"
          placeholder="e.g. 2023"
          {...register("modelYear")}
        />
        <Input
          error={getFieldError("make")}
          label="Make / Marque"
          placeholder="e.g. Porsche"
          {...register("make")}
        />
        <Input
          error={getFieldError("modelTrim")}
          label="Model & Trim"
          placeholder="e.g. 911 Carrera GTS"
          {...register("modelTrim")}
        />
        <Input
          error={getFieldError("mileage")}
          label="Current Mileage"
          placeholder="e.g. 8,450"
          {...register("mileage")}
        />
      </div>

      {/* Target Parameters */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          error={getFieldError("budgetOrEquity")}
          label="Target Budget or Desired Equity ($)"
          placeholder="e.g. $145,000"
          {...register("budgetOrEquity")}
        />

        <div className="flex flex-col gap-1.5">
          <label
            className="font-label-sm font-semibold text-[10px] text-on-surface uppercase tracking-wider md:text-label-sm"
            htmlFor="timeline-select"
          >
            Estimated Timeline
          </label>
          <select
            className="h-10 w-full rounded-lg border border-border bg-surface-container px-3 font-sans text-on-surface text-xs outline-none transition focus:border-border-strong sm:text-sm"
            id="timeline-select"
            {...register("timeline")}
          >
            <option value="immediate">Immediate (Within 48 Hours)</option>
            <option value="2weeks">Next 14 Days</option>
            <option value="month">Within 30–60 Days</option>
            <option value="market-watch">Ongoing Private Market Watch</option>
          </select>
        </div>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input
          error={getFieldError("clientName")}
          label="Client Full Name"
          placeholder="Alexander Vance"
          {...register("clientName")}
        />
        <Input
          error={getFieldError("telephone")}
          label="Direct Telephone"
          placeholder="+1 (310) 555-0182"
          type="tel"
          {...register("telephone")}
        />
        <Input
          error={getFieldError("email")}
          label="Confidential Email"
          placeholder="a.vance@executive.com"
          type="email"
          {...register("email")}
        />
      </div>

      {/* Special Requirements */}
      <Textarea
        error={getFieldError("requirements")}
        label="VIN or Specific Architectural Requirements"
        placeholder="Paste 17-digit VIN if available, or specify ideal exterior paint-to-sample, ceramic brake package, or custom interior specifications..."
        rows={3}
        {...register("requirements")}
      />

      {/* Form Action & Confidentiality Badge */}
      <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
        <div className="flex items-center gap-2 font-label-sm text-[11px] text-on-surface-variant sm:text-xs">
          <MdLock className="text-base text-tertiary" />
          <span>Strict Non-Disclosure &amp; Private Ledger Integrity</span>
        </div>

        <button
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container px-7 py-3 font-label-md font-semibold text-label-md text-white uppercase tracking-wider shadow-sm transition hover:bg-primary disabled:opacity-60 sm:w-auto"
          disabled={isSubmitting}
          type="submit"
        >
          <span>
            {isSubmitting
              ? "Encrypting & Transmitting..."
              : "Submit Advisory Dossier"}
          </span>
          <MdArrowForward className="text-base" />
        </button>
      </div>
    </form>
  );
}
