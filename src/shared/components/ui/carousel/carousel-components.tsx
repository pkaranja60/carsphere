"use client";

import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useCarousel } from "./carousel-context";

export const CarouselContent = ({
  className,
  ref,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div className="overflow-hidden" ref={carouselRef}>
      <div
        className={`flex ${
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"
        } ${className || ""}`}
        ref={ref}
        {...props}
      />
    </div>
  );
};
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = ({
  className,
  ref,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => {
  const { orientation } = useCarousel();

  const content = (
    <div
      aria-roledescription="slide"
      className={`min-w-0 shrink-0 grow-0 ${
        orientation === "horizontal" ? "pl-4" : "pt-4"
      } ${className || ""}`}
      ref={ref}
      role="tabpanel"
      {...props}
    />
  );
  return content;
};
CarouselItem.displayName = "CarouselItem";

export const CarouselPrevious = ({
  className,
  ref,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: React.RefObject<HTMLButtonElement | null>;
}) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      className={`absolute flex h-12 w-12 items-center justify-center text-on-surface-variant outline-none transition hover:scale-110 hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 ${
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90"
      } ${className || ""}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      ref={ref}
      type="button"
      {...props}
    >
      <MdChevronLeft className="h-10 w-10" />
      <span className="sr-only">Previous slide</span>
    </button>
  );
};
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = ({
  className,
  ref,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: React.RefObject<HTMLButtonElement | null>;
}) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      className={`absolute flex h-12 w-12 items-center justify-center text-on-surface-variant outline-none transition hover:scale-110 hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 ${
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90"
      } ${className || ""}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      ref={ref}
      type="button"
      {...props}
    >
      <MdChevronRight className="h-10 w-10" />
      <span className="sr-only">Next slide</span>
    </button>
  );
};
CarouselNext.displayName = "CarouselNext";
