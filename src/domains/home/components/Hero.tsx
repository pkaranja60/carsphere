// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { buttonVariants, Typography } from "@/shared";
import { HeroSearchFilter } from "./hero-search-filter";
import { HeroValueBadges } from "./hero-value-badges";

// ─────────────────────────────────────────────
// SECTION: Data
// ─────────────────────────────────────────────

const heroSlides = [
  {
    desc: "Explore our premium collection of luxury, performance, and everyday cars.",
    highlight: "You",
    image:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80",
    tag: "Drive Your Dream",
    title1: "Find The Perfect",
    title2: "Car For",
  },
  {
    desc: "Elevate your driving experience with our exclusive collection of premium sports cars.",
    highlight: "Drive",
    image:
      "https://images.unsplash.com/photo-1503376762283-e12918805f41?auto=format&fit=crop&w=2000&q=80",
    tag: "Premium Quality",
    title1: "Experience Luxury",
    title2: "On Every",
  },
  {
    desc: "Get the best deals on top-tier vehicles with easy financing and 24/7 support.",
    highlight: "Here",
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=2000&q=80",
    tag: "Unbeatable Offers",
    title1: "Your Next Car",
    title2: "Awaits",
  },
];

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function Hero() {
  const [slide] = heroSlides;

  return (
    <div className="relative flex min-h-[60vh] w-full flex-col justify-between bg-neutral-950 lg:min-h-[65vh]">
      {/* Background Image & Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          alt="Luxury Sports Car"
          className="h-full w-full object-cover object-center"
          height={1080}
          src={slide.image}
          width={1920}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-black/50" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-384 shrink-0 grow flex-col justify-center px-4 pt-10 pb-6 sm:px-6 sm:pb-10 lg:px-8">
        <div className="max-w-2xl space-y-7">
          <div className="flex items-center space-x-3">
            <span className="inline-block h-1 w-6 bg-red-600" />
            <span className="font-bold text-gray-300 text-xs uppercase tracking-widest md:text-sm lg:text-base">
              {slide.tag}
            </span>
          </div>

          <Typography
            className="text-white"
            color="none"
            type="h1"
            variant="heroHeading"
          >
            {slide.title1} <br />
            {slide.title2}{" "}
            <span className="text-red-600 drop-shadow-xl">
              {slide.highlight}
            </span>
          </Typography>

          <Typography
            className="max-w-lg"
            color="inverseMuted"
            type="body"
            variant="body"
          >
            {slide.desc}
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

          <div className="hidden lg:block">
            <HeroValueBadges />
          </div>
        </div>
      </div>

      {/* Interactive Overlays */}
      <div className="relative z-20 flex w-full flex-col">
        <HeroSearchFilter />
      </div>
    </div>
  );
}
