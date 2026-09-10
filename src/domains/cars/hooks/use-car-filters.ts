import { useMemo } from "react";
import type { Car } from "../data/mock-cars";

// ─────────────────────────────────────────────
// SECTION: Custom Hook for Filtering & Sorting
// ─────────────────────────────────────────────

export function useCarFilters(
  cars: Car[],
  searchParams: URLSearchParams,
  sortOption: string
) {
  // Filter params
  const searchTerm = searchParams.get("q")?.toLowerCase() ?? "";
  const selectedMake = searchParams.get("make") ?? "";
  const selectedModel = searchParams.get("model") ?? "";
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const minYear = searchParams.get("minYear");
  const maxYear = searchParams.get("maxYear");
  const engineSize = searchParams.get("engineSize");

  // Array params
  const getArrayParam = (key: string) =>
    searchParams.get(key)?.split(",").filter(Boolean) ?? [];
  const conditions = getArrayParam("condition");
  const categories = getArrayParam("category");
  const transmissions = getArrayParam("transmission");
  const fuelTypes = getArrayParam("fuelType");
  const drivetrains = getArrayParam("drivetrain");

  // Apply filters
  const filteredCars = useMemo(() => {
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: complex filtering logic
    return cars.filter((car) => {
      // Basic
      if (searchTerm && !car.name.toLowerCase().includes(searchTerm)) {
        return false;
      }
      if (selectedMake && car.make !== selectedMake) {
        return false;
      }
      if (selectedModel && car.model !== selectedModel) {
        return false;
      }

      // Ranges
      if (minPrice && car.price < Number(minPrice)) {
        return false;
      }
      if (maxPrice && car.price > Number(maxPrice)) {
        return false;
      }
      if (minYear && car.year < Number(minYear)) {
        return false;
      }
      if (maxYear && car.year > Number(maxYear)) {
        return false;
      }

      // Arrays
      if (conditions.length > 0 && !conditions.includes(car.condition)) {
        return false;
      }
      if (categories.length > 0 && !categories.includes(car.category)) {
        return false;
      }
      if (
        transmissions.length > 0 &&
        !transmissions.includes(car.transmission)
      ) {
        return false;
      }
      if (fuelTypes.length > 0 && !fuelTypes.includes(car.fuelType)) {
        return false;
      }
      if (
        drivetrains.length > 0 &&
        car.specs?.drivetrain &&
        !drivetrains.includes(car.specs.drivetrain)
      ) {
        return false;
      }

      // Engine Size
      if (engineSize) {
        if (engineSize === "electric" && car.fuelType !== "Electric") {
          return false;
        }

        // Very basic parsing for displacement e.g. "3.0L" -> 3.0
        const parsedDisplacement = Number.parseFloat(car.specs?.engine ?? "");
        if (!Number.isNaN(parsedDisplacement)) {
          if (engineSize === "under_2" && parsedDisplacement >= 2.0) {
            return false;
          }
          if (
            engineSize === "2_to_3" &&
            (parsedDisplacement < 2.0 || parsedDisplacement > 3.0)
          ) {
            return false;
          }
          if (engineSize === "over_3" && parsedDisplacement <= 3.0) {
            return false;
          }
        }
      }

      return true;
    });
  }, [
    cars,
    searchTerm,
    selectedMake,
    selectedModel,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
    conditions,
    categories,
    transmissions,
    fuelTypes,
    drivetrains,
    engineSize,
  ]);

  // Apply sorting
  const sortedCars = useMemo(() => {
    const sorted = [...filteredCars];
    switch (sortOption) {
      case "price_asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price_desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "newest":
        return sorted.sort((a, b) => b.year - a.year);
      case "mileage_asc":
        return sorted.sort((a, b) => a.mileage - b.mileage);
      default:
        return sorted; // Keeping mock data original order for recommended
    }
  }, [filteredCars, sortOption]);

  return { filteredCars, sortedCars };
}
