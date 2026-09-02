// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function SpecialOffers() {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <div className="relative flex min-h-42.5 flex-col justify-between overflow-hidden rounded-2xl bg-black p-6">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Promo Car"
            className="h-full w-full object-cover object-right opacity-60"
            fill
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="relative z-10">
          <p className="font-semibold text-[11px] text-neutral-400 uppercase tracking-wider">
            Limited Time Offer
          </p>
          <h4 className="mt-0.5 font-extrabold text-white text-xl">
            Up to 20% Off
          </h4>
          <p className="mt-0.5 text-neutral-300 text-xs">On Selected Cars</p>
        </div>
        <div className="relative z-10 pt-4">
          <Link
            className="inline-block rounded-lg bg-red-600 px-4 py-2 font-semibold text-white text-xs shadow transition hover:bg-red-700"
            href="#"
          >
            Explore Offers
          </Link>
        </div>
      </div>

      <div className="relative flex min-h-42.5 flex-col justify-between overflow-hidden rounded-2xl bg-[#ce2029] p-6">
        <div className="absolute top-0 right-0 bottom-0 z-0 w-3/5">
          <Image
            alt="Finance Car"
            className="h-full w-full object-cover object-left"
            fill
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#ce2029] via-[#ce2029]/70 to-transparent" />
        </div>
        <div className="relative z-10">
          <p className="font-semibold text-[11px] text-red-100 uppercase tracking-wider">
            Easy Finance
          </p>
          <h4 className="mt-0.5 font-extrabold text-white text-xl">
            Get Your Dream Car
          </h4>
          <p className="mt-0.5 text-red-100 text-xs">With Low Monthly Plans</p>
        </div>
        <div className="relative z-10 pt-4">
          <Link
            className="inline-block rounded-lg bg-white px-4 py-2 font-semibold text-neutral-900 text-xs shadow transition hover:bg-neutral-100"
            href="#"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="relative flex min-h-42.5 flex-col justify-between overflow-hidden rounded-2xl bg-neutral-950 p-6">
        <div className="absolute top-0 right-0 bottom-0 z-0 w-1/2">
          <Image
            alt="Steering Wheel"
            className="h-full w-full object-cover object-center opacity-70"
            fill
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
          />
          <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
        </div>
        <div className="relative z-10">
          <h4 className="font-extrabold text-lg text-white">
            Book a Test Drive
          </h4>
          <p className="mt-1 text-neutral-300 text-xs leading-snug">
            Experience Before
            <br />
            You Buy
          </p>
        </div>
        <div className="relative z-10 pt-4">
          <Link
            className="inline-block rounded-lg bg-white px-4 py-2 font-semibold text-neutral-900 text-xs shadow transition hover:bg-neutral-100"
            href="#"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
