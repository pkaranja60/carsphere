"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import {
  HiOutlineArrowLeft,
  HiOutlineCheckBadge,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import { Dialog, Input, PageLayout, Select, Typography } from "@/shared";
import { Button } from "@/shared/components/button";
import { CarCard } from "@/shared/components/car-card";
import { getCarById, getSimilarCars } from "../data/mock-cars";

export function VehicleDetailsView({ carId }: { carId: string }) {
  const router = useRouter();
  const car = getCarById(carId);
  const similarCars = getSimilarCars(carId, 4);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isPhoneRevealed, setIsPhoneRevealed] = useState(false);
  const [activeModal, setActiveModal] = useState<
    "testDrive" | "offer" | "message" | "finance" | null
  >(null);

  const handleBackToInventory = useCallback(() => {
    router.push("/cars");
  }, [router]);

  const handleTestDriveClick = useCallback(
    () => setActiveModal("testDrive"),
    []
  );
  const handleOfferClick = useCallback(() => setActiveModal("offer"), []);
  const handleFinanceClick = useCallback(() => setActiveModal("finance"), []);
  const handleMessageClick = useCallback(() => setActiveModal("message"), []);
  const handlePhoneRevealClick = useCallback(
    () => setIsPhoneRevealed(true),
    []
  );
  const handleModalClose = useCallback((open: boolean) => {
    if (!open) {
      setActiveModal(null);
    }
  }, []);

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

      {/* Two-Column Layout */}
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left Column (Main Content) */}
        <div className="w-full max-w-full flex-1 overflow-hidden">
          {/* Gallery */}
          <div className="space-y-4">
            <button
              className="relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-xl bg-surface-alt md:aspect-21/9"
              // biome-ignore lint/performance/noJsxPropsBind: simple state toggle
              onClick={() => setIsGalleryOpen(true)}
              type="button"
            >
              <Image
                alt={`${car.name} view ${activeImageIndex + 1}`}
                className="object-cover"
                fill
                priority
                src={car.images[activeImageIndex] ?? ""}
              />
            </button>
            <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-2">
              {car.images.map((img, idx) => (
                <button
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg transition-all md:h-20 md:w-32 ${
                    activeImageIndex === idx
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "opacity-60 hover:opacity-100"
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

          {/* Key Specifications Strip */}
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

          {/* Description */}
          <div className="mt-12">
            <Typography className="mb-6 text-xl" type="h3" variant="subheading">
              Vehicle Overview
            </Typography>
            <Typography className="max-w-3xl text-lg text-muted leading-relaxed">
              {car.description}
            </Typography>
          </div>

          {/* Features & Options */}
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

          {/* Performance Specs */}
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

          {/* Vehicle IDs */}
          <div className="mt-16 flex gap-6 text-muted text-xs">
            <span>VIN: {car.vin}</span>
            <span>Stock: #{car.id.slice(0, 6).toUpperCase()}</span>
          </div>
        </div>

        {/* Right Column (Sticky Actions) */}
        <aside className="w-full shrink-0 lg:w-72 xl:w-80">
          <div className="sticky top-28 space-y-8">
            {/* Primary Action Panel */}
            <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm xl:p-8">
              <Typography
                className="mb-8 text-xl"
                type="h3"
                variant="subheading"
              >
                Interested in this car?
              </Typography>

              <div className="space-y-4">
                <Button
                  className="w-full justify-center py-6 text-base"
                  onClick={handleTestDriveClick}
                  variant="primary"
                >
                  Schedule Test Drive
                </Button>
                <Button
                  className="w-full justify-center py-6 text-base"
                  onClick={handleOfferClick}
                  variant="outline"
                >
                  Make an Offer
                </Button>
              </div>

              <div className="mt-8 border-border border-t pt-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-foreground text-sm">
                    <HiOutlineCurrencyDollar className="h-5 w-5 text-muted" />{" "}
                    Finance Options
                  </span>
                  <span className="text-muted text-sm">2.9% APR</span>
                </div>
                <Button
                  className="w-full justify-center"
                  onClick={handleFinanceClick}
                  variant="ghost"
                >
                  Calculate Financing
                </Button>
              </div>
            </div>

            {/* Dealer Contact Snippet */}
            <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm xl:p-8">
              <Typography className="font-medium text-foreground text-lg">
                DriveEz Elite Dealership
              </Typography>
              <Typography className="mt-1 mb-6 text-muted text-sm">
                Contact us for more details
              </Typography>
              <div className="flex flex-col gap-3">
                <Button
                  className="w-full justify-center"
                  onClick={handleMessageClick}
                  variant="primary"
                >
                  Message Dealer
                </Button>
                <Button
                  className="w-full justify-center"
                  onClick={handlePhoneRevealClick}
                  variant="outline"
                >
                  {isPhoneRevealed ? "(555) 123-4567" : "Reveal Phone Number"}
                </Button>
              </div>
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

      {/* Fullscreen Gallery Modal */}
      <Dialog
        className="overflow-hidden bg-background p-0"
        isOpen={isGalleryOpen}
        onOpenChange={setIsGalleryOpen}
        // biome-ignore lint/performance/noJsxPropsBind: render prop
        render={() => (
          <div className="flex h-dvh w-full flex-col bg-black">
            <div className="relative flex-1">
              <Image
                alt={`${car.name} full view`}
                className="object-contain"
                fill
                src={car.images[activeImageIndex] ?? ""}
              />
            </div>
            <div className="hide-scrollbar flex shrink-0 gap-2 overflow-x-auto bg-surface-alt p-4">
              {car.images.map((img, idx) => (
                <button
                  className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-lg transition-all ${
                    activeImageIndex === idx
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-surface-alt"
                      : "opacity-50 hover:opacity-100"
                  }`}
                  // biome-ignore lint/suspicious/noArrayIndexKey: order is static
                  key={idx}
                  // biome-ignore lint/performance/noJsxPropsBind: simple state toggle
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
        )}
        size="full"
      />

      {/* Action Modals */}
      <Dialog
        isOpen={activeModal !== null}
        onOpenChange={handleModalClose}
        title={
          {
            finance: "Calculate Financing",
            message: "Message Dealer",
            offer: "Make an Offer",
            testDrive: "Schedule Test Drive",
          }[activeModal as string] || ""
        }
      >
        <Dialog.Body>
          <div className="flex flex-col gap-4">
            {activeModal === "offer" && (
              <Input
                defaultValue={car.price.toString()}
                label="Your Offer Amount"
                type="number"
              />
            )}
            {activeModal === "testDrive" && (
              <Input
                label="Preferred Date"
                // biome-ignore lint/performance/noJsxPropsBind: simple inline logic
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.type = "text";
                  }
                }}
                // biome-ignore lint/performance/noJsxPropsBind: simple inline logic
                onFocus={(e) => {
                  e.target.type = "date";
                  if (typeof e.target.showPicker === "function") {
                    try {
                      e.target.showPicker();
                    } catch {
                      // ignore
                    }
                  }
                }}
                placeholder="Select a date"
                type="text"
              />
            )}
            {(activeModal === "message" ||
              activeModal === "testDrive" ||
              activeModal === "offer") && (
              <>
                <Input label="Full Name" placeholder="John Doe" type="text" />
                <Input
                  label="Phone Number"
                  placeholder="(555) 000-0000"
                  type="tel"
                />
              </>
            )}
            {activeModal === "message" && (
              <div className="flex flex-col gap-2">
                {/* biome-ignore lint/a11y/noLabelWithoutControl: simplified for demo */}
                <label className="font-medium text-foreground text-sm">
                  Message
                </label>
                <textarea
                  className="min-h-25 w-full rounded-lg border border-border bg-surface-alt px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder={`I'm interested in the ${car.name}...`}
                />
              </div>
            )}
            {activeModal === "finance" && (
              <div className="flex flex-col gap-4">
                <Input
                  defaultValue={(car.price * 0.2).toString()}
                  label="Down Payment"
                  type="number"
                />
                <div className="flex flex-col gap-1">
                  {/* biome-ignore lint/a11y/noLabelWithoutControl: simplified for demo */}
                  <label className="pb-1 font-medium text-foreground">
                    Estimated Credit Score
                  </label>
                  <Select
                    aria-label="Estimated Credit Score"
                    options={[
                      { label: "Excellent (720+)", value: "excellent" },
                      { label: "Good (690-719)", value: "good" },
                      { label: "Fair (630-689)", value: "fair" },
                      { label: "Poor (300-629)", value: "poor" },
                    ]}
                    placeholder="Select Credit Score"
                  />
                </div>
              </div>
            )}
            <Button
              className="mt-4 w-full justify-center"
              // biome-ignore lint/performance/noJsxPropsBind: simple state toggle
              onClick={() => setActiveModal(null)}
              variant="primary"
            >
              Submit
            </Button>
          </div>
        </Dialog.Body>
      </Dialog>
    </PageLayout>
  );
}
