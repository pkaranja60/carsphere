// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type React from "react";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export const CarouselItem = ({
  className = "",
  ref,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => (
  // biome-ignore lint/a11y/useSemanticElements: ARIA standard for slides
  <div
    aria-roledescription="slide"
    className={`min-w-0 shrink-0 grow-0 basis-full pl-4 ${className}`}
    ref={ref}
    role="group"
    {...props}
  />
);
CarouselItem.displayName = "CarouselItem";
