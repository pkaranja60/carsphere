// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { MdFavoriteBorder, MdOutlineVerified } from "react-icons/md";
import { Button } from "@/shared/components/ui/button";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface VehicleCardProps {
  badgeText: string;
  colorString: string;
  detailsUrl?: string;
  historyText: string;
  id?: string;
  imageAlt: string;
  imageSrc: string;
  make: string;
  model: string;
  monthlyEstimate: string;
  onSave?: () => void;
  price: string;
  specs: {
    stat1: string;
    label1: string;
    stat2: string;
    label2: string;
    stat3: string;
    label3: string;
    stat3Color?: "default" | "tertiary";
  };
  trim: string;
  year: string;
}

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function VehicleCard({
  badgeText,
  colorString,
  historyText,
  id,
  imageAlt,
  imageSrc,
  make,
  model,
  monthlyEstimate,
  price,
  specs,
  trim,
  year,
  onSave,
  detailsUrl = `/inventory/${id}`,
}: VehicleCardProps) {
  const handleSaveClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      onSave?.();
    },
    [onSave]
  );

  return (
    <article className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest shadow-none transition hover:shadow-md md:shadow-sm">
      <div>
        <div className="relative aspect-16/10 overflow-hidden bg-surface-container-high">
          <Image
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-active:scale-105"
            height={200}
            src={imageSrc}
            width={320}
          />
          <div className="absolute top-3 left-3">
            <span className="rounded-md bg-surface/90 px-2.5 py-1 font-label-sm font-semibold text-label-sm text-on-surface tracking-tight shadow-sm backdrop-blur-sm">
              {badgeText}
            </span>
          </div>
          <Button
            aria-label="Save to garage"
            className="absolute top-3 right-3"
            size="icon-md"
            variant="icon-blur"
          >
            <MdFavoriteBorder className="text-lg" />
          </Button>
        </div>

        <div className="p-3 pb-0 sm:p-space-md">
          <div className="mb-space-xs flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-space-xs">
            <h3 className="truncate font-display font-semibold text-on-surface text-sm leading-tight tracking-tight sm:font-headline-sm sm:text-headline-sm">
              {year} {make} {model}
            </h3>
            <span className="font-semibold text-primary text-xs sm:font-label-sm sm:text-label-sm">
              {trim}
            </span>
          </div>
          <p className="mb-space-md hidden truncate font-body-sm text-on-surface-variant text-xs sm:block sm:text-body-sm">
            {colorString}
          </p>

          <div className="mb-space-md grid grid-cols-2 gap-1 rounded-lg bg-surface-container-low px-1 py-1.5 text-center sm:grid-cols-3 sm:px-space-sm sm:py-space-xs">
            <div>
              <span className="block font-semibold text-on-surface text-xs sm:text-label-sm">
                {specs.stat1}
              </span>
              <span className="text-[9px] uppercase sm:text-[10px]">
                {specs.label1}
              </span>
            </div>
            <div>
              <span className="block font-semibold text-on-surface text-xs sm:text-label-sm">
                {specs.stat2}
              </span>
              <span className="text-[9px] uppercase sm:text-[10px]">
                {specs.label2}
              </span>
            </div>
            <div className="hidden sm:block">
              <span
                className={`block font-semibold text-xs sm:text-label-sm ${
                  specs.stat3Color === "tertiary"
                    ? "text-tertiary"
                    : "text-on-surface"
                }`}
              >
                {specs.stat3}
              </span>
              <span className="text-[9px] uppercase sm:text-[10px]">
                {specs.label3}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 pt-0 sm:p-space-md sm:pt-0">
        <div className="mb-space-sm flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <span className="font-bold font-price-card text-base text-on-surface sm:text-price-card">
              {price}
            </span>
            <span className="block font-body-sm text-[11px] text-on-surface-variant sm:text-body-sm">
              Est. {monthlyEstimate} / mo
            </span>
          </div>
          <span className="hidden items-center gap-0.5 font-semibold text-tertiary text-xs sm:flex sm:font-label-sm sm:text-label-sm">
            <MdOutlineVerified className="text-sm sm:text-base" />
            {historyText}
          </span>
        </div>
        {/* Actions (Hidden on Mobile) */}
        <div className="mt-space-xs hidden grid-cols-5 items-center gap-space-xs sm:grid">
          <button
            aria-label={`Save ${year} ${make} ${model} to garage`}
            className="col-span-1 flex h-10 items-center justify-center rounded-lg border border-outline-variant bg-surface text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary active:scale-95"
            onClick={handleSaveClick}
            type="button"
          >
            <MdFavoriteBorder className="text-xl" />
          </button>
          <Link
            className="col-span-4 flex h-10 items-center justify-center rounded-lg bg-primary-container font-label-md font-semibold text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary active:scale-95"
            href={detailsUrl}
          >
            View Details
          </Link>
        </div>

        {/* Mobile View Button */}
        <div className="mt-space-xs sm:hidden">
          <Link
            className="flex h-10 w-full items-center justify-center rounded-lg bg-primary-container font-label-md font-semibold text-label-md text-on-primary shadow-sm transition-colors hover:bg-primary active:scale-95"
            href={detailsUrl}
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
