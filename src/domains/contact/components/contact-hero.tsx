// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { MdOutlineVerifiedUser } from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ContactHero() {
  return (
    <section className="mx-auto w-full max-w-400 px-margin-mobile pt-6 pb-10 sm:pt-8 sm:pb-12 md:px-margin">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-8">
        <div className="flex max-w-3xl flex-col gap-2.5 sm:gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-label-md font-semibold text-[11px] text-primary uppercase tracking-widest sm:text-xs">
              Private Client Allocation Desk
            </span>
            <span className="font-label-sm text-secondary text-xs">
              / Beverly Hills Salon
            </span>
          </div>

          <h1 className="font-bold font-display text-display text-on-surface leading-[1.08] tracking-tight">
            Experience Motoring on Your Terms
          </h1>

          <p className="max-w-2xl font-body-md text-body-md text-on-surface-variant leading-relaxed sm:font-body-lg sm:text-body-lg">
            Schedule an unhurried viewing at our Beverly Hills Flagship Lounge,
            arrange an at-home white-glove test drive, or initiate a live 4K
            interactive remote walkaround.
          </p>
        </div>

        <div className="flex items-center gap-3.5 self-start rounded-xl border border-border bg-surface-container-low p-3.5 shadow-xs sm:p-4 md:self-auto">
          <MdOutlineVerifiedUser className="shrink-0 text-2xl text-primary sm:text-3xl" />
          <div className="flex flex-col">
            <span className="font-label-lg font-semibold text-label-lg text-on-surface">
              Guaranteed Discretion
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Private bay reserved exclusively per guest
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
