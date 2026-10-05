"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { MdCheckCircle } from "react-icons/md";
import type { ConsultationFormValues } from "../validation/contact.validation";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ContactBookingSuccessProps {
  onReset: () => void;
  submittedData: ConsultationFormValues;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ContactBookingSuccess({
  onReset,
  submittedData,
}: ContactBookingSuccessProps) {
  return (
    <div className="space-y-6 rounded-xl border border-border bg-surface-container-lowest p-6 text-center shadow-xs sm:p-10">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
        <MdCheckCircle className="text-4xl" />
      </div>

      <div className="space-y-2">
        <span className="font-label-sm font-semibold text-label-sm text-primary uppercase tracking-wider">
          Protocol Confirmed
        </span>
        <h3 className="font-bold font-display text-headline-md text-on-surface">
          Viewing Request Transmitted
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Thank you,{" "}
          <strong className="text-on-surface">{submittedData.fullName}</strong>.
          Your private appointment request for{" "}
          <strong className="text-on-surface">
            {submittedData.preferredDate}
          </strong>{" "}
          ({submittedData.preferredWindow}) has been priority-routed to Julian
          Sterling at the Beverly Hills Allocation Desk.
        </p>
      </div>

      <div className="mx-auto max-w-md rounded-lg border border-border/80 bg-surface-container p-4 text-left font-body-sm text-body-sm text-on-surface-variant">
        <div className="flex justify-between border-border/60 border-b py-1">
          <span>Client:</span>
          <span className="font-medium text-on-surface">
            {submittedData.fullName}
          </span>
        </div>
        <div className="flex justify-between border-border/60 border-b py-1">
          <span>Direct Channel:</span>
          <span className="font-medium text-on-surface">
            {submittedData.phone}
          </span>
        </div>
        <div className="flex justify-between py-1">
          <span>Response Guarantee:</span>
          <span className="font-medium text-primary">Within 60 Minutes</span>
        </div>
      </div>

      <div className="pt-2">
        <button
          className="cursor-pointer rounded-lg bg-primary-container px-6 py-3 font-label-md font-semibold text-label-md text-on-primary transition-colors hover:bg-primary active:translate-y-0.5"
          onClick={onReset}
          type="button"
        >
          Schedule Another Consultation
        </button>
      </div>
    </div>
  );
}
