import { vehiclesService } from "@/domains/vehicles/services/vehicles.service";
import { ConciergeBanner } from "@/shared/components";
import { InventoryContent } from "../components/inventory-content";
import { InventoryProvider } from "../hooks/use-inventory";

export function InventoryView() {
  const vehicles = vehiclesService.getAllVehicles();

  return (
    <InventoryProvider initialVehicles={vehicles}>
      <div className="relative flex w-full flex-col">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.09] mix-blend-multiply dark:opacity-[0.15] dark:mix-blend-screen dark:invert"
          style={{
            backgroundImage: "url(/images/splatter-bg-v2.jpg)",
            backgroundRepeat: "repeat",
            backgroundSize: "800px",
          }}
        />

        <InventoryContent />

        <ConciergeBanner />
      </div>
    </InventoryProvider>
  );
}
