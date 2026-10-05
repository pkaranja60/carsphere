// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { MdCheckCircle } from "react-icons/md";
import type { VehicleDetail } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleNarrativeOptionsProps {
  vehicle: VehicleDetail;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleNarrativeOptions({
  vehicle,
}: VehicleNarrativeOptionsProps) {
  return (
    <section
      className="w-full bg-surface pt-12 pb-6 sm:pt-16 sm:pb-8"
      id="overview"
    >
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <span className="font-label-sm font-semibold text-label-sm text-primary uppercase tracking-widest">
              Architectural Provenance
            </span>
            <h2 className="font-bold font-display text-headline-lg text-on-surface tracking-tight">
              Curated by Motoring Specialists
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Every vehicle accepted into the Drivez Private Client Allocation
              is subjected to rigorous cosmetic, structural, and mechanical
              scrutiny before public release.
            </p>

            <div className="space-y-3 border-border border-t pt-4">
              <div className="flex items-center gap-4 py-2">
                <span className="font-bold font-display text-[2.5rem] text-primary leading-none">
                  {vehicle.batteryHealthSoh}
                </span>
                <div>
                  <p className="font-label-md font-semibold text-label-md text-on-surface">
                    High-Voltage Battery SOH
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Performance Battery Plus (93.4 kWh)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 py-2">
                <span className="font-bold font-display text-[2.5rem] text-tertiary leading-none">
                  {vehicle.paintDepthMil}
                </span>
                <div>
                  <p className="font-label-md font-semibold text-label-md text-on-surface">
                    Original Factory Paint Depth
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Consistent 4.2–4.8 mils on all panels
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-8">
            <div className="space-y-4 border-0 bg-transparent p-0 shadow-none md:rounded-xl md:border md:border-border md:bg-surface-container-lowest md:p-8 md:shadow-sm">
              <h3 className="font-bold font-display text-headline-sm text-on-surface">
                Vehicle Narrative &amp; Configuration
              </h3>
              {vehicle.narrativeParagraphs.map((paragraph) => (
                <p
                  className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                  key={paragraph.slice(0, 36)}
                >
                  {paragraph}
                </p>
              ))}

              <div className="border-border border-t pt-4">
                <h4 className="mb-3.5 font-label-md font-semibold text-label-md text-on-surface uppercase tracking-wider">
                  Key Factory Optional Equipment
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {vehicle.factoryOptions.map((opt) => (
                    <div
                      className="flex items-start gap-2.5 rounded-lg border border-border bg-surface-container-low p-3.5"
                      key={opt.id}
                    >
                      <MdCheckCircle className="mt-0.5 shrink-0 text-lg text-primary" />
                      <span className="font-body-sm font-medium text-body-sm text-on-surface">
                        {opt.name} · {opt.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
