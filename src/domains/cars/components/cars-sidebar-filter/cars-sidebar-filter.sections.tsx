"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { Accordion, Checkbox, CheckboxGroup } from "@heroui/react";
import type { ReadonlyURLSearchParams } from "next/navigation";
import type React from "react";
import { Input } from "@/shared/components/input";
import { Select } from "@/shared/components/select";
import { MOCK_CARS } from "../../data/mock-cars";
import {
  ALL_CATEGORIES,
  ALL_DRIVETRAINS,
  ALL_FUEL_TYPES,
  ALL_TRANSMISSIONS,
  type FilterAction,
  type FilterState,
} from "./cars-sidebar-filter.constants";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface FilterSectionProps {
  dispatch: React.Dispatch<FilterAction>;
  handleFieldChange: (
    field: keyof FilterState,
    value: string | string[],
    urlKey: string
  ) => void;
  searchParams?: ReadonlyURLSearchParams;
  state: FilterState;
  updateUrl: (updates: Record<string, string | string[]>) => void;
}

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

const MAKES = Array.from(new Set(MOCK_CARS.map((car) => car.make))).sort();

export function MakeModelSection({
  dispatch,
  handleFieldChange,
  state,
  updateUrl,
}: FilterSectionProps) {
  const availableModels = state.selectedMake
    ? Array.from(
        new Set(
          MOCK_CARS.filter((c) => c.make === state.selectedMake).map(
            (c) => c.model
          )
        )
      ).sort()
    : [];

  return (
    <Accordion.Item id="make-model">
      <Accordion.Heading>
        <Accordion.Trigger>
          <span className="font-semibold text-sm">Make & Model</span>
        </Accordion.Trigger>
      </Accordion.Heading>
      <Accordion.Panel>
        <Accordion.Body>
          <div className="flex flex-col gap-4 pb-2">
            <div>
              <label
                className="mb-1.5 block font-medium text-foreground text-xs"
                htmlFor="make"
              >
                Make
              </label>
              <Select
                aria-label="Make"
                id="make"
                // biome-ignore lint/performance/noJsxPropsBind: safe inline
                onSelectionChange={(keys) => {
                  const val = keys as string | undefined;
                  const newMake = val === "all" || !val ? "" : val;
                  dispatch({
                    field: "selectedMake",
                    type: "SET_FIELD",
                    value: newMake,
                  });
                  dispatch({
                    field: "selectedModel",
                    type: "SET_FIELD",
                    value: "",
                  });
                  updateUrl({ make: newMake, model: "" });
                }}
                options={[
                  { label: "All Makes", value: "all" },
                  ...MAKES.map((m) => ({ label: m, value: m })),
                ]}
                placeholder="All Makes"
                selectedKey={state.selectedMake || undefined}
              />
            </div>
            <div>
              <label
                className="mb-1.5 block font-medium text-foreground text-xs"
                htmlFor="model"
              >
                Model
              </label>
              <Select
                aria-label="Model"
                id="model"
                isDisabled={!state.selectedMake}
                // biome-ignore lint/performance/noJsxPropsBind: safe inline
                onSelectionChange={(keys) => {
                  const val = keys as string | undefined;
                  const newModel = val === "all" || !val ? "" : val;
                  handleFieldChange("selectedModel", newModel, "model");
                }}
                options={[
                  { label: "All Models", value: "all" },
                  ...availableModels.map((m) => ({ label: m, value: m })),
                ]}
                placeholder="All Models"
                selectedKey={state.selectedModel || undefined}
              />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function PriceSection({ handleFieldChange, state }: FilterSectionProps) {
  return (
    <Accordion.Item id="price">
      <Accordion.Heading>
        <Accordion.Trigger>
          <span className="font-semibold text-sm">Price</span>
        </Accordion.Trigger>
      </Accordion.Heading>
      <Accordion.Panel>
        <Accordion.Body>
          <div className="flex items-center gap-2 pb-2">
            <Input
              // biome-ignore lint/performance/noJsxPropsBind: safe inline
              onChange={(val) => handleFieldChange("minPrice", val, "minPrice")}
              placeholder="Min"
              type="number"
              value={state.minPrice}
            />
            <span className="text-muted">-</span>
            <Input
              // biome-ignore lint/performance/noJsxPropsBind: safe inline
              onChange={(val) => handleFieldChange("maxPrice", val, "maxPrice")}
              placeholder="Max"
              type="number"
              value={state.maxPrice}
            />
          </div>
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function YearSection({ handleFieldChange, state }: FilterSectionProps) {
  return (
    <Accordion.Item id="year">
      <Accordion.Heading>
        <Accordion.Trigger>
          <span className="font-semibold text-sm">Year</span>
        </Accordion.Trigger>
      </Accordion.Heading>
      <Accordion.Panel>
        <Accordion.Body>
          <div className="flex items-center gap-2 pb-2">
            <Input
              // biome-ignore lint/performance/noJsxPropsBind: safe inline
              onChange={(val) => handleFieldChange("minYear", val, "minYear")}
              placeholder="From"
              type="number"
              value={state.minYear}
            />
            <span className="text-muted">-</span>
            <Input
              // biome-ignore lint/performance/noJsxPropsBind: safe inline
              onChange={(val) => handleFieldChange("maxYear", val, "maxYear")}
              placeholder="To"
              type="number"
              value={state.maxYear}
            />
          </div>
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function ConditionSection({
  handleFieldChange,
  state,
}: FilterSectionProps) {
  return (
    <Accordion.Item id="condition">
      <Accordion.Heading>
        <Accordion.Trigger>
          <span className="font-semibold text-sm">Condition</span>
        </Accordion.Trigger>
      </Accordion.Heading>
      <Accordion.Panel>
        <Accordion.Body>
          <div className="pb-2">
            <CheckboxGroup
              // biome-ignore lint/performance/noJsxPropsBind: safe inline
              onChange={(val) =>
                handleFieldChange("conditions", val as string[], "condition")
              }
              value={state.conditions}
            >
              {["New", "Used", "Certified Pre-Owned"].map((c) => (
                <Checkbox key={c} value={c}>
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    {c}
                  </Checkbox.Content>
                </Checkbox>
              ))}
            </CheckboxGroup>
          </div>
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function CategorySection({
  handleFieldChange,
  state,
}: FilterSectionProps) {
  return (
    <Accordion.Item id="category">
      <Accordion.Heading>
        <Accordion.Trigger>
          <span className="font-semibold text-sm">Body Style</span>
        </Accordion.Trigger>
      </Accordion.Heading>
      <Accordion.Panel>
        <Accordion.Body>
          <div className="pb-2">
            <CheckboxGroup
              // biome-ignore lint/performance/noJsxPropsBind: safe inline
              onChange={(val) =>
                handleFieldChange("categories", val as string[], "category")
              }
              value={state.categories}
            >
              {ALL_CATEGORIES.map((cat) => (
                <Checkbox key={cat} value={cat}>
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    {cat}
                  </Checkbox.Content>
                </Checkbox>
              ))}
            </CheckboxGroup>
          </div>
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function FuelTypeSection({
  handleFieldChange,
  state,
}: FilterSectionProps) {
  return (
    <Accordion.Item id="fuel">
      <Accordion.Heading>
        <Accordion.Trigger>
          <span className="font-semibold text-sm">Fuel Type</span>
        </Accordion.Trigger>
      </Accordion.Heading>
      <Accordion.Panel>
        <Accordion.Body>
          <div className="pb-2">
            <CheckboxGroup
              // biome-ignore lint/performance/noJsxPropsBind: safe inline
              onChange={(val) =>
                handleFieldChange("fuelTypes", val as string[], "fuelType")
              }
              value={state.fuelTypes}
            >
              {ALL_FUEL_TYPES.map((f) => (
                <Checkbox key={f} value={f}>
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    {f}
                  </Checkbox.Content>
                </Checkbox>
              ))}
            </CheckboxGroup>
          </div>
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function TransmissionSection({
  handleFieldChange,
  state,
}: FilterSectionProps) {
  return (
    <Accordion.Item id="transmission">
      <Accordion.Heading>
        <Accordion.Trigger>
          <span className="font-semibold text-sm">Transmission</span>
        </Accordion.Trigger>
      </Accordion.Heading>
      <Accordion.Panel>
        <Accordion.Body>
          <div className="pb-2">
            <CheckboxGroup
              // biome-ignore lint/performance/noJsxPropsBind: safe inline
              onChange={(val) =>
                handleFieldChange(
                  "transmissions",
                  val as string[],
                  "transmission"
                )
              }
              value={state.transmissions}
            >
              {ALL_TRANSMISSIONS.map((t) => (
                <Checkbox key={t} value={t}>
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    {t}
                  </Checkbox.Content>
                </Checkbox>
              ))}
            </CheckboxGroup>
          </div>
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function DrivetrainSection({
  handleFieldChange,
  state,
}: FilterSectionProps) {
  return (
    <Accordion.Item id="drivetrain">
      <Accordion.Heading>
        <Accordion.Trigger>
          <span className="font-semibold text-sm">Drivetrain</span>
        </Accordion.Trigger>
      </Accordion.Heading>
      <Accordion.Panel>
        <Accordion.Body>
          <div className="pb-2">
            <CheckboxGroup
              // biome-ignore lint/performance/noJsxPropsBind: safe inline
              onChange={(val) =>
                handleFieldChange("drivetrains", val as string[], "drivetrain")
              }
              value={state.drivetrains}
            >
              {ALL_DRIVETRAINS.map((d) => (
                <Checkbox key={d} value={d}>
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    {d}
                  </Checkbox.Content>
                </Checkbox>
              ))}
            </CheckboxGroup>
          </div>
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function EngineSizeSection({
  searchParams,
  updateUrl,
}: Partial<FilterSectionProps>) {
  return (
    <Accordion.Item id="engine">
      <Accordion.Heading>
        <Accordion.Trigger>
          <span className="font-semibold text-sm">Engine Size</span>
        </Accordion.Trigger>
      </Accordion.Heading>
      <Accordion.Panel>
        <Accordion.Body>
          <div className="flex flex-col gap-4 pb-2">
            <Select
              aria-label="Engine Size"
              // biome-ignore lint/performance/noJsxPropsBind: safe inline
              onSelectionChange={(keys) => {
                const val = keys as string | undefined;
                updateUrl?.({ engineSize: val === "all" || !val ? "" : val });
              }}
              options={[
                { label: "Any Size", value: "all" },
                { label: "Under 2.0L", value: "under_2" },
                { label: "2.0L - 3.0L", value: "2_to_3" },
                { label: "Over 3.0L", value: "over_3" },
                { label: "Electric (No Displacement)", value: "electric" },
              ]}
              placeholder="Any Size"
              selectedKey={
                searchParams?.get("engineSize")
                  ? (searchParams.get("engineSize") as string)
                  : undefined
              }
            />
          </div>
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
