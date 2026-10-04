"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import {
  MdBatteryChargingFull,
  MdCalendarMonth,
  MdCall,
  MdCheckCircle,
  MdLocalShipping,
  MdLockOutline,
  MdOutlinePayments,
  MdOutlineVerified,
  MdVideocam,
} from "react-icons/md";
import type { VehicleDetail } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleStickyReservationProps {
  vehicle: VehicleDetail;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleStickyReservation({
  vehicle,
}: VehicleStickyReservationProps) {
  const [hasHeld, setHasHeld] = useState(false);

  const handleReserveClick = useCallback(() => {
    setHasHeld(true);
  }, []);

  return (
    <div className="flex flex-col gap-6 lg:sticky lg:top-28">
      <div className="space-y-6 border-0 bg-transparent p-0 shadow-none md:rounded-xl md:border md:border-border md:bg-surface-container-lowest md:p-8 md:shadow-md">
        <div className="flex flex-col gap-1 border-border border-b pb-4">
          <div className="flex items-center justify-between">
            <span className="font-label-sm font-semibold text-label-sm text-on-surface-variant uppercase tracking-wider">
              Drivez Acquisition Price
            </span>
            <span className="rounded-full border border-border bg-surface-container-low px-2.5 py-0.5 font-label-sm font-semibold text-label-sm text-on-surface-variant">
              VIN: {vehicle.vin}
            </span>
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-bold font-display text-display text-on-surface leading-none">
              {vehicle.price}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Tax &amp; Registration Extra
            </span>
          </div>
          <p className="mt-1.5 font-body-sm text-body-sm text-on-surface-variant">
            Original Monroney Window Sticker: {vehicle.msrpOriginal} ·{" "}
            <strong className="font-semibold text-on-surface">
              Save {vehicle.savingsAmount}
            </strong>
          </p>
        </div>

        <div className="space-y-3 rounded-xl border border-border bg-surface-container-low p-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-label-md font-semibold text-label-md text-on-surface">
              <MdOutlinePayments className="text-lg text-primary" />
              Estimated Financing
            </span>
            <span className="font-bold font-display text-headline-sm text-on-surface">
              {vehicle.estimatedMonthly}{" "}
              <span className="font-body-sm font-normal text-body-sm text-on-surface-variant">
                / mo
              </span>
            </span>
          </div>
          <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
            <span>36 mo · 10% down · 4.9% APR</span>
            <Link
              className="font-label-sm font-semibold text-label-sm text-primary hover:underline"
              href="#inquiry"
            >
              Customize
            </Link>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
            <div className="h-full w-[72%] rounded-full bg-primary" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-container px-6 py-3.5 text-center font-label-lg font-semibold text-label-lg text-on-primary shadow-none transition-all hover:bg-primary active:translate-y-0.5 sm:shadow-sm"
            href="#inquiry"
          >
            <MdCalendarMonth className="text-xl" />
            <span>Schedule Private Viewing</span>
          </Link>

          {hasHeld ? (
            <div className="flex items-center justify-center gap-2 rounded-lg border border-emerald-300 bg-emerald-50 p-3 text-center font-label-md font-semibold text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
              <MdCheckCircle className="shrink-0 text-xl" />
              <span>Priority Hold Pending Concierge Call</span>
            </div>
          ) : (
            <button
              className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary-container bg-surface-container-lowest px-6 py-3.5 text-center font-label-lg font-semibold text-label-lg text-primary transition-all hover:bg-surface-container-low active:translate-y-0.5"
              onClick={handleReserveClick}
              type="button"
            >
              <MdLockOutline className="text-xl" />
              <span>Reserve with $1,000 Refundable Hold</span>
            </button>
          )}

          <div className="grid grid-cols-2 gap-3 pt-1">
            <Link
              className="flex items-center justify-center gap-1.5 rounded-lg border border-border bg-surface-container-low px-3 py-2.5 text-center font-label-md font-semibold text-label-md text-on-surface transition-colors hover:bg-surface-container"
              href="#inquiry"
            >
              <MdVideocam className="text-lg text-primary" />
              <span>Video Tour</span>
            </Link>
            <a
              className="flex items-center justify-center gap-1.5 rounded-lg border border-border bg-surface-container-low px-3 py-2.5 text-center font-label-md font-semibold text-label-md text-on-surface transition-colors hover:bg-surface-container"
              href={`tel:${vehicle.specialist.directLine.replace(/\D/g, "")}`}
            >
              <MdCall className="text-lg text-primary" />
              <span>Call Specialist</span>
            </a>
          </div>
        </div>

        <div className="space-y-3.5 border-border border-t pt-4">
          <div className="flex items-start gap-3">
            <MdOutlineVerified className="mt-0.5 shrink-0 text-primary text-xl" />
            <div>
              <h4 className="font-label-md font-semibold text-label-md text-on-surface">
                7-Day / 250-Mile Buyback Policy
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Drive it in your daily life or return it with zero friction.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MdLocalShipping className="mt-0.5 shrink-0 text-primary text-xl" />
            <div>
              <h4 className="font-label-md font-semibold text-label-md text-on-surface">
                Enclosed White-Glove Handover
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Direct climate-controlled delivery to your residence across all
                48 continental states.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MdBatteryChargingFull className="mt-0.5 shrink-0 text-primary text-xl" />
            <div>
              <h4 className="font-label-md font-semibold text-label-md text-on-surface">
                Verified {vehicle.batteryHealthSoh} EV Battery Health
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                High-voltage cells laboratory-diagnosed with OEM diagnostic
                telematics.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3.5 rounded-xl border border-border bg-surface-container-low p-3.5">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-primary">
            <Image
              alt={vehicle.specialist.name}
              className="object-cover"
              fill
              sizes="48px"
              src={vehicle.specialist.avatarUrl}
            />
          </div>
          <div className="min-w-0">
            <p className="font-label-sm font-semibold text-label-sm text-primary uppercase tracking-wider">
              {vehicle.specialist.title}
            </p>
            <p className="truncate font-bold font-label-lg text-label-lg text-on-surface">
              {vehicle.specialist.name}
            </p>
            <p className="truncate font-body-sm text-body-sm text-on-surface-variant">
              Direct line: {vehicle.specialist.directLine}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
