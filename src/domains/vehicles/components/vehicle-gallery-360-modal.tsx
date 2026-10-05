"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import {
  Md360,
  MdClose,
  MdPause,
  MdPlayArrow,
  MdTouchApp,
} from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Interfaces & Data
// ─────────────────────────────────────────────

interface GalleryImageItem {
  alt: string;
  url: string;
}

interface VehicleGallery360ModalProps {
  images: GalleryImageItem[];
  isOpen: boolean;
  onClose: () => void;
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

const HOTSPOTS = [
  { angle: 0, label: "Aerodynamic Front Fascia & Bi-LED Headlamps" },
  { angle: 72, label: "Precision Alloy Wheels & Performance Braking" },
  { angle: 144, label: "Driver-Centric Cockpit & Digital Instrumentation" },
  { angle: 216, label: "Signature Rear Profile & Integrated Diffuser" },
  { angle: 288, label: "Rigid Chassis & Structural Platform Engineering" },
];

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleGallery360Modal({
  images,
  isOpen,
  onClose,
  title,
}: VehicleGallery360ModalProps) {
  const isClient = useIsClient();

  const [angle, setAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startAngleRef = useRef(0);

  // Map 0-360 angle to the closest available perspective image
  const imageIndex = Math.min(
    images.length - 1,
    Math.floor((angle / 360) * images.length)
  );
  const currentImage = images[imageIndex] ?? images[0];

  // Auto-spin turntable
  useEffect(() => {
    if (!(isOpen && isSpinning)) {
      return;
    }

    const interval = setInterval(() => {
      setAngle((prev) => (prev + 2) % 360);
    }, 40);

    return () => clearInterval(interval);
  }, [isOpen, isSpinning]);

  // Handle escape key & scroll locking
  // react-doctor-disable-next-line prefer-use-effect-event
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
    // react-doctor-disable-next-line prefer-use-effect-event
  }, [isOpen, onClose]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setIsSpinning(false);
      startXRef.current = e.clientX;
      startAngleRef.current = angle;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [angle]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging) {
        return;
      }
      const deltaX = e.clientX - startXRef.current;
      const newAngle =
        (startAngleRef.current - Math.round(deltaX * 0.8) + 3600) % 360;
      setAngle(newAngle);
    },
    [isDragging]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleToggleSpin = useCallback(() => {
    setIsSpinning((prev) => !prev);
  }, []);

  const handleSliderChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAngle(Number(e.target.value));
      setIsSpinning(false);
    },
    []
  );

  const createHotspotClickHandler = useCallback(
    (targetAngle: number) => () => {
      setAngle(targetAngle);
      setIsSpinning(false);
    },
    []
  );

  if (!(isOpen && isClient && currentImage)) {
    return null;
  }

  const content = (
    <dialog
      aria-label="Interactive 360 vehicle inspection"
      aria-modal="true"
      className="fixed inset-0 z-999 flex h-full w-full max-w-full flex-col border-0 bg-transparent p-0 text-on-surface backdrop:bg-transparent"
      open
    >
      <button
        aria-label="Close 360 viewer overlay"
        className="absolute inset-0 h-full w-full cursor-default bg-surface-container-lowest/98 backdrop-blur-2xl"
        onClick={onClose}
        tabIndex={-1}
        type="button"
      />

      <div className="relative z-10 flex h-16 shrink-0 items-center justify-between border-border border-b px-4 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Md360 className="text-2xl" />
          </div>
          <div>
            <h2 className="font-bold text-sm sm:text-base">{title}</h2>
            <p className="font-body-sm text-on-surface-variant text-xs">
              Interactive 360° Studio Turntable · Current Angle: {angle}°
            </p>
          </div>
        </div>
        <button
          aria-label="Close 360 viewer (Esc)"
          className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-surface-container-low px-4 py-2 text-on-surface transition-colors hover:bg-surface-container active:scale-95"
          onClick={onClose}
          type="button"
        >
          <MdClose className="text-xl" />
          <span className="font-medium text-xs uppercase tracking-wider">
            Close (Esc)
          </span>
        </button>
      </div>

      <div
        className={`relative z-10 flex flex-1 select-none items-center justify-center p-4 sm:p-8 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div className="pointer-events-none relative h-full max-h-[72vh] w-full max-w-7xl">
          <Image
            alt={currentImage.alt}
            className="object-contain"
            fill
            priority
            sizes="100vw"
            src={currentImage.url}
          />
        </div>

        <div className="pointer-events-none absolute bottom-6 flex items-center gap-2 rounded-full border border-border bg-surface-container-low/90 px-4 py-1.5 font-label-sm font-semibold text-label-sm text-on-surface-variant shadow-md backdrop-blur-md">
          <MdTouchApp className="text-base text-primary" />
          <span>Click &amp; drag horizontally to rotate</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-3 border-border border-t bg-surface-container-low px-4 py-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-primary px-4 py-2 font-label-md font-semibold text-label-md text-white shadow-sm transition-colors hover:bg-primary/90"
              onClick={handleToggleSpin}
              type="button"
            >
              {isSpinning ? (
                <MdPause className="text-lg" />
              ) : (
                <MdPlayArrow className="text-lg" />
              )}
              <span>{isSpinning ? "Pause Turntable" : "Auto-Spin 360°"}</span>
            </button>
            <span className="font-mono text-on-surface-variant text-xs">
              {angle}°
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {HOTSPOTS.map((spot) => (
              <button
                className="cursor-pointer rounded-full border border-border bg-surface-container px-2.5 py-1 font-label-sm font-medium text-[11px] text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
                key={spot.label}
                onClick={createHotspotClickHandler(spot.angle)}
                type="button"
              >
                {spot.label}
              </button>
            ))}
          </div>
        </div>

        <input
          aria-label="360 rotation slider"
          className="h-1.5 w-full cursor-pointer accent-primary"
          max={360}
          min={0}
          onChange={handleSliderChange}
          type="range"
          value={angle}
        />
      </div>
    </dialog>
  );

  return createPortal(content, document.body);
}
