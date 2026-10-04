"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { useCallback, useState } from "react";
import {
  MdChevronRight,
  MdFavorite,
  MdFavoriteBorder,
  MdOutlinePrint,
  MdOutlineShare,
  MdOutlineVerified,
} from "react-icons/md";
import type { VehicleDetail } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleBreadcrumbsHeaderProps {
  vehicle: VehicleDetail;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleBreadcrumbsHeader({
  vehicle,
}: VehicleBreadcrumbsHeaderProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleToggleSave = useCallback(() => {
    setIsSaved((prev) => !prev);
  }, []);

  const handleShare = useCallback(async () => {
    // Gracefully degrades to clipboard write when Web Share API is unavailable
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim}`,
          url: window.location.href,
        });
        return;
      } catch {
        // User aborted share sheet dialog; fallback below
      }
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  }, [vehicle]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const titleString = `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim}`;

  return (
    <div className="w-full">
      <div className="border-border border-b bg-surface py-4">
        <div className="mx-auto flex max-w-400 flex-wrap items-center justify-between gap-4 px-margin-mobile md:px-margin">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant"
          >
            <Link className="transition-colors hover:text-on-surface" href="/">
              Home
            </Link>
            <MdChevronRight className="text-base text-outline" />
            <Link
              className="transition-colors hover:text-on-surface"
              href="/inventory"
            >
              Inventory
            </Link>
            <MdChevronRight className="text-base text-outline" />
            <span className="max-w-xs truncate font-semibold text-on-surface sm:max-w-none">
              {titleString}
            </span>
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-1.5 rounded-full border border-border bg-surface-container-lowest px-3.5 py-1.5 font-label-md font-medium text-label-md text-on-surface shadow-sm transition-colors hover:bg-surface-container-low"
              onClick={handleShare}
              type="button"
            >
              <MdOutlineShare className="text-base text-primary" />
              <span>{isCopied ? "Spec Copied!" : "Share Spec"}</span>
            </button>
            <button
              className="flex items-center gap-1.5 rounded-full border border-border bg-surface-container-lowest px-3.5 py-1.5 font-label-md font-medium text-label-md text-on-surface shadow-sm transition-colors hover:bg-surface-container-low"
              onClick={handleToggleSave}
              type="button"
            >
              {isSaved ? (
                <MdFavorite className="text-base text-error" />
              ) : (
                <MdFavoriteBorder className="text-base text-primary" />
              )}
              <span>{isSaved ? "Saved in Garage" : "Save to Garage"}</span>
            </button>
            <button
              className="hidden items-center gap-1.5 rounded-full border border-border bg-surface-container-lowest px-3.5 py-1.5 font-label-md font-medium text-label-md text-on-surface shadow-sm transition-colors hover:bg-surface-container-low sm:flex"
              onClick={handlePrint}
              type="button"
            >
              <MdOutlinePrint className="text-base text-primary" />
              <span>Print Monroney Sheet</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-surface pt-8 pb-6">
        <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-border-strong bg-surface-bright px-2.5 py-1 font-bold font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  ALLOCATION #{vehicle.allocationNumber}
                </span>
                <span className="flex items-center gap-1.5 rounded-md border border-border bg-surface-container-lowest px-2.5 py-1 font-label-sm font-semibold text-label-sm text-tertiary shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-tertiary" />
                  {vehicle.badgeText}
                </span>
                <span className="rounded-md border border-border bg-surface-container-lowest px-2.5 py-1 font-label-sm font-semibold text-label-sm text-on-surface-variant shadow-sm">
                  {vehicle.historyText} / 1-Owner
                </span>
                <span className="rounded-md border border-primary-fixed bg-primary-fixed/30 px-2.5 py-1 font-label-sm font-semibold text-label-sm text-primary">
                  150-Pt Heritage Inspected
                </span>
              </div>

              <h1 className="font-bold font-display text-headline-lg text-on-surface tracking-tight">
                {titleString}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {vehicle.colorString} · {vehicle.interiorColor} ·{" "}
                {vehicle.mileageFormatted}
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-start lg:items-end">
              <span className="font-label-sm font-semibold text-label-sm text-on-surface-variant uppercase tracking-wider">
                Zero-Markup Drivez Price
              </span>
              <div className="flex items-baseline gap-3">
                <span className="font-bold font-display text-display text-on-surface leading-none">
                  {vehicle.price}
                </span>
                <span className="font-label-lg text-label-lg text-on-surface-variant line-through">
                  MSRP {vehicle.msrpOriginal}
                </span>
              </div>
              <span className="mt-1 flex items-center gap-1 font-body-sm font-semibold text-body-sm text-tertiary">
                <MdOutlineVerified className="text-base" />
                {vehicle.warrantyActiveUntil}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
