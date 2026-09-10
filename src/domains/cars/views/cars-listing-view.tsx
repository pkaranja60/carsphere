"use client";

import { Drawer } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

import { PageHeader, PageLayout, Typography } from "@/shared";
import { CarCard } from "@/shared/components/car-card";
import { Pagination } from "@/shared/components/pagination";
import { CarsSidebarFilter } from "../components/cars-sidebar-filter";
import {
  InventoryToolbar,
  type ViewMode,
} from "../components/inventory-toolbar";
import { MOCK_CARS } from "../data/mock-cars";

export function CarsListingView() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Local state for UI
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("grid-4");
  const [sortOption, setSortOption] = useState("recommended");

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
    return MOCK_CARS.filter((car) => {
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

  // Pagination logic
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? Number.parseInt(pageParam, 10) : 1;
  const itemsPerPage = 12;
  const totalPages = Math.ceil(sortedCars.length / itemsPerPage);

  const paginatedCars = sortedCars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      if (page === 1) {
        params.delete("page");
      } else {
        params.set("page", page.toString());
      }
      router.push(`/cars?${params.toString()}`);
      window.scrollTo({ behavior: "smooth", top: 0 });
    },
    [router, searchParams]
  );

  const handleOpenMobileFilters = useCallback(() => {
    setIsMobileFiltersOpen(true);
  }, []);

  // Layout classes
  const getGridClass = () => {
    if (viewMode === "list") {
      return "grid grid-cols-1 gap-4";
    }
    if (viewMode === "grid-6") {
      return "grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-6";
    }
    return "grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-4";
  };

  const getCardLayout = () => {
    if (viewMode === "list") {
      return "list";
    }
    if (viewMode === "grid-6") {
      return "grid-compact";
    }
    return "grid";
  };

  return (
    <PageLayout containerClassName="pb-10 pt-10">
      <PageHeader
        description="Explore our curated selection of premium, luxury, and performance vehicles. Use the filters to find the perfect match for your lifestyle."
        title="Inventory"
      />

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Desktop Sidebar (hidden on mobile) */}
        <aside className="hidden w-72 shrink-0 lg:block">
          <div className="sticky top-28">
            <CarsSidebarFilter />
          </div>
        </aside>

        {/* Mobile Filter Drawer */}
        <Drawer>
          <Drawer.Backdrop
            isOpen={isMobileFiltersOpen}
            onOpenChange={setIsMobileFiltersOpen}
          >
            <Drawer.Content placement="left">
              <Drawer.Dialog>
                <Drawer.Header className="border-border border-b pb-4">
                  <Drawer.Heading>
                    <Typography type="h3" variant="subheading">
                      Filters
                    </Typography>
                  </Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body className="h-full overflow-y-auto p-0">
                  <CarsSidebarFilter className="rounded-none border-0 px-2 py-4 shadow-none" />
                </Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>

        {/* Main Content */}
        <main className="flex-1">
          <InventoryToolbar
            onOpenMobileFilters={handleOpenMobileFilters}
            onSortChange={setSortOption}
            onViewModeChange={setViewMode}
            sortOption={sortOption}
            totalResults={sortedCars.length}
            viewMode={viewMode}
          />

          {paginatedCars.length > 0 ? (
            <div className="flex flex-col gap-10">
              <div className={getGridClass()}>
                {paginatedCars.map((car) => (
                  <CarCard
                    fuelType={car.fuelType}
                    href={`/cars/${car.id}`}
                    id={car.id}
                    image={car.images[0] ?? ""}
                    key={car.id}
                    layout={getCardLayout()}
                    name={car.name}
                    price={car.price}
                    transmission={car.transmission}
                    year={car.year}
                  />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                onChange={handlePageChange}
                totalPages={totalPages}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl border border-border border-dashed py-24 text-center">
              <Typography type="h3" variant="subheading">
                No cars found
              </Typography>
              <Typography className="mt-2 text-muted">
                Try adjusting your filters or clearing them to see more results.
              </Typography>
            </div>
          )}
        </main>
      </div>
    </PageLayout>
  );
}
