"use client";

import { useCallback, useMemo } from "react";
import { MdFilterList, MdGridView, MdViewList } from "react-icons/md";
import { Select, SelectItem } from "@/shared/components";
import { type SortOption, useInventory } from "../hooks/use-inventory";

export function InventoryToolbar() {
  const {
    totalItems,
    currentPage,
    filteredVehicles,
    viewMode,
    setViewMode,
    sortOption,
    setSortOption,
    toggleFilterDrawer,
  } = useInventory();

  const rangeDisplay = useMemo(() => {
    if (totalItems === 0) {
      return "0";
    }
    const start = (currentPage - 1) * 6 + 1;
    const end = start + filteredVehicles.length - 1;
    return `${start} - ${end}`;
  }, [currentPage, filteredVehicles.length, totalItems]);

  const handleSelectionChange = useCallback(
    (key: React.Key | React.Key[] | null | Set<React.Key>) => {
      let selected: SortOption | undefined;

      if (typeof key === "string" || typeof key === "number") {
        selected = key as SortOption;
      } else if (Array.isArray(key)) {
        selected = key[0] as SortOption;
      } else if (key && typeof key === "object" && "size" in key) {
        selected = Array.from(key as Set<string>)[0] as SortOption;
      }

      if (selected) {
        setSortOption(selected);
      }
    },
    [setSortOption]
  );

  const setGridView = useCallback(() => {
    setViewMode("grid");
  }, [setViewMode]);

  const setListView = useCallback(() => {
    setViewMode("list");
  }, [setViewMode]);

  return (
    <div className="mb-6 flex flex-col gap-3 border-border border-b pb-4">
      {/* Row 1: Item Count & Live Availability */}
      <div className="flex items-center justify-between gap-2">
        <span className="whitespace-nowrap font-medium text-on-surface text-xs sm:text-label-md">
          Showing {rangeDisplay} of {totalItems} Vehicles
        </span>
        <span className="flex items-center gap-1.5 whitespace-nowrap font-medium text-on-surface-variant text-xs">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />{" "}
          Instant Availability
        </span>
      </div>

      {/* Row 2: Mobile Filter Button + Fluid Sort + View Mode */}
      <div className="flex items-center justify-between gap-2">
        <button
          className="flex shrink-0 items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 font-label-sm font-medium text-on-surface text-xs transition-colors hover:bg-surface-container-low lg:hidden"
          onClick={toggleFilterDrawer}
          type="button"
        >
          <MdFilterList className="text-base text-primary" />
          <span>Filters</span>
        </button>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 font-label-md">
          <span className="hidden shrink-0 font-medium text-on-surface-variant text-xs uppercase tracking-wider sm:inline">
            Sort:
          </span>
          <div className="relative min-w-0 max-w-xs flex-1 sm:w-60">
            <Select
              aria-label="Sort inventory"
              className="w-full"
              onChange={handleSelectionChange}
              value={sortOption}
            >
              <SelectItem id="featured">
                Featured & Curated Allocation
              </SelectItem>
              <SelectItem id="price-asc">Price: Low to High</SelectItem>
              <SelectItem id="price-desc">Price: High to Low</SelectItem>
              <SelectItem id="mileage-asc">Mileage: Low to High</SelectItem>
            </Select>
          </div>
        </div>

        {/* View toggle icons */}
        <div className="flex shrink-0 items-center overflow-hidden rounded-lg border border-border bg-surface">
          <button
            className={`p-1.5 transition-colors ${viewMode === "grid" ? "bg-surface-container-low text-on-surface" : "text-on-surface-variant hover:text-on-surface"}`}
            onClick={setGridView}
            title="Grid View"
            type="button"
          >
            <MdGridView className="text-xl sm:text-2xl" />
          </button>
          <button
            className={`p-1.5 transition-colors ${viewMode === "list" ? "bg-surface-container-low text-on-surface" : "text-on-surface-variant hover:text-on-surface"}`}
            onClick={setListView}
            title="List View"
            type="button"
          >
            <MdViewList className="text-xl sm:text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
