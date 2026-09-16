// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function TrustStrip() {
  return (
    <div className="pt-space-xl">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
        <div className="flex items-center gap-3 rounded-lg border border-surface-variant bg-white p-3.5 px-4 shadow-md transition-transform hover:-translate-y-0.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-surface-variant bg-surface-bright">
            <span className="material-symbols-outlined text-2xl text-primary-container">
              verified_user
            </span>
          </div>
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-bold font-label-sm text-on-surface">
              150-Point Inspection
            </span>
            <span className="truncate font-normal text-on-surface-variant text-xs">
              Rigorous mechanical certification
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-surface-variant bg-white p-3.5 px-4 shadow-md transition-transform hover:-translate-y-0.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-surface-variant bg-surface-bright">
            <span className="material-symbols-outlined text-2xl text-primary-container">
              price_check
            </span>
          </div>
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-bold font-label-sm text-on-surface">
              Transparent Pricing
            </span>
            <span className="truncate font-normal text-on-surface-variant text-xs">
              Upfront market valuations, zero markup
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-surface-variant bg-white p-3.5 px-4 shadow-md transition-transform hover:-translate-y-0.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-surface-variant bg-surface-bright">
            <span className="material-symbols-outlined text-2xl text-tertiary">
              percent
            </span>
          </div>
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-bold font-label-sm text-on-surface">
              Tailored Financing
            </span>
            <span className="truncate font-normal text-on-surface-variant text-xs">
              Bespoke structures from 4.9% APR
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-surface-variant bg-white p-3.5 px-4 shadow-md transition-transform hover:-translate-y-0.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-surface-variant bg-surface-bright">
            <span className="material-symbols-outlined text-2xl text-tertiary">
              room_service
            </span>
          </div>
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-bold font-label-sm text-on-surface">
              VIP Concierge
            </span>
            <span className="truncate font-normal text-on-surface-variant text-xs">
              Enclosed delivery & dedicated specialist
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
