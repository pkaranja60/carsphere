"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useCarousel } from "./carousel";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export const CarouselPrevious = ({
  className = "",
  ref,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: React.RefObject<HTMLButtonElement | null>;
}) => {
  const { canScrollPrev, scrollPrev } = useCarousel();
  return (
    <button
      className={`absolute top-1/2 left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/50 text-foreground backdrop-blur-md transition-all hover:bg-primary disabled:opacity-50 disabled:hover:bg-surface/50 ${className}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      ref={ref}
      type="button"
      {...props}
    >
      <HiOutlineChevronLeft className="h-5 w-5" />
      <span className="sr-only">Previous slide</span>
    </button>
  );
};
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = ({
  className = "",
  ref,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: React.RefObject<HTMLButtonElement | null>;
}) => {
  const { canScrollNext, scrollNext } = useCarousel();
  return (
    <button
      className={`absolute top-1/2 right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/50 text-foreground backdrop-blur-md transition-all hover:bg-primary disabled:opacity-50 disabled:hover:bg-surface/50 ${className}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      ref={ref}
      type="button"
      {...props}
    >
      <HiOutlineChevronRight className="h-5 w-5" />
      <span className="sr-only">Next slide</span>
    </button>
  );
};
CarouselNext.displayName = "CarouselNext";
