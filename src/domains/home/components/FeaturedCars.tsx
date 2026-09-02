// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function FeaturedCars() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-bold text-neutral-900 text-xl tracking-tight sm:text-2xl">
          Featured Cars
        </h2>
        <Link
          className="inline-flex items-center gap-1.5 font-semibold text-neutral-800 text-xs transition hover:text-red-600 sm:text-sm"
          href="#"
        >
          <span>View All Cars</span>
          <i className="h-4 w-4" data-lucide="arrow-right" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="flex flex-col justify-between rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm">
          <div>
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-neutral-950">
              <Image
                alt="BMW M4 Competition"
                className="h-full w-full object-cover object-center"
                fill
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80"
              />
              <button className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500">
                <i className="h-3.5 w-3.5" data-lucide="heart" />
              </button>
            </div>
            <h3 className="font-bold text-neutral-900 text-xs leading-tight sm:text-sm">
              BMW M4 Competition
            </h3>
            <p className="mt-0.5 text-[11px] text-neutral-400">
              2024 | Automatic | Petrol
            </p>
            <div className="mt-2 font-extrabold text-base text-neutral-950">
              $89,900
            </div>
          </div>
          <button className="mt-3 w-full rounded-md bg-red-600 py-2 font-semibold text-white text-xs shadow-sm transition hover:bg-red-700">
            View Details
          </button>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm">
          <div>
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-neutral-950">
              <Image
                alt="Mercedes-Benz E-className"
                className="h-full w-full object-cover object-center"
                fill
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
              />
              <button className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500">
                <i className="h-3.5 w-3.5" data-lucide="heart" />
              </button>
            </div>
            <h3 className="font-bold text-neutral-900 text-xs leading-tight sm:text-sm">
              Mercedes-Benz E-className
            </h3>
            <p className="mt-0.5 text-[11px] text-neutral-400">
              2024 | Automatic | Petrol
            </p>
            <div className="mt-2 font-extrabold text-base text-neutral-950">
              $64,500
            </div>
          </div>
          <button className="mt-3 w-full rounded-md bg-red-600 py-2 font-semibold text-white text-xs shadow-sm transition hover:bg-red-700">
            View Details
          </button>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm">
          <div>
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-neutral-950">
              <Image
                alt="Audi RS5 Sportback"
                className="h-full w-full object-cover object-center"
                fill
                src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80"
              />
              <button className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500">
                <i className="h-3.5 w-3.5" data-lucide="heart" />
              </button>
            </div>
            <h3 className="font-bold text-neutral-900 text-xs leading-tight sm:text-sm">
              Audi RS5 Sportback
            </h3>
            <p className="mt-0.5 text-[11px] text-neutral-400">
              2024 | Automatic | Petrol
            </p>
            <div className="mt-2 font-extrabold text-base text-neutral-950">
              $76,800
            </div>
          </div>
          <button className="mt-3 w-full rounded-md bg-red-600 py-2 font-semibold text-white text-xs shadow-sm transition hover:bg-red-700">
            View Details
          </button>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm">
          <div>
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-neutral-950">
              <Image
                alt="Porsche 911 Carrera"
                className="h-full w-full object-cover object-center"
                fill
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
              />
              <button className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500">
                <i className="h-3.5 w-3.5" data-lucide="heart" />
              </button>
            </div>
            <h3 className="font-bold text-neutral-900 text-xs leading-tight sm:text-sm">
              Porsche 911 Carrera
            </h3>
            <p className="mt-0.5 text-[11px] text-neutral-400">
              2024 | Automatic | Petrol
            </p>
            <div className="mt-2 font-extrabold text-base text-neutral-950">
              $122,900
            </div>
          </div>
          <button className="mt-3 w-full rounded-md bg-red-600 py-2 font-semibold text-white text-xs shadow-sm transition hover:bg-red-700">
            View Details
          </button>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-neutral-200/80 bg-white p-3 shadow-sm">
          <div>
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-neutral-950">
              <Image
                alt="Range Rover Velar"
                className="h-full w-full object-cover object-center"
                fill
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80"
              />
              <button className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500">
                <i className="h-3.5 w-3.5" data-lucide="heart" />
              </button>
            </div>
            <h3 className="font-bold text-neutral-900 text-xs leading-tight sm:text-sm">
              Range Rover Velar
            </h3>
            <p className="mt-0.5 text-[11px] text-neutral-400">
              2024 | Automatic | Diesel
            </p>
            <div className="mt-2 font-extrabold text-base text-neutral-950">
              $71,300
            </div>
          </div>
          <button className="mt-3 w-full rounded-md bg-red-600 py-2 font-semibold text-white text-xs shadow-sm transition hover:bg-red-700">
            View Details
          </button>
        </div>
      </div>
    </section>
  );
}
