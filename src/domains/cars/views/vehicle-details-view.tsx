"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import {
  HiOutlineArrowLeft,
  HiOutlineBolt,
  HiOutlineCalendar,
  HiOutlineCheckBadge,
  HiOutlineCog6Tooth,
  HiOutlineCurrencyDollar,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { PageLayout, Typography } from "@/shared";
import { Button } from "@/shared/components/button";
import { CarCard } from "@/shared/components/car-card";
import { getCarById, getSimilarCars } from "../data/mock-cars";

export function VehicleDetailsView({ carId }: { carId: string }) {
  const router = useRouter();
  const car = getCarById(carId);
  const similarCars = getSimilarCars(carId, 4);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleBackToInventory = useCallback(() => {
    router.push("/cars");
  }, [router]);

  if (!car) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 pt-32 pb-16 text-center">
        <Typography type="h2" variant="heading">
          Vehicle Not Found
        </Typography>
        <Typography className="mt-2 text-muted">
          The car you're looking for doesn't exist or has been sold.
        </Typography>
        <Button className="mt-6" onClick={handleBackToInventory}>
          Back to Inventory
        </Button>
      </div>
    );
  }

  return (
    <PageLayout containerClassName="pb-10 pt-10">
      {/* Breadcrumbs & Header */}
      <div className="mb-6">
        <Link
          className="inline-flex items-center font-medium text-muted text-sm transition hover:text-primary"
          href="/cars"
        >
          <HiOutlineArrowLeft className="mr-1 h-4 w-4" /> Back to Inventory
        </Link>
        <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Typography
              className="font-semibold text-primary text-xs uppercase tracking-wider md:text-sm"
              variant="metadata"
            >
              {car.condition} • {car.category}
            </Typography>
            <Typography
              className="mt-1 text-3xl md:text-4xl lg:text-5xl"
              type="h1"
              variant="heading"
            >
              {car.name}
            </Typography>
          </div>
          <div className="text-left md:text-right">
            <Typography
              className="text-3xl md:text-4xl"
              type="h2"
              variant="heading"
            >
              ${car.price.toLocaleString()}
            </Typography>
            <Typography className="mt-1 text-muted text-sm" variant="metadata">
              Est. ${(car.price / 60).toFixed(0)}/mo*
            </Typography>
          </div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Left Column (Main Content) */}
        <div className="w-full max-w-full flex-1 overflow-hidden">
          {/* Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface md:aspect-video">
              <Image
                alt={`${car.name} view ${activeImageIndex + 1}`}
                className="object-cover"
                fill
                priority
                src={car.images[activeImageIndex] ?? ""}
              />
            </div>
            <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-2">
              {car.images.map((img, idx) => (
                <button
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all md:h-20 md:w-32 ${
                    activeImageIndex === idx
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                  // biome-ignore lint/suspicious/noArrayIndexKey: order is static
                  key={idx}
                  // biome-ignore lint/performance/noJsxPropsBind: inline handler for map
                  onClick={() => setActiveImageIndex(idx)}
                  type="button"
                >
                  <Image
                    alt={`Thumbnail ${idx + 1}`}
                    className="object-cover"
                    fill
                    src={img}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Overview Specs */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-border bg-surface p-4">
              <HiOutlineCalendar className="mb-2 h-6 w-6 text-primary" />
              <Typography
                className="block text-muted text-xs uppercase"
                variant="metadata"
              >
                Year
              </Typography>
              <Typography className="font-semibold text-foreground">
                {car.year}
              </Typography>
            </div>
            <div className="rounded-xl border border-border bg-surface p-4">
              <HiOutlineMapPin className="mb-2 h-6 w-6 text-primary" />
              <Typography
                className="block text-muted text-xs uppercase"
                variant="metadata"
              >
                Mileage
              </Typography>
              <Typography className="font-semibold text-foreground">
                {car.mileage.toLocaleString()} mi
              </Typography>
            </div>
            <div className="rounded-xl border border-border bg-surface p-4">
              <HiOutlineCog6Tooth className="mb-2 h-6 w-6 text-primary" />
              <Typography
                className="block text-muted text-xs uppercase"
                variant="metadata"
              >
                Transmission
              </Typography>
              <Typography className="font-semibold text-foreground">
                {car.transmission}
              </Typography>
            </div>
            <div className="rounded-xl border border-border bg-surface p-4">
              <HiOutlineBolt className="mb-2 h-6 w-6 text-primary" />
              <Typography
                className="block text-muted text-xs uppercase"
                variant="metadata"
              >
                Fuel Type
              </Typography>
              <Typography className="font-semibold text-foreground">
                {car.fuelType}
              </Typography>
            </div>
          </div>

          {/* Description */}
          <div className="mt-10">
            <Typography className="mb-4" type="h3" variant="subheading">
              Vehicle Overview
            </Typography>
            <Typography className="text-muted leading-relaxed">
              {car.description}
            </Typography>
          </div>

          {/* Features & Options */}
          <div className="mt-10">
            <Typography className="mb-4" type="h3" variant="subheading">
              Premium Features
            </Typography>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {car.features.map((feature) => (
                <li className="flex items-start gap-2" key={feature}>
                  <HiOutlineCheckBadge className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground text-sm md:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Performance Specs */}
          <div className="mt-10">
            <Typography className="mb-4" type="h3" variant="subheading">
              Performance Specifications
            </Typography>
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                <div className="flex justify-between p-4">
                  <span className="text-muted text-sm">Engine</span>
                  <span className="font-medium text-foreground text-sm">
                    {car.specs.engine}
                  </span>
                </div>
                <div className="flex justify-between border-border border-t p-4 sm:border-t-0">
                  <span className="text-muted text-sm">Horsepower</span>
                  <span className="font-medium text-foreground text-sm">
                    {car.specs.horsepower} hp
                  </span>
                </div>
                <div className="flex justify-between border-border border-t p-4">
                  <span className="text-muted text-sm">Torque</span>
                  <span className="font-medium text-foreground text-sm">
                    {car.specs.torque}
                  </span>
                </div>
                <div className="flex justify-between border-border border-t p-4">
                  <span className="text-muted text-sm">Drivetrain</span>
                  <span className="font-medium text-foreground text-sm">
                    {car.specs.drivetrain}
                  </span>
                </div>
                <div className="flex justify-between border-border border-t p-4">
                  <span className="text-muted text-sm">0-60 mph</span>
                  <span className="font-medium text-foreground text-sm">
                    {car.specs.zeroToSixty}
                  </span>
                </div>
                <div className="flex justify-between border-border border-t p-4">
                  <span className="text-muted text-sm">Top Speed</span>
                  <span className="font-medium text-foreground text-sm">
                    {car.specs.topSpeed}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Sticky Actions) */}
        <aside className="w-full shrink-0 lg:w-80 xl:w-96">
          <div className="sticky top-28 space-y-6">
            {/* Primary Action Card */}
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-black/5 shadow-xl">
              <Typography className="mb-6" type="h3" variant="subheading">
                Interested in this car?
              </Typography>

              <div className="space-y-3">
                <Button
                  className="w-full justify-center py-6 text-base shadow-lg shadow-primary/20"
                  variant="primary"
                >
                  Schedule Test Drive
                </Button>
                <Button
                  className="w-full justify-center bg-surface py-6 text-base"
                  variant="outline"
                >
                  Make an Offer
                </Button>
              </div>

              <div className="mt-6 border-border border-t pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex items-center gap-2 font-medium text-sm">
                    <HiOutlineCurrencyDollar className="h-5 w-5 text-muted" />{" "}
                    Finance Options
                  </span>
                  <span className="rounded bg-primary/10 px-2 py-1 font-bold text-primary text-xs">
                    2.9% APR
                  </span>
                </div>
                <Button
                  className="w-full justify-center text-muted hover:text-foreground"
                  variant="ghost"
                >
                  Calculate Financing
                </Button>
              </div>
            </div>

            {/* Dealer Contact Snippet */}
            <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface-alt">
                <Typography className="text-lg" variant="heading">
                  DE
                </Typography>
              </div>
              <div>
                <Typography className="font-semibold text-foreground text-sm">
                  DriveEz Elite Dealership
                </Typography>
                <Typography
                  className="mt-0.5 text-muted text-xs"
                  variant="metadata"
                >
                  Contact us for more details
                </Typography>
              </div>
            </div>

            {/* Vehicle IDs */}
            <div className="flex justify-between rounded-lg bg-surface-alt p-4 text-muted text-xs">
              <span>VIN: {car.vin}</span>
              <span>Stock: #{car.id.slice(0, 6).toUpperCase()}</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Similar Cars Section */}
      {similarCars.length > 0 && (
        <div className="mt-20 border-border border-t pt-10">
          <Typography className="mb-6" type="h2" variant="heading">
            Similar Vehicles
          </Typography>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {similarCars.map((similarCar) => (
              <CarCard
                fuelType={similarCar.fuelType}
                href={`/cars/${similarCar.id}`}
                id={similarCar.id}
                image={similarCar.images[0] ?? ""}
                key={similarCar.id}
                name={similarCar.name}
                price={similarCar.price}
                transmission={similarCar.transmission}
                year={similarCar.year}
              />
            ))}
          </div>
        </div>
      )}
      {/* Similar Cars Section Ends Here */}
    </PageLayout>
  );
}
