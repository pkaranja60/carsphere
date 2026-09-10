// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

"use client";

import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { Typography } from "@/shared";
import type { Car } from "../data/mock-cars";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface VehicleHeaderProps {
  car: Car;
}

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function VehicleHeader({ car }: VehicleHeaderProps) {
  return (
    <div className="mb-8">
      <Link
        className="inline-flex items-center text-muted text-sm transition hover:text-foreground"
        href="/cars"
      >
        <HiOutlineArrowLeft className="mr-1.5 h-4 w-4" /> Back to Inventory
      </Link>
      <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Typography
            className="font-bold text-muted text-xs uppercase tracking-widest md:text-sm"
            variant="metadata"
          >
            {car.condition} • {car.fuelType} • {car.category}
          </Typography>
          <Typography
            className="mt-2 text-4xl md:text-5xl lg:text-6xl"
            type="h1"
            variant="heading"
          >
            {car.name}
          </Typography>
        </div>
        <div className="text-left md:text-right">
          <Typography
            className="text-4xl md:text-5xl"
            type="h2"
            variant="heading"
          >
            ${car.price.toLocaleString()}
          </Typography>
          <Typography
            className="mt-1 text-muted text-sm md:text-base"
            variant="metadata"
          >
            Est. ${(car.price / 60).toFixed(0)}/mo
          </Typography>
        </div>
      </div>
    </div>
  );
}
