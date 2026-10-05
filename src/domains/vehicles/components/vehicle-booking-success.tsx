"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { MdCheckCircle } from "react-icons/md";
import type { BookingFormValues } from "../validation/booking.validation";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

interface VehicleBookingSuccessProps {
  onReset: () => void;
  submittedData: BookingFormValues;
  vehicleTitle: string;
}

export function VehicleBookingSuccess({
  onReset,
  submittedData,
  vehicleTitle,
}: VehicleBookingSuccessProps) {
  return (
    <div className="space-y-5 border-0 bg-transparent p-0 text-center shadow-none md:rounded-xl md:border md:border-border md:bg-surface-container-lowest md:p-10 md:shadow-md">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
        <MdCheckCircle className="text-4xl" />
      </div>
      <h3 className="font-bold font-display text-headline-sm text-on-surface">
        Appointment Request Transmitted
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
        Thank you,{" "}
        <strong className="text-on-surface">{submittedData.fullName}</strong>.
        Your consultation request for the {vehicleTitle} has been
        priority-routed to your vehicle specialist.
      </p>
      <button
        className="cursor-pointer rounded-lg bg-primary-container px-6 py-2.5 font-label-md font-semibold text-label-md text-on-primary transition-colors hover:bg-primary"
        onClick={onReset}
        type="button"
      >
        Schedule Another Viewing
      </button>
    </div>
  );
}
