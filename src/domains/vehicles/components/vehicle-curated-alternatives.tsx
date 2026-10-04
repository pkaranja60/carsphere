// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { VehicleCard } from "@/shared/components";
import type { Vehicle } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleCuratedAlternativesProps {
  alternatives: Vehicle[];
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleCuratedAlternatives({
  alternatives,
}: VehicleCuratedAlternativesProps) {
  if (alternatives.length === 0) {
    return null;
  }

  return (
    <section className="w-full border-border border-t bg-surface-container-low py-16">
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-1 block font-label-sm font-semibold text-label-sm text-primary uppercase tracking-widest">
              Similar Performance Portfolios
            </span>
            <h2 className="font-bold font-display text-headline-lg text-on-surface tracking-tight">
              Curated Alternatives in Allocation
            </h2>
          </div>
          <Link
            className="flex items-center gap-1.5 font-label-lg font-semibold text-label-lg text-on-surface transition-colors hover:text-primary"
            href="/inventory"
          >
            <span>Explore Entire Portfolio</span>
            <MdArrowForward className="text-lg" />
          </Link>
        </div>

        <div className="flex snap-x gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {alternatives.map((vehicle) => (
            <div
              className="w-[280px] shrink-0 snap-start md:w-auto"
              key={vehicle.id}
            >
              <VehicleCard {...vehicle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
