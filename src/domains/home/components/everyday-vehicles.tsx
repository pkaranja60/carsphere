import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { vehiclesService } from "@/domains/vehicles";
import { SectionLayout, VehicleCard } from "@/shared/components";

export function EverydayVehicles() {
  return (
    <SectionLayout className="mt-space-2xl pb-space-xl">
      <div className="mb-space-lg flex flex-col items-start justify-between gap-space-sm md:flex-row md:items-end">
        <div>
          <h2 className="font-headline-lg font-semibold text-headline-lg text-on-surface tracking-tight">
            Practicality Meets Prestige
          </h2>
        </div>
        <Link
          className="inline-flex items-center gap-space-xs font-label-lg font-semibold text-label-lg text-on-surface transition-colors hover:text-primary"
          href="#"
        >
          <span>View All Everyday Vehicles</span>
          <MdArrowForward className="text-lg" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
        {vehiclesService.getEverydayVehicles().map((vehicle) => (
          <VehicleCard key={vehicle.id} {...vehicle} />
        ))}
      </div>
    </SectionLayout>
  );
}
