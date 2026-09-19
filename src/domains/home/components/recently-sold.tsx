import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { vehiclesService } from "@/domains/vehicles";
import { SectionLayout, VehicleCard } from "@/shared/components";

export function RecentlySold() {
  return (
    <SectionLayout>
      <div className="mb-space-lg flex flex-col justify-between gap-space-sm sm:flex-row sm:items-end">
        <div>
          <h2 className="mb-space-xs font-bold font-display text-headline-lg text-on-surface tracking-tight">
            Recently Delivered
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Explore highly desirable vehicles recently acquired by our clients.
          </p>
        </div>
        <Link
          className="group flex items-center gap-1 font-label-lg font-semibold text-label-lg text-primary transition-colors hover:text-primary-hover"
          href="#"
        >
          View All Sold Inventory
          <MdArrowForward className="text-xl transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-space-md lg:grid-cols-4">
        {vehiclesService.getRecentlySoldVehicles().map((vehicle) => (
          <div className="relative h-full" key={vehicle.id}>
            <div className="absolute inset-0 z-10 bg-surface/10 mix-blend-color" />
            <VehicleCard {...vehicle} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
