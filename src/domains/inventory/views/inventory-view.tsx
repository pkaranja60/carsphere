import { vehiclesService } from "@/domains/vehicles/services/vehicles.service";
import {
  ConciergeBanner,
  FilterPill,
  PageHeader,
  Pagination,
  VehicleCard,
} from "@/shared/components";
import { InventorySidebar } from "../components/inventory-sidebar";
import { InventoryToolbar } from "../components/inventory-toolbar";

export function InventoryView() {
  const vehicles = vehiclesService.getAllVehicles();

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
      <PageHeader
        breadcrumbs={[
          { href: "/", label: "Home" },
          { isCurrent: true, label: "All Inventory" },
        ]}
        description="Explore our collection of independently verified performance grand tourers, executive coupes, and meticulously maintained everyday drivers. Every chassis is verified via our 150-point heritage protocol with transparent, upfront pricing."
        itemCount={482}
        liveStatus="Beverly Hills & Nationwide Allocation Synced"
        title="Curated Vehicle Inventory"
      >
        <FilterPill count={482} isActive label="All Vehicles" />
        <FilterPill count={318} label="Certified Pre-Owned" />
        <FilterPill count={184} label="Everyday Excellence <$45k" />
        <FilterPill count={142} label="Premium & Performance" />
        <FilterPill count={82} label="Electric & Hybrid" />
      </PageHeader>

      <main className="grow py-8">
        <div className="mx-auto flex max-w-400 flex-col items-start gap-8 px-margin-mobile md:px-margin lg:flex-row">
          <InventorySidebar />

          <section className="w-full flex-1" data-purpose="inventory-results">
            <InventoryToolbar />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} {...vehicle} />
              ))}
            </div>

            <Pagination currentPage={1} totalItems={482} totalPages={41} />
          </section>
        </div>
      </main>

      <ConciergeBanner />
    </div>
  );
}
