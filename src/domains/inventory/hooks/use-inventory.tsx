"use client";

import { useSearchParams } from "next/navigation";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Vehicle } from "@/domains/vehicles/types/vehicles.types";
import { inventoryFilterService } from "../services/inventory-filter.service";
import type {
  InventoryState,
  SortOption,
  ViewMode,
} from "../types/inventory.types";

export * from "../types/inventory.types";

const InventoryContext = createContext<InventoryState | undefined>(undefined);
const ITEMS_PER_PAGE = 9;

interface ParsedInventoryParams {
  body: string;
  budget: string;
  isCPO: boolean;
  make: string;
  powertrain: string;
  provenance: string;
  query: string;
}

function parseInventoryParams(searchParams: {
  get: (key: string) => string | null;
}): ParsedInventoryParams {
  const tab = searchParams.get("tab") ?? "all";
  const make = searchParams.get("make") ?? "all";
  const body = searchParams.get("body") ?? "all";
  const rawBudget = searchParams.get("budget") ?? "all";
  const budget = tab === "fleet" ? "under-45k" : rawBudget;
  const rawProv = searchParams.get("provenance");
  const provenance = rawProv ?? (tab === "cpo" ? "cpo" : "all");
  const rawPt = searchParams.get("powertrain");
  const powertrain = rawPt ?? (tab === "ev" ? "electric" : "all");
  const query = searchParams.get("q") ?? searchParams.get("search") ?? "";
  const isCPO = tab === "cpo" || provenance === "cpo";

  return {
    body,
    budget,
    isCPO,
    make,
    powertrain,
    provenance,
    query,
  };
}

export function InventoryProvider({
  children,
  initialVehicles,
}: {
  children: ReactNode;
  initialVehicles: Vehicle[];
}) {
  const searchParams = useSearchParams();
  const init = useMemo(
    () => parseInventoryParams(searchParams),
    [searchParams]
  );

  const [searchQuery, setSearchQuery] = useState(init.query);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    20_000, 250_000,
  ]);
  const [selectedMakes, setSelectedMakes] = useState<Set<string>>(() =>
    init.make === "all" ? new Set() : new Set([init.make])
  );
  const [selectedMake, setSelectedMakeState] = useState(init.make);
  const [selectedBodyStyle, setSelectedBodyStyleState] = useState(init.body);
  const [targetBudget, setTargetBudgetState] = useState(init.budget);
  const [provenance, setProvenanceState] = useState(init.provenance);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedSegments, setSelectedSegments] = useState<Set<string>>(
    new Set(["All Dimensions"])
  );
  const [selectedBodyTypes, setSelectedBodyTypes] = useState<Set<string>>(() =>
    init.body === "all" ? new Set() : new Set([init.body])
  );
  const [selectedPowertrains, setSelectedPowertrains] = useState<Set<string>>(
    () => (init.powertrain === "all" ? new Set() : new Set([init.powertrain]))
  );
  const [selectedPowertrain, setSelectedPowertrainState] = useState(
    init.powertrain
  );
  const [isCPO, setIsCPO] = useState(init.isCPO);

  useEffect(() => {
    const params = parseInventoryParams(searchParams);
    if (params.query) {
      setSearchQuery(params.query);
    }
    setSelectedMakeState(params.make);
    setSelectedMakes(
      params.make === "all" ? new Set() : new Set([params.make])
    );
    setSelectedBodyStyleState(params.body);
    setSelectedBodyTypes(
      params.body === "all" ? new Set() : new Set([params.body])
    );
    setTargetBudgetState(params.budget);
    setProvenanceState(params.provenance);
    setIsCPO(params.isCPO);
    setSelectedPowertrainState(params.powertrain);
    setSelectedPowertrains(
      params.powertrain === "all" ? new Set() : new Set([params.powertrain])
    );
    setCurrentPage(1);
  }, [searchParams]);

  const resetFilters = useCallback(() => {
    setSearchQuery("");
    setPriceRange([20_000, 250_000]);
    setTargetBudgetState("all");
    setProvenanceState("all");
    setSelectedMakeState("all");
    setSelectedBodyStyleState("all");
    setSelectedPowertrainState("all");
    setSelectedMakes(new Set());
    setSelectedSegments(new Set(["All Dimensions"]));
    setSelectedBodyTypes(new Set());
    setSelectedPowertrains(new Set());
    setIsCPO(false);
    setSortOption("featured");
    setCurrentPage(1);
  }, []);

  const setSelectedPowertrain = useCallback((pt: string) => {
    setSelectedPowertrainState(pt);
    setSelectedPowertrains(!pt || pt === "all" ? new Set() : new Set([pt]));
    setCurrentPage(1);
  }, []);

  const setSelectedMake = useCallback((make: string) => {
    setSelectedMakeState(make);
    setSelectedMakes(!make || make === "all" ? new Set() : new Set([make]));
    setCurrentPage(1);
  }, []);

  const setSelectedBodyStyle = useCallback((style: string) => {
    setSelectedBodyStyleState(style);
    setSelectedBodyTypes(
      !style || style === "all" ? new Set() : new Set([style])
    );
    setCurrentPage(1);
  }, []);

  const setTargetBudget = useCallback((budget: string) => {
    setTargetBudgetState(budget);
    setCurrentPage(1);
  }, []);

  const setProvenance = useCallback((prov: string) => {
    setProvenanceState(prov);
    setIsCPO(prov === "cpo");
    setCurrentPage(1);
  }, []);

  const toggleMake = useCallback((make: string) => {
    setSelectedMakes((prev) => {
      const next = new Set(prev);
      if (next.has(make)) {
        next.delete(make);
      } else {
        next.add(make);
      }
      return next;
    });
    setCurrentPage(1);
  }, []);

  const toggleCPO = useCallback(() => {
    setIsCPO((prev) => {
      const next = !prev;
      setProvenanceState(next ? "cpo" : "all");
      return next;
    });
    setCurrentPage(1);
  }, []);

  const toggleSegment = useCallback((segment: string) => {
    setSelectedSegments(new Set([segment]));
    setCurrentPage(1);
  }, []);

  const toggleBodyType = useCallback((bodyType: string) => {
    setSelectedBodyTypes((prev) => {
      const next = new Set(prev);
      if (next.has(bodyType)) {
        next.delete(bodyType);
      } else {
        next.add(bodyType);
      }
      return next;
    });
    setCurrentPage(1);
  }, []);

  const togglePowertrain = useCallback((powertrain: string) => {
    setSelectedPowertrains((prev) => {
      const next = new Set(prev);
      if (next.has(powertrain)) {
        next.delete(powertrain);
      } else {
        next.add(powertrain);
      }
      return next;
    });
    setCurrentPage(1);
  }, []);

  const filtered = useMemo(() => {
    const raw = inventoryFilterService.filterVehicles(initialVehicles, {
      isCPO,
      priceRange,
      provenance,
      searchQuery,
      selectedBodyTypes,
      selectedMakes,
      selectedPowertrain,
      selectedPowertrains,
      selectedSegments,
      sortOption,
      targetBudget,
    });
    return inventoryFilterService.sortVehicles(raw, sortOption);
  }, [
    initialVehicles,
    searchQuery,
    selectedMakes,
    priceRange,
    targetBudget,
    provenance,
    selectedPowertrain,
    sortOption,
    isCPO,
    selectedBodyTypes,
    selectedPowertrains,
    selectedSegments,
  ]);

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));

  const paginatedVehicles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  return (
    <InventoryContext.Provider
      value={{
        currentPage,
        filteredVehicles: paginatedVehicles,
        isCPO,
        priceRange,
        provenance,
        resetFilters,
        searchQuery,
        selectedBodyStyle,
        selectedBodyTypes,
        selectedMake,
        selectedMakes,
        selectedPowertrain,
        selectedPowertrains,
        selectedSegments,
        setCurrentPage,
        setPriceRange,
        setProvenance,
        setSearchQuery,
        setSelectedBodyStyle,
        setSelectedMake,
        setSelectedPowertrain,
        setSortOption,
        setTargetBudget,
        setViewMode,
        sortOption,
        targetBudget,
        toggleBodyType,
        toggleCPO,
        toggleMake,
        togglePowertrain,
        toggleSegment,
        totalItems,
        totalPages,
        viewMode,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error("useInventory must be used within InventoryProvider");
  }
  return context;
}
