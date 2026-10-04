"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { type ChangeEvent, useCallback } from "react";
import {
  MdCalendarMonth,
  MdCheckCircle,
  MdDevices,
  MdMeetingRoom,
  MdOutlineHome,
} from "react-icons/md";
import { useBookingForm } from "../hooks/use-booking-form";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleBookingSectionProps {
  allocationRef: string;
  vehicleTitle: string;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleBookingSection({
  allocationRef,
  vehicleTitle,
}: VehicleBookingSectionProps) {
  const {
    errors,
    formData,
    handleSubmit,
    isSubmitting,
    isSuccess,
    resetForm,
    updateField,
  } = useBookingForm(vehicleTitle);

  const handleFullNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      updateField("fullName", e.target.value);
    },
    [updateField]
  );

  const handlePhoneChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      updateField("phone", e.target.value);
    },
    [updateField]
  );

  const handleEmailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      updateField("email", e.target.value);
    },
    [updateField]
  );

  const handleFormatChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      updateField("consultationFormat", e.target.value);
    },
    [updateField]
  );

  const handleDateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      updateField("preferredDate", e.target.value);
    },
    [updateField]
  );

  const handleWindowChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      updateField("preferredWindow", e.target.value);
    },
    [updateField]
  );

  const handleNotesChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      updateField("tradeInNotes", e.target.value);
    },
    [updateField]
  );

  return (
    <section className="w-full bg-surface py-20" id="inquiry">
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="space-y-3">
              <span className="font-label-sm font-semibold text-label-sm text-primary uppercase tracking-widest">
                Private Client Services
              </span>
              <h2 className="font-bold font-display text-headline-lg text-on-surface tracking-tight">
                Experience the {vehicleTitle.split(" ").slice(1, 3).join(" ")}{" "}
                on Your Terms
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We arrange bespoke viewings tailored to your schedule. Whether
                hosted in our Beverly Hills private tasting suite, delivered
                directly to your home for a 24-hour evaluation, or reviewed via
                ultra-high-definition interactive video consultation.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 rounded-xl border border-border bg-surface-container-lowest p-3 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-container-low text-primary">
                  <MdMeetingRoom className="text-2xl" />
                </div>
                <div>
                  <p className="font-label-lg font-semibold text-label-lg text-on-surface">
                    Beverly Hills Private Suite
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Quiet presentation lounge with dedicated technical
                    specialist
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-border bg-surface-container-lowest p-3 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-container-low text-primary">
                  <MdOutlineHome className="text-2xl" />
                </div>
                <div>
                  <p className="font-label-lg font-semibold text-label-lg text-on-surface">
                    At-Home White Glove Test Drive
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Delivered directly to your residence in greater Los Angeles
                    / SoCal
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-border bg-surface-container-lowest p-3 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-container-low text-primary">
                  <MdDevices className="text-2xl" />
                </div>
                <div>
                  <p className="font-label-lg font-semibold text-label-lg text-on-surface">
                    Interactive 4K Remote Walkaround
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Live paint depth inspection and acoustic startup over secure
                    stream
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {isSuccess ? (
              <div className="space-y-5 rounded-xl border border-border bg-surface-container-lowest p-5 text-center shadow-none md:p-10 md:shadow-md">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  <MdCheckCircle className="text-4xl" />
                </div>
                <h3 className="font-bold font-display text-headline-sm text-on-surface">
                  Appointment Request Transmitted
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Thank you,{" "}
                  <strong className="text-on-surface">
                    {formData.fullName}
                  </strong>
                  . Your consultation request for the {vehicleTitle} has been
                  priority-routed to your vehicle specialist.
                </p>
                <button
                  className="rounded-lg bg-primary-container px-6 py-2.5 font-label-md font-semibold text-label-md text-on-primary transition hover:bg-primary"
                  onClick={resetForm}
                  type="button"
                >
                  Schedule Another Viewing
                </button>
              </div>
            ) : (
              <form
                className="space-y-4 rounded-xl border border-border bg-surface-container-lowest p-5 shadow-none md:p-10 md:shadow-md"
                onSubmit={handleSubmit}
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
                  <div className="space-y-1">
                    <label
                      className="font-label-md font-semibold text-label-md text-on-surface"
                      htmlFor="booking-fullName"
                    >
                      Full Legal Name *
                    </label>
                    <input
                      className="h-11 w-full rounded-lg border border-border bg-surface-container-low px-3.5 font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:bg-surface-container-lowest focus:outline-none"
                      id="booking-fullName"
                      onChange={handleFullNameChange}
                      placeholder="e.g. Harrison Vance"
                      required
                      type="text"
                      value={formData.fullName}
                    />
                    {errors.fullName ? (
                      <span className="font-label-sm text-error text-xs">
                        {errors.fullName}
                      </span>
                    ) : null}
                  </div>

                  <div className="space-y-1">
                    <label
                      className="font-label-md font-semibold text-label-md text-on-surface"
                      htmlFor="booking-phone"
                    >
                      Contact Phone *
                    </label>
                    <input
                      className="h-11 w-full rounded-lg border border-border bg-surface-container-low px-3.5 font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:bg-surface-container-lowest focus:outline-none"
                      id="booking-phone"
                      onChange={handlePhoneChange}
                      placeholder="+1 (310) 000-0000"
                      required
                      type="tel"
                      value={formData.phone}
                    />
                    {errors.phone ? (
                      <span className="font-label-sm text-error text-xs">
                        {errors.phone}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label
                      className="font-label-md font-semibold text-label-md text-on-surface"
                      htmlFor="booking-email"
                    >
                      Email Address *
                    </label>
                    <input
                      className="h-11 w-full rounded-lg border border-border bg-surface-container-low px-3.5 font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:bg-surface-container-lowest focus:outline-none"
                      id="booking-email"
                      onChange={handleEmailChange}
                      placeholder="h.vance@privateoffice.com"
                      required
                      type="email"
                      value={formData.email}
                    />
                    {errors.email ? (
                      <span className="font-label-sm text-error text-xs">
                        {errors.email}
                      </span>
                    ) : null}
                  </div>

                  <div className="space-y-1">
                    <label
                      className="font-label-md font-semibold text-label-md text-on-surface"
                      htmlFor="booking-format"
                    >
                      Preferred Consultation Format *
                    </label>
                    <select
                      className="h-11 w-full rounded-lg border border-border bg-surface-container-low px-3.5 font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:bg-surface-container-lowest focus:outline-none"
                      id="booking-format"
                      onChange={handleFormatChange}
                      value={formData.consultationFormat}
                    >
                      <option>In-Person: Beverly Hills Showroom Suite</option>
                      <option>
                        At-Home: White Glove Doorstep Demonstration
                      </option>
                      <option>
                        Remote: Live 4K Video Concierge Walkaround
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label
                      className="font-label-md font-semibold text-label-md text-on-surface"
                      htmlFor="booking-date"
                    >
                      Preferred Date *
                    </label>
                    <input
                      className="h-11 w-full rounded-lg border border-border bg-surface-container-low px-3.5 font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:bg-surface-container-lowest focus:outline-none"
                      id="booking-date"
                      onChange={handleDateChange}
                      required
                      type="date"
                      value={formData.preferredDate}
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      className="font-label-md font-semibold text-label-md text-on-surface"
                      htmlFor="booking-window"
                    >
                      Preferred Window *
                    </label>
                    <select
                      className="h-11 w-full rounded-lg border border-border bg-surface-container-low px-3.5 font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:bg-surface-container-lowest focus:outline-none"
                      id="booking-window"
                      onChange={handleWindowChange}
                      value={formData.preferredWindow}
                    >
                      <option>Morning (10:00 AM – 1:00 PM)</option>
                      <option>Afternoon (1:00 PM – 5:00 PM)</option>
                      <option>Evening Twilight (5:00 PM – 7:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    className="font-label-md font-semibold text-label-md text-on-surface"
                    htmlFor="booking-notes"
                  >
                    Trade-In Vehicle / Notes (Optional)
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-border bg-surface-container-low p-3 font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:bg-surface-container-lowest focus:outline-none"
                    id="booking-notes"
                    onChange={handleNotesChange}
                    placeholder="Vehicle Year, Make, Model, Mileage or specific questions..."
                    rows={2}
                    value={formData.tradeInNotes}
                  />
                </div>

                <div className="pt-2">
                  <button
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container px-6 py-3.5 font-label-lg font-semibold text-label-lg text-on-primary shadow-none transition-all hover:bg-primary active:translate-y-0.5 disabled:opacity-50 sm:shadow-sm"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    <MdCalendarMonth className="text-xl" />
                    <span>
                      {isSubmitting
                        ? "Transmitting Request..."
                        : "Confirm Private Appointment Request"}
                    </span>
                  </button>
                  <p className="mt-3 text-center font-label-sm text-label-sm text-on-surface-variant">
                    Concierge response guaranteed within 60 minutes during
                    standard showroom hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
