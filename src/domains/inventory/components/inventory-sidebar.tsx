"use client";

import { useCallback } from "react";
import {
  Autocomplete,
  AutocompleteItem,
} from "@/shared/components/ui/autocomplete";
import { Select, SelectItem } from "@/shared/components/ui/select";
import { useInventory } from "../hooks/use-inventory";
import { InventoryActiveTags } from "./inventory-active-tags";
import {
  BODY_OPTIONS,
  BUDGET_OPTIONS,
  MAKE_OPTIONS,
  POWERTRAIN_OPTIONS,
  PROVENANCE_OPTIONS,
} from "./inventory-sidebar-options";

function extractKey(key: React.Key | null | Set<React.Key>): string {
  if (typeof key === "string" || typeof key === "number") {
    return String(key);
  }
  if (key && typeof key === "object" && "size" in key) {
    const [first] = Array.from(key as Set<React.Key>);
    return first ? String(first) : "all";
  }
  return "all";
}

export function InventorySidebar() {
  const {
    searchQuery,
    setSearchQuery,
    selectedMake,
    setSelectedMake,
    selectedMakes,
    selectedBodyStyle,
    setSelectedBodyStyle,
    targetBudget,
    setTargetBudget,
    provenance,
    setProvenance,
    selectedPowertrain,
    setSelectedPowertrain,
    selectedPowertrains,
    selectedSegments,
    resetFilters,
  } = useInventory();

  const isMakeFiltered = Boolean(selectedMake && selectedMake !== "all");
  const isBodyFiltered = Boolean(
    selectedBodyStyle && selectedBodyStyle !== "all"
  );
  const isBudgetFiltered = Boolean(targetBudget && targetBudget !== "all");
  const isProvenanceFiltered = Boolean(provenance && provenance !== "all");
  const isPowertrainFiltered = Boolean(
    selectedPowertrain && selectedPowertrain !== "all"
  );

  const activeCount =
    (searchQuery ? 1 : 0) +
    (isMakeFiltered ? 1 : selectedMakes.size) +
    (isBodyFiltered ? 1 : 0) +
    (isBudgetFiltered ? 1 : 0) +
    (isProvenanceFiltered ? 1 : 0) +
    (isPowertrainFiltered ? 1 : selectedPowertrains.size) +
    (selectedSegments.has("All Dimensions") ? 0 : selectedSegments.size);

  const handleMakeChange = useCallback(
    (key: React.Key | null | Set<React.Key>) => {
      setSelectedMake(extractKey(key));
    },
    [setSelectedMake]
  );

  const handleBodyChange = useCallback(
    (key: React.Key | null | Set<React.Key>) => {
      setSelectedBodyStyle(extractKey(key));
    },
    [setSelectedBodyStyle]
  );

  const handleBudgetChange = useCallback(
    (key: React.Key | null | Set<React.Key>) => {
      setTargetBudget(extractKey(key));
    },
    [setTargetBudget]
  );

  const handleProvenanceChange = useCallback(
    (key: React.Key | null | Set<React.Key>) => {
      setProvenance(extractKey(key));
    },
    [setProvenance]
  );

  const handlePowertrainChange = useCallback(
    (key: React.Key | null | Set<React.Key>) => {
      setSelectedPowertrain(extractKey(key));
    },
    [setSelectedPowertrain]
  );

  return (
    <aside
      className="w-full shrink-0 space-y-5 rounded-xl border border-border bg-surface p-5 shadow-level-1 lg:w-72"
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

      {/* REFINED FILTER DROPDOWNS */}
      <div className="flex flex-col gap-4">
        {/* MAKE & MODEL WITH INTEGRATED SEARCH */}
        <Autocomplete
          label="MAKE & MODEL"
          onSearchChange={setSearchQuery}
          onSelectionChange={handleMakeChange}
          placeholder="e.g. Porsche, BMW, Genesis..."
          selectedKey={selectedMake === "all" ? null : selectedMake}
        >
          {MAKE_OPTIONS.map((item) => (
            <AutocompleteItem id={item.id} key={item.id} textValue={item.label}>
              {item.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>

        {/* BODY ARCHITECTURE */}
        <Select
          label="BODY ARCHITECTURE"
          onSelectionChange={handleBodyChange}
          placeholder="All Body Styles"
          selectedKey={selectedBodyStyle}
        >
          {BODY_OPTIONS.map((item) => (
            <SelectItem id={item.id} key={item.id} textValue={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </Select>

        {/* TARGET BUDGET */}
        <Select
          label="TARGET BUDGET"
          onSelectionChange={handleBudgetChange}
          placeholder="All Prices"
          selectedKey={targetBudget}
        >
          {BUDGET_OPTIONS.map((item) => (
            <SelectItem id={item.id} key={item.id} textValue={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </Select>

        {/* PROVENANCE */}
        <Select
          label="PROVENANCE"
          onSelectionChange={handleProvenanceChange}
          placeholder="Any Condition"
          selectedKey={provenance}
        >
          {PROVENANCE_OPTIONS.map((item) => (
            <SelectItem id={item.id} key={item.id} textValue={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </Select>

        {/* POWERTRAIN */}
        <Select
          label="POWERTRAIN"
          onSelectionChange={handlePowertrainChange}
          placeholder="All Powertrains"
          selectedKey={selectedPowertrain}
        >
          {POWERTRAIN_OPTIONS.map((item) => (
            <SelectItem id={item.id} key={item.id} textValue={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </aside>
  );
}
