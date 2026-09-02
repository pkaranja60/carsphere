// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function FeaturesCta() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-[#0b0c0e] p-6 text-white shadow-xl">
      <div className="grid grid-cols-1 gap-6 divide-y divide-neutral-800 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        <div className="flex items-center space-x-3.5 pt-4 first:px-0 first:pt-0 sm:px-4 sm:pt-0">
          <div className="shrink-0 text-gray-300">
            <i className="h-7 w-7 stroke-[1.5]" data-lucide="truck" />
          </div>
          <div>
            <h4 className="font-bold text-white text-xs">Free Delivery</h4>
            <p className="font-normal text-[11px] text-gray-400">
              On All Orders
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3.5 pt-4 sm:px-4 sm:pt-0">
          <div className="shrink-0 text-gray-300">
            <i className="h-7 w-7 stroke-[1.5]" data-lucide="rotate-ccw" />
          </div>
          <div>
            <h4 className="font-bold text-white text-xs">7-Day Returns</h4>
            <p className="font-normal text-[11px] text-gray-400">
              Money Back Guarnatee
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3.5 pt-4 sm:px-4 sm:pt-0">
          <div className="shrink-0 text-gray-300">
            <i className="h-7 w-7 stroke-[1.5]" data-lucide="shield-check" />
          </div>
          <div>
            <h4 className="font-bold text-white text-xs">Secure Payment</h4>
            <p className="font-normal text-[11px] text-gray-400">
              100% Protected
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3.5 pt-4 sm:px-4 sm:pt-0">
          <div className="shrink-0 text-gray-300">
            <i className="h-7 w-7 stroke-[1.5]" data-lucide="users" />
          </div>
          <div>
            <h4 className="font-bold text-white text-xs">Expert Support</h4>
            <p className="font-normal text-[11px] text-gray-400">
              24/7 Friendly Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
