"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import {
  Md360,
  MdFullscreen,
  MdNorthEast,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import type { VehicleDetail } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces & Helpers
// ─────────────────────────────────────────────

interface VehicleGalleryProps {
  vehicle: VehicleDetail;
}

interface ThumbnailProps {
  alt: string;
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
  url: string;
}

function GalleryThumbnail({
  alt,
  index,
  isSelected,
  onSelect,
  url,
}: ThumbnailProps) {
  const handleClick = useCallback(() => {
    onSelect(index);
  }, [index, onSelect]);

  return (
    <button
      aria-label={`View photo ${index + 1}`}
      className={`group relative aspect-16/10 overflow-hidden rounded-lg border bg-surface-container-high shadow-sm transition-all focus:outline-none ${
        isSelected
          ? "border-primary ring-2 ring-primary ring-offset-1 dark:ring-offset-surface"
          : "border-transparent hover:border-primary/60 hover:ring-1 hover:ring-primary/40"
      }`}
      onClick={handleClick}
      type="button"
    >
      <Image
        alt={alt}
        className="h-full w-full object-cover transition-opacity group-hover:opacity-95"
        fill
        sizes="15vw"
        src={url}
      />
      {isSelected ? <span className="absolute inset-0 bg-primary/10" /> : null}
    </button>
  );
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleGallery({ vehicle }: VehicleGalleryProps) {
  const images =
    vehicle.galleryImages.length > 0
      ? vehicle.galleryImages
      : [{ alt: vehicle.imageAlt, url: vehicle.imageSrc }];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  const handleResetIndex = useCallback(() => {
    setActiveIndex(0);
  }, []);

  const handleSelectThumbnail = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="group relative aspect-16/10 w-full overflow-hidden rounded-xl border border-border bg-surface-container-high shadow-none md:shadow-sm">
        <Image
          alt={activeImage.alt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-101"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          src={activeImage.url}
        />

        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-border bg-surface-container-lowest/95 px-3 py-1 font-label-md font-semibold text-label-md text-on-surface shadow-sm backdrop-blur-md">
            Beverly Hills Showroom
          </span>
          <span className="flex items-center gap-1.5 rounded-md border border-border bg-surface-container-lowest/95 px-3 py-1 font-label-md font-semibold text-label-md text-tertiary shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-tertiary" />
            Ready for Handover
          </span>
        </div>

        <div className="absolute right-4 bottom-4 flex items-center gap-2">
          <button
            aria-label="View interactive 360 preview"
            className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-container-lowest/95 px-3.5 py-2 font-label-md font-semibold text-label-md text-on-surface shadow-md backdrop-blur-md transition-all hover:bg-surface-container-lowest"
            onClick={handleResetIndex}
            type="button"
          >
            <Md360 className="text-lg text-primary" />
            <span>Interactive 360°</span>
          </button>
          <button
            aria-label="View image fullscreen"
            className="rounded-lg border border-border bg-surface-container-lowest/95 p-2 text-on-surface shadow-md backdrop-blur-md transition-all hover:bg-surface-container-lowest"
            type="button"
          >
            <MdFullscreen className="text-xl" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {images.map((item, idx) => (
          <GalleryThumbnail
            alt={item.alt}
            index={idx}
            isSelected={idx === activeIndex}
            key={item.url}
            onSelect={handleSelectThumbnail}
            url={item.url}
          />
        ))}
      </div>

      <div className="mt-1 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-surface-container-lowest p-4 shadow-none md:shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-container-low">
            <MdOutlineVerifiedUser className="text-2xl text-primary" />
          </div>
          <div>
            <p className="font-label-lg font-semibold text-label-lg text-on-surface">
              Beverly Hills Private Client Allocation
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Originally delivered &amp; serviced exclusively through authorized
              Porsche Beverly Hills.
            </p>
          </div>
        </div>
        <Link
          className="flex shrink-0 items-center gap-1 font-label-md font-semibold text-label-md text-primary transition-colors hover:underline"
          href="#inspection"
        >
          <span>View CARFAX Report</span>
          <MdNorthEast className="text-base" />
        </Link>
      </div>
    </div>
  );
}
