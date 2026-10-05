// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import { MdDirectionsCar, MdLocationOn, MdSchedule } from "react-icons/md";
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

      <div className="relative h-44 w-full overflow-hidden rounded-lg shadow-inner">
        <Image
          alt="Beverly Hills Flagship Lounge exterior portico and valet entrance"
          className="h-full w-full object-cover"
          height={220}
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

      <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
        <div className="flex items-start gap-2">
          <MdLocationOn className="mt-0.5 shrink-0 text-lg text-primary" />
          <span>{showroom.fullAddress}</span>
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
