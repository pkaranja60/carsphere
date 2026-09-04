"use client";

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
}

type CarouselContextProps = {
  api: CarouselApi;
  canScrollNext: boolean;
  canScrollPrev: boolean;
  carouselRef: UseEmblaCarouselType[0];
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollTo: (index: number) => void;
  selectedIndex: number;
  scrollSnaps: number[];
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

export const Carousel = ({
  opts,
  plugins,
  setApi,
  className = "",
  children,
  ref,
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
    if (!(emblaApi && setApi)) {
      return;
    }
    setApi(emblaApi);
  }, [emblaApi, setApi]);

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

  return (
    <CarouselContext.Provider
      value={{
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
      }}
    >
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

export const CarouselContent = ({
  className = "",
  ref,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => {
  const { carouselRef } = useCarousel();
  return (
    <div className="overflow-hidden" ref={carouselRef}>
      <div className={`-ml-4 flex ${className}`} ref={ref} {...props} />
    </div>
  );
};
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = ({
  className = "",
  ref,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) => (
  // biome-ignore lint/a11y/useSemanticElements: ARIA standard for slides
  <div
    aria-roledescription="slide"
    className={`min-w-0 shrink-0 grow-0 basis-full pl-4 ${className}`}
    ref={ref}
    role="group"
    {...props}
  />
);
CarouselItem.displayName = "CarouselItem";

export const CarouselPrevious = ({
  className = "",
  ref,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: React.RefObject<HTMLButtonElement | null>;
}) => {
  const { canScrollPrev, scrollPrev } = useCarousel();
  return (
    <button
      className={`absolute top-1/2 left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:bg-red-600 disabled:opacity-50 disabled:hover:bg-black/50 ${className}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      ref={ref}
      type="button"
      {...props}
    >
      <HiOutlineChevronLeft className="h-5 w-5" />
      <span className="sr-only">Previous slide</span>
    </button>
  );
};
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = ({
  className = "",
  ref,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ref?: React.RefObject<HTMLButtonElement | null>;
}) => {
  const { canScrollNext, scrollNext } = useCarousel();
  return (
    <button
      className={`absolute top-1/2 right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:bg-red-600 disabled:opacity-50 disabled:hover:bg-black/50 ${className}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      ref={ref}
      type="button"
      {...props}
    >
      <HiOutlineChevronRight className="h-5 w-5" />
      <span className="sr-only">Next slide</span>
    </button>
  );
};
CarouselNext.displayName = "CarouselNext";

// biome-ignore lint/performance/noBarrelFile: Intentional re-export
export { default as Autoplay } from "embla-carousel-autoplay";
