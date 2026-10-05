"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
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
      className={`group relative flex w-[85vw] max-w-85 shrink-0 cursor-pointer snap-center flex-col justify-between overflow-hidden rounded-xl border bg-surface-container-lowest text-left shadow-xs transition-all duration-200 sm:w-[380px] min-[1010px]:w-auto min-[1010px]:max-w-none ${
        isSelected
          ? "border-primary shadow-sm"
          : "border-border hover:border-border-strong hover:shadow-sm"
      }`}
      data-format-id={format.id}
      onClick={handleClick}
      type="button"
    >
      {/* Top Accent Indicator */}
      <div
        className={`absolute top-0 right-0 left-0 z-10 h-1 bg-primary transition-opacity duration-200 ${
          isSelected ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Edge-to-Edge Image Header */}
      <div className="relative h-48 w-full overflow-hidden sm:h-52">
        <Image
          alt={format.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          height={260}
          src={format.imageUrl}
          width={450}
        />
        <span className="absolute top-3 right-3 rounded border border-border/60 bg-surface-container-lowest/90 px-2.5 py-1 font-label-sm text-label-sm text-on-surface backdrop-blur-md">
          {format.badge}
        </span>
      </div>

      {/* Text Content and Action Row */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-bold font-display text-headline-sm text-on-surface">
            {format.title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            {format.description}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-border/60 border-t pt-4">
          <span className="flex items-center gap-1.5 font-label-sm font-semibold text-label-sm text-primary uppercase tracking-wider">
            {getFormatIcon(format.footerIcon)}
            <span>{format.footerText}</span>
          </span>
          <span
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
              isSelected
                ? "bg-primary text-on-primary"
                : "bg-surface-container text-on-surface group-hover:bg-primary group-hover:text-on-primary"
            }`}
          >
            <MdArrowForward className="text-base" />
          </span>
        </div>
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    // biome-ignore lint/suspicious/noUnnecessaryConditions: Ref is populated after mount
    if (!container || window.innerWidth > 1009) {
      return;
    }
    const activeCard = container.querySelector<HTMLButtonElement>(
      `[data-format-id="${selectedFormat}"]`
    );
    if (activeCard) {
      const cardLeft = activeCard.offsetLeft;
      const cardWidth = activeCard.offsetWidth;
      const containerWidth = container.offsetWidth;
      container.scrollTo({
        behavior: "smooth",
        left: cardLeft - (containerWidth - cardWidth) / 2,
      });
    }
  }, [selectedFormat]);

  return (
    <section className="mx-auto w-full max-w-400 px-margin-mobile pb-12 sm:pb-14 md:px-margin">
      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 min-[1010px]:grid min-[1010px]:grid-cols-3 min-[1010px]:gap-gutter min-[1010px]:overflow-visible min-[1010px]:pb-0 [&::-webkit-scrollbar]:hidden"
        ref={containerRef}
      >
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
