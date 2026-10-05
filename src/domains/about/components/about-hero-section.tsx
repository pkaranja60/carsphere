// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import { MdGavel, MdVerified } from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function AboutHeroSection() {
  return (
    <section className="relative mx-auto w-full max-w-400 overflow-hidden px-margin-mobile pt-6 pb-16 md:px-margin md:pb-20">
      <div className="flex max-w-4xl flex-col gap-space-lg">
        <div className="flex items-center gap-3">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
          <span className="font-label-md font-semibold text-label-md text-primary uppercase tracking-wider">
            Provenance & Charter
          </span>
          <span className="font-label-sm text-label-sm text-secondary">
            / Beverly Hills, CA
          </span>
        </div>

        <h1 className="font-bold font-display text-headline-lg text-on-surface leading-[1.05] tracking-tight md:text-display">
          Architectural Integrity in Motoring.
        </h1>

        <p className="max-w-3xl font-body-md text-body-md text-on-surface-variant leading-relaxed md:font-body-lg md:text-body-lg">
          Founded in Beverly Hills on the belief that acquiring a
          vehicle—whether a precision German sports car or an immaculate daily
          hybrid—should be an unhurried, entirely transparent private client
          experience. We eliminate the noise of retail automotive culture in
          favor of architectural quietude, empirical diagnostics, and verified
          mechanical provenance.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 items-stretch gap-gutter md:mt-14 lg:grid-cols-12">
        <div className="relative min-h-95 overflow-hidden rounded-xl border border-border shadow-sm lg:col-span-8">
          <Image
            alt="Modern architectural automotive gallery lounge in Beverly Hills with honed limestone floors, soft natural northern skylight, warm timber accents, showcasing an immaculate sports car in the foreground with minimalist brass architectural lighting fixtures"
            className="h-full w-full object-cover"
            height={700}
            priority
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg-lbdkWTa9Jb_9g1iPy3iTVCb4om5YpzwBPp1_n9CjIbEaVbMe2DOLTriqEzpSI65idIlTydWoGAItG1ygZ6arEf83C_TVKGzH4Cd-9SyyxGJb1em-6Z_l6zPRGu6lLM4Dyp4OP9wt7FVgiSzNy3VyH3A-F4ExRPiuH7o08omrsA7tbqNiOEqZcWee8aJqW8dODiaaDq2-Wf2VtFHZmdezrw4GTBFcd2liYR8RIDjUocoib7fDMQu"
            width={1200}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute right-4 bottom-4 left-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/20 bg-surface/90 p-4 text-on-surface shadow-md backdrop-blur-md md:right-6 md:bottom-6 md:left-6 md:px-6">
            <div className="flex items-center gap-2 md:gap-3">
              <MdVerified className="shrink-0 text-primary text-xl" />
              <span className="font-label-sm font-semibold text-label-sm uppercase tracking-wide md:font-label-md md:text-label-md">
                Wilshire Flagship Archive & Private Gallery
              </span>
            </div>
            <span className="font-body-sm text-[11px] text-secondary md:text-xs">
              Est. 2018 · Licensed Private Client Dealer #49281
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-space-md rounded-xl border border-border bg-surface-container p-6 shadow-sm md:p-8 lg:col-span-4">
          <div className="flex flex-col gap-2">
            <span className="font-label-sm font-semibold text-label-sm text-secondary uppercase tracking-widest">
              Institutional Trust
            </span>
            <h2 className="font-bold font-display text-headline-sm text-on-surface">
              Curated by Standards, Not Quotas.
            </h2>
            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Every vehicle admitted to the CarSphere registry must clear an
              unbending 150-point assessment. Fewer than 14% of submitted
              inventory submissions pass our internal diagnostics.
            </p>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-surface-container-lowest p-4 shadow-xs">
            <div className="flex flex-col">
              <span className="font-label-sm font-semibold text-label-sm text-secondary uppercase">
                Admission Rate
              </span>
              <span className="mt-0.5 font-bold font-display text-headline-md text-on-surface">
                13.8%
              </span>
              <span className="font-label-sm font-medium text-label-sm text-tertiary">
                Selective Private Intake
              </span>
            </div>
            <div className="relative flex h-16 w-16 items-center justify-center">
              <svg
                aria-hidden="true"
                className="h-full w-full -rotate-90 transform"
                viewBox="0 0 36 36"
              >
                <path
                  className="text-surface-container-high"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                />
                <path
                  className="text-primary"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="14, 100"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                />
              </svg>
              <span className="absolute font-bold font-label-sm text-label-sm text-on-surface">
                14%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-border border-t pt-3">
            <MdGavel className="shrink-0 text-primary text-xl" />
            <span className="font-body-sm font-medium text-body-sm text-on-surface">
              Bespoke Title Custody Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
