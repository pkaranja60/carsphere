// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function TopBrands() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-bold text-neutral-900 text-xl tracking-tight sm:text-2xl">
          Our Top Brands
        </h2>
        <Link
          className="inline-flex items-center gap-1.5 font-semibold text-neutral-800 text-xs transition hover:text-red-600 sm:text-sm"
          href="#"
        >
          <span>View All Brands</span>
          <HiOutlineArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8">
        <Link
          className="group flex h-24 items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-3 transition hover:border-neutral-300 hover:shadow-md"
          href="#"
        >
          <Image
            alt="BMW"
            className="h-10 w-auto object-contain transition group-hover:scale-105"
            height={120}
            src="https://cdn.simpleicons.org/bmw/000000"
            width={120}
          />
        </Link>

        <Link
          className="group flex h-24 flex-col items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-2 transition hover:border-neutral-300 hover:shadow-md"
          href="#"
        >
          <Image
            alt="Mercedes-Benz"
            className="h-8 w-auto object-contain transition group-hover:scale-105"
            height={120}
            src="https://cdn.simpleicons.org/mercedes/000000"
            width={120}
          />
          <span className="mt-1.5 text-center font-semibold text-[10px] text-neutral-800 tracking-tight">
            Mercedes-Benz
          </span>
        </Link>

        <Link
          className="group flex h-24 flex-col items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-2 transition hover:border-neutral-300 hover:shadow-md"
          href="#"
        >
          <Image
            alt="Audi"
            className="h-6 w-auto object-contain transition group-hover:scale-105"
            height={120}
            src="https://cdn.simpleicons.org/audi/000000"
            width={120}
          />
          <span className="mt-1.5 font-bold text-red-600 text-xs uppercase tracking-wider">
            Audi
          </span>
        </Link>

        <Link
          className="group flex h-24 flex-col items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-2 transition hover:border-neutral-300 hover:shadow-md"
          href="#"
        >
          <Image
            alt="Porsche"
            className="h-7 w-auto object-contain transition group-hover:scale-105"
            height={120}
            src="https://cdn.simpleicons.org/porsche/D5001C"
            width={120}
          />
          <span className="mt-1 font-extrabold text-[9px] text-neutral-800 uppercase tracking-[0.2em]">
            PORSCHE
          </span>
        </Link>

        <Link
          className="group flex h-24 items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-3 transition hover:border-neutral-300 hover:shadow-md"
          href="#"
        >
          <span className="rounded-full bg-[#005a2b] px-2.5 py-1.5 text-center font-black text-[9px] text-white uppercase leading-none tracking-wider">
            LAND-
            <br />
            ROVER
          </span>
        </Link>

        <Link
          className="group flex h-24 flex-col items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-2 transition hover:border-neutral-300 hover:shadow-md"
          href="#"
        >
          <Image
            alt="Toyota"
            className="h-7 w-auto object-contain transition group-hover:scale-105"
            height={120}
            src="https://cdn.simpleicons.org/toyota/EB0A1E"
            width={120}
          />
          <span className="mt-1 font-bold text-[10px] text-red-600 uppercase tracking-wider">
            TOYOTA
          </span>
        </Link>

        <Link
          className="group flex h-24 flex-col items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-2 transition hover:border-neutral-300 hover:shadow-md"
          href="#"
        >
          <Image
            alt="Honda"
            className="h-7 w-auto object-contain transition group-hover:scale-105"
            height={120}
            src="https://cdn.simpleicons.org/honda/CC0000"
            width={120}
          />
          <span className="mt-1 font-extrabold text-[10px] text-red-600 uppercase tracking-wider">
            HONDA
          </span>
        </Link>

        <Link
          className="group flex h-24 flex-col items-center justify-center rounded-xl border border-neutral-200/80 bg-white p-2 transition hover:border-neutral-300 hover:shadow-md"
          href="#"
        >
          <Image
            alt="Tesla"
            className="h-6 w-auto object-contain transition group-hover:scale-105"
            height={120}
            src="https://cdn.simpleicons.org/tesla/E82127"
            width={120}
          />
          <span className="mt-1.5 font-bold text-[9px] text-red-600 uppercase tracking-[0.25em]">
            TESLA
          </span>
        </Link>
      </div>
    </section>
  );
}
