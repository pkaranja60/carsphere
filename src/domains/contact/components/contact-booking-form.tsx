"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { useCallback } from "react";
import { MdCalendarMonth, MdVerified } from "react-icons/md";
import type { Vehicle } from "@/domains/vehicles";
import { Input, Select, SelectItem, Textarea } from "@/shared/components";
import type { useContactBooking } from "../hooks/use-contact-booking";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ContactBookingFormProps {
  bookingState: ReturnType<typeof useContactBooking>;
  vehicles: Vehicle[];
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ContactBookingForm({
  bookingState,
  vehicles,
}: ContactBookingFormProps) {
  const {
    consultationFormat,
    form,
    getFieldError,
    handleFormatSelect,
    handleVehicleChange,
    handleWindowChange,
    isSubmitting,
    onSubmit,
  } = bookingState;

  const { register, watch } = form;
  const preferredWindow = watch("preferredWindow");
  const selectedVehicle = watch("vehicle");

  const handleSelectFlagship = useCallback(() => {
    handleFormatSelect("flagship");
  }, [handleFormatSelect]);

  const handleSelectAtHome = useCallback(() => {
    handleFormatSelect("athome");
  }, [handleFormatSelect]);

  const handleSelectRemote = useCallback(() => {
    handleFormatSelect("remote");
  }, [handleFormatSelect]);

  return (
    <div className="rounded-xl border border-border bg-surface-container-lowest p-5 shadow-xs sm:p-space-lg md:p-space-xl">
      <div className="mb-6 flex flex-col gap-1 sm:mb-space-lg">
        <span className="font-label-sm font-semibold text-label-sm text-primary uppercase tracking-wider">
          Private Allocation Protocol
        </span>
        <h2 className="font-bold font-display text-headline-md text-on-surface">
          Reserve Your Private Consultation
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Our team handles all preparations prior to your arrival or delivery.
        </p>
      </div>

      <form
        className="flex flex-col gap-5 sm:gap-space-lg"
        noValidate
        onSubmit={onSubmit}
      >
        {/* Vehicle Selector */}
        <Select
          error={getFieldError("vehicle")}
          label="Vehicle of Interest"
          onSelectionChange={handleVehicleChange}
          placeholder="Select a vehicle allocation"
          selectedKey={selectedVehicle}
        >
          <SelectItem id="general">
            General Consultation / Any Curated Allocation
          </SelectItem>
          {vehicles.map((v) => (
            <SelectItem id={v.slug ?? v.id} key={v.id}>
              {v.year} {v.make} {v.model} ({v.trim})
            </SelectItem>
          ))}
          <SelectItem id="custom-sourcing">
            Private Client Bespoke Off-Market Sourcing
          </SelectItem>
        </Select>

        {/* Viewing Format Pills */}
        <div className="flex flex-col gap-1.5">
          <span className="font-label-sm font-semibold text-[10px] text-on-surface uppercase tracking-wider md:text-label-sm">
            Viewing Format
          </span>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-space-xs">
            <button
              className={`h-10 rounded-lg px-3 text-center font-label-md text-label-md transition-colors ${
                consultationFormat === "flagship"
                  ? "bg-primary-container text-on-primary shadow-xs"
                  : "border border-border bg-surface text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              }`}
              onClick={handleSelectFlagship}
              type="button"
            >
              Beverly Hills Suite
            </button>
            <button
              className={`h-10 rounded-lg px-3 text-center font-label-md text-label-md transition-colors ${
                consultationFormat === "athome"
                  ? "bg-primary-container text-on-primary shadow-xs"
                  : "border border-border bg-surface text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              }`}
              onClick={handleSelectAtHome}
              type="button"
            >
              White-Glove At-Home
            </button>
            <button
              className={`h-10 rounded-lg px-3 text-center font-label-md text-label-md transition-colors ${
                consultationFormat === "remote"
                  ? "bg-primary-container text-on-primary shadow-xs"
                  : "border border-border bg-surface text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              }`}
              onClick={handleSelectRemote}
              type="button"
            >
              4K Video Walkaround
            </button>
          </div>
        </div>

        {/* Date and Window Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            error={getFieldError("preferredDate")}
            label="Preferred Date"
            required
            type="date"
            {...register("preferredDate")}
          />

          <Select
            error={getFieldError("preferredWindow")}
            label="Preferred Window"
            onSelectionChange={handleWindowChange}
            selectedKey={preferredWindow}
          >
            <SelectItem id="Morning (10:00 AM – 1:00 PM)">
              Morning (10:00 AM – 1:00 PM)
            </SelectItem>
            <SelectItem id="Afternoon (1:00 PM – 4:00 PM)">
              Afternoon (1:00 PM – 4:00 PM)
            </SelectItem>
            <SelectItem id="Twilight Session (5:00 PM – 7:30 PM)">
              Twilight Session (5:00 PM – 7:30 PM)
            </SelectItem>
            <SelectItem id="Private Off-Hours (By Request)">
              Private Off-Hours (By Request)
            </SelectItem>
          </Select>
        </div>

        {/* Personal Credentials */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Input
            error={getFieldError("fullName")}
            label="Legal Full Name"
            placeholder="e.g. Harrison Vance"
            required
            {...register("fullName")}
          />

          <Input
            error={getFieldError("phone")}
            label="Direct Phone"
            placeholder="+1 (310) 000-0000"
            required
            type="tel"
            {...register("phone")}
          />

          <Input
            error={getFieldError("email")}
            label="Private Email"
            placeholder="client@domain.com"
            required
            type="email"
            {...register("email")}
          />
        </div>

        {/* Trade-In & Logistics */}
        <Textarea
          error={getFieldError("tradeInNotes")}
          label="Trade-In Notes & Delivery Logistics (Optional)"
          placeholder="Specify if you wish to appraise a current vehicle, provide your private address for at-home delivery, or note garage height/charging specifications."
          rows={3}
          {...register("tradeInNotes")}
        />

        {/* Submission & Microcopy */}
        <div className="flex flex-col gap-2.5 pt-1">
          <button
            className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary-container px-6 font-label-lg font-semibold text-label-lg text-on-primary shadow-xs transition-colors hover:bg-primary active:translate-y-0.5 disabled:opacity-60"
            disabled={isSubmitting}
            type="submit"
          >
            <MdCalendarMonth className="text-xl" />
            <span>
              {isSubmitting
                ? "Routing to Concierge Desk..."
                : "Confirm Private Appointment Request"}
            </span>
          </button>

          <div className="flex items-center justify-center gap-2 text-center text-on-surface-variant">
            <MdVerified className="shrink-0 text-base text-primary" />
            <p className="font-body-sm text-body-sm text-xs">
              Concierge response guaranteed within 60 minutes during standard
              showroom hours. No unsolicited sales calls.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
