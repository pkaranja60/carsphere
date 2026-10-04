"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { useCallback } from "react";
import {
  Autocomplete,
  AutocompleteItem,
} from "@/shared/components/ui/autocomplete";
import { Select, SelectItem } from "@/shared/components/ui/select";
import { useInventory } from "../hooks/use-inventory";
import {
  BODY_OPTIONS,
  BUDGET_OPTIONS,
  MAKE_OPTIONS,
  POWERTRAIN_OPTIONS,
  PROVENANCE_OPTIONS,
} from "./inventory-sidebar-options";

// ─────────────────────────────────────────────
// SECTION: Helpers
// ─────────────────────────────────────────────

function extractKey(
  key: React.Key | React.Key[] | null | Set<React.Key>
): string {
  if (typeof key === "string" || typeof key === "number") {
    return String(key);
  }
  if (Array.isArray(key)) {
    return key[0] ? String(key[0]) : "all";
  }
  if (key && typeof key === "object" && "size" in key) {
    const [first] = Array.from(key as Set<React.Key>);
    return first ? String(first) : "all";
  }
  return "all";
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function InventorySidebarFilters() {
  const {
    setSearchQuery,
    selectedMake,
    setSelectedMake,
    selectedBodyStyle,
    setSelectedBodyStyle,
    targetBudget,
    setTargetBudget,
    provenance,
    setProvenance,
    selectedPowertrain,
    setSelectedPowertrain,
  } = useInventory();

  const handleMakeChange = useCallback(
    (key: React.Key | React.Key[] | null | Set<React.Key>) => {
      setSelectedMake(extractKey(key));
    },
    [setSelectedMake]
  );

  const handleBodyChange = useCallback(
    (key: React.Key | React.Key[] | null | Set<React.Key>) => {
      setSelectedBodyStyle(extractKey(key));
    },
    [setSelectedBodyStyle]
  );

  const handleBudgetChange = useCallback(
    (key: React.Key | React.Key[] | null | Set<React.Key>) => {
      setTargetBudget(extractKey(key));
    },
    [setTargetBudget]
  );

  const handleProvenanceChange = useCallback(
    (key: React.Key | React.Key[] | null | Set<React.Key>) => {
      setProvenance(extractKey(key));
    },
    [setProvenance]
  );

  const handlePowertrainChange = useCallback(
    (key: React.Key | React.Key[] | null | Set<React.Key>) => {
      setSelectedPowertrain(extractKey(key));
    },
    [setSelectedPowertrain]
  );

  return (
    <div className="flex flex-col gap-4">
      <Autocomplete
        label="MAKE & MODEL"
        onChange={handleMakeChange}
        onSearchChange={setSearchQuery}
        placeholder="e.g. Porsche, BMW, Genesis..."
        value={selectedMake === "all" ? null : selectedMake}
      >
        {MAKE_OPTIONS.map((item) => (
          <AutocompleteItem id={item.id} key={item.id} textValue={item.label}>
            {item.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>

      <Select
        label="BODY ARCHITECTURE"
        onChange={handleBodyChange}
        placeholder="All Body Styles"
        value={selectedBodyStyle}
      >
        {BODY_OPTIONS.map((item) => (
          <SelectItem id={item.id} key={item.id} textValue={item.label}>
            {item.label}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="TARGET BUDGET"
        onChange={handleBudgetChange}
        placeholder="All Prices"
        value={targetBudget}
      >
        {BUDGET_OPTIONS.map((item) => (
          <SelectItem id={item.id} key={item.id} textValue={item.label}>
            {item.label}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="PROVENANCE"
        onChange={handleProvenanceChange}
        placeholder="Any Condition"
        value={provenance}
      >
        {PROVENANCE_OPTIONS.map((item) => (
          <SelectItem id={item.id} key={item.id} textValue={item.label}>
            {item.label}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="POWERTRAIN"
        onChange={handlePowertrainChange}
        placeholder="All Powertrains"
        value={selectedPowertrain}
      >
        {POWERTRAIN_OPTIONS.map((item) => (
          <SelectItem id={item.id} key={item.id} textValue={item.label}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
