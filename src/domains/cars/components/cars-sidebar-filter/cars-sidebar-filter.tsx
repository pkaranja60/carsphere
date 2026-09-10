"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { Accordion } from "@heroui/react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

import { Input } from "@/shared/components/input";
import { Typography } from "@/shared/components/typography";
import { useFilterReducer } from "./cars-sidebar-filter.hooks";
import {
  CategorySection,
  ConditionSection,
  DrivetrainSection,
  EngineSizeSection,
  FuelTypeSection,
  MakeModelSection,
  PriceSection,
  TransmissionSection,
  YearSection,
} from "./cars-sidebar-filter.sections";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface CarsSidebarFilterProps {
  className?: string;
}

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function CarsSidebarFilter({ className = "" }: CarsSidebarFilterProps) {
  const {
    dispatch,
    handleClearFilters,
    handleFieldChange,
    searchParams,
    state,
    updateUrl,
  } = useFilterReducer();

  const sectionProps = { dispatch, handleFieldChange, state, updateUrl };

  return (
    <div
      className={`flex flex-col bg-surface ${className || "rounded-xl border border-border p-5"}`.trim()}
    >
      <div className="mb-4 flex items-center justify-between border-border border-b pb-4">
        <div className="flex items-center gap-2">
          <HiOutlineAdjustmentsHorizontal className="h-5 w-5 text-primary" />
          <Typography type="h3" variant="subheading">
            Filters
          </Typography>
        </div>
        <button
          className="font-medium text-primary text-xs hover:underline"
          onClick={handleClearFilters}
          type="button"
        >
          Reset All
        </button>
      </div>

      <div className="mb-6">
        <Input
          label="Search"
          // biome-ignore lint/performance/noJsxPropsBind: safe inline
          onChange={(val) => handleFieldChange("searchTerm", val, "q")}
          placeholder="Search by name..."
          value={state.searchTerm}
        />
      </div>

      <Accordion allowsMultipleExpanded>
        <MakeModelSection {...sectionProps} />
        <PriceSection {...sectionProps} />
        <YearSection {...sectionProps} />
        <ConditionSection {...sectionProps} />
        <CategorySection {...sectionProps} />
        <FuelTypeSection {...sectionProps} />
        <TransmissionSection {...sectionProps} />
        <DrivetrainSection {...sectionProps} />
        <EngineSizeSection searchParams={searchParams} updateUrl={updateUrl} />
      </Accordion>
    </div>
  );
}
