// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

"use client";

import { HiOutlineCheckBadge } from "react-icons/hi2";
import { Typography } from "@/shared";
import type { Car } from "../data/mock-cars";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface VehicleSpecsProps {
  car: Car;
}

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function VehicleSpecs({ car }: VehicleSpecsProps) {
  return (
    <>
      <div className="mt-10 flex flex-wrap items-center gap-y-6 divide-border border-border border-t border-b py-6 sm:divide-x">
        <div className="flex flex-col px-4 sm:px-8">
          <span className="text-muted text-xs uppercase tracking-wider">
            Year
          </span>
          <span className="font-medium text-foreground text-lg">
            {car.year}
          </span>
        </div>
        <div className="flex flex-col px-4 sm:px-8">
          <span className="text-muted text-xs uppercase tracking-wider">
            Mileage
          </span>
          <span className="font-medium text-foreground text-lg">
            {car.mileage.toLocaleString()} mi
          </span>
        </div>
        <div className="flex flex-col px-4 sm:px-8">
          <span className="text-muted text-xs uppercase tracking-wider">
            Transmission
          </span>
          <span className="font-medium text-foreground text-lg">
            {car.transmission}
          </span>
        </div>
        <div className="flex flex-col px-4 sm:px-8">
          <span className="text-muted text-xs uppercase tracking-wider">
            Fuel Type
          </span>
          <span className="font-medium text-foreground text-lg">
            {car.fuelType}
          </span>
        </div>
      </div>

      <div className="mt-12">
        <Typography className="mb-6 text-xl" type="h3" variant="subheading">
          Vehicle Overview
        </Typography>
        <Typography className="max-w-3xl text-lg text-muted leading-relaxed">
          {car.description}
        </Typography>
      </div>

      <div className="mt-16">
        <Typography className="mb-6 text-xl" type="h3" variant="subheading">
          Premium Features
        </Typography>
        <ul className="grid max-w-3xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {car.features.map((feature) => (
            <li className="flex items-center gap-3" key={feature}>
              <HiOutlineCheckBadge className="h-5 w-5 shrink-0 text-muted" />
              <span className="text-base text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 mb-10">
        <Typography className="mb-6 text-xl" type="h3" variant="subheading">
          Performance Specifications
        </Typography>
        <dl className="max-w-3xl divide-y divide-border">
          <div className="flex justify-between py-4">
            <dt className="text-base text-muted">Engine</dt>
            <dd className="font-medium text-base text-foreground">
              {car.specs.engine}
            </dd>
          </div>
          <div className="flex justify-between py-4">
            <dt className="text-base text-muted">Horsepower</dt>
            <dd className="font-medium text-base text-foreground">
              {car.specs.horsepower} hp
            </dd>
          </div>
          <div className="flex justify-between py-4">
            <dt className="text-base text-muted">Torque</dt>
            <dd className="font-medium text-base text-foreground">
              {car.specs.torque}
            </dd>
          </div>
          <div className="flex justify-between py-4">
            <dt className="text-base text-muted">Drivetrain</dt>
            <dd className="font-medium text-base text-foreground">
              {car.specs.drivetrain}
            </dd>
          </div>
          <div className="flex justify-between py-4">
            <dt className="text-base text-muted">0-60 mph</dt>
            <dd className="font-medium text-base text-foreground">
              {car.specs.zeroToSixty}
            </dd>
          </div>
          <div className="flex justify-between py-4">
            <dt className="text-base text-muted">Top Speed</dt>
            <dd className="font-medium text-base text-foreground">
              {car.specs.topSpeed}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-16 flex gap-6 text-muted text-xs">
        <span>VIN: {car.vin}</span>
        <span>Stock: #{car.id.slice(0, 6).toUpperCase()}</span>
      </div>
    </>
  );
}
