// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { ReactNode } from "react";
import { MdOutlineShield } from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface ConciergeBannerProps {
  badge?: string;
  children?: ReactNode;
  className?: string;
  description?: string;
  title?: string;
  variant?: "surface" | "inverse";
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ConciergeBanner({
  badge = "Private Client Sourcing Division",
  children,
  className = "",
  description = "Our automotive acquisition specialists source off-market verified models, bespoke configurations, and rare allocations from private collections across North America and Europe.",
  title = "Can't find your exact specification?",
  variant = "surface",
}: ConciergeBannerProps) {
  const isInverse = variant === "inverse";

  return (
    <section
      className={`px-4 py-6 sm:px-margin-mobile sm:py-8 md:px-margin ${className}`}
      data-purpose="concierge-cta"
    >
      <div
        className={`mx-auto flex max-w-1400 flex-col items-start justify-between gap-6 rounded-xl border p-5 shadow-none sm:rounded-2xl sm:p-8 md:shadow-sm lg:flex-row lg:items-center lg:gap-8 lg:p-10 ${
          isInverse
            ? "border-border bg-inverse-surface text-inverse-on-surface"
            : "border-border/80 bg-surface text-on-surface"
        }`}
      >
        <div className="max-w-2xl space-y-2">
          <div
            className={`flex items-center gap-2 font-label-sm font-semibold text-[11px] uppercase tracking-widest sm:text-xs ${
              isInverse ? "text-primary-fixed" : "text-primary"
            }`}
          >
            <MdOutlineShield className="h-4 w-4 shrink-0" />
            <span>{badge}</span>
          </div>

          <h2
            className={`font-bold font-display text-xl sm:text-2xl lg:text-3xl ${
              isInverse ? "text-inverse-on-surface" : "text-on-surface"
            }`}
          >
            {title}
          </h2>

          <p
            className={`font-body-sm text-xs leading-relaxed sm:text-sm ${
              isInverse
                ? "text-inverse-on-surface/80"
                : "text-on-surface-variant"
            }`}
          >
            {description}
          </p>
        </div>

        <div className="w-full shrink-0 lg:w-auto">
          {children ? (
            children
          ) : (
            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:flex-row sm:items-center lg:w-auto">
              <a
                className="flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-center font-label-md font-medium text-on-primary text-xs shadow-none transition-colors hover:bg-primary-fixed-dim hover:text-on-primary-fixed sm:px-6 sm:py-3.5 sm:text-sm"
                href="/contact?vehicle=custom-sourcing"
              >
                Request Bespoke Vehicle Search
              </a>
              <a
                className="flex items-center justify-center rounded-lg bg-surface-container-high px-5 py-3 text-center font-label-md font-medium text-on-surface text-xs transition-colors hover:bg-surface-container-highest sm:px-6 sm:py-3.5 sm:text-sm"
                href="tel:18005550199"
              >
                Call Concierge Team
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
