// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { Typography } from "@/shared";
import { CarCard } from "@/shared/components/car-card";

// ─────────────────────────────────────────────
// SECTION: Data
// ─────────────────────────────────────────────

const FEATURED_CARS = [
  {
    fuelType: "Petrol",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80",
    name: "BMW M4 Competition",
    price: 89_900,
    transmission: "Automatic",
    year: 2024,
  },
  {
    fuelType: "Petrol",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80",
    name: "Mercedes-Benz E-Class",
    price: 64_500,
    transmission: "Automatic",
    year: 2024,
  },
  {
    fuelType: "Petrol",
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80",
    name: "Audi RS5 Sportback",
    price: 76_800,
    transmission: "Automatic",
    year: 2024,
  },
  {
    fuelType: "Petrol",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    name: "Porsche 911 Carrera",
    price: 122_900,
    transmission: "Automatic",
    year: 2024,
  },
  {
    fuelType: "Diesel",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
    name: "Range Rover Velar",
    price: 71_300,
    transmission: "Automatic",
    year: 2024,
  },
];

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function FeaturedCars() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <Typography type="h2" variant="heading">
          Featured Cars
        </Typography>
        <Link
          className="inline-flex items-center gap-1.5 font-semibold text-foreground text-xs transition hover:text-red-600 sm:text-sm"
          href="#"
        >
          <span>View All Cars</span>
          <HiOutlineArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {FEATURED_CARS.map((car) => (
          <CarCard
            fuelType={car.fuelType}
            image={car.image}
            key={car.name}
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
