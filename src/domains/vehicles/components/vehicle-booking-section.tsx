// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { MdDevices, MdOutlineHome, MdOutlineStore } from "react-icons/md";
import { VehicleBookingForm } from "./vehicle-booking-form";

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
  return (
    <section
      className="w-full border-border/60 border-t bg-surface pt-4 pb-16 sm:pt-6 sm:pb-20"
      id="inquiry"
    >
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

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4 rounded-xl border border-border bg-surface-container-lowest p-3 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-container-low text-primary">
                  <MdOutlineStore className="text-2xl" />
                </div>
                <div>
                  <p className="font-label-lg font-semibold text-label-lg text-on-surface">
                    Private Beverly Hills Showroom Suite
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
            <VehicleBookingForm
              allocationRef={allocationRef}
              vehicleTitle={vehicleTitle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
