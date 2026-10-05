// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { ServicePillar, ServiceTabKey } from "../types/services.types";
import { ServicesPillarCard } from "./services-pillar-card";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ServicesPillarsSectionProps {
  onSelectTab: (tab: ServiceTabKey) => void;
  pillars: ServicePillar[];
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ServicesPillarsSection({
  pillars,
  onSelectTab,
}: ServicesPillarsSectionProps) {
  return (
    <section className="w-full border-border/80 border-t bg-surface-container-low py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <span className="font-label-sm font-semibold text-label-sm text-primary uppercase tracking-wider">
              Four Pillars
            </span>
            <h2 className="mt-1 font-bold font-display text-headline-md text-on-surface sm:text-headline-lg">
              Engineered Advisory &amp; Acquisition
            </h2>
          </div>
          <p className="max-w-md font-body-sm text-body-sm text-on-surface-variant leading-relaxed sm:text-body-md">
            Structured with architectural precision for individual acquisitions
            or comprehensive multi-vehicle private collections.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-space-lg">
          {pillars.map((pillar) => (
            <ServicesPillarCard
              key={pillar.id}
              onSelectTab={onSelectTab}
              pillar={pillar}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
