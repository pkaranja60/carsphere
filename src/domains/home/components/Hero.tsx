// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { buttonVariants, Typography } from "@/shared";
import { HeroSearchFilter } from "./hero-search-filter";
import { HeroValueBadges } from "./hero-value-badges";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function Hero() {
  return (
    <section className="relative flex min-h-[60vh] w-full flex-col justify-between bg-linear-to-b from-neutral-950/40 via-transparent to-neutral-950 lg:min-h-[65vh]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          alt="Luxury Sports Car"
          className="h-full w-full object-cover object-center"
          height={500}
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80"
          width={500}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-black/50" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-10 pb-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-7">
          <div className="flex items-center space-x-3">
            <span className="inline-block h-1 w-6 bg-red-600" />
            <span className="font-bold text-gray-300 text-xs uppercase tracking-widest md:text-sm lg:text-base">
              Drive Your Dream
            </span>
          </div>

          <Typography
            className="text-white"
            color="none"
            type="h1"
            variant="heroHeading"
          >
            Find The Perfect <br />
            Car For <span className="text-red-600 drop-shadow-xl">You</span>
          </Typography>

          <Typography
            className="max-w-lg"
            color="inverseMuted"
            type="body"
            variant="body"
          >
            Explore our premium collection of luxury, performance, and everyday
            cars.
          </Typography>

          <div className="flex w-full flex-col items-center gap-4 pt-2 sm:w-auto sm:flex-row">
            <Link
              className={buttonVariants({
                className:
                  "w-full shadow-lg shadow-red-600/30 hover:-translate-y-0.5 sm:w-auto",
                size: "lg",
                variant: "primary",
              })}
              href="#"
            >
              <span>View Inventory</span>
              <HiArrowLongRight size={24} />
            </Link>
            <Link
              className={buttonVariants({
                className: "w-full sm:w-auto",
                size: "lg",
                variant: "inverseOutline",
              })}
              href="#"
            >
              Book a Test Drive
            </Link>
          </div>

          <HeroValueBadges />
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-2 py-4 pb-10">
        <span className="h-1.5 w-6 cursor-pointer rounded-full bg-red-600" />
        <span className="h-1.5 w-3 cursor-pointer rounded-full bg-white/30 transition hover:bg-white/60" />
        <span className="h-1.5 w-3 cursor-pointer rounded-full bg-white/30 transition hover:bg-white/60" />
      </div>

      <HeroSearchFilter />
    </section>
  );
}
