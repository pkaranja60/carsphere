// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

"use client";

import { Accordion, Checkbox, CheckboxGroup } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

import { Input } from "@/shared/components/input";
import { Select } from "@/shared/components/select";
import { Typography } from "@/shared/components/typography";
import { MOCK_CARS } from "../data/mock-cars";

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
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL state
  const initialSearch = searchParams.get("q") ?? "";
  const initialMake = searchParams.get("make") ?? "";
  const initialModel = searchParams.get("model") ?? "";
  const initialMinPrice = searchParams.get("minPrice") ?? "";
  const initialMaxPrice = searchParams.get("maxPrice") ?? "";
  const initialMinYear = searchParams.get("minYear") ?? "";
  const initialMaxYear = searchParams.get("maxYear") ?? "";

  // Arrays from URL (comma-separated)
  const getArrayParam = (key: string) =>
    searchParams.get(key)?.split(",").filter(Boolean) ?? [];
  const initialConditions = getArrayParam("condition");
  const initialCategories = getArrayParam("category");
  const initialTransmissions = getArrayParam("transmission");
  const initialFuelTypes = getArrayParam("fuelType");
  const initialDrivetrains = getArrayParam("drivetrain");

  // Local state
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedMake, setSelectedMake] = useState(initialMake);
  const [selectedModel, setSelectedModel] = useState(initialModel);
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
  const [minYear, setMinYear] = useState(initialMinYear);
  const [maxYear, setMaxYear] = useState(initialMaxYear);

  const [conditions, setConditions] = useState<string[]>(initialConditions);
  const [categories, setCategories] = useState<string[]>(initialCategories);
  const [transmissions, setTransmissions] =
    useState<string[]>(initialTransmissions);
  const [fuelTypes, setFuelTypes] = useState<string[]>(initialFuelTypes);
  const [drivetrains, setDrivetrains] = useState<string[]>(initialDrivetrains);

  // Sync from URL
  useEffect(() => {
    setSearchTerm(searchParams.get("q") ?? "");
    setSelectedMake(searchParams.get("make") ?? "");
    setSelectedModel(searchParams.get("model") ?? "");
    setMinPrice(searchParams.get("minPrice") ?? "");
    setMaxPrice(searchParams.get("maxPrice") ?? "");
    setMinYear(searchParams.get("minYear") ?? "");
    setMaxYear(searchParams.get("maxYear") ?? "");
    setConditions(
      searchParams.get("condition")?.split(",").filter(Boolean) ?? []
    );
    setCategories(
      searchParams.get("category")?.split(",").filter(Boolean) ?? []
    );
    setTransmissions(
      searchParams.get("transmission")?.split(",").filter(Boolean) ?? []
    );
    setFuelTypes(
      searchParams.get("fuelType")?.split(",").filter(Boolean) ?? []
    );
    setDrivetrains(
      searchParams.get("drivetrain")?.split(",").filter(Boolean) ?? []
    );
  }, [searchParams]);

  // Update URL helper
  const updateUrl = useCallback(
    (updates: Record<string, string | string[]>) => {
      const params = new URLSearchParams(searchParams.toString());

      for (const [key, value] of Object.entries(updates)) {
        if (Array.isArray(value)) {
          if (value.length > 0) {
            params.set(key, value.join(","));
          } else {
            params.delete(key);
          }
        } else if (value) {
          params.set(key, String(value));
        } else {
          params.delete(key);
        }
      }

      // Reset to page 1 on filter change
      params.delete("page");

      router.push(`/cars?${params.toString()}`);
    },
    [router, searchParams]
  );

  const handleClearFilters = useCallback(() => {
    router.push("/cars");
  }, [router]);

  // Extract unique options (Models are still dynamic based on Make)
  const makes = Array.from(new Set(MOCK_CARS.map((car) => car.make))).sort();
  const availableModels = selectedMake
    ? Array.from(
        new Set(
          MOCK_CARS.filter((c) => c.make === selectedMake).map((c) => c.model)
        )
      ).sort()
    : [];

  // Hardcoded lists so filters don't disappear if missing from mock data
  const allCategories = [
    "Coupe",
    "Convertible",
    "Hatchback",
    "Sedan",
    "SUV",
    "Truck",
    "Van",
    "Wagon",
  ];
  const allFuelTypes = [
    "Petrol",
    "Diesel",
    "Electric",
    "Hybrid",
    "Plug-in Hybrid",
  ];
  const allTransmissions = ["Automatic", "Manual", "CVT", "Dual-Clutch"];
  const allDrivetrains = ["FWD", "RWD", "AWD", "4WD"];

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
          onChange={(val) => {
            setSearchTerm(val);
            updateUrl({ q: val });
          }}
          placeholder="Search by name..."
          value={searchTerm}
        />
      </div>

      <Accordion allowsMultipleExpanded>
        {/* MAKE & MODEL */}
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
                      setSelectedMake(newMake);
                      setSelectedModel("");
                      updateUrl({ make: newMake, model: "" });
                    }}
                    options={[
                      { label: "All Makes", value: "all" },
                      ...makes.map((m) => ({ label: m, value: m })),
                    ]}
                    placeholder="All Makes"
                    selectedKey={selectedMake || undefined}
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
                    isDisabled={!selectedMake}
                    // biome-ignore lint/performance/noJsxPropsBind: safe inline
                    onSelectionChange={(keys) => {
                      const val = keys as string | undefined;
                      const newModel = val === "all" || !val ? "" : val;
                      setSelectedModel(newModel);
                      updateUrl({ model: newModel });
                    }}
                    options={[
                      { label: "All Models", value: "all" },
                      ...availableModels.map((m) => ({ label: m, value: m })),
                    ]}
                    placeholder="All Models"
                    selectedKey={selectedModel || undefined}
                  />
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>

        {/* PRICE RANGE */}
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
                  onChange={(val) => {
                    setMinPrice(val);
                    updateUrl({ minPrice: val });
                  }}
                  placeholder="Min"
                  type="number"
                  value={minPrice}
                />
                <span className="text-muted">-</span>
                <Input
                  // biome-ignore lint/performance/noJsxPropsBind: safe inline
                  onChange={(val) => {
                    setMaxPrice(val);
                    updateUrl({ maxPrice: val });
                  }}
                  placeholder="Max"
                  type="number"
                  value={maxPrice}
                />
              </div>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>

        {/* YEAR RANGE */}
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
                  onChange={(val) => {
                    setMinYear(val);
                    updateUrl({ minYear: val });
                  }}
                  placeholder="From"
                  type="number"
                  value={minYear}
                />
                <span className="text-muted">-</span>
                <Input
                  // biome-ignore lint/performance/noJsxPropsBind: safe inline
                  onChange={(val) => {
                    setMaxYear(val);
                    updateUrl({ maxYear: val });
                  }}
                  placeholder="To"
                  type="number"
                  value={maxYear}
                />
              </div>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>

        {/* CONDITION */}
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
                  onChange={(val) => {
                    setConditions(val as string[]);
                    updateUrl({ condition: val as string[] });
                  }}
                  value={conditions}
                >
                  <Checkbox value="New">
                    <Checkbox.Content>
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      New
                    </Checkbox.Content>
                  </Checkbox>
                  <Checkbox value="Used">
                    <Checkbox.Content>
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      Used
                    </Checkbox.Content>
                  </Checkbox>
                  <Checkbox value="Certified Pre-Owned">
                    <Checkbox.Content>
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      Certified Pre-Owned
                    </Checkbox.Content>
                  </Checkbox>
                </CheckboxGroup>
              </div>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>

        {/* CATEGORY */}
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
                  onChange={(val) => {
                    setCategories(val as string[]);
                    updateUrl({ category: val as string[] });
                  }}
                  value={categories}
                >
                  {allCategories.map((cat) => (
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

        {/* FUEL TYPE */}
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
                  onChange={(val) => {
                    setFuelTypes(val as string[]);
                    updateUrl({ fuelType: val as string[] });
                  }}
                  value={fuelTypes}
                >
                  {allFuelTypes.map((f) => (
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

        {/* TRANSMISSION */}
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
                  onChange={(val) => {
                    setTransmissions(val as string[]);
                    updateUrl({ transmission: val as string[] });
                  }}
                  value={transmissions}
                >
                  {allTransmissions.map((t) => (
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

        {/* DRIVETRAIN */}
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
                  onChange={(val) => {
                    setDrivetrains(val as string[]);
                    updateUrl({ drivetrain: val as string[] });
                  }}
                  value={drivetrains}
                >
                  {allDrivetrains.map((d) => (
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

        {/* ENGINE SIZE */}
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
                    updateUrl({ engineSize: val === "all" || !val ? "" : val });
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
                    searchParams.get("engineSize")
                      ? (searchParams.get("engineSize") as string)
                      : undefined
                  }
                />
              </div>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
