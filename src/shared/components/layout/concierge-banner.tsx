export function ConciergeBanner() {
  return (
    <section
      className="px-margin-mobile py-8 md:px-margin"
      data-purpose="concierge-cta"
    >
      <div className="mx-auto flex max-w-1400 flex-col items-center justify-between gap-8 rounded-2xl border border-border bg-surface p-8 shadow-level-1 lg:flex-row lg:p-10">
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2 font-label-md text-primary uppercase tracking-widest">
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            Private Client Sourcing Division
          </div>
          <h2 className="font-bold font-display text-2xl text-on-surface lg:text-3xl">
            Can&apos;t find your exact specification?
          </h2>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Our automotive acquisition specialists source off-market verified
            models, bespoke configurations, and rare allocations from private
            collections across North America and Europe.
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto">
          <button
            className="rounded-lg bg-primary px-6 py-3.5 text-center font-bold font-label-lg text-on-primary shadow-level-1 transition-all hover:bg-primary-fixed-dim hover:text-on-primary-fixed"
            type="button"
          >
            Request Bespoke Vehicle Search
          </button>
          <button
            className="rounded-lg bg-surface-container-high px-6 py-3.5 text-center font-bold font-label-lg text-on-surface transition-all hover:bg-surface-container-highest"
            type="button"
          >
            Call Concierge Team
          </button>
        </div>
      </div>
    </section>
  );
}
