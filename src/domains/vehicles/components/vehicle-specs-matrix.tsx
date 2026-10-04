// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { SpecMatrixItem } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces & Grouping
// ─────────────────────────────────────────────

interface VehicleSpecsMatrixProps {
  specs: SpecMatrixItem[];
}

interface SpecGroup {
  category: string;
  items: SpecMatrixItem[];
}

function groupSpecs(specs: SpecMatrixItem[]): SpecGroup[] {
  return [
    {
      category: "Powertrain & Performance",
      items: specs.slice(0, 2),
    },
    {
      category: "Transmission & Drivetrain",
      items: specs.slice(2, 4),
    },
    {
      category: "Battery & Charging Architecture",
      items: specs.slice(4, 6),
    },
    {
      category: "Chassis, Dimensions & Weights",
      items: specs.slice(6, 8),
    },
  ];
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleSpecsMatrix({ specs }: VehicleSpecsMatrixProps) {
  const groups = groupSpecs(specs);

  return (
    <section className="w-full bg-surface py-12" id="specs">
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-1 block font-label-sm font-semibold text-label-sm text-primary uppercase tracking-widest">
              Precision Engineering
            </span>
            <h2 className="font-bold font-display text-headline-lg text-on-surface tracking-tight">
              Technical Specifications Sheet
            </h2>
          </div>
          <p className="max-w-md font-body-sm text-body-sm text-on-surface-variant">
            Verified performance ratings and dimensional attributes tested under
            standardized SAE and EPA protocols.
          </p>
        </div>

        <div className="space-y-6">
          {groups.map((group) => (
            <div
              className="overflow-hidden border-0 bg-transparent shadow-none md:rounded-xl md:border md:border-border md:bg-surface-container-lowest md:shadow-sm"
              key={group.category}
            >
              <div className="border-border border-b bg-transparent px-0 py-2.5 md:bg-surface-container-low md:px-6 md:py-3.5">
                <h3 className="font-bold font-label-lg text-label-lg text-on-surface uppercase tracking-wider">
                  {group.category}
                </h3>
              </div>

              <div className="divide-y divide-border">
                {group.items.map((item) => (
                  <div
                    className="grid grid-cols-1 items-baseline gap-2 px-0 py-3.5 transition-colors hover:bg-surface-container-low/50 sm:grid-cols-12 sm:gap-4 md:px-6 md:py-4"
                    key={item.title}
                  >
                    <div className="sm:col-span-4 lg:col-span-3">
                      <span className="font-label-md font-semibold text-label-md text-on-surface-variant">
                        {item.title}
                      </span>
                    </div>
                    <div className="sm:col-span-4 lg:col-span-4">
                      <span className="font-bold font-display text-base text-on-surface sm:text-headline-sm">
                        {item.value}
                      </span>
                    </div>
                    <div className="sm:col-span-4 lg:col-span-5">
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
