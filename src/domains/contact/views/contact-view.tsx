"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { Suspense, useMemo } from "react";
import { vehiclesService } from "@/domains/vehicles";
import {
  ContactBookingForm,
  ContactBookingSuccess,
  ContactDepartmentsCard,
  ContactFormatSelector,
  ContactHero,
  ContactShowroomCard,
  ContactSpecialistCard,
} from "../components";
import { useContactBooking } from "../hooks";
import { contactService } from "../services";

// ─────────────────────────────────────────────
// SECTION: Inner Content Component
// ─────────────────────────────────────────────

function ContactContent() {
  const bookingState = useContactBooking();
  const formats = useMemo(() => contactService.getViewingFormats(), []);
  const showroom = useMemo(() => contactService.getShowroomInfo(), []);
  const specialist = useMemo(() => contactService.getDedicatedHost(), []);
  const departments = useMemo(() => contactService.getDepartmentLines(), []);
  const vehicles = useMemo(() => vehiclesService.getAllVehicles(), []);

  const {
    consultationFormat,
    handleFormatSelect,
    isSuccess,
    resetForm,
    submittedData,
  } = bookingState;

  return (
    <div className="relative flex w-full flex-col">
      {/* Background Texture Overlay matching CarSphere conventions */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.09] mix-blend-multiply dark:opacity-[0.15] dark:mix-blend-screen dark:invert"
        style={{
          backgroundImage: "url(/images/splatter-bg-v2.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
        }}
      />

      <ContactHero />

      <ContactFormatSelector
        formats={formats}
        onSelectFormat={handleFormatSelect}
        selectedFormat={consultationFormat}
      />

      {/* Main Split Layout: 7 Cols Booking Form / 5 Cols Directory Sidebar */}
      <section className="relative z-10 mx-auto w-full max-w-400 px-margin-mobile pb-16 sm:pb-20 md:px-margin">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-space-xl">
          <div className="lg:col-span-7">
            {isSuccess && submittedData ? (
              <ContactBookingSuccess
                onReset={resetForm}
                submittedData={submittedData}
              />
            ) : (
              <ContactBookingForm
                bookingState={bookingState}
                vehicles={vehicles}
              />
            )}
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <ContactShowroomCard showroom={showroom} />
            <ContactSpecialistCard host={specialist} />
            <ContactDepartmentsCard departments={departments} />
          </div>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────
// SECTION: View Component
// ─────────────────────────────────────────────

export function ContactView() {
  return (
    <Suspense fallback={null}>
      <ContactContent />
    </Suspense>
  );
}
