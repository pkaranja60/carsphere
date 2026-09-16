import Link from "next/link";

export function BespokeServices() {
  return (
    <section className="mx-auto mt-space-xl w-full max-w-345 px-margin-mobile pt-space-xl md:px-margin">
      <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
        {/* Card A */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-surface-variant bg-surface-container-low p-space-lg md:p-space-xl">
          <div>
            <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-lg border border-surface-variant bg-surface-container-lowest text-primary shadow-sm">
              <span className="material-symbols-outlined text-3xl">
                calendar_month
              </span>
            </div>
            <h3 className="mb-space-xs font-headline-sm font-semibold text-headline-sm text-on-surface">
              Selected Seasonal Offers
            </h3>
            <p className="mb-space-lg font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Incentivized 4.9% finance terms across select executive
              portfolios, with seamless equity transfers from your existing
              lease structure.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-space-xs font-label-md font-semibold text-label-md text-primary uppercase tracking-wider transition-colors hover:text-primary-container"
            href="#"
          >
            <span>Calculate Terms</span>
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </Link>
        </div>
        {/* Card B */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-surface-variant bg-surface-container-low p-space-lg md:p-space-xl">
          <div>
            <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-lg border border-surface-variant bg-surface-container-lowest text-primary shadow-sm">
              <span className="material-symbols-outlined text-3xl">
                sync_alt
              </span>
            </div>
            <h3 className="mb-space-xs font-headline-sm font-semibold text-headline-sm text-on-surface">
              Seamless Digital Trade-In
            </h3>
            <p className="mb-space-lg font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Submit vehicle specifications for a binding fair market valuation
              within 15 minutes. We collect nationwide with prompt wire
              settlement.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-space-xs font-label-md font-semibold text-label-md text-primary uppercase tracking-wider transition-colors hover:text-primary-container"
            href="#"
          >
            <span>Start Instant Valuation</span>
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </Link>
        </div>
        {/* Card C */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-surface-variant bg-surface-container-low p-space-lg md:p-space-xl">
          <div>
            <div className="mb-space-md flex h-12 w-12 items-center justify-center rounded-lg border border-surface-variant bg-surface-container-lowest text-primary shadow-sm">
              <span className="material-symbols-outlined text-3xl">
                storefront
              </span>
            </div>
            <h3 className="mb-space-xs font-headline-sm font-semibold text-headline-sm text-on-surface">
              Private Showroom Viewing
            </h3>
            <p className="mb-space-lg font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Experience our Beverly Hills lounge, or arrange a private enclosed
              demonstration vehicle delivered directly to your home or office.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-space-xs font-label-md font-semibold text-label-md text-primary uppercase tracking-wider transition-colors hover:text-primary-container"
            href="#"
          >
            <span>Book VIP Appointment</span>
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
