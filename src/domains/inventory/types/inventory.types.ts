import type { Vehicle } from "@/domains/vehicles/types/vehicles.types";

export type ViewMode = "grid" | "list";

export type SortOption =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "mileage-asc";

export type TargetBudget = "all" | "under-45k" | "45-75k" | "75-150k" | "150k";

export type Provenance = "all" | "cpo" | "1owner" | "new" | "low";

export interface FilterCriteria {
  isCPO: boolean;
  priceRange: [number, number];
  provenance: string;
  searchQuery: string;
  selectedBodyTypes: Set<string>;
  selectedMakes: Set<string>;
  selectedPowertrain: string;
  selectedPowertrains: Set<string>;
  selectedSegments: Set<string>;
  sortOption: SortOption;
  targetBudget: string;
}

export interface InventoryState {
  currentPage: number;
  filteredVehicles: Vehicle[];
  isCPO: boolean;
  isFilterDrawerOpen: boolean;
  priceRange: [number, number];
  provenance: string;
  resetFilters: () => void;
  searchQuery: string;
  selectedBodyStyle: string;
  selectedBodyTypes: Set<string>;
  selectedMake: string;
  selectedMakes: Set<string>;
  selectedPowertrain: string;
  selectedPowertrains: Set<string>;
  selectedSegments: Set<string>;
  setCurrentPage: (page: number) => void;
  setIsFilterDrawerOpen: (open: boolean) => void;
  setPriceRange: (range: [number, number]) => void;
  setProvenance: (provenance: string) => void;
  setSearchQuery: (query: string) => void;
  setSelectedBodyStyle: (style: string) => void;
  setSelectedMake: (make: string) => void;
  setSelectedPowertrain: (powertrain: string) => void;
  setSortOption: (option: SortOption) => void;
  setTargetBudget: (budget: string) => void;
  setViewMode: (mode: ViewMode) => void;
  sortOption: SortOption;
  targetBudget: string;
  toggleBodyType: (bodyType: string) => void;
  toggleCPO: () => void;
  toggleFilterDrawer: () => void;
  toggleMake: (make: string) => void;
  togglePowertrain: (powertrain: string) => void;
  toggleSegment: (segment: string) => void;
  totalItems: number;
  totalPages: number;
  viewMode: ViewMode;
}
