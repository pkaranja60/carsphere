export function OmniSearch() {
  return (
    <section className="relative z-20 mx-auto -mt-10 w-full max-w-345 px-margin-mobile md:-mt-14 md:px-margin">
      <div className="rounded-xl border border-outline-variant bg-white p-6 shadow-xl">
        <div className="flex flex-col gap-space-md">
          {/* Search Category Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-space-xs border-surface-container border-b pb-space-xs">
            <div
              className="inline-flex items-center rounded-lg border border-surface-variant bg-surface-container-low p-1"
              id="inventory-tabs"
            >
              <button
                className="rounded-lg bg-white px-4 py-1.5 font-bold text-label-sm text-on-surface shadow-sm transition-all"
                type="button"
              >
                All Inventory (482)
              </button>
              <button
                className="rounded-lg px-4 py-1.5 font-semibold text-label-sm text-on-surface-variant transition-all hover:text-on-surface"
                type="button"
              >
                Certified Pre-Owned (318)
              </button>
              <button
                className="rounded-lg px-4 py-1.5 font-semibold text-label-sm text-on-surface-variant transition-all hover:text-on-surface"
                type="button"
              >
                Executive Fleet (64)
              </button>
              <button
                className="rounded-lg px-4 py-1.5 font-semibold text-label-sm text-on-surface-variant transition-all hover:text-on-surface"
                type="button"
              >
                Electric & Hybrid (82)
              </button>
            </div>
            <div className="hidden items-center gap-space-xs font-label-sm text-on-surface-variant lg:flex">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-tertiary" />
              <span className="font-medium">Live Stock Updated 8 mins ago</span>
            </div>
          </div>
          {/* Inputs Grid with Clean High-Contrast Borders */}
          <div className="grid grid-cols-1 items-end gap-space-sm sm:grid-cols-2 md:gap-space-md lg:grid-cols-5">
            {/* Make & Model */}
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm font-semibold text-label-sm text-on-surface uppercase tracking-wider"
                htmlFor="search-make-model"
              >
                Make & Model
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-lg text-outline">
                  search
                </span>
                <input
                  className="h-11 w-full rounded-lg border border-outline-variant bg-surface-bright pr-3 pl-9 font-body-sm text-body-sm text-on-surface transition-all placeholder:text-outline focus:border-primary-container focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-container/30"
                  id="search-make-model"
                  placeholder="e.g. Porsche, BMW, Genesis..."
                  type="text"
                />
              </div>
            </div>
            {/* Body Style */}
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm font-semibold text-label-sm text-on-surface uppercase tracking-wider"
                htmlFor="search-body-style"
              >
                Body Architecture
              </label>
              <div className="relative flex items-center">
                <select
                  className="h-11 w-full cursor-pointer appearance-none rounded-lg border border-outline-variant bg-surface-bright px-3 font-body-sm text-body-sm text-on-surface transition-all focus:border-primary-container focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-container/30"
                  id="search-body-style"
                >
                  <option value="all">All Body Styles</option>
                  <option value="suv">Touring & Luxury SUV</option>
                  <option value="sedan">Executive Sedan</option>
                  <option value="coupe">Grand Tourer & Coupe</option>
                  <option value="wagon">Estate & Sport Wagon</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 text-lg text-outline">
                  unfold_more
                </span>
              </div>
            </div>
            {/* Budget Range */}
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm font-semibold text-label-sm text-on-surface uppercase tracking-wider"
                htmlFor="search-budget"
              >
                Target Budget
              </label>
              <div className="relative flex items-center">
                <select
                  className="h-11 w-full cursor-pointer appearance-none rounded-lg border border-outline-variant bg-surface-bright px-3 font-body-sm text-body-sm text-on-surface transition-all focus:border-primary-container focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-container/30"
                  id="search-budget"
                >
                  <option value="all">All Prices</option>
                  <option value="under-45k">Under $45,000</option>
                  <option value="45-75k">$45,000 – $75,000</option>
                  <option value="75-150k">$75,000 – $150,000</option>
                  <option value="150k">$150,000+</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 text-lg text-outline">
                  expand_more
                </span>
              </div>
            </div>
            {/* Provenance / Condition */}
            <div className="flex flex-col gap-space-xs">
              <label
                className="font-label-sm font-semibold text-label-sm text-on-surface uppercase tracking-wider"
                htmlFor="search-provenance"
              >
                Provenance
              </label>
              <div className="relative flex items-center">
                <select
                  className="h-11 w-full cursor-pointer appearance-none rounded-lg border border-outline-variant bg-surface-bright px-3 font-body-sm text-body-sm text-on-surface transition-all focus:border-primary-container focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-container/30"
                  id="search-provenance"
                >
                  <option value="all">Any Condition</option>
                  <option value="cpo">Certified Pre-Owned</option>
                  <option value="1owner">1-Owner Verified</option>
                  <option value="new">Arrived This Week</option>
                  <option value="low">Under 15,000 Miles</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 text-lg text-outline">
                  expand_more
                </span>
              </div>
            </div>
            {/* Search Button in Primary Bronze */}
            <div>
              <button
                className="flex h-11 w-full items-center justify-center gap-space-xs rounded-lg bg-primary-container font-label-md font-semibold text-label-md text-white uppercase tracking-wider shadow-md transition-all hover:bg-primary hover:shadow-lg active:translate-y-0.5"
                type="button"
              >
                <span className="material-symbols-outlined text-lg">
                  manage_search
                </span>
                <span>Search 482 Cars</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
