"use client";

import { useCallback, useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { CarCard } from "@/shared/components/car-card";
import { Input } from "@/shared/components/input";
import { Typography } from "@/shared/components/typography";
import { MOCK_CARS } from "../data/mock-cars";

export function CarsListingView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const handleClearFilters = useCallback(() => {
    setSearchTerm("");
    setSelectedMake("");
    setSelectedCategory("");
    setMaxPrice("");
  }, []);

  const handleMakeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedMake(e.target.value);
    },
    []
  );

  const handleCategoryChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCategory(e.target.value);
    },
    []
  );

  const handleMaxPriceChange = useCallback((val: string) => {
    setMaxPrice(val === "" ? "" : Number(val));
  }, []);

  // Extract unique filter options
  const makes = Array.from(new Set(MOCK_CARS.map((car) => car.make))).sort();
  const categories = Array.from(
    new Set(MOCK_CARS.map((car) => car.category))
  ).sort();

  const filteredCars = MOCK_CARS.filter((car) => {
    const matchesSearch = car.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesMake = selectedMake ? car.make === selectedMake : true;
    const matchesCategory = selectedCategory
      ? car.category === selectedCategory
      : true;
    const matchesPrice = maxPrice ? car.price <= Number(maxPrice) : true;

    return matchesSearch && matchesMake && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-surface-alt px-4 pt-24 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Typography type="h1" variant="heading">
            Our Inventory
          </Typography>
          <Typography className="mt-2 max-w-2xl text-muted text-sm md:text-base">
            Explore our curated selection of premium, luxury, and performance
            vehicles. Use the filters to find the perfect match for your
            lifestyle.
          </Typography>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Sidebar - Filters */}
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
                    onChange={setSearchTerm}
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
            </div>
          </aside>

          {/* Main Content - Grid */}
          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <Typography className="text-sm" variant="metadata">
                Showing {filteredCars.length}{" "}
                {filteredCars.length === 1 ? "result" : "results"}
              </Typography>
            </div>

            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredCars.map((car) => (
                  <CarCard
                    fuelType={car.fuelType}
                    href={`/cars/${car.id}`}
                    id={car.id}
                    image={car.images[0] ?? ""}
                    key={car.id}
                    name={car.name}
                    price={car.price}
                    transmission={car.transmission}
                    year={car.year}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-xl border border-border border-dashed py-24 text-center">
                <Typography type="h3" variant="subheading">
                  No cars found
                </Typography>
                <Typography className="mt-2 text-muted">
                  Try adjusting your filters to see more results.
                </Typography>
                <button
                  className="mt-4 font-medium text-primary text-sm hover:underline"
                  onClick={handleClearFilters}
                  type="button"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
