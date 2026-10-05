// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import { MdLocalShipping } from "react-icons/md";
import type { HandoverFeature } from "../types/services.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ServicesHandoverSectionProps {
  features: HandoverFeature[];
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ServicesHandoverSection({
  features,
}: ServicesHandoverSectionProps) {
  return (
    <section className="relative mx-auto w-full max-w-400 px-margin-mobile py-12 sm:py-16 md:px-margin md:py-20 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-space-xl">
        <div className="flex flex-col lg:col-span-6">
          <span className="font-label-sm font-semibold text-label-sm text-primary uppercase tracking-wider">
            White-Glove Delivery
          </span>
          <h2 className="mt-2 mb-space-md font-bold font-display text-headline-md text-on-surface sm:text-headline-lg">
            A Delivery Experience Calibrated to Your Standard
          </h2>
          <p className="mb-6 font-body-sm text-body-sm text-on-surface-variant leading-relaxed sm:mb-8 sm:text-body-md">
            Whether you receive keys in our Beverly Hills private handover suite
            or have your vehicle unloaded from an enclosed carrier into your
            private residence in Greenwich or Aspen, every handoff is
            accompanied by full technological onboarding and personalized
            vehicle orientation.
          </p>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-space-md">
            {features.map((feature) => (
              <div
                className="rounded-xl border border-border bg-surface-container-low p-4 shadow-2xs sm:p-space-md"
                key={feature.id}
              >
                <h4 className="font-bold font-display text-on-surface text-sm sm:text-base">
                  {feature.title}
                </h4>
                <p className="mt-1 font-body-sm text-on-surface-variant text-xs leading-relaxed sm:text-body-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border shadow-md">
            <Image
              alt="Pristine luxury grand tourer vehicle inside a minimalist architectural delivery pavilion with warm timber walls and polished concrete floors"
              className="h-full w-full object-cover"
              height={750}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqraSmB7JTbb6XYCMI__JqAxDC44BzMF4w11FcKV3JoCCrwyJK8c8HenfSVHbax1kr2xyhSGhlb_qo7TEG0zJ76Iy6__EEEyRe_jUd1Ha63OFb3KSjywDAOz43X3LcN20cTFk7D-lvMy7b3_S29El8LNpJaQg23mAzXkI8LDqDoWRwNAxPEsjzkVBQfreUyVIBaPLYyroxBlvLCaxAIPZTLBGgq2R_aQS4_KvEURuoyT58GF6j2R6P"
              width={1000}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute right-3.5 bottom-3.5 left-3.5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/20 bg-surface/90 p-3.5 shadow-md backdrop-blur-md sm:right-5 sm:bottom-5 sm:left-5 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-container text-white">
                  <MdLocalShipping className="text-xl" />
                </div>
                <div>
                  <p className="font-bold font-display text-on-surface text-xs sm:text-sm">
                    Enclosed Single-Car Transport
                  </p>
                  <p className="font-body-sm text-[11px] text-on-surface-variant sm:text-xs">
                    Direct tracking &amp; live GPS telemetry link
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-tertiary/15 px-2.5 py-1 font-label-sm font-semibold text-[11px] text-tertiary">
                Insured to $2.5M
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
