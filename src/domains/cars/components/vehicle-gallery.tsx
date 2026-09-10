// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@/shared";
import type { Car } from "../data/mock-cars";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface VehicleGalleryProps {
  car: Car;
}

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function VehicleGallery({ car }: VehicleGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="space-y-4">
      <button
        className="relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-xl bg-surface-alt md:aspect-21/9"
        // biome-ignore lint/performance/noJsxPropsBind: simple state toggle
        onClick={() => setIsGalleryOpen(true)}
        type="button"
      >
        <Image
          alt={`${car.name} view ${activeImageIndex + 1}`}
          className="object-cover"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
          src={car.images[activeImageIndex] ?? ""}
        />
      </button>
      <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-2">
        {car.images.map((img, idx) => (
          <button
            className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg transition-all md:h-20 md:w-32 ${
              activeImageIndex === idx
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "opacity-60 hover:opacity-100"
            }`}
            key={img || `fallback-${idx}`}
            // biome-ignore lint/performance/noJsxPropsBind: inline handler for map
            onClick={() => setActiveImageIndex(idx)}
            type="button"
          >
            <Image
              alt={`Thumbnail ${idx + 1}`}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 25vw, 15vw"
              src={img}
            />
          </button>
        ))}
      </div>

      <Dialog
        className="overflow-hidden bg-background p-0"
        isOpen={isGalleryOpen}
        onOpenChange={setIsGalleryOpen}
        // biome-ignore lint/performance/noJsxPropsBind: render prop
        render={() => (
          <div className="flex h-dvh w-full flex-col bg-black">
            <div className="relative flex-1">
              <Image
                alt={`Full view ${activeImageIndex + 1}`}
                className="object-contain"
                fill
                priority
                sizes="100vw"
                src={car.images[activeImageIndex] ?? ""}
              />
            </div>
            <div className="hide-scrollbar flex shrink-0 gap-2 overflow-x-auto bg-surface-alt p-4">
              {car.images.map((img, idx) => (
                <button
                  className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-lg transition-all ${
                    activeImageIndex === idx
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-surface-alt"
                      : "opacity-50 hover:opacity-100"
                  }`}
                  key={img || `fallback-modal-${idx}`}
                  // biome-ignore lint/performance/noJsxPropsBind: simple state toggle
                  onClick={() => setActiveImageIndex(idx)}
                  type="button"
                >
                  <Image
                    alt={`Thumbnail ${idx + 1}`}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 25vw, 15vw"
                    src={img}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
        size="full"
      />
    </div>
  );
}
