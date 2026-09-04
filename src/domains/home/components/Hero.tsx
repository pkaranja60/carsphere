// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import {
  buttonVariants,
  Carousel,
  CarouselContent,
  CarouselItem,
  Typography,
  useCarousel,
} from "@/shared";
import { HeroSearchFilter } from "./hero-search-filter";
import { HeroValueBadges } from "./hero-value-badges";

// ─────────────────────────────────────────────
// SECTION: Data
// ─────────────────────────────────────────────

const heroImages = [
  "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1503376762283-e12918805f41?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=2000&q=80",
];

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

const CarouselDot = React.memo(
  ({
    index,
    isSelected,
    onClick,
  }: {
    index: number;
    isSelected: boolean;
    onClick: (index: number) => void;
  }) => {
    const handleClick = React.useCallback(
      () => onClick(index),
      [index, onClick]
    );

    return (
      <button
        aria-label={`Go to slide ${index + 1}`}
        className={`h-1.5 cursor-pointer rounded-full transition-all ${
          isSelected ? "w-6 bg-red-600" : "w-3 bg-white/30 hover:bg-white/60"
        }`}
        onClick={handleClick}
        type="button"
      />
    );
  }
);
CarouselDot.displayName = "CarouselDot";

function HeroCarouselDots() {
  const { scrollSnaps, selectedIndex, scrollTo } = useCarousel();

  return (
    <div className="flex w-full items-center justify-center gap-2 pb-8 sm:pb-0">
      {scrollSnaps.map((_snap, index) => (
        <CarouselDot
          index={index}
          isSelected={index === selectedIndex}
          key={String(index)}
          onClick={scrollTo}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <Carousel
      className="relative flex min-h-[60vh] w-full flex-col justify-between bg-linear-to-b from-neutral-950/40 via-transparent to-neutral-950 lg:min-h-[65vh]"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
        }),
      ]}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <CarouselContent className="m-0 h-full">
          {heroImages.map((src, index) => (
            <CarouselItem className="relative h-full w-full pl-0" key={src}>
              <Image
                alt={`Luxury Sports Car ${index + 1}`}
                className="h-full w-full object-cover object-center"
                height={1080}
                src={src}
                width={1920}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-black/50" />
      </div>

      <div className="mx-auto flex w-full max-w-384 flex-1 flex-col justify-center px-4 pt-10 pb-6 sm:px-6 sm:pb-10 lg:px-8">
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

      <HeroCarouselDots />

      <HeroSearchFilter />
    </Carousel>
  );
}
