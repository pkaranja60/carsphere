// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type useEmblaCarousel from "embla-carousel-react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import type React from "react";

// ─────────────────────────────────────────────
// SECTION: Types
// ─────────────────────────────────────────────

export type CarouselApi = UseEmblaCarouselType[1];
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
export type CarouselOptions = UseCarouselParameters[0];
export type CarouselPlugin = UseCarouselParameters[1];

export interface CarouselProps {
  apiRef?: React.MutableRefObject<CarouselApi | null>;
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
}

export type CarouselContextProps = {
  api: CarouselApi;
  canScrollNext: boolean;
  canScrollPrev: boolean;
  carouselRef: UseEmblaCarouselType[0];
  scrollNext: () => void;
  scrollPrev: () => void;
  scrollSnaps: number[];
  scrollTo: (index: number) => void;
  selectedIndex: number;
} & CarouselProps;
