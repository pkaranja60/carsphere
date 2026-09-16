// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import {
  MdBolt,
  MdCommute,
  MdDirectionsCar,
  MdGarage,
  MdSavings,
  MdSportsMotorsports,
} from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function CategoryGrid() {
  return (
    <section className="mx-auto mt-space-xl w-full max-w-345 px-margin-mobile pt-space-xl md:px-margin">
      <div className="mb-space-lg flex flex-col items-start justify-between gap-space-xs md:flex-row md:items-end">
        <div>
          <span className="mb-space-xs block font-label-sm font-semibold text-label-sm text-primary uppercase tracking-widest">
            Class Taxonomy
          </span>
          <h2 className="font-headline-lg font-semibold text-headline-lg text-on-surface tracking-tight">
            Explore by Vehicle Category
          </h2>
        </div>
        <p className="max-w-sm font-body-sm text-body-sm text-on-surface-variant">
          Every segment calibrated for specific functional and aesthetic
          lifestyles.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-space-md md:grid-cols-3 lg:grid-cols-6">
        <Link
          className="group flex min-h-35 flex-col items-start justify-between rounded-xl border border-surface-variant bg-surface-container-lowest p-space-md shadow-sm transition-all hover:bg-surface-container"
          href="#"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-variant bg-surface-container-low text-primary transition-colors group-hover:bg-surface-container-highest">
            <MdDirectionsCar className="text-2xl" />
          </div>
          <div>
            <h4 className="font-label-lg font-semibold text-label-lg text-on-surface transition-colors group-hover:text-primary">
              Executive Sedans
            </h4>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              94 Vehicles
            </span>
          </div>
        </Link>
        <Link
          className="group flex min-h-35 flex-col items-start justify-between rounded-xl border border-surface-variant bg-surface-container-lowest p-space-md shadow-sm transition-all hover:bg-surface-container"
          href="#"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-variant bg-surface-container-low text-primary transition-colors group-hover:bg-surface-container-highest">
            <MdGarage className="text-2xl" />
          </div>
          <div>
            <h4 className="font-label-lg font-semibold text-label-lg text-on-surface transition-colors group-hover:text-primary">
              Luxury & Family SUVs
            </h4>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              188 Vehicles
            </span>
          </div>
        </Link>
        <Link
          className="group flex min-h-35 flex-col items-start justify-between rounded-xl border border-surface-variant bg-surface-container-lowest p-space-md shadow-sm transition-all hover:bg-surface-container"
          href="#"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-variant bg-surface-container-low text-primary transition-colors group-hover:bg-surface-container-highest">
            <MdSportsMotorsports className="text-2xl" />
          </div>
          <div>
            <h4 className="font-label-lg font-semibold text-label-lg text-on-surface transition-colors group-hover:text-primary">
              Grand Tourers
            </h4>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              46 Vehicles
            </span>
          </div>
        </Link>
        <Link
          className="group flex min-h-35 flex-col items-start justify-between rounded-xl border border-surface-variant bg-surface-container-lowest p-space-md shadow-sm transition-all hover:bg-surface-container"
          href="#"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-variant bg-surface-container-low text-tertiary transition-colors group-hover:bg-surface-container-highest">
            <MdBolt className="text-2xl" />
          </div>
          <div>
            <h4 className="font-label-lg font-semibold text-label-lg text-on-surface transition-colors group-hover:text-tertiary">
              Electric & Hybrid
            </h4>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              82 Vehicles
            </span>
          </div>
        </Link>
        <Link
          className="group flex min-h-35 flex-col items-start justify-between rounded-xl border border-surface-variant bg-surface-container-lowest p-space-md shadow-sm transition-all hover:bg-surface-container"
          href="#"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-variant bg-surface-container-low text-primary transition-colors group-hover:bg-surface-container-highest">
            <MdCommute className="text-2xl" />
          </div>
          <div>
            <h4 className="font-label-lg font-semibold text-label-lg text-on-surface transition-colors group-hover:text-primary">
              Estate & Wagons
            </h4>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              38 Vehicles
            </span>
          </div>
        </Link>
        <Link
          className="group flex min-h-35 flex-col items-start justify-between rounded-xl border border-surface-variant bg-surface-container-lowest p-space-md shadow-sm transition-all hover:bg-surface-container"
          href="#"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-variant bg-surface-container-low text-primary transition-colors group-hover:bg-surface-container-highest">
            <MdSavings className="text-2xl" />
          </div>
          <div>
            <h4 className="font-label-lg font-semibold text-label-lg text-on-surface transition-colors group-hover:text-primary">
              Verified Under $35k
            </h4>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              112 Vehicles
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
