// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { SectionLayout } from "@/shared/components";

// ─────────────────────────────────────────────
// SECTION: Types & Data
// ─────────────────────────────────────────────

interface BrandItem {
  name: string;
  stockCount: number;
}

const BRAND_ITEMS: BrandItem[] = [
  { name: "PORSCHE", stockCount: 42 },
  { name: "BMW", stockCount: 58 },
  { name: "MERCEDES", stockCount: 51 },
  { name: "AUDI", stockCount: 39 },
  { name: "GENESIS", stockCount: 28 },
  { name: "LEXUS", stockCount: 64 },
  { name: "LAND ROVER", stockCount: 22 },
  { name: "VOLVO", stockCount: 31 },
];

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

function BrandCard({ name, stockCount }: BrandItem) {
  return (
    <Link
      className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-surface-variant bg-surface-container-low/60 p-4 transition-all hover:bg-surface-container"
      href="#"
    >
      <span className="font-headline-sm font-semibold text-lg text-on-surface tracking-tighter transition-colors group-hover:text-primary">
        {name}
      </span>
      <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">
        {stockCount} In Stock
      </span>
    </Link>
  );
}

export function TopBrands() {
  return (
    <SectionLayout className="mt-space-lg pb-space-xl">
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
        <div className="grid grid-cols-2 items-stretch gap-space-md pt-space-lg text-center sm:grid-cols-4 lg:grid-cols-8">
          {BRAND_ITEMS.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
