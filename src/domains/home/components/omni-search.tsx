"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { useRouter } from "next/navigation";
import type React from "react";
import { useCallback, useMemo, useState } from "react";
import { inventoryFilterService } from "@/domains/inventory/services/inventory-filter.service";
import { vehiclesService } from "@/domains/vehicles/services/vehicles.service";
import {
  Tab,
  TabList,
  TabListContainer,
  Tabs,
} from "@/shared/components/ui/tabs";
import { OmniSearchForm } from "./omni-search-form";

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
          activeTab === "ev" ? new Set(["electric", "hybrid"]) : new Set(),
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
    (key: React.Key | React.Key[] | null | Set<React.Key>) => {
      setSelectedMake(extractKey(key));
    },
    []
  );

  const handleBodyChange = useCallback(
    (key: React.Key | React.Key[] | null | Set<React.Key>) => {
      setSelectedBody(extractKey(key));
    },
    []
  );

  const handleBudgetChange = useCallback(
    (key: React.Key | React.Key[] | null | Set<React.Key>) => {
      setSelectedBudget(extractKey(key));
    },
    []
  );

  const handleProvenanceChange = useCallback(
    (key: React.Key | React.Key[] | null | Set<React.Key>) => {
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
    <section className="relative z-20 -mt-19 w-full" data-purpose="omni-search">
      <div className="mx-auto max-w-7xl px-space-md md:px-space-xl">
        <div className="rounded-2xl border border-outline-variant bg-surface p-space-sm shadow-level-2 md:p-space-lg">
          <div className="mb-space-md flex flex-col justify-between gap-space-sm border-outline-variant border-b pb-space-sm lg:flex-row lg:items-center">
            <Tabs
              aria-label="Inventory Search Tabs"
              className="min-w-0 max-w-full"
              defaultSelectedKey="all"
              onSelectionChange={handleTabChange}
              selectedKey={activeTab}
            >
              <TabListContainer>
                <TabList aria-label="Inventory Types">
                  <Tab id="all">All Inventory</Tab>
                  <Tab id="cpo">Certified Pre-Owned</Tab>
                  <Tab id="fleet">Executive Fleet</Tab>
                  <Tab id="ev">Electric & Hybrid</Tab>
                </TabList>
              </TabListContainer>
            </Tabs>
            <div className="hidden items-center gap-space-xs font-label-sm text-on-surface-variant lg:flex">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-tertiary" />
              <span className="font-medium">Live Stock Updated 8 mins ago</span>
            </div>
          </div>

          <OmniSearchForm
            matchingCount={matchingCount}
            onBodyChange={handleBodyChange}
            onBudgetChange={handleBudgetChange}
            onMakeChange={handleMakeChange}
            onProvenanceChange={handleProvenanceChange}
            onSubmit={handleSearch}
            selectedBody={selectedBody}
            selectedBudget={selectedBudget}
            selectedMake={selectedMake}
            selectedProvenance={selectedProvenance}
          />
        </div>
      </div>
    </section>
  );
}
