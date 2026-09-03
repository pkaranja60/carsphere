// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { BrandCard, Typography } from "@/shared";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function TopBrands() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <Typography type="h2" variant="heading">
          Our Top Brands
        </Typography>
        <Link
          className="inline-flex items-center gap-1.5 font-semibold text-foreground text-sm transition hover:text-red-600 md:text-base"
          href="#"
        >
          <span>View All Brands</span>
          <HiOutlineArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8 min-[480px]:grid-cols-3">
        <BrandCard
          brandName="BMW"
          containerClassName="p-3"
          href="#"
          imageClassName="h-10 w-auto object-contain transition group-hover:scale-105"
          logoSrc="https://cdn.simpleicons.org/bmw/000000"
          showLabel={false}
        />

        <BrandCard containerClassName="p-3" href="#">
          <span className="text-center font-extrabold text-foreground text-xs leading-tight tracking-wider md:text-sm">
            Mercedes-
            <br />
            Benz
          </span>
        </BrandCard>

        <BrandCard
          brandName="Audi"
          href="#"
          imageClassName="h-6 w-auto object-contain transition group-hover:scale-105"
          labelClassName="mt-1.5 font-bold text-red-600 text-xs uppercase tracking-wider md:text-xs"
          logoSrc="https://cdn.simpleicons.org/audi/000000"
        />

        <BrandCard
          brandName="PORSCHE"
          href="#"
          imageClassName="h-7 w-auto object-contain transition group-hover:scale-105"
          labelClassName="mt-1 font-extrabold text-foreground text-xs uppercase tracking-widest md:text-xs"
          logoSrc="https://cdn.simpleicons.org/porsche/D5001C"
        />

        <BrandCard containerClassName="p-3" href="#">
          <span className="rounded-full bg-green-800 px-2.5 py-1.5 text-center font-black text-white text-xs uppercase leading-none tracking-wider md:text-xs">
            LAND-
            <br />
            ROVER
          </span>
        </BrandCard>

        <BrandCard
          brandName="TOYOTA"
          href="#"
          imageClassName="h-7 w-auto object-contain transition group-hover:scale-105"
          labelClassName="mt-1 font-bold text-red-600 text-xs uppercase tracking-wider md:text-xs"
          logoSrc="https://cdn.simpleicons.org/toyota/EB0A1E"
        />

        <BrandCard
          brandName="HONDA"
          href="#"
          imageClassName="h-7 w-auto object-contain transition group-hover:scale-105"
          labelClassName="mt-1 font-extrabold text-red-600 text-xs uppercase tracking-wider md:text-xs"
          logoSrc="https://cdn.simpleicons.org/honda/CC0000"
        />

        <BrandCard
          brandName="TESLA"
          href="#"
          imageClassName="h-6 w-auto object-contain transition group-hover:scale-105"
          labelClassName="mt-1.5 font-bold text-red-600 text-xs uppercase tracking-widest md:text-xs"
          logoSrc="https://cdn.simpleicons.org/tesla/E82127"
        />
      </div>
    </section>
  );
}
