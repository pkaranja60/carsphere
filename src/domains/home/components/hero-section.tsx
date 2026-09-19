// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { TrustStrip } from "./trust-strip";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function HeroSection() {
  return (
    <section className="relative -mt-40 w-full overflow-hidden border-b bg-surface-container-low">
      <div className="absolute inset-0 z-0">
        <div
          aria-label="Editorial photograph of a sleek executive sports car parked under an architectural warm limestone and dark cedar pavilion, soft ambient morning sunlight, minimal luxury villa driveway, warm reflections, neutral sand and deep charcoal palette, high resolution commercial automotive lighting"
          className="h-full w-full scale-[1.01] transform bg-center bg-cover transition-transform duration-1000 ease-out"
          role="img"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvFD36KWowFHdEqLqqe_8AI1yNDuUU8-nWut89ppy-Dh_oQIfQHSFxs0uPLI9G7dSZ6FS4rJdebysFwUcST_X9DmJkClnbYlSzx0T6eE1RAa2oF2yPbXueim9CqeGgB13Dcz3VSfcEGuJlo-vtRKv25n8WUqs7WpeE41dcrODCbc8zJ-KCvs3pHmCHhdkXlPysdxWjgJmjXYABL24XSdEsSk40ejBfAbAE4QSn7IzkM-MEnHrCMCKX')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-on-background/90 via-on-background/65 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-black/35" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-190 max-w-400 flex-col justify-between px-margin-mobile pt-44 pb-32 md:px-margin md:pt-52 md:pb-36">
        <div className="max-w-2xl text-surface-container-lowest">
          <div className="mb-space-md inline-flex items-center gap-space-xs rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-primary-fixed" />
            <span className="font-label-sm font-semibold text-label-sm text-surface-bright uppercase tracking-wider">
              Curated Editorial Collection
            </span>
          </div>

          <h1 className="mb-space-md font-display font-semibold text-headline-lg text-surface-bright leading-[1.06] tracking-tight drop-shadow-md md:text-display">
            Exceptional Motoring, Curated with Precision.
          </h1>

          <p className="mb-space-xl max-w-xl font-body-md font-normal text-body-md text-surface-dim/95 leading-relaxed drop-shadow-sm md:font-body-lg md:text-body-lg">
            From pinnacle grand tourers to dependable daily drivers. Every
            vehicle independently certified with full service provenance and
            transparent pricing.
          </p>

          <div className="flex flex-wrap items-center gap-space-md">
            <Link
              className="flex h-13 items-center justify-center gap-space-xs rounded-lg bg-primary-container px-8 font-label-lg font-semibold text-label-lg text-on-primary shadow-lg transition hover:bg-primary active:translate-y-0.5"
              href="#"
            >
              <span>Explore Curated Inventory</span>
              <MdArrowOutward className="text-lg" />
            </Link>
            <Link
              className="flex h-13 items-center justify-center rounded-lg border border-white/30 bg-white/15 px-8 font-label-lg font-semibold text-label-lg text-surface-bright shadow-md backdrop-blur-md transition hover:bg-white/25"
              href="#"
            >
              <span>Value Your Vehicle</span>
            </Link>
          </div>
        </div>

        <TrustStrip />
      </div>
    </section>
  );
}
