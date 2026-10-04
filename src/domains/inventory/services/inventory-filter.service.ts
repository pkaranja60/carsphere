import type { Vehicle } from "@/domains/vehicles/types/vehicles.types";
import type { FilterCriteria } from "../types/inventory.types";

const BODY_KEYWORDS: Record<string, string[]> = {
  coupe: [
    "coupe",
    "gt",
    "tourer",
    "911",
    "vantage",
    "lc 500",
    "rc 350",
    "a5",
    "430i",
    "e400",
  ],
  sedan: [
    "sedan",
    "m3",
    "taycan",
    "330i",
    "a4",
    "g70",
    "is 350",
    "c300",
    "s60",
  ],
  suv: ["suv", "x5", "gv70", "q7", "macan", "nx", "glc"],
  wagon: [
    "touring",
    "avant",
    "allroad",
    "estate",
    "v60",
    "v90",
    "cross country",
    "all-terrain",
  ],
};

function normalizeBodyKey(btLower: string): string {
  if (btLower.includes("suv")) {
    return "suv";
  }
  if (btLower.includes("wagon") || btLower.includes("estate")) {
    return "wagon";
  }
  if (btLower.includes("sedan")) {
    return "sedan";
  }
  if (btLower.includes("coupe") || btLower.includes("tourer")) {
    return "coupe";
  }
  return btLower;
}

function matchesBodyType(v: Vehicle, selectedBodyTypes: Set<string>): boolean {
  if (selectedBodyTypes.size === 0) {
    return true;
  }
  const text =
    `${v.make} ${v.model} ${v.trim} ${v.specs.stat2 || ""}`.toLowerCase();
  return Array.from(selectedBodyTypes).some((bt) => {
    const btLower = bt.toLowerCase();
    if (btLower === "all") {
      return true;
    }
    const key = normalizeBodyKey(btLower);
    const keywords = BODY_KEYWORDS[key];
    if (!keywords) {
      return text.includes(key);
    }
    return keywords.some((kw) => text.includes(kw));
  });
}

function matchesPowertrain(v: Vehicle, pt: string): boolean {
  if (!pt || pt === "all") {
    return true;
  }
  const l3 = (v.specs.label3 || "").toLowerCase();
  const s2 = (v.specs.stat2 || "").toLowerCase();
  const s3 = (v.specs.stat3 || "").toLowerCase();
  const trim = v.trim.toLowerCase();
  const make = v.make.toLowerCase();
  const model = v.model.toLowerCase();

  switch (pt) {
    case "electric":
      return (
        l3.includes("electric") ||
        s2.includes("dual motor") ||
        s3.includes("electric") ||
        trim.includes("electric") ||
        trim.includes("ev")
      );
    case "hybrid":
      return (
        l3.includes("hybrid") ||
        trim.includes("hybrid") ||
        trim.includes("phev") ||
        s3.includes("hybrid")
      );
    case "twin-turbo":
      return (
        l3.includes("twin-turbo") ||
        s2.includes("twin-turbo") ||
        s2.includes("bi-turbo") ||
        s2.includes("biturbo") ||
        trim.includes("turbo") ||
        trim.includes("gts") ||
        model.includes("911")
      );
    case "turbo-inline":
      return (
        l3.includes("turbo") ||
        s2.includes("turbo") ||
        s2.includes("i4") ||
        s2.includes("i6") ||
        s2.includes("inline") ||
        s2.includes("2.0l") ||
        s2.includes("3.0l")
      );
    case "naturally-aspirated":
      return (
        l3.includes("naturally aspirated") ||
        s2.includes("naturally aspirated") ||
        s2.includes("v8") ||
        s2.includes("flat-6") ||
        s2.includes("5.0l") ||
        s2.includes("4.0l") ||
        (make === "lexus" && trim.includes("500"))
      );
    case "awd":
      return (
        l3.includes("awd") ||
        l3.includes("all-wheel") ||
        s2.includes("awd") ||
        s2.includes("quattro") ||
        s2.includes("xdrive") ||
        s2.includes("4matic") ||
        trim.includes("4") ||
        trim.includes("awd")
      );
    default:
      return true;
  }
}

function parsePrice(priceStr: string): number {
  return Number.parseInt(priceStr.replace(/[^0-9]/g, ""), 10) || 0;
}

function parseMileage(stat: string): number {
  return Number.parseInt(stat.replace(/[^0-9]/g, ""), 10) || 0;
}

function filterByProvenance(
  v: Vehicle,
  provenance: string,
  isCPO: boolean
): boolean {
  if (provenance !== "all") {
    if (provenance === "cpo") {
      return (
        v.historyText.toLowerCase().includes("certified") ||
        v.badgeText.toLowerCase().includes("certified")
      );
    }
    if (provenance === "1owner") {
      return (
        v.historyText.toLowerCase().includes("1-owner") ||
        v.badgeText.toLowerCase().includes("single owner") ||
        v.badgeText.toLowerCase().includes("1-owner")
      );
    }
    if (provenance === "new") {
      return (
        v.badgeText.toLowerCase().includes("arrived") ||
        Number.parseInt(v.year, 10) >= 2024
      );
    }
    if (provenance === "low") {
      return parseMileage(v.specs.stat1) < 15_000;
    }
    return true;
  }
  if (isCPO) {
    return (
      v.historyText.includes("Certified") || v.badgeText.includes("Certified")
    );
  }
  return true;
}

function filterByBudget(
  v: Vehicle,
  targetBudget: string,
  priceRange: [number, number]
): boolean {
  const p = parsePrice(v.price);
  if (targetBudget === "all") {
    return (
      p >= priceRange[0] &&
      (priceRange[1] >= 250_000 ? true : p <= priceRange[1])
    );
  }
  if (targetBudget === "under-45k") {
    return p <= 45_000;
  }
  if (targetBudget === "45-75k") {
    return p >= 45_000 && p <= 75_000;
  }
  if (targetBudget === "75-150k") {
    return p >= 75_000 && p <= 150_000;
  }
  if (targetBudget === "150k") {
    return p >= 150_000;
  }
  return true;
}

function filterBySegment(v: Vehicle, selectedSegments: Set<string>): boolean {
  if (selectedSegments.size === 0 || selectedSegments.has("All Dimensions")) {
    return true;
  }
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
}

function filterVehicles(
  vehicles: Vehicle[],
  criteria: FilterCriteria
): Vehicle[] {
  let result = vehicles;

  if (criteria.searchQuery) {
    const lower = criteria.searchQuery.toLowerCase();
    result = result.filter(
      (v) =>
        v.make.toLowerCase().includes(lower) ||
        v.model.toLowerCase().includes(lower) ||
        v.trim.toLowerCase().includes(lower)
    );
  }

  if (criteria.selectedMakes.size > 0) {
    result = result.filter((v) => criteria.selectedMakes.has(v.make));
  }

  result = result.filter((v) =>
    filterByProvenance(v, criteria.provenance, criteria.isCPO)
  );

  result = result.filter((v) =>
    filterByBudget(v, criteria.targetBudget, criteria.priceRange)
  );

  if (criteria.selectedBodyTypes.size > 0) {
    result = result.filter((v) =>
      matchesBodyType(v, criteria.selectedBodyTypes)
    );
  }

  if (criteria.selectedPowertrain && criteria.selectedPowertrain !== "all") {
    result = result.filter((v) =>
      matchesPowertrain(v, criteria.selectedPowertrain)
    );
  }

  result = result.filter((v) => filterBySegment(v, criteria.selectedSegments));

  return result;
}

function sortVehicles(
  vehicles: Vehicle[],
  sortOption: FilterCriteria["sortOption"]
): Vehicle[] {
  return [...vehicles].sort((a, b) => {
    if (sortOption === "price-asc") {
      return parsePrice(a.price) - parsePrice(b.price);
    }
    if (sortOption === "price-desc") {
      return parsePrice(b.price) - parsePrice(a.price);
    }
    if (sortOption === "mileage-asc") {
      return parseMileage(a.specs.stat1) - parseMileage(b.specs.stat1);
    }
    return 0;
  });
}

export const inventoryFilterService = {
  filterVehicles,
  matchesBodyType,
  matchesPowertrain,
  parseMileage,
  parsePrice,
  sortVehicles,
};
