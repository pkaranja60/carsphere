"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { Vehicle } from "@/domains/vehicles/types/vehicles.types";

function matchesBodyType(v: Vehicle, selectedBodyTypes: Set<string>): boolean {
  if (selectedBodyTypes.size === 0) {
    return true;
  }
  const text =
    `${v.make} ${v.model} ${v.trim} ${v.specs.stat2 || ""}`.toLowerCase();
  for (const bt of selectedBodyTypes) {
    const btLower = bt.toLowerCase();
    if (
      btLower === "suv / crossover" &&
      (text.includes("suv") ||
        text.includes("x5") ||
        text.includes("gv70") ||
        text.includes("q7"))
    ) {
      return true;
    }
    if (
      btLower === "wagon / touring" &&
      (text.includes("touring") || text.includes("avant"))
    ) {
      return true;
    }
    if (text.includes(btLower)) {
      return true;
    }
  }
  return false;
}

export type ViewMode = "grid" | "list";
export type SortOption =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "mileage-asc";

interface InventoryState {
  currentPage: number;

  filteredVehicles: Vehicle[];

  isCPO: boolean;

  priceRange: [number, number];

  resetFilters: () => void;
  searchQuery: string;

  selectedBodyTypes: Set<string>;

  selectedMakes: Set<string>;

  selectedPowertrains: Set<string>;

  selectedSegments: Set<string>;
  setCurrentPage: (page: number) => void;
  setPriceRange: (range: [number, number]) => void;
  setSearchQuery: (query: string) => void;
  setSortOption: (option: SortOption) => void;
  setViewMode: (mode: ViewMode) => void;

  sortOption: SortOption;
  toggleBodyType: (bodyType: string) => void;
  toggleCPO: () => void;
  toggleMake: (make: string) => void;
  togglePowertrain: (powertrain: string) => void;
  toggleSegment: (segment: string) => void;
  totalItems: number;
  totalPages: number;

  viewMode: ViewMode;
}

const InventoryContext = createContext<InventoryState | undefined>(undefined);

export function InventoryProvider({
  children,
  initialVehicles,
}: {
  children: ReactNode;
  initialVehicles: Vehicle[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    20_000, 250_000,
  ]);
  const [selectedMakes, setSelectedMakes] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedSegments, setSelectedSegments] = useState<Set<string>>(
    new Set(["All Dimensions"])
  );
  const [selectedBodyTypes, setSelectedBodyTypes] = useState<Set<string>>(
    new Set()
  );
  const [selectedPowertrains, setSelectedPowertrains] = useState<Set<string>>(
    new Set()
  );
  const [isCPO, setIsCPO] = useState(false);

  const resetFilters = () => {
    setSearchQuery("");
    setPriceRange([20_000, 250_000]);
    setSelectedMakes(new Set());
    setSelectedSegments(new Set(["All Dimensions"]));
    setSelectedBodyTypes(new Set());
    setSelectedPowertrains(new Set());
    setIsCPO(false);
    setSortOption("featured");
    setCurrentPage(1);
  };

  const toggleMake = (make: string) => {
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
  };

  const toggleCPO = () => {
    setIsCPO((prev) => !prev);
    setCurrentPage(1);
  };

  const toggleSegment = (segment: string) => {
    setSelectedSegments(new Set([segment])); // Segment acts like radio
    setCurrentPage(1);
  };

  const toggleBodyType = (bodyType: string) => {
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
  };

  const togglePowertrain = (powertrain: string) => {
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
  };

  const parsePrice = useCallback(
    (priceStr: string) =>
      Number.parseInt(priceStr.replace(/[^0-9]/g, ""), 10) || 0,
    []
  );

  const parseMileage = useCallback(
    (stat: string) => Number.parseInt(stat.replace(/[^0-9]/g, ""), 10) || 0,
    []
  );

  const filtered = useMemo(() => {
    let result = initialVehicles;

    if (searchQuery) {
      const lower = searchQuery.toLowerCase();
      result = result.filter(
        (v) =>
          v.make.toLowerCase().includes(lower) ||
          v.model.toLowerCase().includes(lower) ||
          v.trim.toLowerCase().includes(lower)
      );
    }

    if (selectedMakes.size > 0) {
      result = result.filter((v) => selectedMakes.has(v.make));
    }

    if (isCPO) {
      result = result.filter(
        (v) =>
          v.historyText.includes("Certified") ||
          v.badgeText.includes("Certified")
      );
    }

    result = result.filter((v) => {
      const p = parsePrice(v.price);
      return (
        p >= priceRange[0] &&
        (priceRange[1] >= 250_000 ? true : p <= priceRange[1])
      );
    });

    if (selectedBodyTypes.size > 0) {
      result = result.filter((v) => matchesBodyType(v, selectedBodyTypes));
    }

    if (selectedPowertrains.size > 0) {
      result = result.filter((v) => {
        const isEV =
          v.specs.label3?.includes("Electric") ||
          v.trim.includes("EV") ||
          v.make.includes("Taycan");
        const isHybrid =
          v.specs.label3?.includes("Hybrid") ||
          v.specs.label3?.includes("PHEV");
        return (
          (selectedPowertrains.has("Electric") && isEV) ||
          (selectedPowertrains.has("Hybrid / PHEV") && isHybrid)
        );
      });
    }

    if (selectedSegments.size > 0 && !selectedSegments.has("All Dimensions")) {
      result = result.filter((v) => {
        const p = parsePrice(v.price);
        if (selectedSegments.has("Performance ($68k+)") && p >= 68_000) {
          return true;
        }
        if (
          selectedSegments.has("Everyday Excellence ($24k-$45k)") &&
          p >= 24_000 &&
          p <= 45_000
        ) {
          return true;
        }
        return false;
      });
    }

    // sort
    result = [...result].sort((a, b) => {
      if (sortOption === "price-asc") {
        return parsePrice(a.price) - parsePrice(b.price);
      }
      if (sortOption === "price-desc") {
        return parsePrice(b.price) - parsePrice(a.price);
      }
      if (sortOption === "mileage-asc") {
        return parseMileage(a.specs.stat1) - parseMileage(b.specs.stat1);
      }
      return 0; // featured (original order)
    });

    return result;
  }, [
    initialVehicles,
    searchQuery,
    selectedMakes,
    priceRange,
    sortOption,
    isCPO,
    selectedBodyTypes,
    selectedPowertrains,
    selectedSegments,
    parsePrice,
    parseMileage,
  ]);

  const ITEMS_PER_PAGE = 9;
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
        resetFilters,
        searchQuery,
        selectedBodyTypes,
        selectedMakes,
        selectedPowertrains,
        selectedSegments,
        setCurrentPage,
        setPriceRange,
        setSearchQuery,
        setSortOption,
        setViewMode,
        sortOption,
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
