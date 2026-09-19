// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { SectionLayout } from "@/shared/components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";

// ─────────────────────────────────────────────
// SECTION: Types & Data
// ─────────────────────────────────────────────

interface BrandItem {
  name: string;
}

const BRAND_ITEMS: BrandItem[] = [
  { name: "PORSCHE" },
  { name: "BMW" },
  { name: "MERCEDES" },
  { name: "AUDI" },
  { name: "GENESIS" },
  { name: "LEXUS" },
  { name: "LAND ROVER" },
  { name: "VOLVO" },
];

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

function BrandCard({ name }: BrandItem) {
  return (
    <Link
      className="group flex h-20 flex-col items-center justify-center gap-2 rounded-lg border border-surface-variant bg-surface-container-low/60 px-4 transition hover:bg-surface-container"
      href="#"
    >
      <span className="font-headline-sm font-semibold text-lg text-on-surface tracking-tighter transition-colors group-hover:text-primary">
        {name}
      </span>
    </Link>
  );
}

export function TopBrands() {
  return (
    <SectionLayout className="mt-space-lg pb-space-xl">
      <div className="flex flex-col items-center justify-between gap-space-sm border-surface-container border-b pb-space-lg md:flex-row">
        <div>
          <h3 className="font-headline-sm font-semibold text-headline-sm text-on-surface">
            Authorized Brands
          </h3>
        </div>
        <Link
          className="font-label-sm font-semibold text-label-sm text-primary hover:underline"
          href="#"
        >
          View All 24 Manufacturers
        </Link>
      </div>

      <Carousel
        className="mt-space-lg w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {BRAND_ITEMS.map((brand) => (
            <CarouselItem
              className="basis-1/2 sm:basis-1/4 lg:basis-1/6"
              key={brand.name}
            >
              <BrandCard {...brand} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="-left-4" />
          <CarouselNext className="-right-4" />
        </div>
      </Carousel>
    </SectionLayout>
  );
}
