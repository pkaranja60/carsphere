// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

"use client";

import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineListBullet,
  HiOutlineSquares2X2,
  HiOutlineTableCells,
} from "react-icons/hi2";
import { Typography } from "@/shared";
import { Select } from "@/shared/components/select";

// ─────────────────────────────────────────────
// SECTION: Types
// ─────────────────────────────────────────────

export type ViewMode = "grid-4" | "grid-6" | "list";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface InventoryToolbarProps {
  onOpenMobileFilters: () => void;
  onSortChange: (val: string) => void;
  onViewModeChange: (mode: ViewMode) => void;
  sortOption: string;
  totalResults: number;
  viewMode: ViewMode;
}

const SORT_OPTIONS = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Newest Arrivals", value: "newest" },
  { label: "Mileage: Lowest", value: "mileage_asc" },
];

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function InventoryToolbar({
  onOpenMobileFilters,
  onSortChange,
  onViewModeChange,
  sortOption,
  totalResults,
  viewMode,
}: InventoryToolbarProps) {
  return (
    <div className="mb-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-surface p-4 sm:flex-row sm:items-center">
      {/* Left side: Results Count & Mobile Filter Button */}
      <div className="flex w-full items-center justify-between sm:w-auto sm:justify-start sm:gap-4">
        <Typography className="text-sm" variant="metadata">
          Showing {totalResults} {totalResults === 1 ? "result" : "results"}
        </Typography>

        <button
          className="flex items-center gap-2 rounded-md border border-border bg-surface-alt px-3 py-1.5 font-medium text-foreground text-sm transition-colors hover:bg-border lg:hidden"
          onClick={onOpenMobileFilters}
          type="button"
        >
          <HiOutlineAdjustmentsHorizontal className="h-4 w-4" />
          Filters
        </button>
      </div>

      {/* Right side: Sort and View Modes */}
      <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <label
            className="hidden text-muted text-sm sm:block"
            htmlFor="sort-select"
          >
            Sort by:
          </label>
          <Select
            aria-label="Sort by"
            className="w-48"
            id="sort-select"
            // biome-ignore lint/performance/noJsxPropsBind: safe inline
            onChange={(keys) => {
              const val = keys as string | undefined;
              if (val) {
                onSortChange(val);
              }
            }}
            options={SORT_OPTIONS}
            placeholder="Sort by..."
            selectedKey={sortOption}
          />
        </div>

        {/* View Mode Toggles */}
        <div className="flex items-center gap-1 rounded-md border border-border bg-surface-alt p-1">
          <button
            aria-label="List View"
            className={`rounded p-1.5 transition-colors ${
              viewMode === "list"
                ? "bg-surface text-primary shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
            // biome-ignore lint/performance/noJsxPropsBind: safe inline
            onClick={() => onViewModeChange("list")}
            type="button"
          >
            <HiOutlineListBullet className="h-5 w-5" />
          </button>
          <button
            aria-label="Grid View (4 cols)"
            className={`rounded p-1.5 transition-colors ${
              viewMode === "grid-4"
                ? "bg-surface text-primary shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
            // biome-ignore lint/performance/noJsxPropsBind: safe inline
            onClick={() => onViewModeChange("grid-4")}
            type="button"
          >
            <HiOutlineSquares2X2 className="h-5 w-5" />
          </button>
          <button
            aria-label="Grid View (6 cols)"
            className={`hidden rounded p-1.5 transition-colors sm:block ${
              viewMode === "grid-6"
                ? "bg-surface text-primary shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
            // biome-ignore lint/performance/noJsxPropsBind: safe inline
            onClick={() => onViewModeChange("grid-6")}
            type="button"
          >
            <HiOutlineTableCells className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
