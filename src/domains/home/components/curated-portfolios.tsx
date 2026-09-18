// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { MdArrowForward, MdOutlineEco, MdOutlineSpeed } from "react-icons/md";
import { SectionLayout } from "@/shared/components";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function CuratedPortfolios() {
  return (
    <SectionLayout className="mt-space-lg">
      <div className="mb-space-lg flex flex-col items-start justify-between gap-space-xs md:flex-row md:items-end">
        <div>
          <span className="mb-space-xs block font-label-sm font-semibold text-label-sm text-primary uppercase tracking-widest">
            Curated Portfolios
          </span>
          <h2 className="font-headline-lg font-semibold text-headline-lg text-on-surface tracking-tight">
            Select Your Driving Dimension
          </h2>
        </div>
        <p className="max-w-md font-body-sm text-body-sm text-on-surface-variant">
          Two dedicated acquisition paths tailored to performance enthusiasts
          and astute daily commuters with equal certitude.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2">
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest p-space-lg shadow-sm transition-all hover:shadow-md md:p-space-xl">
          <InkSplatterOne className="absolute -right-16 -bottom-16 w-80 text-on-surface/4 transition-transform duration-700 ease-out group-hover:-rotate-3 group-hover:scale-105 dark:text-on-surface/[0.03]" />
          <div className="relative z-10">
            <div className="mb-space-md flex items-center justify-between">
              <span className="rounded-full bg-primary-container px-3 py-1 font-label-sm font-semibold text-label-sm text-on-primary-container uppercase tracking-wider">
                Tier I Curation
              </span>
              <MdOutlineSpeed className="text-3xl text-primary-container" />
            </div>
            <h3 className="mb-space-xs font-headline-md font-semibold text-headline-md text-on-surface">
              Premium & Performance
            </h3>
            <p className="mb-space-lg max-w-md font-body-md text-body-md text-on-surface-variant">
              Supercars, grand tourers, and executive flagships curated for
              connoisseurs seeking sheer dynamic capability.
            </p>
            <div className="mb-space-xl flex flex-wrap gap-space-xs">
              <span className="rounded-md border border-surface-variant bg-surface-container-low px-2.5 py-1 font-label-sm font-medium text-label-sm text-on-surface-variant">
                Porsche GT
              </span>
              <span className="rounded-md border border-surface-variant bg-surface-container-low px-2.5 py-1 font-label-sm font-medium text-label-sm text-on-surface-variant">
                Aston Martin
              </span>
              <span className="rounded-md border border-surface-variant bg-surface-container-low px-2.5 py-1 font-label-sm font-medium text-label-sm text-on-surface-variant">
                Mercedes-AMG
              </span>
              <span className="rounded-md border border-surface-variant bg-surface-container-low px-2.5 py-1 font-label-sm font-medium text-label-sm text-on-surface-variant">
                BMW M Power
              </span>
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-between border-surface-container border-t pt-space-md">
            <Link
              className="inline-flex items-center gap-space-xs font-label-lg font-semibold text-label-lg text-primary transition-all hover:text-primary-container"
              href="#"
            >
              <span>View Collection (142 Vehicles)</span>
              <MdArrowForward className="text-lg transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="font-price-card font-semibold text-on-surface text-price-card">
              $68k – $320k
            </span>
          </div>
        </div>

        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest p-space-lg shadow-sm transition-all hover:shadow-md md:p-space-xl">
          <InkSplatterTwo className="absolute -right-16 -bottom-16 w-80 text-on-surface/4 transition-transform duration-700 ease-out group-hover:rotate-3 group-hover:scale-105 dark:text-on-surface/[0.03]" />
          <div className="relative z-10">
            <div className="mb-space-md flex items-center justify-between">
              <span className="rounded-full bg-tertiary px-3 py-1 font-label-sm font-semibold text-label-sm text-on-tertiary uppercase tracking-wider">
                Tier II Certified
              </span>
              <MdOutlineEco className="text-3xl text-tertiary" />
            </div>
            <h3 className="mb-space-xs font-headline-md font-semibold text-headline-md text-on-surface">
              Everyday Excellence
            </h3>
            <p className="mb-space-lg max-w-md font-body-md text-body-md text-on-surface-variant">
              Pristine daily crossovers, premium estates, and fuel-efficient
              family leaders under $45k with meticulous records.
            </p>
            <div className="mb-space-xl flex flex-wrap gap-space-xs">
              <span className="rounded-md border border-surface-variant bg-surface-container-low px-2.5 py-1 font-label-sm font-medium text-label-sm text-on-surface-variant">
                Audi Q5
              </span>
              <span className="rounded-md border border-surface-variant bg-surface-container-low px-2.5 py-1 font-label-sm font-medium text-label-sm text-on-surface-variant">
                Lexus NX & RX
              </span>
              <span className="rounded-md border border-surface-variant bg-surface-container-low px-2.5 py-1 font-label-sm font-medium text-label-sm text-on-surface-variant">
                Volvo XC60
              </span>
              <span className="rounded-md border border-surface-variant bg-surface-container-low px-2.5 py-1 font-label-sm font-medium text-label-sm text-on-surface-variant">
                Genesis G70
              </span>
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-between border-surface-container border-t pt-space-md">
            <Link
              className="inline-flex items-center gap-space-xs font-label-lg font-semibold text-label-lg text-tertiary transition-all hover:text-tertiary-container"
              href="#"
            >
              <span>Explore Daily Drivers (340 Vehicles)</span>
              <MdArrowForward className="text-lg transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="font-price-card font-semibold text-on-surface text-price-card">
              $24k – $45k
            </span>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

// ─────────────────────────────────────────────
// SECTION: Icons
// ─────────────────────────────────────────────

function InkSplatterOne({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Ink Splatter One</title>
      <path
        d="M45.7,-77.8C58.8,-69.1,68.9,-54.6,76.5,-39.1C84.1,-23.5,89.3,-6.9,86.2,8.1C83.2,23,72,36.4,60.8,49.1C49.5,61.8,38.3,73.8,24.3,79.5C10.3,85.2,-6.4,84.7,-21.8,79.6C-37.2,74.5,-51.3,64.8,-62.4,52.3C-73.5,39.9,-81.6,24.6,-83.4,8.9C-85.1,-6.8,-80.5,-22.8,-71.8,-35.6C-63,-48.3,-50.2,-57.8,-37,-66.3C-23.7,-74.8,-11.9,-82.2,2.3,-86.1C16.5,-90.1,32.7,-86.5,45.7,-77.8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

function InkSplatterTwo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Ink Splatter Two</title>
      <path
        d="M50.4,-67.2C64.6,-57.1,75.1,-41.8,77,-25.8C78.9,-9.8,72.2,6.9,64.6,23.1C57.1,39.3,48.7,55,35,63.1C21.3,71.2,2.4,71.7,-14.9,67.6C-32.2,63.4,-47.9,54.7,-60.7,41.9C-73.4,29,-83.1,12.1,-82.6,-4.4C-82,-20.9,-71.1,-37,-57.8,-47.7C-44.5,-58.4,-28.9,-63.6,-13.7,-67C1.5,-70.4,17.5,-72,36.2,-77.3C38,-65.4,43.7,-60.6,50.4,-67.2Z"
        transform="translate(100 100) scale(1.15) rotate(45)"
      />
    </svg>
  );
}
