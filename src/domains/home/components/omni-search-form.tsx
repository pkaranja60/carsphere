"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type React from "react";
import { MdManageSearch } from "react-icons/md";
import {
  Autocomplete,
  AutocompleteItem,
} from "@/shared/components/ui/autocomplete";
import { Button } from "@/shared/components/ui/button";
import { Select, SelectItem } from "@/shared/components/ui/select";
import {
  OMNI_BODY_OPTIONS,
  OMNI_BUDGET_OPTIONS,
  OMNI_MAKE_OPTIONS,
  OMNI_PROVENANCE_OPTIONS,
} from "./omni-search-options";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface OmniSearchFormProps {
  matchingCount: number;
  onBodyChange: (key: React.Key | React.Key[] | null | Set<React.Key>) => void;
  onBudgetChange: (
    key: React.Key | React.Key[] | null | Set<React.Key>
  ) => void;
  onMakeChange: (key: React.Key | React.Key[] | null | Set<React.Key>) => void;
  onProvenanceChange: (
    key: React.Key | React.Key[] | null | Set<React.Key>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  selectedBody: string;
  selectedBudget: string;
  selectedMake: string;
  selectedProvenance: string;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function OmniSearchForm({
  matchingCount,
  onBodyChange,
  onBudgetChange,
  onMakeChange,
  onProvenanceChange,
  onSubmit,
  selectedBody,
  selectedBudget,
  selectedMake,
  selectedProvenance,
}: OmniSearchFormProps) {
  return (
    <form
      className="grid grid-cols-1 items-end gap-space-sm sm:grid-cols-2 md:gap-space-md lg:grid-cols-5"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col justify-end">
        <Autocomplete
          label="Make & Model"
          onChange={onMakeChange}
          placeholder="e.g. Porsche, BMW, Genesis..."
          value={selectedMake === "all" ? null : selectedMake}
        >
          {OMNI_MAKE_OPTIONS.map((item) => (
            <AutocompleteItem id={item.id} key={item.id} textValue={item.label}>
              {item.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </div>

      <div className="flex flex-col justify-end">
        <Select
          label="Body Architecture"
          onChange={onBodyChange}
          placeholder="All Body Styles"
          value={selectedBody}
        >
          {OMNI_BODY_OPTIONS.map((item) => (
            <SelectItem id={item.id} key={item.id} textValue={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="flex flex-col justify-end">
        <Select
          label="Target Budget"
          onChange={onBudgetChange}
          placeholder="All Prices"
          value={selectedBudget}
        >
          {OMNI_BUDGET_OPTIONS.map((item) => (
            <SelectItem id={item.id} key={item.id} textValue={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="flex flex-col justify-end">
        <Select
          label="Provenance"
          onChange={onProvenanceChange}
          placeholder="Any Condition"
          value={selectedProvenance}
        >
          {OMNI_PROVENANCE_OPTIONS.map((item) => (
            <SelectItem id={item.id} key={item.id} textValue={item.label}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="flex flex-col justify-end">
        <Button
          className="h-10 gap-space-xs md:h-12"
          fullWidth
          size="lg"
          type="submit"
          variant="primary"
        >
          <MdManageSearch className="text-lg" />
          <span>Search {matchingCount} Cars</span>
        </Button>
      </div>
    </form>
  );
}
