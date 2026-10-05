// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { MdVerified } from "react-icons/md";
import type { MetricItem } from "../types/services.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ServicesHeroSectionProps {
  metrics: MetricItem[];
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ServicesHeroSection({ metrics }: ServicesHeroSectionProps) {
  return (
    <section className="relative mx-auto w-full max-w-400 px-margin-mobile pt-6 pb-12 sm:pt-8 sm:pb-16 md:px-margin lg:pb-20">
      <div className="flex flex-col justify-between gap-space-lg lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <div className="mb-space-md inline-flex items-center gap-2 rounded-full border border-border bg-surface-container px-3 py-1 font-label-sm font-semibold text-label-sm text-primary uppercase tracking-wider">
            <MdVerified className="text-base text-primary" />
            <span>Private Client Services &amp; Advisory</span>
            <span className="font-normal text-on-surface-variant">
              / Beverly Hills
            </span>
          </div>

          <h1 className="font-bold font-display text-display text-on-surface leading-[1.05] tracking-tight">
            Comprehensive Automotive Client Services
          </h1>

          <p className="mt-space-md max-w-2xl font-body-md text-body-md text-on-surface-variant leading-relaxed sm:font-body-lg sm:text-body-lg">
            From bespoke lease tailoring and instant digital trade-in equity to
            nationwide enclosed logistics and 150-point certified heritage
            warranty extensions.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Link
            className="flex items-center justify-center rounded-lg bg-primary-container px-6 py-3.5 font-label-md font-semibold text-label-md text-white uppercase tracking-wider shadow-sm transition hover:bg-primary"
            href="#quick-inquiry"
          >
            Direct Advisory Inquiry
          </Link>
          <Link
            className="flex items-center justify-center rounded-lg border border-border bg-surface-container-low px-6 py-3.5 font-label-md font-semibold text-label-md text-on-surface transition hover:bg-surface-container-high"
            href="#guarantees"
          >
            Client Guarantees
          </Link>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 rounded-2xl border border-border bg-surface-container-low p-4 shadow-xs sm:mt-12 sm:gap-space-md sm:p-space-lg md:grid-cols-4">
        {metrics.map((item) => (
          <div
            className="flex flex-col rounded-xl border border-border/60 bg-surface-container-lowest/80 p-3.5 sm:border-0 sm:bg-transparent sm:p-0"
            key={item.id}
          >
            <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-wider sm:text-label-sm">
              {item.label}
            </span>
            <span className="mt-1 font-bold font-display text-headline-sm text-on-surface sm:text-headline-md">
              {item.metric}
              {item.unit ? (
                <span className="ml-1 font-normal font-sans text-on-surface-variant text-xs sm:text-body-sm">
                  {item.unit}
                </span>
              ) : null}
            </span>
            <span className="mt-1 font-body-sm text-[11px] text-on-surface-variant sm:text-body-sm">
              {item.subtext}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
