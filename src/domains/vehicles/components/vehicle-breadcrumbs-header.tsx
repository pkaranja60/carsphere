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
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="rounded-md border border-border-strong bg-surface-bright px-2 py-0.5 font-bold font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider sm:px-2.5 sm:py-1 sm:text-label-sm">
                  ALLOCATION #{vehicle.allocationNumber}
                </span>
                <span className="flex items-center gap-1.5 rounded-md border border-border bg-surface-container-lowest px-2 py-0.5 font-label-sm font-semibold text-[11px] text-tertiary shadow-sm sm:px-2.5 sm:py-1 sm:text-label-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
                  {vehicle.badgeText}
                </span>
                <span className="rounded-md border border-border bg-surface-container-lowest px-2 py-0.5 font-label-sm font-semibold text-[11px] text-on-surface-variant shadow-sm sm:px-2.5 sm:py-1 sm:text-label-sm">
                  {vehicle.historyText} / 1-Owner
                </span>
                <span className="rounded-md border border-primary-fixed bg-primary-fixed/30 px-2 py-0.5 font-label-sm font-semibold text-[11px] text-primary sm:px-2.5 sm:py-1 sm:text-label-sm">
                  150-Pt Heritage Inspected
                </span>
                <span className="flex items-center gap-1 rounded-md border border-border bg-surface-container-lowest px-2 py-0.5 font-label-sm font-semibold text-[11px] text-tertiary shadow-sm sm:px-2.5 sm:py-1 sm:text-label-sm">
                  <MdOutlineVerified className="text-xs sm:text-sm" />
                  {vehicle.warrantyActiveUntil}
                </span>
              </div>

              <h1 className="font-bold font-display text-2xl text-on-surface tracking-tight sm:text-headline-lg">
                {titleString}
              </h1>
              <p className="font-body-md text-on-surface-variant text-xs sm:text-body-lg sm:text-sm">
                {vehicle.colorString} · {vehicle.interiorColor} ·{" "}
                {vehicle.mileageFormatted}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
