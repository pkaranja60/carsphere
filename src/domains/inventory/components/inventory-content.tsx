"use client";

import { useCallback } from "react";
import {
  FilterPill,
  PageHeader,
  Pagination,
  VehicleCard,
} from "@/shared/components";
import { useInventory } from "../hooks/use-inventory";
import { InventorySidebar } from "./inventory-sidebar";
import { InventoryToolbar } from "./inventory-toolbar";

export function InventoryContent() {
  const {
    filteredVehicles,
    totalItems,
    totalPages,
    currentPage,
    setCurrentPage,
    selectedSegments,
    selectedPowertrains,
    resetFilters,
    toggleSegment,
    togglePowertrain,
    isCPO,
    toggleCPO,
    viewMode,
  } = useInventory();

  const handlePillClick = useCallback(
    (type: string) => {
      resetFilters();
      if (type === "cpo") {
        toggleCPO();
      } else if (type === "everyday") {
        toggleSegment("Everyday Excellence ($24k-$45k)");
      } else if (type === "performance") {
        toggleSegment("Performance ($68k+)");
      } else if (type === "electric") {
        togglePowertrain("Electric");
        togglePowertrain("Hybrid / PHEV");
      }
    },
    [resetFilters, toggleSegment, togglePowertrain, toggleCPO]
  );

  const isAll =
    selectedSegments.has("All Dimensions") &&
    selectedPowertrains.size === 0 &&
    !isCPO;
  const isEveryday = selectedSegments.has("Everyday Excellence ($24k-$45k)");
  const isPerformance = selectedSegments.has("Performance ($68k+)");
  const isElectric =
    selectedPowertrains.has("Electric") ||
    selectedPowertrains.has("Hybrid / PHEV");

  const handleAllClick = useCallback(
    () => handlePillClick("all"),
    [handlePillClick]
  );
  const handleCpoClick = useCallback(
    () => handlePillClick("cpo"),
    [handlePillClick]
  );
  const handleEverydayClick = useCallback(
    () => handlePillClick("everyday"),
    [handlePillClick]
  );
  const handlePerformanceClick = useCallback(
    () => handlePillClick("performance"),
    [handlePillClick]
  );
  const handleElectricClick = useCallback(
    () => handlePillClick("electric"),
    [handlePillClick]
  );

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { href: "/", label: "Home" },
          { isCurrent: true, label: "All Inventory" },
        ]}
        description="Explore our collection of independently verified performance grand tourers, executive coupes, and meticulously maintained everyday drivers. Every chassis is verified via our 150-point heritage protocol with transparent, upfront pricing."
        itemCount={totalItems}
        liveStatus="Beverly Hills & Nationwide Allocation Synced"
        title="Curated Vehicle Inventory"
      >
        <FilterPill
          count={isAll ? totalItems : undefined}
          isActive={isAll}
          label="All Vehicles"
          onClick={handleAllClick}
        />
        <FilterPill
          count={isCPO ? totalItems : undefined}
          isActive={isCPO}
          label="Certified Pre-Owned"
          onClick={handleCpoClick}
        />
        <FilterPill
          count={isEveryday ? totalItems : undefined}
          isActive={isEveryday}
          label="Everyday Excellence <$45k"
          onClick={handleEverydayClick}
        />
        <FilterPill
          count={isPerformance ? totalItems : undefined}
          isActive={isPerformance}
          label="Premium & Performance"
          onClick={handlePerformanceClick}
        />
        <FilterPill
          count={isElectric ? totalItems : undefined}
          isActive={isElectric}
          label="Electric & Hybrid"
          onClick={handleElectricClick}
        />
      </PageHeader>

      <main className="grow py-8">
        <div className="mx-auto flex max-w-400 flex-col items-start gap-8 px-margin-mobile md:px-margin lg:flex-row">
          <InventorySidebar />

          <section className="w-full flex-1" data-purpose="inventory-results">
            <InventoryToolbar />

            {filteredVehicles.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
                    : "flex flex-col gap-6"
                }
              >
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard
                    key={vehicle.id}
                    layout={viewMode === "grid" ? "vertical" : "horizontal"}
                    {...vehicle}
                  />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-on-surface-variant">
                <p className="font-label-lg">
                  No vehicles found matching your criteria.
                </p>
                <p className="mt-2 font-body-sm">
                  Try adjusting your filters or search query.
                </p>
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                  totalItems={totalItems}
                  totalPages={totalPages}
                />
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
