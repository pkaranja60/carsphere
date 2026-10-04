"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { useMemo } from "react";
import { useInventory } from "../hooks/use-inventory";
import { InventoryActiveTags } from "./inventory-active-tags";
import { InventorySidebarFilters } from "./inventory-sidebar-filters";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function InventorySidebar() {
  const {
    searchQuery,
    selectedMake,
    selectedMakes,
    selectedBodyStyle,
    targetBudget,
    provenance,
    selectedPowertrain,
    selectedPowertrains,
    selectedSegments,
    resetFilters,
  } = useInventory();

  const activeCount = useMemo(() => {
    const isMakeFiltered = Boolean(selectedMake && selectedMake !== "all");
    const isBodyFiltered = Boolean(
      selectedBodyStyle && selectedBodyStyle !== "all"
    );
    const isBudgetFiltered = Boolean(targetBudget && targetBudget !== "all");
    const isProvenanceFiltered = Boolean(provenance && provenance !== "all");
    const isPowertrainFiltered = Boolean(
      selectedPowertrain && selectedPowertrain !== "all"
    );

    return (
      (searchQuery ? 1 : 0) +
      (isMakeFiltered ? 1 : selectedMakes.size) +
      (isBodyFiltered ? 1 : 0) +
      (isBudgetFiltered ? 1 : 0) +
      (isProvenanceFiltered ? 1 : 0) +
      (isPowertrainFiltered ? 1 : selectedPowertrains.size) +
      (selectedSegments.has("All Dimensions") ? 0 : selectedSegments.size)
    );
  }, [
    searchQuery,
    selectedMake,
    selectedMakes.size,
    selectedBodyStyle,
    targetBudget,
    provenance,
    selectedPowertrain,
    selectedPowertrains.size,
    selectedSegments,
  ]);

  return (
    <aside
      className="w-full shrink-0 space-y-5 rounded-xl border border-border bg-surface p-5 shadow-level-1 lg:w-72"
      data-purpose="inventory-sidebar"
    >
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

      <InventoryActiveTags />
      <InventorySidebarFilters />
    </aside>
  );
}
