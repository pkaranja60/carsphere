// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import {
  MdChevronRight,
  MdFavoriteBorder,
  MdOutlineVerified,
} from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleCardProps {
  badgeText: string;
  colorString: string;
  historyText: string;
  imageAlt: string;
  imageSrc: string;
  make: string;
  model: string;
  monthlyEstimate: string;
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
  imageSrc,
  imageAlt,
  badgeText,
  year,
  make,
  model,
  trim,
  colorString,
  specs,
  price,
  monthlyEstimate,
  historyText,
}: VehicleCardProps) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest shadow-sm transition-all hover:shadow-md">
      <div>
        <div className="relative aspect-16/10 overflow-hidden bg-surface-container-high">
          <Image
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            height={200}
            src={imageSrc}
            width={320}
          />
          <div className="absolute top-3 left-3">
            <span className="rounded-md bg-white/95 px-2.5 py-1 font-label-sm font-semibold text-label-sm text-on-surface tracking-tight shadow-sm backdrop-blur-sm">
              {badgeText}
            </span>
          </div>
          <button
            aria-label="Save to garage"
            className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-on-surface-variant shadow-sm backdrop-blur-sm transition-colors hover:text-primary"
            type="button"
          >
            <MdFavoriteBorder className="text-lg" />
          </button>
        </div>

        <div className="p-space-md">
          <div className="mb-space-xs flex items-baseline justify-between gap-space-xs">
            <h3 className="truncate font-headline-sm font-semibold text-headline-sm text-on-surface tracking-tight">
              {year} {make} {model}
            </h3>
            <span className="font-label-sm font-semibold text-label-sm text-primary">
              {trim}
            </span>
          </div>
          <p className="mb-space-md truncate font-body-sm text-body-sm text-on-surface-variant">
            {colorString}
          </p>

          <div className="mb-space-md grid grid-cols-3 gap-1 rounded-lg bg-surface-container-low px-space-sm py-space-xs text-center font-body-sm text-body-sm text-on-surface-variant">
            <div>
              <span className="block font-semibold text-label-sm text-on-surface">
                {specs.stat1}
              </span>
              <span className="text-[10px] text-label-sm uppercase">
                {specs.label1}
              </span>
            </div>
            <div>
              <span className="block font-semibold text-label-sm text-on-surface">
                {specs.stat2}
              </span>
              <span className="text-[10px] text-label-sm uppercase">
                {specs.label2}
              </span>
            </div>
            <div>
              <span
                className={`block font-semibold text-label-sm ${
                  specs.stat3Color === "tertiary"
                    ? "text-tertiary"
                    : "text-on-surface"
                }`}
              >
                {specs.stat3}
              </span>
              <span className="text-[10px] text-label-sm uppercase">
                {specs.label3}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-space-md pt-0">
        <div className="mb-space-sm flex items-baseline justify-between">
          <div>
            <span className="font-bold font-price-card text-on-surface text-price-card">
              {price}
            </span>
            <span className="block font-body-sm text-body-sm text-on-surface-variant">
              Est. {monthlyEstimate} / mo
            </span>
          </div>
          <span className="flex items-center gap-0.5 font-label-sm font-semibold text-label-sm text-tertiary">
            <MdOutlineVerified className="text-base" />
            {historyText}
          </span>
        </div>
        <button
          className="flex h-10 w-full items-center justify-center gap-space-xs rounded-lg bg-surface-container-high font-label-md font-semibold text-label-md text-on-surface transition-colors hover:bg-surface-container-highest"
          type="button"
        >
          <span>View Specification</span>
          <MdChevronRight className="text-base" />
        </button>
      </div>
    </article>
  );
}
