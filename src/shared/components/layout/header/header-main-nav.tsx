// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import {
  MdKeyboardArrowDown,
  MdOutlineFavoriteBorder,
  MdPersonOutline,
} from "react-icons/md";
import { MobileNav, type NavItem } from "./mobile-nav";

// ─────────────────────────────────────────────
// SECTION: Types & Data
// ─────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  {
    children: [
      { href: "#", label: "Premium & Performance" },
      { href: "#", label: "Everyday Excellence" },
    ],
    isActive: true,
    label: "Inventory",
  },
  {
    children: [
      { href: "#", label: "Our Story" },
      { href: "#", label: "Journal" },
    ],
    label: "About",
  },
  { href: "#", label: "Book Viewing & Contact" },
  {
    children: [
      { href: "#", label: "Sell & Trade" },
      { href: "#", label: "Financing" },
      { href: "#", label: "Warranty" },
      { href: "#", label: "Private Sourcing" },
    ],
    label: "Services & Advisory",
  },
];

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

function HeaderLink({ label, href, isActive, children }: NavItem) {
  const baseClasses = "font-label-lg text-label-lg transition-colors";
  const activeClasses = isActive
    ? "font-bold text-primary hover:text-primary"
    : "text-on-surface-variant hover:text-on-surface";

  if (children) {
    return (
      <div className="group relative flex h-20 items-center">
        <button
          className={`${baseClasses} ${activeClasses} flex items-center gap-1`}
          type="button"
        >
          {label}
          <MdKeyboardArrowDown className="text-xl transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
        </button>
        <div className="invisible absolute top-full left-0 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
          <div className="flex min-w-50 flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest py-2 shadow-lg">
            {children.map((child) => (
              <Link
                className="px-4 py-3 font-label-md text-label-md text-on-surface-variant transition-colors hover:bg-surface hover:text-primary"
                href={child.href}
                key={child.label}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link className={`${baseClasses} ${activeClasses}`} href={href || "#"}>
      {label}
    </Link>
  );
}

export function HeaderMainNav() {
  return (
    <div className="w-full border-border border-b bg-surface-container-lowest/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-400 items-center justify-between gap-space-md px-margin-mobile md:px-margin">
        <Link className="flex shrink-0 items-center" href="/">
          <div className="flex items-center gap-2">
            <span className="font-bold font-display text-on-surface text-xl tracking-tight">
              Car<span className="text-primary">Sphere</span>
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-space-lg xl:flex">
          {NAV_ITEMS.map((item) => (
            <HeaderLink key={item.label} {...item} />
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-space-md">
          <MobileNav items={NAV_ITEMS} />

          <Link
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-surface-container-low text-on-surface-variant transition hover:bg-surface-container-high hover:text-primary md:flex"
            href="#"
            title="My Account"
          >
            <MdPersonOutline className="text-primary text-xl" />
          </Link>

          <Link
            className="hidden h-10 items-center gap-2 rounded-full border border-border-strong bg-surface-container-low px-3 text-on-surface-variant transition hover:bg-surface-container-high hover:text-primary md:flex"
            href="#"
            title="Saved Vehicles"
          >
            <MdOutlineFavoriteBorder className="text-primary text-xl" />
            <span className="rounded-full bg-surface px-1.5 py-0.5 font-bold font-label-sm text-on-surface text-xs shadow-sm">
              0
            </span>
          </Link>

          <Link
            className="hidden items-center gap-space-sm rounded-full bg-primary-container py-1.5 pr-4 pl-1.5 text-on-primary shadow-sm transition hover:bg-primary hover:shadow active:translate-y-0.5 md:flex"
            href="#"
          >
            <Image
              alt="Concierge"
              className="h-8 w-8 rounded-full border border-primary object-cover ring-1 ring-on-primary-container/20"
              height={32}
              src="https://lh3.googleusercontent.com/aida/AEtjO1V1FdzkqSDuv3IroFCOUCEpuPohPJ4g0eIey32Yex9Pqc_p_W-Msdej1G-KDNhx67-i6UpbG4bpxTOhYViBsM3WUye6O0n2CuxsVzwaQtfbp6hna1Ot891GD-jmKaWdqjfEUdRJhH_2qQfywjXhSkYOHs-EsoCWpV3mXnEpuo2t9XfCcX3CkCpQo-0vLl589vJ3n7z-E3sPjZfx7aPQgBThbnwKMCdQxG9zEIvDkvYMcZ1uGBfsRVWNRm4"
              width={32}
            />
            <div className="hidden flex-col text-left leading-tight sm:flex">
              <span className="font-label-sm font-semibold tracking-wide">
                Speak with Concierge
              </span>
              <span className="text-[10px] text-on-primary opacity-90">
                Private VIP Desk
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
