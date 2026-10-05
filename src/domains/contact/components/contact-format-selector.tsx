"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import { useCallback } from "react";
import {
  MdArrowForward,
  MdLocalShipping,
  MdLocationOn,
  MdVideocam,
} from "react-icons/md";
import type {
  ViewingFormatId,
  ViewingFormatOption,
} from "../types/contact.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ContactFormatSelectorProps {
  formats: ViewingFormatOption[];
  onSelectFormat: (id: ViewingFormatId) => void;
  selectedFormat: ViewingFormatId;
}

interface FormatCardProps {
  format: ViewingFormatOption;
  isSelected: boolean;
  onSelect: (id: ViewingFormatId) => void;
}

// ─────────────────────────────────────────────
// SECTION: Helpers
// ─────────────────────────────────────────────

function getFormatIcon(iconName: string) {
  if (iconName === "location_on") {
    return <MdLocationOn className="text-base text-primary" />;
  }
  if (iconName === "local_shipping") {
    return <MdLocalShipping className="text-base text-primary" />;
  }
  return <MdVideocam className="text-base text-primary" />;
}

function FormatCard({ format, isSelected, onSelect }: FormatCardProps) {
  const handleClick = useCallback(() => {
    onSelect(format.id);
  }, [format.id, onSelect]);

  return (
    <button
      aria-pressed={isSelected}
      className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-border bg-surface-container-lowest p-4 text-left shadow-xs transition-all duration-200 hover:border-border-strong hover:shadow-sm sm:p-space-lg"
      onClick={handleClick}
      type="button"
    >
      {/* Top Accent Indicator */}
      <div
        className={`absolute top-0 right-0 left-0 h-1 bg-primary transition-opacity duration-200 ${
          isSelected ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="flex flex-col gap-3.5 sm:gap-space-md">
        <div className="relative h-44 w-full overflow-hidden rounded-lg">
          <Image
            alt={format.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            height={200}
            src={format.imageUrl}
            width={400}
          />
          <span className="absolute top-3 right-3 rounded border border-border/60 bg-surface-container-lowest/90 px-2.5 py-1 font-label-sm text-label-sm text-on-surface backdrop-blur-md">
            {format.badge}
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="font-bold font-display text-headline-sm text-on-surface">
            {format.title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            {format.description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-border/60 border-t pt-3.5 sm:mt-space-lg sm:pt-space-md">
        <span className="flex items-center gap-1.5 font-label-sm font-semibold text-label-sm text-primary uppercase tracking-wider">
          {getFormatIcon(format.footerIcon)}
          <span>{format.footerText}</span>
        </span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface-container text-on-surface transition-colors group-hover:bg-primary group-hover:text-on-primary">
          <MdArrowForward className="text-base" />
        </span>
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ContactFormatSelector({
  formats,
  onSelectFormat,
  selectedFormat,
}: ContactFormatSelectorProps) {
  return (
    <section className="mx-auto w-full max-w-400 px-margin-mobile pb-12 sm:pb-14 md:px-margin">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-gutter">
        {formats.map((format) => (
          <FormatCard
            format={format}
            isSelected={selectedFormat === format.id}
            key={format.id}
            onSelect={onSelectFormat}
          />
        ))}
      </div>
    </section>
  );
}
