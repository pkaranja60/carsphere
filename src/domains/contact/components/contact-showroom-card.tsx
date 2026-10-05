"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import { useCallback, useState } from "react";
import {
  MdDirections,
  MdDirectionsCar,
  MdLocationOn,
  MdMap,
  MdPhotoCamera,
  MdSchedule,
} from "react-icons/md";
import type { ShowroomInfo } from "../types/contact.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ContactShowroomCardProps {
  showroom: ShowroomInfo;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ContactShowroomCard({ showroom }: ContactShowroomCardProps) {
  const [viewMode, setViewMode] = useState<"map" | "photo">("map");

  const handleSelectMap = useCallback(() => {
    setViewMode("map");
  }, []);

  const handleSelectPhoto = useCallback(() => {
    setViewMode("photo");
  }, []);

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    showroom.fullAddress
  )}`;

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    showroom.fullAddress
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface-container-lowest p-5 shadow-xs sm:p-space-lg">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-label-sm font-semibold text-label-sm text-primary uppercase tracking-wider">
            {showroom.subtitle}
          </span>
          <h3 className="font-bold font-display text-headline-sm text-on-surface">
            {showroom.name}
          </h3>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-tertiary/20 bg-tertiary/10 px-2.5 py-1 font-label-sm font-medium text-label-sm text-tertiary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-tertiary" />
          {showroom.statusBadge}
        </span>
      </div>

      {/* Interactive Map / Photo Container */}
      <div className="relative h-52 w-full overflow-hidden rounded-lg border border-border/80 bg-surface shadow-inner">
        {viewMode === "map" ? (
          <iframe
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={embedUrl}
            title="CarSphere Beverly Hills Flagship Lounge Interactive Map"
          />
        ) : (
          <div className="relative h-full w-full">
            <Image
              alt="Beverly Hills Flagship Lounge exterior portico and valet entrance"
              className="h-full w-full object-cover"
              height={240}
              src={showroom.imageUrl}
              width={500}
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 via-transparent to-transparent p-3">
              <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-surface/90 px-3 py-1.5 font-label-sm text-label-sm text-on-surface shadow-sm backdrop-blur-md">
                <MdDirectionsCar className="text-base text-primary" />
                <span>{showroom.valetNote}</span>
              </div>
            </div>
          </div>
        )}

        {/* View Switcher Controls */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-lg border border-border/60 bg-surface-container-lowest/95 p-1 shadow-sm backdrop-blur-md">
          <button
            aria-pressed={viewMode === "map"}
            className={`flex items-center gap-1 rounded px-2 py-1 font-label-sm text-xs transition-colors ${
              viewMode === "map"
                ? "bg-primary font-semibold text-on-primary"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            onClick={handleSelectMap}
            type="button"
          >
            <MdMap className="text-sm" />
            <span>Map</span>
          </button>
          <button
            aria-pressed={viewMode === "photo"}
            className={`flex items-center gap-1 rounded px-2 py-1 font-label-sm text-xs transition-colors ${
              viewMode === "photo"
                ? "bg-primary font-semibold text-on-primary"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
            onClick={handleSelectPhoto}
            type="button"
          >
            <MdPhotoCamera className="text-sm" />
            <span>Photo</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-2">
            <MdLocationOn className="mt-0.5 shrink-0 text-lg text-primary" />
            <span>{showroom.fullAddress}</span>
          </div>
          <a
            className="flex shrink-0 items-center gap-1 font-label-sm font-semibold text-label-sm text-primary transition-colors hover:underline"
            href={directionsUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <MdDirections className="text-base" />
            <span>Directions</span>
          </a>
        </div>
        <div className="flex items-start gap-2">
          <MdSchedule className="mt-0.5 shrink-0 text-lg text-primary" />
          <div>
            <p>{showroom.operatingHours}</p>
            <p className="text-secondary text-xs">{showroom.sundayHours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
