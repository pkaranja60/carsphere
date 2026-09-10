// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { PageLayout, Typography } from "@/shared";
import { Button } from "@/shared/components/button";
import { CarCard } from "@/shared/components/car-card";
import type { ActiveModalType } from "../components/vehicle-action-modals";
import { VehicleActionModals } from "../components/vehicle-action-modals";
import { VehicleGallery } from "../components/vehicle-gallery";
import { VehicleHeader } from "../components/vehicle-header";
import { VehicleSidebar } from "../components/vehicle-sidebar";
import { VehicleSpecs } from "../components/vehicle-specs";
import { getCarById, getSimilarCars } from "../data/mock-cars";

// ─────────────────────────────────────────────
// SECTION: Vehicle Details View
// ─────────────────────────────────────────────

export function VehicleDetailsView({ carId }: { carId: string }) {
  const router = useRouter();
  const car = getCarById(carId);
  const similarCars = getSimilarCars(carId, 4);

  const [isPhoneRevealed, setIsPhoneRevealed] = useState(false);
  const [activeModal, setActiveModal] = useState<ActiveModalType>(null);

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
      <VehicleHeader car={car} />

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <div className="w-full max-w-full flex-1 overflow-hidden">
          <VehicleGallery car={car} />
          <VehicleSpecs car={car} />
        </div>

        <VehicleSidebar
          isPhoneRevealed={isPhoneRevealed}
          onFinanceClick={handleFinanceClick}
          onMessageClick={handleMessageClick}
          onOfferClick={handleOfferClick}
          onPhoneRevealClick={handlePhoneRevealClick}
          onTestDriveClick={handleTestDriveClick}
        />
      </div>

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

      <VehicleActionModals
        activeModal={activeModal}
        car={car}
        onClose={handleModalClose}
      />
    </PageLayout>
  );
}
