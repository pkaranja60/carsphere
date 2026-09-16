// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function TopBrands() {
  return (
    <section className="mx-auto mt-space-lg w-full max-w-345 px-margin-mobile pt-space-xl pb-space-xl md:px-margin">
      <div className="rounded-xl border border-surface-variant bg-surface-container-lowest p-space-lg shadow-sm md:p-space-xl">
        <div className="flex flex-col items-center justify-between gap-space-sm border-surface-container border-b pb-space-lg md:flex-row">
          <div>
            <span className="mb-space-xs block font-label-sm font-semibold text-label-sm text-on-surface-variant uppercase tracking-widest">
              Authorized Brand Provenance
            </span>
            <h3 className="font-headline-sm font-semibold text-headline-sm text-on-surface">
              Curated Automakers
            </h3>
          </div>
          <Link
            className="font-label-sm font-semibold text-label-sm text-primary hover:underline"
            href="#"
          >
            View All 24 Manufacturers
          </Link>
        </div>
        <div className="grid grid-cols-2 items-center gap-space-md pt-space-lg text-center sm:grid-cols-4 lg:grid-cols-8">
          <Link
            className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-surface-variant bg-surface-container-low/60 p-4 transition-all hover:bg-surface-container"
            href="#"
          >
            <span className="font-headline-sm font-semibold text-lg text-on-surface tracking-tighter transition-colors group-hover:text-primary">
              PORSCHE
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
              42 In Stock
            </span>
          </Link>
          <Link
            className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-surface-variant bg-surface-container-low/60 p-4 transition-all hover:bg-surface-container"
            href="#"
          >
            <span className="font-headline-sm font-semibold text-lg text-on-surface tracking-tighter transition-colors group-hover:text-primary">
              BMW
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
              58 In Stock
            </span>
          </Link>
          <Link
            className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-surface-variant bg-surface-container-low/60 p-4 transition-all hover:bg-surface-container"
            href="#"
          >
            <span className="font-headline-sm font-semibold text-lg text-on-surface tracking-tighter transition-colors group-hover:text-primary">
              MERCEDES
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
              51 In Stock
            </span>
          </Link>
          <Link
            className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-surface-variant bg-surface-container-low/60 p-4 transition-all hover:bg-surface-container"
            href="#"
          >
            <span className="font-headline-sm font-semibold text-lg text-on-surface tracking-tighter transition-colors group-hover:text-primary">
              AUDI
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
              39 In Stock
            </span>
          </Link>
          <Link
            className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-surface-variant bg-surface-container-low/60 p-4 transition-all hover:bg-surface-container"
            href="#"
          >
            <span className="font-headline-sm font-semibold text-lg text-on-surface tracking-tighter transition-colors group-hover:text-primary">
              GENESIS
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
              28 In Stock
            </span>
          </Link>
          <Link
            className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-surface-variant bg-surface-container-low/60 p-4 transition-all hover:bg-surface-container"
            href="#"
          >
            <span className="font-headline-sm font-semibold text-lg text-on-surface tracking-tighter transition-colors group-hover:text-primary">
              LEXUS
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
              64 In Stock
            </span>
          </Link>
          <Link
            className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-surface-variant bg-surface-container-low/60 p-4 transition-all hover:bg-surface-container"
            href="#"
          >
            <span className="font-headline-sm font-semibold text-lg text-on-surface tracking-tighter transition-colors group-hover:text-primary">
              LAND ROVER
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
              22 In Stock
            </span>
          </Link>
          <Link
            className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-surface-variant bg-surface-container-low/60 p-4 transition-all hover:bg-surface-container"
            href="#"
          >
            <span className="font-headline-sm font-semibold text-lg text-on-surface tracking-tighter transition-colors group-hover:text-primary">
              VOLVO
            </span>
            <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
              31 In Stock
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
