"use client";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { MdManageSearch } from "react-icons/md";
import { inventoryFilterService } from "@/domains/inventory/services/inventory-filter.service";
import { vehiclesService } from "@/domains/vehicles/services/vehicles.service";
import {
  Autocomplete,
  AutocompleteItem,
} from "@/shared/components/ui/autocomplete";
import { Button } from "@/shared/components/ui/button";
import { Select, SelectItem } from "@/shared/components/ui/select";
import {
  Tab,
  TabList,
  TabListContainer,
  Tabs,
} from "@/shared/components/ui/tabs";

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

export function OmniSearch() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedMake, setSelectedMake] = useState<string>("all");
  const [selectedBody, setSelectedBody] = useState<string>("all");
  const [selectedBudget, setSelectedBudget] = useState<string>("all");
  const [selectedProvenance, setSelectedProvenance] = useState<string>("all");

  const allVehicles = useMemo(() => vehiclesService.getAllVehicles(), []);

  const matchingCount = useMemo(
    () =>
      inventoryFilterService.filterVehicles(allVehicles, {
        isCPO: activeTab === "cpo" || selectedProvenance === "cpo",
        priceRange: [20_000, 250_000],
        provenance: selectedProvenance,
        searchQuery: "",
        selectedBodyTypes:
          selectedBody && selectedBody !== "all"
            ? new Set([selectedBody])
            : new Set(),
        selectedMakes:
          selectedMake && selectedMake !== "all"
            ? new Set([selectedMake])
            : new Set(),
        selectedPowertrain: activeTab === "ev" ? "electric" : "all",
        selectedPowertrains:
          activeTab === "ev" ? new Set(["electric"]) : new Set(),
        selectedSegments: new Set(),
        sortOption: "featured",
        targetBudget: activeTab === "fleet" ? "under-45k" : selectedBudget,
      }).length,
    [
      allVehicles,
      activeTab,
      selectedMake,
      selectedBody,
      selectedBudget,
      selectedProvenance,
    ]
  );

  const handleTabChange = useCallback((key: React.Key) => {
    setActiveTab(String(key));
  }, []);

  const handleMakeChange = useCallback(
    (key: React.Key | null | Set<React.Key>) => {
      setSelectedMake(extractKey(key));
    },
    []
  );

  const handleBodyChange = useCallback(
    (key: React.Key | null | Set<React.Key>) => {
      setSelectedBody(extractKey(key));
    },
    []
  );

  const handleBudgetChange = useCallback(
    (key: React.Key | null | Set<React.Key>) => {
      setSelectedBudget(extractKey(key));
    },
    []
  );

  const handleProvenanceChange = useCallback(
    (key: React.Key | null | Set<React.Key>) => {
      setSelectedProvenance(extractKey(key));
    },
    []
  );

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const params = new URLSearchParams();
      if (activeTab && activeTab !== "all") {
        params.set("tab", activeTab);
      }
      if (selectedMake && selectedMake !== "all") {
        params.set("make", selectedMake);
      }
      if (selectedBody && selectedBody !== "all") {
        params.set("body", selectedBody);
      }
      if (selectedBudget && selectedBudget !== "all") {
        params.set("budget", selectedBudget);
      }
      if (selectedProvenance && selectedProvenance !== "all") {
        params.set("provenance", selectedProvenance);
      }

      const queryString = params.toString();
      router.push(`/inventory${queryString ? `?${queryString}` : ""}`);
    },
    [
      activeTab,
      selectedMake,
      selectedBody,
      selectedBudget,
      selectedProvenance,
      router,
    ]
  );

  return (
    <section className="relative z-20 mx-auto -mt-10 w-full max-w-400 px-margin-mobile md:-mt-14 md:px-margin">
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 shadow-xl md:p-6">
        <div className="flex flex-col gap-space-sm md:gap-space-md">
          <div className="flex flex-wrap items-center justify-between gap-space-xs border-surface-container border-b pb-space-xs">
            <Tabs
              className="min-w-0 max-w-full"
              defaultSelectedKey="all"
              onSelectionChange={handleTabChange}
              selectedKey={activeTab}
            >
              <TabListContainer>
                <TabList aria-label="Inventory Types">
                  <Tab id="all">All Inventory (482)</Tab>
                  <Tab id="cpo">Certified Pre-Owned (318)</Tab>
                  <Tab id="fleet">Executive Fleet (64)</Tab>
                  <Tab id="ev">Electric & Hybrid (82)</Tab>
                </TabList>
              </TabListContainer>
            </Tabs>
            <div className="hidden items-center gap-space-xs font-label-sm text-on-surface-variant lg:flex">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-tertiary" />
              <span className="font-medium">Live Stock Updated 8 mins ago</span>
            </div>
          </div>
          <form
            className="grid grid-cols-1 items-end gap-space-sm sm:grid-cols-2 md:gap-space-md lg:grid-cols-5"
            onSubmit={handleSearch}
          >
            <div className="flex flex-col justify-end">
              <Autocomplete
                label="Make & Model"
                onSelectionChange={handleMakeChange}
                placeholder="e.g. Porsche, BMW, Genesis..."
                selectedKey={selectedMake === "all" ? null : selectedMake}
              >
                <AutocompleteItem id="all" textValue="All Makes & Models">
                  All Makes & Models
                </AutocompleteItem>
                <AutocompleteItem id="Porsche" textValue="Porsche">
                  Porsche
                </AutocompleteItem>
                <AutocompleteItem id="BMW" textValue="BMW">
                  BMW
                </AutocompleteItem>
                <AutocompleteItem id="Genesis" textValue="Genesis">
                  Genesis
                </AutocompleteItem>
                <AutocompleteItem id="Mercedes-Benz" textValue="Mercedes-Benz">
                  Mercedes-Benz
                </AutocompleteItem>
                <AutocompleteItem id="Audi" textValue="Audi">
                  Audi
                </AutocompleteItem>
                <AutocompleteItem id="Lexus" textValue="Lexus">
                  Lexus
                </AutocompleteItem>
                <AutocompleteItem id="Aston Martin" textValue="Aston Martin">
                  Aston Martin
                </AutocompleteItem>
                <AutocompleteItem id="Volvo" textValue="Volvo">
                  Volvo
                </AutocompleteItem>
              </Autocomplete>
            </div>
            <div className="flex flex-col justify-end">
              <Select
                label="Body Architecture"
                onSelectionChange={handleBodyChange}
                placeholder="All Body Styles"
                selectedKey={selectedBody}
              >
                <SelectItem id="all" textValue="All Body Styles">
                  All Body Styles
                </SelectItem>
                <SelectItem id="suv" textValue="Touring & Luxury SUV">
                  Touring & Luxury SUV
                </SelectItem>
                <SelectItem id="sedan" textValue="Executive Sedan">
                  Executive Sedan
                </SelectItem>
                <SelectItem id="coupe" textValue="Grand Tourer & Coupe">
                  Grand Tourer & Coupe
                </SelectItem>
                <SelectItem id="wagon" textValue="Estate & Sport Wagon">
                  Estate & Sport Wagon
                </SelectItem>
              </Select>
            </div>
            <div className="flex flex-col justify-end">
              <Select
                label="Target Budget"
                onSelectionChange={handleBudgetChange}
                placeholder="All Prices"
                selectedKey={selectedBudget}
              >
                <SelectItem id="all" textValue="All Prices">
                  All Prices
                </SelectItem>
                <SelectItem id="under-45k" textValue="Under $45,000">
                  Under $45,000
                </SelectItem>
                <SelectItem id="45-75k" textValue="$45,000 - $75,000">
                  $45,000 - $75,000
                </SelectItem>
                <SelectItem id="75-150k" textValue="$75,000 - $150,000">
                  $75,000 - $150,000
                </SelectItem>
                <SelectItem id="150k" textValue="$150,000+">
                  $150,000+
                </SelectItem>
              </Select>
            </div>
            <div className="flex flex-col justify-end">
              <Select
                label="Provenance"
                onSelectionChange={handleProvenanceChange}
                placeholder="Any Condition"
                selectedKey={selectedProvenance}
              >
                <SelectItem id="all" textValue="Any Condition">
                  Any Condition
                </SelectItem>
                <SelectItem id="cpo" textValue="Certified Pre-Owned">
                  Certified Pre-Owned
                </SelectItem>
                <SelectItem id="1owner" textValue="1-Owner Verified">
                  1-Owner Verified
                </SelectItem>
                <SelectItem id="new" textValue="Arrived This Week">
                  Arrived This Week
                </SelectItem>
                <SelectItem id="low" textValue="Under 15,000 Miles">
                  Under 15,000 Miles
                </SelectItem>
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
                <span>
                  Search {matchingCount > 0 ? matchingCount : 482} Cars
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
