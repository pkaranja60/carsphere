"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type React from "react";
import { useCarousel } from "./carousel";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export const CarouselContent = ({
  className = "",
  ref,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => {
  const { carouselRef } = useCarousel();
  return (
    <div className="overflow-hidden" ref={carouselRef}>
      <div className={`-ml-4 flex ${className}`} ref={ref} {...props} />
    </div>
  );
};
CarouselContent.displayName = "CarouselContent";
