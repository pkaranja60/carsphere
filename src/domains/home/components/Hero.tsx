// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { HeroSearchFilter } from "./HeroSearchFilter";
import { HeroValueBadges } from "./HeroValueBadges";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function Hero() {
  return (
    <section className="relative flex min-h-[50vh] w-full flex-col justify-between overflow-hidden bg-linear-to-b from-[#0b0c10]/40 via-transparent to-[#0b0c10]">
      <div className="absolute inset-0 -z-10">
        <Image
          alt="Luxury Sports Car"
          className="h-full w-full object-cover object-center"
          height={500}
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80"
          width={500}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0c] via-transparent to-black/50" />
      </div>

      <div className="container mx-auto flex w-full flex-1 flex-col justify-center pt-10 pb-10">
        <div className="max-w-2xl space-y-7">
          <div className="flex items-center space-x-3">
            <span className="inline-block h-[2.5px] w-6 bg-red-600" />
            <span className="font-bold text-gray-300 text-xs uppercase tracking-[0.25em]">
              Drive Your Dream
            </span>
          </div>

          <h1 className="font-racing text-4xl text-white uppercase italic leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Find The Perfect <br />
            Car For{" "}
            <span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]">
              You
            </span>
          </h1>

          <p className="max-w-lg font-light text-gray-300 text-sm leading-relaxed sm:text-base">
            Explore our premium collection of luxury, performance, and everyday
            cars.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 font-medium text-sm text-white shadow-lg shadow-red-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700"
              href="#"
            >
              <span>View Inventory</span>
              <HiArrowLongRight size={24} />
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 font-medium text-sm text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10"
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
