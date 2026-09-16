import Link from "next/link";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function FooterNavigation() {
  return (
    <>
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
    </>
  );
}
