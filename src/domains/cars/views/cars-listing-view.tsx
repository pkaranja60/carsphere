// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

"use client";

import { Drawer } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

import { PageHeader, PageLayout, Typography } from "@/shared";
import { CarCard } from "@/shared/components/car-card";
import { Pagination } from "@/shared/components/pagination";
import { CarsSidebarFilter } from "../components/cars-sidebar-filter";
import {
  InventoryToolbar,
  type ViewMode,
} from "../components/inventory-toolbar";
import { MOCK_CARS } from "../data/mock-cars";
import { useCarFilters } from "../hooks/use-car-filters";

// ─────────────────────────────────────────────
// SECTION: Cars Listing View
// ─────────────────────────────────────────────

export function CarsListingView() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("grid-4");
  const [sortOption, setSortOption] = useState("recommended");

  // Extract filtering and sorting into the custom hook
  const { sortedCars } = useCarFilters(MOCK_CARS, searchParams, sortOption);

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
        <aside className="hidden w-72 shrink-0 lg:block">
          <div className="sticky top-28">
            <CarsSidebarFilter />
          </div>
        </aside>

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

        <main className="flex-1">
          <InventoryToolbar
            onOpenMobileFilters={handleOpenMobileFilters}
            onSortChange={setSortOption}
            onViewModeChange={setViewMode}
            sortOption={sortOption}
            totalResults={sortedCars.length}
            viewMode={viewMode}
          />

          {sortedCars.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border border-dashed py-20 text-center">
              <Typography type="h3" variant="subheading">
                No vehicles found
              </Typography>
              <Typography className="mt-2 max-w-md text-muted text-sm">
                Try adjusting your filters to broaden your search results. You
                can remove some filters or click "Reset All Filters".
              </Typography>
            </div>
          ) : (
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
          )}

          {totalPages > 1 && (
            <div className="mt-12 flex justify-center border-border border-t pt-8">
              <Pagination
                currentPage={currentPage}
                onChange={handlePageChange}
                totalPages={totalPages}
              />
            </div>
          )}
        </main>
      </div>
    </PageLayout>
  );
}
