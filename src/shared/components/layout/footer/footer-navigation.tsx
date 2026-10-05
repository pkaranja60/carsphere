// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";

// ─────────────────────────────────────────────
// SECTION: Types & Data
// ─────────────────────────────────────────────

interface NavigationLink {
  href: string;
  label: string;
}

interface NavigationGroup {
  links: NavigationLink[];
  title: string;
}

const LINK_GROUPS: NavigationGroup[] = [
  {
    links: [
      { href: "/inventory/cpo", label: "Certified Pre-Owned" },
      { href: "/inventory/sedans", label: "Executive Sedans" },
      { href: "/inventory/coupes", label: "Performance Coupes" },
      { href: "/inventory/suvs", label: "Luxury Touring SUVs" },
      { href: "/inventory/under-35k", label: "Verified Under $35k" },
    ],
    title: "Curated Inventory",
  },
  {
    links: [
      { href: "/services#finance", label: "Bespoke Lease Structures" },
      { href: "/services#finance", label: "Direct Financing" },
      { href: "/services#trade", label: "Digital Trade-In Valuation" },
      { href: "/services#guarantees", label: "7-Day Buyback Guarantee" },
    ],
    title: "Acquisition & Finance",
  },
  {
    links: [
      {
        href: "/contact?format=flagship",
        label: "Private Showroom Appointments",
      },
      { href: "/services", label: "Nationwide Transport" },
      { href: "/contact?format=athome", label: "VIP Test Drive Booking" },
      { href: "/services#sourcing", label: "Vehicle Sourcing" },
    ],
    title: "Concierge & Services",
  },
];

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

function LinkGroup({ title, links }: NavigationGroup) {
  return (
    <div>
      <h5 className="mb-space-md font-label-lg font-semibold text-label-lg text-on-surface uppercase tracking-wider">
        {title}
      </h5>
      <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              className="transition-colors hover:text-primary"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterNavigation() {
  return (
    <>
      {LINK_GROUPS.map((group) => (
        <LinkGroup key={group.title} {...group} />
      ))}

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
          <span className="block">Monday - Saturday: 9am - 8pm</span>
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
