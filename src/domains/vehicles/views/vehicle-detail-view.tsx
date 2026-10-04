// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import {
  VehicleAnchorNav,
  VehicleBookingSection,
  VehicleBreadcrumbsHeader,
  VehicleCuratedAlternatives,
  VehicleGallery,
  VehicleInspectionReport,
  VehicleNarrativeOptions,
  VehicleSpecsMatrix,
  VehicleStickyReservation,
  VehicleWarrantyFinancial,
} from "../components";
import type { VehicleDetail } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleDetailViewProps {
  vehicle: VehicleDetail;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleDetailView({ vehicle }: VehicleDetailViewProps) {
  const vehicleTitle = `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim}`;

  return (
    <div className="relative flex w-full flex-col">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.09] mix-blend-multiply dark:opacity-[0.15] dark:mix-blend-screen dark:invert"
        style={{
          backgroundImage: "url(/images/splatter-bg-v2.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
        }}
      />

      <VehicleBreadcrumbsHeader vehicle={vehicle} />

      <section className="relative z-10 w-full bg-surface pb-14">
        <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <VehicleGallery vehicle={vehicle} />
            </div>
            <div className="lg:col-span-5">
              <VehicleStickyReservation vehicle={vehicle} />
            </div>
          </div>
        </div>
      </section>

      <VehicleAnchorNav price={vehicle.price} />

      <div className="relative z-10">
        <VehicleNarrativeOptions vehicle={vehicle} />

        <VehicleSpecsMatrix specs={vehicle.specsMatrix} />

        <VehicleInspectionReport
          inspectionDate={vehicle.inspectionDate}
          items={vehicle.inspectionItems}
          technician={vehicle.certifiedTechnician}
        />

        <VehicleWarrantyFinancial
          financialSchedule={vehicle.financialSchedule}
          warrantyItems={vehicle.warrantyItems}
        />

        <VehicleBookingSection
          allocationRef={vehicle.allocationNumber}
          vehicleTitle={vehicleTitle}
        />

        <VehicleCuratedAlternatives
          alternatives={vehicle.curatedAlternatives}
        />
      </div>
    </div>
  );
}
