// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight, HiOutlineHeart } from "react-icons/hi2";
import { Button, Typography } from "@/shared";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function FeaturedCars() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <Typography type="h2" variant="heading">
          Featured Cars
        </Typography>
        <Link
          className="inline-flex items-center gap-1.5 font-semibold text-neutral-800 text-xs transition hover:text-red-600 sm:text-sm"
          href="#"
        >
          <span>View All Cars</span>
          <HiOutlineArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-3 shadow-sm sm:p-4">
          <div>
            <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-950">
              <Image
                alt="BMW M4 Competition"
                className="h-full w-full object-cover object-center"
                fill
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80"
              />
              <button
                className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500"
                type="button"
              >
                <HiOutlineHeart className="h-3.5 w-3.5" />
              </button>
            </div>
            <Typography type="h3" variant="subheading">
              BMW M4 Competition
            </Typography>
            <Typography className="mt-0.5" color="muted" variant="metadata">
              2024 | Automatic | Petrol
            </Typography>
            <div className="mt-2 font-extrabold text-base text-foreground">
              $89,900
            </div>
          </div>
          <Button className="mt-3" fullWidth size="sm" variant="primary">
            View Details
          </Button>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-3 shadow-sm sm:p-4">
          <div>
            <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-950">
              <Image
                alt="Mercedes-Benz E-className"
                className="h-full w-full object-cover object-center"
                fill
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
              />
              <button
                className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500"
                type="button"
              >
                <HiOutlineHeart className="h-3.5 w-3.5" />
              </button>
            </div>
            <Typography type="h3" variant="subheading">
              Mercedes-Benz E-className
            </Typography>
            <Typography className="mt-0.5" color="muted" variant="metadata">
              2024 | Automatic | Petrol
            </Typography>
            <div className="mt-2 font-extrabold text-base text-foreground">
              $64,500
            </div>
          </div>
          <Button className="mt-3" fullWidth size="sm" variant="primary">
            View Details
          </Button>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-3 shadow-sm sm:p-4">
          <div>
            <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-950">
              <Image
                alt="Audi RS5 Sportback"
                className="h-full w-full object-cover object-center"
                fill
                src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80"
              />
              <button
                className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500"
                type="button"
              >
                <HiOutlineHeart className="h-3.5 w-3.5" />
              </button>
            </div>
            <Typography type="h3" variant="subheading">
              Audi RS5 Sportback
            </Typography>
            <Typography className="mt-0.5" color="muted" variant="metadata">
              2024 | Automatic | Petrol
            </Typography>
            <div className="mt-2 font-extrabold text-base text-foreground">
              $76,800
            </div>
          </div>
          <Button className="mt-3" fullWidth size="sm" variant="primary">
            View Details
          </Button>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-3 shadow-sm sm:p-4">
          <div>
            <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-950">
              <Image
                alt="Porsche 911 Carrera"
                className="h-full w-full object-cover object-center"
                fill
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
              />
              <button
                className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500"
                type="button"
              >
                <HiOutlineHeart className="h-3.5 w-3.5" />
              </button>
            </div>
            <Typography type="h3" variant="subheading">
              Porsche 911 Carrera
            </Typography>
            <Typography className="mt-0.5" color="muted" variant="metadata">
              2024 | Automatic | Petrol
            </Typography>
            <div className="mt-2 font-extrabold text-base text-foreground">
              $122,900
            </div>
          </div>
          <Button className="mt-3" fullWidth size="sm" variant="primary">
            View Details
          </Button>
        </div>

        <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-3 shadow-sm sm:p-4">
          <div>
            <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-950">
              <Image
                alt="Range Rover Velar"
                className="h-full w-full object-cover object-center"
                fill
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80"
              />
              <button
                className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:text-red-500"
                type="button"
              >
                <HiOutlineHeart className="h-3.5 w-3.5" />
              </button>
            </div>
            <Typography type="h3" variant="subheading">
              Range Rover Velar
            </Typography>
            <Typography className="mt-0.5" color="muted" variant="metadata">
              2024 | Automatic | Diesel
            </Typography>
            <div className="mt-2 font-extrabold text-base text-foreground">
              $71,300
            </div>
          </div>
          <Button className="mt-3" fullWidth size="sm" variant="primary">
            View Details
          </Button>
        </div>
      </div>
    </section>
  );
}
