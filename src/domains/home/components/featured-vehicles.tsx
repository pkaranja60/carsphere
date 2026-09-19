// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { vehiclesService } from "@/domains/vehicles";
import { SectionLayout, VehicleCard } from "@/shared/components";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function FeaturedVehicles() {
  return (
    <SectionLayout className="mt-space-lg">
      <div className="mb-space-lg flex flex-col items-start justify-between gap-space-sm md:flex-row md:items-end">
        <div>
          <span className="mb-space-xs block font-label-sm font-semibold text-label-sm text-primary uppercase tracking-widest">
            Current Showroom Showcase
          </span>
          <h2 className="font-headline-lg font-semibold text-headline-lg text-on-surface tracking-tight">
            Handpicked Featured Acquisitions
          </h2>
        </div>
        <Link
          className="inline-flex items-center gap-space-xs font-label-lg font-semibold text-label-lg text-on-surface transition-colors hover:text-primary"
          href="#"
        >
          <span>View All Featured Vehicles</span>
          <MdArrowForward className="text-lg" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
        {vehiclesService.getFeaturedVehicles().map((vehicle) => (
          <VehicleCard key={vehicle.id} {...vehicle} />
        ))}
      </div>
    </SectionLayout>
  );
}
