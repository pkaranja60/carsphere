// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function FooterNewsletter() {
  return (
    <div className="flex flex-col gap-space-md lg:col-span-1">
      <div className="flex items-center gap-2">
        <span className="font-bold font-display text-on-surface text-xl tracking-tight">
          Car<span className="text-primary">Sphere</span>
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        Architecting a calm, transparent automotive acquisition journey.
        Curating exceptional luxury, sports, and dependable everyday vehicles
        across North America.
      </p>
      <div className="pt-space-xs">
        <span className="mb-space-xs block font-label-md font-semibold text-label-md text-on-surface uppercase tracking-wider">
          Curated Arrivals Newsletter
        </span>
        <div className="flex flex-col gap-2">
          <input
            className="h-10 w-full rounded-lg border border-border-strong bg-surface px-space-md font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:border-primary-container focus:outline-none"
            placeholder="Enter your private email"
            type="email"
          />
          <button
            className="h-10 rounded-lg bg-primary-container px-space-lg font-label-md font-semibold text-label-md text-white uppercase tracking-wider transition-colors hover:bg-primary"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
