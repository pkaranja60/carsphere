// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useReducer } from "react";
import type {
  FilterAction,
  FilterState,
} from "./cars-sidebar-filter.constants";

// ─────────────────────────────────────────────
// SECTION: Reducer Logic
// ─────────────────────────────────────────────

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return action.payload;
    default:
      return state;
  }
}

// ─────────────────────────────────────────────
// SECTION: Hook
// ─────────────────────────────────────────────

export function useFilterReducer() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getArrayParam = useCallback(
    (key: string) => searchParams.get(key)?.split(",").filter(Boolean) ?? [],
    [searchParams]
  );

  const getInitialState = useCallback(
    (): FilterState => ({
      categories: getArrayParam("category"),
      conditions: getArrayParam("condition"),
      drivetrains: getArrayParam("drivetrain"),
      fuelTypes: getArrayParam("fuelType"),
      maxPrice: searchParams.get("maxPrice") ?? "",
      maxYear: searchParams.get("maxYear") ?? "",
      minPrice: searchParams.get("minPrice") ?? "",
      minYear: searchParams.get("minYear") ?? "",
      searchTerm: searchParams.get("q") ?? "",
      selectedMake: searchParams.get("make") ?? "",
      selectedModel: searchParams.get("model") ?? "",
      transmissions: getArrayParam("transmission"),
    }),
    [searchParams, getArrayParam]
  );

  const [state, dispatch] = useReducer(filterReducer, getInitialState());

  useEffect(() => {
    dispatch({ payload: getInitialState(), type: "RESET" });
  }, [getInitialState]);

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

      params.delete("page");
      router.push(`/cars?${params.toString()}`);
    },
    [router, searchParams]
  );

  const handleFieldChange = (
    field: keyof FilterState,
    value: string | string[],
    urlKey: string
  ) => {
    dispatch({ field, type: "SET_FIELD", value });
    updateUrl({ [urlKey]: value });
  };

  const handleClearFilters = useCallback(() => {
    router.push("/cars");
  }, [router]);

  return {
    dispatch,
    handleClearFilters,
    handleFieldChange,
    searchParams,
    state,
    updateUrl,
  };
}
