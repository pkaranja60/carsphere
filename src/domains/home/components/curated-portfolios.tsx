// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function CuratedPortfolios() {
  return (
    <section className="mx-auto mt-space-lg w-full max-w-345 px-margin-mobile pt-space-xl md:px-margin">
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
          <div className="relative z-10">
            <div className="mb-space-md flex items-center justify-between">
              <span className="rounded-full bg-primary-container px-3 py-1 font-label-sm font-semibold text-label-sm text-on-primary uppercase tracking-wider">
                Tier I Curation
              </span>
              <span className="material-symbols-outlined text-3xl text-primary-container">
                speed
              </span>
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
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
            <span className="font-price-card font-semibold text-on-surface text-price-card">
              $68k – $320k
            </span>
          </div>
        </div>

        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest p-space-lg shadow-sm transition-all hover:shadow-md md:p-space-xl">
          <div className="relative z-10">
            <div className="mb-space-md flex items-center justify-between">
              <span className="rounded-full bg-tertiary px-3 py-1 font-label-sm font-semibold text-label-sm text-on-tertiary uppercase tracking-wider">
                Tier II Certified
              </span>
              <span className="material-symbols-outlined text-3xl text-tertiary">
                eco
              </span>
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
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
            <span className="font-price-card font-semibold text-on-surface text-price-card">
              $24k – $45k
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
