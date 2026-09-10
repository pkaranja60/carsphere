"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import useEmblaCarousel from "embla-carousel-react";
import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type {
  CarouselApi,
  CarouselContextProps,
  CarouselProps,
} from "./carousel.types";

// ─────────────────────────────────────────────
// SECTION: Context
// ─────────────────────────────────────────────

const CarouselContext = createContext<CarouselContextProps | null>(null);

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

// ─────────────────────────────────────────────
// SECTION: Carousel Root Component
// ─────────────────────────────────────────────

export const Carousel = ({
  apiRef,
  children,
  className = "",
  opts,
  plugins,
  ref,
  setApi,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  CarouselProps & { ref?: React.RefObject<HTMLDivElement | null> }) => {
  const [carouselRef, emblaApi] = useEmblaCarousel(
    {
      ...opts,
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }
    setSelectedIndex(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    if (setApi) {
      setApi(emblaApi);
    }
    if (apiRef) {
      apiRef.current = emblaApi;
    }
  }, [emblaApi, setApi, apiRef]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi?.off("reInit", onInit);
      emblaApi?.off("reInit", onSelect);
      emblaApi?.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  const contextValue = useMemo(
    () => ({
      api: emblaApi,
      canScrollNext,
      canScrollPrev,
      carouselRef,
      opts,
      scrollNext,
      scrollPrev,
      scrollSnaps,
      scrollTo,
      selectedIndex,
    }),
    [
      emblaApi,
      canScrollNext,
      canScrollPrev,
      carouselRef,
      opts,
      scrollNext,
      scrollPrev,
      scrollSnaps,
      scrollTo,
      selectedIndex,
    ]
  );

  return (
    <CarouselContext.Provider value={contextValue}>
      {/* biome-ignore lint/a11y/useSemanticElements: ARIA standard for carousels */}
      <div
        aria-roledescription="carousel"
        className={`relative ${className}`}
        onKeyDownCapture={handleKeyDown}
        ref={ref}
        role="region"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};
Carousel.displayName = "Carousel";
