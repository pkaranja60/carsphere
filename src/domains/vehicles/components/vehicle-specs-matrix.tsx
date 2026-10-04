// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { ElementType } from "react";
import {
  MdAllInclusive,
  MdElectricBolt,
  MdLuggage,
  MdOutlineScale,
  MdRoute,
  MdSpeed,
  MdTune,
} from "react-icons/md";
import type { SpecMatrixItem } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Icon Resolver
// ─────────────────────────────────────────────

const ICON_MAP: Record<string, ElementType> = {
  all_inclusive: MdAllInclusive,
  bolt: MdElectricBolt,
  electric_bolt: MdElectricBolt,
  luggage: MdLuggage,
  route: MdRoute,
  scale: MdOutlineScale,
  speed: MdSpeed,
  tune: MdTune,
};

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleSpecsMatrixProps {
  specs: SpecMatrixItem[];
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleSpecsMatrix({ specs }: VehicleSpecsMatrixProps) {
  return (
    <section
      className="w-full border-border border-y bg-surface-container-low py-16"
      id="specs"
    >
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-1 block font-label-sm font-semibold text-label-sm text-primary uppercase tracking-widest">
              Precision Engineering
            </span>
            <h2 className="font-bold font-display text-headline-lg text-on-surface tracking-tight">
              Technical Specifications Matrix
            </h2>
          </div>
          <p className="max-w-md font-body-sm text-body-sm text-on-surface-variant">
            Verified performance ratings and dimensional attributes tested under
            standardized SAE and EPA protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((item) => {
            const Icon = ICON_MAP[item.iconName] || MdElectricBolt;
            return (
              <div
                className="flex h-44 flex-col justify-between rounded-xl border border-border bg-surface-container-lowest p-6 shadow-sm transition hover:shadow-md"
                key={item.title}
              >
                <div className="flex items-center justify-between">
                  <span className="font-label-sm font-semibold text-label-sm text-on-surface-variant uppercase tracking-wider">
                    {item.title}
                  </span>
                  <Icon className="text-primary text-xl" />
                </div>
                <div>
                  <span className="mb-0.5 block font-bold font-display text-headline-sm text-on-surface">
                    {item.value}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
