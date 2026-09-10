// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { MOCK_CARS } from "@/domains/cars/data/mock-cars";
import { Typography } from "@/shared";
import { CarCard } from "@/shared/components/car-card";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function FeaturedCars() {
  const featuredCars = MOCK_CARS.slice(0, 5);

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <Typography type="h2" variant="heading">
          Featured Cars
        </Typography>
        <Link
          className="inline-flex items-center gap-1.5 font-semibold text-foreground text-xs transition hover:text-primary sm:text-sm"
          href="/cars"
        >
          <span>View All Cars</span>
          <HiOutlineArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {featuredCars.map((car) => (
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
    </section>
  );
}
