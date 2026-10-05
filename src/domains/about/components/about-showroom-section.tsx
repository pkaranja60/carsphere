// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { MdFlightTakeoff, MdLocationOn, MdSchedule } from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function AboutShowroomSection() {
  return (
    <section className="mx-auto w-full max-w-400 px-margin-mobile pt-16 pb-4 md:px-margin md:pt-24 md:pb-8">
      <div className="grid grid-cols-1 items-center gap-gutter lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-7">
          <div className="relative h-72 overflow-hidden rounded-xl border border-border shadow-xs sm:h-96 md:h-105">
            <Image
              alt="Interior view of the Beverly Hills flagship automotive lounge at 9400 Wilshire Boulevard"
              className="h-full w-full object-cover"
              height={600}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOYPhG3PyokozK6s08LwZFzpM654S5YeNuqkGZmxJ2SjmtrowauCYhf0EMRX0s8C-5OZOjns0_Ynnahd_eTpPUUUCmHtdQD2kkRcSEaPGPuILxUAxP9wz11_1xU-MbI67xKA1uAtGN1gpJkflHYIll2ruV3FlbW7qm4Epf5xKMjQzcTCTC2rxqMy1_XAFfeJGLZphpCLGAOOai8RXRHQfXp1024c3UKiDLbntCzfPL6EAQa3_WEZAg"
              width={1000}
            />
            <div className="absolute bottom-3 left-3 rounded-lg border border-white/20 bg-surface/90 px-3 py-1.5 font-label-sm font-medium text-on-surface text-xs backdrop-blur-md md:bottom-4 md:left-4 md:px-4 md:py-2 md:text-sm">
              Beverly Hills Flagship Suite · 9400 Wilshire Blvd
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="relative h-36 overflow-hidden rounded-xl border border-border shadow-xs md:h-44">
              <Image
                alt="A clean, illuminated technical handover bay showing an enclosed transporter offloading a vehicle"
                className="h-full w-full object-cover"
                height={300}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKf1NG7AOYgY_fCgdnWKG-429hq6AogsCOZxDA0U_oQRfPJXZf4R6opfpo7lRrVkuuGxqIoY9_wPJipQR83tUSovMIva8nE4sVKiKDFrTYMKls8pbaMqhHVBiKlueFESWkuqPdd-aS_LNcDDVpmQk1hAj-hz5eXwm8zWdS9mR7cHy82fI3qFGFTu_CuywKhQJBxflKYYUe3dPmONyK-xUZL2qYiLJ_9FFUxiITqgZMTNJTbva4BgaO"
                width={500}
              />
            </div>
            <div className="relative h-36 overflow-hidden rounded-xl border border-border shadow-xs md:h-44">
              <Image
                alt="Close up of a private viewing room desk with architectural material swatches and bespoke leather presentation box"
                className="h-full w-full object-cover"
                height={300}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCczAgUJpYvWW4VS-gn0ECBAkfv_zrfwvT3MJyd0Qimrosi0QQx70AozIqg1LIWglPEw6OygqhQkzn0KuvOQnb6PH1ZLVuz0nQaiWkzziOOOOV_Qcf4FkIcSszji_svJB16Paz8sbrNylj6qzCGPgvdotNyii6kV-3MIjfOTQiAocdtBAat9M_dXibj0E6iN7l0W9F3r_E4zaBa3VMsPWl1cy0SxSr31np33W49jLbQ7FCuX6WDRb2d"
                width={500}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pl-0 lg:col-span-5 lg:pl-6">
          <div>
            <span className="font-label-md font-semibold text-label-md text-primary uppercase tracking-wider">
              Sanctuary of Motoring
            </span>
            <h2 className="mt-2 font-bold font-display text-headline-lg text-on-surface">
              The Wilshire Flagship & Nationwide Handover.
            </h2>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We designed our Beverly Hills lounge as an antidote to fluorescent
              dealerships. Experience a quiet, private consultation space with
              espresso bar, archival materials, and reserved subterranean
              viewing suites.
            </p>
          </div>

          <div className="space-y-3.5">
            <div className="flex items-start gap-3.5 rounded-xl border border-border bg-surface-container p-4 shadow-xs">
              <MdLocationOn className="shrink-0 text-2xl text-primary" />
              <div>
                <h3 className="font-label-lg font-semibold text-label-lg text-on-surface">
                  Beverly Hills Lounge
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  9400 Wilshire Blvd, Beverly Hills, CA 90212
                </p>
                <p className="mt-0.5 font-label-sm text-secondary text-xs">
                  Valet parking at rear entrance
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-xl border border-border bg-surface-container p-4 shadow-xs">
              <MdSchedule className="shrink-0 text-2xl text-primary" />
              <div>
                <h3 className="font-label-lg font-semibold text-label-lg text-on-surface">
                  Hours of Consultation
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Monday – Saturday: 9:00 AM – 8:00 PM
                </p>
                <p className="mt-0.5 font-label-sm text-secondary text-xs">
                  Sunday: Private appointments only
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-xl border border-border bg-surface-container p-4 shadow-xs">
              <MdFlightTakeoff className="shrink-0 text-2xl text-primary" />
              <div>
                <h3 className="font-label-lg font-semibold text-label-lg text-on-surface">
                  Nationwide Delivery Hub
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Enclosed, insured transport to all 48 continental states
                  within 72 hours of allocation clearance.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <Link
              className="flex h-12 items-center justify-center rounded-lg bg-primary-container px-6 font-label-lg font-semibold text-label-lg text-on-primary shadow-xs transition hover:bg-primary active:translate-y-0.5 sm:w-auto"
              href="/contact?format=flagship"
            >
              Schedule Private Lounge Visit
            </Link>
            <a
              className="flex h-12 items-center justify-center rounded-lg border border-border bg-surface-container px-6 font-label-lg font-semibold text-label-lg text-on-surface transition hover:bg-surface-container-high sm:w-auto"
              href="tel:18005550199"
            >
              Speak to a Specialist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
