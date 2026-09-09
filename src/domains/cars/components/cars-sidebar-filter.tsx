"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

import { Input } from "@/shared/components/input";
import { Typography } from "@/shared/components/typography";
import { MOCK_CARS } from "../data/mock-cars";

export function CarsSidebarFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read initial state from URL
  const initialSearch = searchParams.get("q") ?? "";
  const initialMake = searchParams.get("make") ?? "";
  const initialCategory = searchParams.get("category") ?? "";
  const initialMaxPrice = searchParams.get("maxPrice") ?? "";

  // Local state for immediate UI feedback
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedMake, setSelectedMake] = useState(initialMake);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [maxPrice, setMaxPrice] = useState<number | "">(
    initialMaxPrice ? Number(initialMaxPrice) : ""
  );

  // Sync state if URL changes externally (e.g. back button)
  useEffect(() => {
    setSearchTerm(searchParams.get("q") ?? "");
    setSelectedMake(searchParams.get("make") ?? "");
    setSelectedCategory(searchParams.get("category") ?? "");
    const mp = searchParams.get("maxPrice");
    setMaxPrice(mp ? Number(mp) : "");
  }, [searchParams]);

  // Update URL helper
  const updateUrl = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/cars?${params.toString()}`);
    },
    [router, searchParams]
  );

  const handleClearFilters = useCallback(() => {
    setSearchTerm("");
    setSelectedMake("");
    setSelectedCategory("");
    setMaxPrice("");
    router.push("/cars");
  }, [router]);

  // Extract unique options
  const makes = Array.from(new Set(MOCK_CARS.map((car) => car.make))).sort();
  const categories = Array.from(
    new Set(MOCK_CARS.map((car) => car.category))
  ).sort();

  // Handlers
  const handleSearchChange = useCallback(
    (val: string) => {
      setSearchTerm(val);
      updateUrl("q", val);
    },
    [updateUrl]
  );

  const handleMakeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const val = e.target.value;
      setSelectedMake(val);
      updateUrl("make", val);
    },
    [updateUrl]
  );

  const handleCategoryChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const val = e.target.value;
      setSelectedCategory(val);
      updateUrl("category", val);
    },
    [updateUrl]
  );

  const handleMaxPriceChange = useCallback(
    (val: string) => {
      const numVal = val === "" ? "" : Number(val);
      setMaxPrice(numVal);
      updateUrl("maxPrice", val);
    },
    [updateUrl]
  );

  return (
    <aside className="w-full shrink-0 lg:w-72">
      <div className="sticky top-28 rounded-xl border border-border bg-surface p-5">
        <div className="mb-6 flex items-center gap-2 border-border border-b pb-4">
          <HiOutlineAdjustmentsHorizontal className="h-5 w-5 text-primary" />
          <Typography type="h3" variant="subheading">
            Filters
          </Typography>
        </div>

        <div className="space-y-6">
          <div>
            <Input
              label="Search"
              onChange={handleSearchChange}
              placeholder="Search by name..."
              value={searchTerm}
            />
          </div>

          <div>
            <label
              className="mb-2 block font-medium text-foreground text-sm"
              htmlFor="make"
            >
              Make
            </label>
            <select
              className="w-full appearance-none rounded-md border border-border bg-surface px-4 py-2.5 text-foreground text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              id="make"
              onChange={handleMakeChange}
              value={selectedMake}
            >
              <option value="">All Makes</option>
              {makes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              className="mb-2 block font-medium text-foreground text-sm"
              htmlFor="category"
            >
              Category
            </label>
            <select
              className="w-full appearance-none rounded-md border border-border bg-surface px-4 py-2.5 text-foreground text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              id="category"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Input
              label="Max Price ($)"
              onChange={handleMaxPriceChange}
              placeholder="e.g. 80000"
              type="number"
              value={maxPrice === "" ? "" : String(maxPrice)}
            />
          </div>
        </div>

        <button
          className="mt-6 w-full font-medium text-primary text-sm hover:underline"
          onClick={handleClearFilters}
          type="button"
        >
          Clear all filters
        </button>
      </div>
    </aside>
  );
}
