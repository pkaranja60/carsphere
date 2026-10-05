"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { Key } from "react";
import { useCallback } from "react";
import { MdCalendarMonth } from "react-icons/md";
import { Input, Select, SelectItem, Textarea } from "@/shared/components";
import { useBookingForm } from "../hooks/use-booking-form";
import { VehicleBookingSuccess } from "./vehicle-booking-success";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleBookingFormProps {
  allocationRef: string;
  vehicleTitle: string;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleBookingForm({
  allocationRef,
  vehicleTitle,
}: VehicleBookingFormProps) {
  const { form, isSubmitting, isSuccess, onSubmit, resetForm, submittedData } =
    useBookingForm(vehicleTitle);

  const {
    formState: { errors },
    register,
    setValue,
    watch,
  } = form;

  const consultationFormat = watch("consultationFormat");
  const preferredWindow = watch("preferredWindow");

  const handleFormatChange = useCallback(
    (key: Key | null) => {
      if (key) {
        setValue("consultationFormat", String(key), {
          shouldValidate: true,
        });
      }
    },
    [setValue]
  );

  const handleWindowChange = useCallback(
    (key: Key | null) => {
      if (key) {
        setValue("preferredWindow", String(key), {
          shouldValidate: true,
        });
      }
    },
    [setValue]
  );

  if (isSuccess && submittedData) {
    return (
      <VehicleBookingSuccess
        onReset={resetForm}
        submittedData={submittedData}
        vehicleTitle={vehicleTitle}
      />
    );
  }

  return (
    <form
      className="space-y-4 border-0 bg-transparent p-0 shadow-none md:rounded-xl md:border md:border-border md:bg-surface-container-lowest md:p-10 md:shadow-md"
      onSubmit={onSubmit}
    >
      <div className="border-border border-b pb-3">
        <h3 className="font-bold font-display text-headline-sm text-on-surface">
          Schedule Bespoke Viewing
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Vehicle Allocation Ref: {vehicleTitle} (#{allocationRef})
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          error={errors.fullName?.message}
          label="Full Legal Name"
          placeholder="e.g. Harrison Vance"
          required
          {...register("fullName")}
        />

        <Input
          error={errors.phone?.message}
          label="Contact Phone"
          placeholder="+1 (310) 000-0000"
          required
          type="tel"
          {...register("phone")}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          error={errors.email?.message}
          label="Email Address"
          placeholder="client@domain.com"
          required
          type="email"
          {...register("email")}
        />

        <Select
          error={errors.consultationFormat?.message}
          label="Consultation Format"
          onSelectionChange={handleFormatChange}
          selectedKey={consultationFormat}
        >
          <SelectItem id="In-Person: Beverly Hills Showroom Suite">
            In-Person: Beverly Hills Showroom Suite
          </SelectItem>
          <SelectItem id="Private Residence: White-Glove Direct Delivery">
            Private Residence: White-Glove Direct Delivery
          </SelectItem>
          <SelectItem id="UHD Digital Video Consultation & Walkaround">
            UHD Digital Video Consultation & Walkaround
          </SelectItem>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          error={errors.preferredDate?.message}
          label="Preferred Viewing Date"
          required
          type="date"
          {...register("preferredDate")}
        />

        <Select
          error={errors.preferredWindow?.message}
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
          <SelectItem id="Sunset / Evening (4:00 PM – 7:00 PM)">
            Sunset / Evening (4:00 PM – 7:00 PM)
          </SelectItem>
        </Select>
      </div>

      <Textarea
        error={errors.tradeInNotes?.message}
        label="Trade-In Vehicle / Special Client Instructions (Optional)"
        placeholder="e.g. 2021 Porsche Macan GTS trade-in, gated property access..."
        rows={3}
        {...register("tradeInNotes")}
      />

      <div className="pt-2">
        <button
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-container px-6 py-3.5 text-center font-label-lg font-semibold text-label-lg text-on-primary shadow-md transition-colors hover:bg-primary active:translate-y-0.5 disabled:opacity-60"
          disabled={isSubmitting}
          type="submit"
        >
          <MdCalendarMonth className="text-xl" />
          <span>
            {isSubmitting
              ? "Routing to Concierge Desk..."
              : "Confirm Private Viewing Request"}
          </span>
        </button>
        <p className="mt-2 text-center font-body-sm text-on-surface-variant text-xs">
          No commitment required. A private client advisor will contact you
          within 2 hours to confirm logistics.
        </p>
      </div>
    </form>
  );
}
