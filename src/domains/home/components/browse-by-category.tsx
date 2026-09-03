// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { FaBoltLightning, FaCar, FaCouch, FaGaugeHigh } from "react-icons/fa6";
import { HiOutlineArrowRight, HiOutlineSparkles } from "react-icons/hi2";
import { Typography } from "@/shared";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function BrowseByCategory() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <Typography type="h2" variant="heading">
          Browse By Category
        </Typography>
        <Link
          className="inline-flex items-center gap-1.5 font-semibold text-neutral-800 text-xs transition hover:text-red-600 sm:text-sm"
          href="#"
        >
          <span>View All Categories</span>
          <HiOutlineArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <div className="rounded-xl border border-border bg-surface p-3 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-950 sm:aspect-[4/3]">
            <Image
              alt="SUVs"
              className="h-full w-full object-cover object-center"
              fill
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80"
            />
          </div>
          <div className="relative px-1 pt-4 pb-1">
            <div className="absolute -top-4 left-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-white shadow">
              <FaCar className="h-3.5 w-3.5" />
            </div>
            <Typography type="h3" variant="subheading">
              SUVs
            </Typography>
            <p className="font-medium text-[11px] text-neutral-400">
              Spacious & Powerful
            </p>
            <Link
              className="mt-2 inline-flex items-center gap-1 font-bold text-[11px] text-neutral-900 transition hover:text-red-600"
              href="#"
            >
              Explore <HiOutlineArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-3 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-950 sm:aspect-[4/3]">
            <Image
              alt="Sedans"
              className="h-full w-full object-cover object-center"
              fill
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
            />
          </div>
          <div className="relative px-1 pt-4 pb-1">
            <div className="absolute -top-4 left-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-white shadow">
              <FaCouch className="h-3.5 w-3.5" />
            </div>
            <Typography type="h3" variant="subheading">
              Sedans
            </Typography>
            <p className="font-medium text-[11px] text-neutral-400">
              Comfort & Style
            </p>
            <Link
              className="mt-2 inline-flex items-center gap-1 font-bold text-[11px] text-neutral-900 transition hover:text-red-600"
              href="#"
            >
              Explore <HiOutlineArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-3 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-950 sm:aspect-[4/3]">
            <Image
              alt="Sports Cars"
              className="h-full w-full object-cover object-center"
              fill
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80"
            />
          </div>
          <div className="relative px-1 pt-4 pb-1">
            <div className="absolute -top-4 left-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-white shadow">
              <FaGaugeHigh className="h-3.5 w-3.5" />
            </div>
            <Typography type="h3" variant="subheading">
              Sports Cars
            </Typography>
            <p className="font-medium text-[11px] text-neutral-400">
              High Performance
            </p>
            <Link
              className="mt-2 inline-flex items-center gap-1 font-bold text-[11px] text-neutral-900 transition hover:text-red-600"
              href="#"
            >
              Explore <HiOutlineArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-3 shadow-sm transition hover:shadow-md">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-950 sm:aspect-[4/3]">
            <Image
              alt="Hatchbacks"
              className="h-full w-full object-cover object-center"
              fill
              src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80"
            />
          </div>
          <div className="relative px-1 pt-4 pb-1">
            <div className="absolute -top-4 left-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-white shadow">
              <FaBoltLightning className="h-3.5 w-3.5" />
            </div>
            <Typography type="h3" variant="subheading">
              Hatchbacks
            </Typography>
            <p className="font-medium text-[11px] text-neutral-400">
              Smart & Efficient
            </p>
            <Link
              className="mt-2 inline-flex items-center gap-1 font-bold text-[11px] text-neutral-900 transition hover:text-red-600"
              href="#"
            >
              Explore <HiOutlineArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="col-span-2 rounded-xl border border-border bg-surface p-3 shadow-sm transition hover:shadow-md sm:col-span-1">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-950 sm:aspect-[4/3]">
            <Image
              alt="Luxury Cars"
              className="h-full w-full object-cover object-center"
              fill
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
            />
          </div>
          <div className="relative px-1 pt-4 pb-1">
            <div className="absolute -top-4 left-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-white shadow">
              <HiOutlineSparkles className="h-3.5 w-3.5" />
            </div>
            <Typography type="h3" variant="subheading">
              Luxury Cars
            </Typography>
            <p className="font-medium text-[11px] text-neutral-400">
              Ultimate Luxury
            </p>
            <Link
              className="mt-2 inline-flex items-center gap-1 font-bold text-[11px] text-neutral-900 transition hover:text-red-600"
              href="#"
            >
              Explore <HiOutlineArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
