"use client";

import { useCallback } from "react";
import { MdGridView, MdViewList } from "react-icons/md";
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
  } = useInventory();

  const start = (currentPage - 1) * 9 + 1;
  const end = start + filteredVehicles.length - 1;

  const handleSelectionChange = useCallback(
    (key: React.Key | null | Set<React.Key>) => {
      // In HeroUI v3 single selection mode, it may return a Set or a single key.
      let selected: SortOption | undefined;

      if (typeof key === "string" || typeof key === "number") {
        selected = key as SortOption;
      } else if (key && typeof key === "object" && "size" in key) {
        // It's a Set-like object
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
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-border border-b pb-4">
      <div className="flex items-center gap-3">
        <span className="font-label-lg font-medium text-on-surface">
          Showing {totalItems > 0 ? `${start} - ${end}` : 0} of {totalItems}{" "}
          Vehicles
        </span>
        <span className="flex items-center gap-1.5 font-label-md font-medium text-on-surface-variant">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Instant
          Availability
        </span>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-2 font-label-md">
          <span className="font-medium text-on-surface-variant text-xs uppercase tracking-wider">
            Sort:
          </span>
          <div className="relative flex w-64 items-center">
            <Select
              aria-label="Sort inventory"
              className="w-full"
              onSelectionChange={handleSelectionChange}
              selectedKey={sortOption}
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
        <div className="ml-3 flex items-center overflow-hidden rounded-lg border border-border bg-surface">
          <button
            className={`p-1.5 transition-colors ${viewMode === "grid" ? "bg-surface-container-low text-on-surface" : "text-on-surface-variant hover:text-on-surface"}`}
            onClick={setGridView}
            title="Grid View"
            type="button"
          >
            <MdGridView className="text-2xl" />
          </button>
          <button
            className={`p-1.5 transition-colors ${viewMode === "list" ? "bg-surface-container-low text-on-surface" : "text-on-surface-variant hover:text-on-surface"}`}
            onClick={setListView}
            title="List View"
            type="button"
          >
            <MdViewList className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
