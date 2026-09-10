// ─────────────────────────────────────────────
// SECTION: Interfaces & Types
// ─────────────────────────────────────────────

export interface FilterState {
  categories: string[];
  conditions: string[];
  drivetrains: string[];
  fuelTypes: string[];
  maxPrice: string;
  maxYear: string;
  minPrice: string;
  minYear: string;
  searchTerm: string;
  selectedMake: string;
  selectedModel: string;
  transmissions: string[];
}

export type FilterAction =
  | { type: "SET_FIELD"; field: keyof FilterState; value: string | string[] }
  | { type: "RESET"; payload: FilterState };

// ─────────────────────────────────────────────
// SECTION: Constants
// ─────────────────────────────────────────────

export const ALL_CATEGORIES = [
  "Coupe",
  "Convertible",
  "Hatchback",
  "Sedan",
  "SUV",
  "Truck",
  "Van",
  "Wagon",
];
export const ALL_FUEL_TYPES = [
  "Petrol",
  "Diesel",
  "Electric",
  "Hybrid",
  "Plug-in Hybrid",
];
export const ALL_TRANSMISSIONS = ["Automatic", "Manual", "CVT", "Dual-Clutch"];
export const ALL_DRIVETRAINS = ["FWD", "RWD", "AWD", "4WD"];
