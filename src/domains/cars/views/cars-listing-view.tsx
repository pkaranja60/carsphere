"use client";

import { useSearchParams } from "next/navigation";
import { PageHeader, Typography } from "@/shared";
import { CarCard } from "@/shared/components/car-card";
import { CarsSidebarFilter } from "../components/cars-sidebar-filter";
import { MOCK_CARS } from "../data/mock-cars";

export function CarsListingView() {
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("q") ?? "";
  const selectedMake = searchParams.get("make") ?? "";
  const selectedCategory = searchParams.get("category") ?? "";
  const maxPrice = searchParams.get("maxPrice") ?? "";

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
    <div className="min-h-screen bg-surface-alt px-4 pt-16 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          description="Explore our curated selection of premium, luxury, and performance vehicles. Use the filters to find the perfect match for your lifestyle."
          title="Inventory"
        />

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Reusable Sidebar Filter */}
          <CarsSidebarFilter />

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
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
