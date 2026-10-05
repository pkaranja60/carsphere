"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Interfaces & Helpers
// ─────────────────────────────────────────────

interface GalleryImageItem {
  alt: string;
  url: string;
}

interface VehicleGalleryLightboxProps {
  activeIndex: number;
  images: GalleryImageItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  title: string;
}

function subscribe() {
  return () => undefined;
}

function useIsClient(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true as boolean,
    () => false
  );
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleGalleryLightbox({
  activeIndex,
  images,
  isOpen,
  onClose,
  onSelectIndex,
  title,
}: VehicleGalleryLightboxProps) {
  const isClient = useIsClient();

  const currentImage = images[activeIndex] ?? images[0];

  const handlePrev = useCallback(() => {
    onSelectIndex((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    onSelectIndex((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onSelectIndex]);

  const onPrevRef = useRef(handlePrev);
  onPrevRef.current = handlePrev;
  const onNextRef = useRef(handleNext);
  onNextRef.current = handleNext;
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const createThumbnailClickHandler = useCallback(
    (index: number) => () => {
      onSelectIndex(index);
    },
    [onSelectIndex]
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
      }
      if (e.key === "ArrowLeft") {
        onPrevRef.current();
      }
      if (e.key === "ArrowRight") {
        onNextRef.current();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!(isOpen && isClient && currentImage)) {
    return null;
  }

  const content = (
    <dialog
      aria-label="Image gallery fullscreen preview"
      aria-modal="true"
      className="fixed inset-0 z-999 flex h-full w-full max-w-full flex-col border-0 bg-transparent p-0 text-white backdrop:bg-transparent"
      open
    >
      <button
        aria-label="Close fullscreen overlay"
        className="absolute inset-0 h-full w-full cursor-default bg-black/95 backdrop-blur-2xl"
        onClick={onClose}
        tabIndex={-1}
        type="button"
      />

      <div className="relative z-10 flex h-16 shrink-0 items-center justify-between border-white/10 border-b px-4 sm:px-8">
        <div>
          <h2 className="font-semibold text-sm sm:text-base">{title}</h2>
          <p className="text-white/60 text-xs">
            Photo {activeIndex + 1} of {images.length} · Fullscreen Studio
            Resolution
          </p>
        </div>
        <button
          aria-label="Close fullscreen gallery (Esc)"
          className="flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/20 active:scale-95"
          onClick={onClose}
          type="button"
        >
          <MdClose className="text-xl" />
          <span className="font-medium text-xs uppercase tracking-wider">
            Close (Esc)
          </span>
        </button>
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center p-2 sm:p-6">
        <button
          aria-label="Previous image"
          className="absolute left-3 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-xl backdrop-blur-md transition-colors hover:bg-black sm:left-6"
          onClick={handlePrev}
          type="button"
        >
          <MdChevronLeft className="text-3xl" />
        </button>

        <div className="relative h-full max-h-[82vh] w-full max-w-7xl">
          <Image
            alt={currentImage.alt}
            className="object-contain"
            fill
            priority
            sizes="100vw"
            src={currentImage.url}
          />
        </div>

        <button
          aria-label="Next image"
          className="absolute right-3 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-xl backdrop-blur-md transition-colors hover:bg-black sm:right-6"
          onClick={handleNext}
          type="button"
        >
          <MdChevronRight className="text-3xl" />
        </button>
      </div>

      <div className="relative z-10 flex h-20 shrink-0 items-center justify-center gap-3 overflow-x-auto border-white/10 border-t bg-black/60 px-4 py-2">
        {images.map((img, idx) => (
          <button
            aria-label={`Jump to photo ${idx + 1}`}
            className={`relative aspect-16/10 h-14 shrink-0 cursor-pointer overflow-hidden rounded-md border transition-colors ${
              idx === activeIndex
                ? "border-primary ring-2 ring-primary"
                : "border-transparent opacity-50 hover:opacity-100"
            }`}
            key={`${img.url}::${img.alt}`}
            onClick={createThumbnailClickHandler(idx)}
            type="button"
          >
            <Image
              alt={img.alt}
              className="object-cover"
              fill
              sizes="100px"
              src={img.url}
            />
          </button>
        ))}
      </div>
    </dialog>
  );

  return createPortal(content, document.body);
}
