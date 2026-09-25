"use client";

import { useCallback } from "react";

import { MdSearch } from "react-icons/md";
import { useInventory } from "../hooks/use-inventory";
import { InventoryActiveTags } from "./inventory-active-tags";
import { InventorySidebarMake } from "./inventory-sidebar-make";
import { InventorySidebarPrice } from "./inventory-sidebar-price";

export function InventorySidebar() {
  const {
    searchQuery,
    setSearchQuery,
    priceRange,
    selectedMakes,
    selectedBodyTypes,
    toggleBodyType,
    selectedPowertrains,
    togglePowertrain,
    selectedSegments,
    toggleSegment,
    isCPO,
    resetFilters,
  } = useInventory();

  const activeCount =
    (searchQuery ? 1 : 0) +
    selectedMakes.size +
    selectedBodyTypes.size +
    selectedPowertrains.size +
    (selectedSegments.has("All Dimensions") ? 0 : selectedSegments.size) +
    (priceRange[0] > 20_000 || priceRange[1] < 250_000 ? 1 : 0) +
    (isCPO ? 1 : 0);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    [setSearchQuery]
  );

  const handleBodyTypeClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { body } = e.currentTarget.dataset;
      if (body) {
        toggleBodyType(body);
      }
    },
    [toggleBodyType]
  );

  const handlePowertrainChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { pt } = e.currentTarget.dataset;
      if (pt) {
        togglePowertrain(pt);
      }
    },
    [togglePowertrain]
  );

  const handleSegmentChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { seg } = e.currentTarget.dataset;
      if (seg) {
        toggleSegment(seg);
      }
    },
    [toggleSegment]
  );

  return (
    <aside
      className="w-full shrink-0 space-y-6 rounded-xl border border-border bg-surface p-5 shadow-level-1 lg:w-70"
      data-purpose="inventory-sidebar"
    >
      {/* Header & Reset */}
      <div className="flex items-center justify-between border-border-strong border-b pb-3">
        <div className="flex items-center gap-2">
          <h2 className="font-label-lg text-on-surface uppercase tracking-tight">
            Filter Selection
          </h2>
          {activeCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary font-bold font-label-sm text-on-primary">
              {activeCount}
            </span>
          )}
        </div>
        <button
          className="font-medium text-on-surface-variant text-xs underline hover:text-on-surface"
          onClick={resetFilters}
          type="button"
        >
          Reset All
        </button>
      </div>

      {/* Active Filter Tags */}
      <InventoryActiveTags />

      {/* Search Input */}
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-on-surface-variant">
          <MdSearch className="text-lg" />
        </span>
        <input
          className="w-full rounded-lg border border-border bg-surface-container-low py-2 pr-3 pl-9 font-body-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          onChange={handleSearchChange}
          placeholder="Search make, model, trim..."
          type="text"
          value={searchQuery}
        />
      </div>

      {/* SEGMENT / ALLOCATION */}
      <div className="space-y-2 pt-2">
        <h3 className="font-label-sm text-on-surface-variant uppercase tracking-wider">
          Segment / Allocation
        </h3>
        <div className="space-y-1.5 text-on-surface text-sm">
          {[
            "All Dimensions",
            "Performance ($68k+)",
            "Everyday Excellence ($24k-$45k)",
          ].map((seg) => (
            <label className="flex cursor-pointer items-center gap-2" key={seg}>
              <input
                checked={selectedSegments.has(seg)}
                className="h-4 w-4 border-border text-primary focus:ring-primary"
                data-seg={seg}
                onChange={handleSegmentChange}
                type="radio"
              />
              <span>{seg}</span>
            </label>
          ))}
        </div>
      </div>

      <InventorySidebarPrice />
      <InventorySidebarMake />

      {/* BODY ARCHITECTURE */}
      <div className="space-y-2 pt-2">
        <h3 className="font-label-sm text-on-surface-variant uppercase tracking-wider">
          Body Architecture
        </h3>
        <div className="flex flex-wrap gap-1.5 font-label-sm">
          {[
            "Sedan",
            "SUV / Crossover",
            "Coupe",
            "Grand Tourer",
            "Wagon / Touring",
          ].map((body) => {
            const isSelected = selectedBodyTypes.has(body);
            return (
              <button
                className={`rounded border px-2.5 py-1 font-medium transition-colors ${isSelected ? "border-transparent bg-on-surface text-surface" : "border-border hover:bg-surface-container-low"}`}
                data-body={body}
                key={body}
                onClick={handleBodyTypeClick}
                type="button"
              >
                {body}
              </button>
            );
          })}
        </div>
      </div>

      {/* POWERTRAIN */}
      <div className="space-y-2 pt-2">
        <h3 className="font-label-sm text-on-surface-variant uppercase tracking-wider">
          Powertrain
        </h3>
        <div className="space-y-1.5 text-on-surface text-sm">
          {["Electric", "Hybrid / PHEV"].map((pt) => (
            <label className="flex cursor-pointer items-center gap-2" key={pt}>
              <input
                checked={selectedPowertrains.has(pt)}
                className="h-3.5 w-3.5 rounded border-border text-primary focus:ring-primary"
                data-pt={pt}
                onChange={handlePowertrainChange}
                type="checkbox"
              />
              <span>{pt}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
