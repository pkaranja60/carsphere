import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-surface-variant border-t bg-surface-container-low shadow-[0_-1px_6px_rgba(0,0,0,0.02)]">
      {/* Guarantee Trio Bar */}
      <div className="mx-auto max-w-345 px-margin-mobile pt-space-xl md:px-margin">
        <div className="grid grid-cols-1 gap-space-lg border-surface-variant border-b pb-space-xl md:grid-cols-3">
          <div className="flex items-start gap-space-md rounded-xl border border-surface-variant bg-white p-space-md shadow-sm">
            <span className="material-symbols-outlined text-3xl text-primary">
              verified
            </span>
            <div>
              <h4 className="font-label-lg font-semibold text-label-lg text-on-surface">
                150-Point Inspection
              </h4>
              <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                Rigorous mechanical and cosmetic testing for enduring quality
                assurance.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-space-md rounded-xl border border-surface-variant bg-white p-space-md shadow-sm">
            <span className="material-symbols-outlined text-3xl text-primary">
              published_with_changes
            </span>
            <div>
              <h4 className="font-label-lg font-semibold text-label-lg text-on-surface">
                7-Day Buyback Guarantee
              </h4>
              <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                Experience your vehicle with 500 worry-free miles and complete
                peace of mind.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-space-md rounded-xl border border-surface-variant bg-white p-space-md shadow-sm">
            <span className="material-symbols-outlined text-3xl text-primary">
              payments
            </span>
            <div>
              <h4 className="font-label-lg font-semibold text-label-lg text-on-surface">
                Transparent Pricing
              </h4>
              <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                Direct market valuation, zero dealer markups, and clear upfront
                terms.
              </p>
            </div>
          </div>
        </div>

        {/* 5-Column Reorganized Footer Body */}
        <div className="grid grid-cols-1 gap-space-xl pt-space-xl pb-space-xl md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Statement & Newsletter */}
          <div className="flex flex-col gap-space-md lg:col-span-1">
            <div className="flex items-center gap-space-xs">
              <Image
                alt="Drivez Premium Motors"
                className="h-8 w-auto object-contain"
                height={32}
                src="https://lh3.googleusercontent.com/aida/AEtjO1Vwe5yZ48YSwXVGgjY8470BrT1AnG0L3VcRnzM1G1a-X2JRj4RRgdQuZq735rWrwXr0QrWIRXS7_lWgKOh0yxts_Gl-7Oa-JXkwUXhMNSi0GlSh5Aicfm6HHzEWzBZ6sryvWR91IRn2zaPj4C2oFsTqdZ0LYoBorwwcuXajNtDxCNQydVRnylhgwtSpGUwhLWtiOmJpyyJrhoAK6gYA5Z8rJYaXpdUNodGM6jtBKopy04ivO-WCDJDoGuQ"
                width={150}
              />
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Architecting a calm, transparent automotive acquisition journey.
              Curating exceptional luxury, sports, and dependable everyday
              vehicles across North America.
            </p>
            <div className="pt-space-xs">
              <span className="mb-space-xs block font-label-md font-semibold text-label-md text-on-surface uppercase tracking-wider">
                Curated Arrivals Newsletter
              </span>
              <div className="flex flex-col gap-2">
                <input
                  className="h-10 w-full rounded-lg border border-outline-variant bg-white px-space-md font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:border-primary-container focus:outline-none"
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

          {/* Column 2: Curated Inventory */}
          <div>
            <h5 className="mb-space-md font-label-lg font-semibold text-label-lg text-on-surface uppercase tracking-wider">
              Curated Inventory
            </h5>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Certified Pre-Owned
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Executive Sedans
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Performance Coupes
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Luxury Touring SUVs
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Verified Under $35k
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Acquisition & Finance */}
          <div>
            <h5 className="mb-space-md font-label-lg font-semibold text-label-lg text-on-surface uppercase tracking-wider">
              Acquisition & Finance
            </h5>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Bespoke Lease Structures
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Direct Financing
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Digital Trade-In Valuation
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  7-Day Buyback Guarantee
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Concierge & Services */}
          <div>
            <h5 className="mb-space-md font-label-lg font-semibold text-label-lg text-on-surface uppercase tracking-wider">
              Concierge & Services
            </h5>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Private Showroom Appointments
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Nationwide Transport
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  VIP Test Drive Booking
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Vehicle Sourcing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Showroom & Lounge */}
          <div>
            <h5 className="mb-space-md font-label-lg font-semibold text-label-lg text-on-surface uppercase tracking-wider">
              Showroom & Lounge
            </h5>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              9400 Wilshire Boulevard
              <br />
              Beverly Hills, CA 90212
            </p>
            <div className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              <span className="block">Monday – Saturday: 9am – 8pm</span>
              <span className="block">Sunday: By Private Appointment</span>
            </div>
            <div className="mt-space-md">
              <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Direct Concierge Line
              </span>
              <a
                className="font-body-sm font-semibold text-body-sm text-primary hover:underline"
                href="tel:18005550199"
              >
                +1 (800) 555-0199
              </a>
            </div>
          </div>
        </div>

        {/* Clean Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-space-md border-surface-variant border-t pt-space-lg pb-space-lg font-body-sm text-body-sm text-on-surface-variant md:flex-row">
          <p>© 2026 Drivez Premium Motors, Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-space-lg text-sm">
            <span>Licensed Motor Vehicle Dealer</span>
            <Link className="transition-colors hover:text-on-surface" href="#">
              Privacy Policy
            </Link>
            <Link className="transition-colors hover:text-on-surface" href="#">
              Terms of Service
            </Link>
            <Link className="transition-colors hover:text-on-surface" href="#">
              Consumer Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
