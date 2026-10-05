"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineFavoriteBorder, MdPersonOutline } from "react-icons/md";
import { MobileNav, type NavItem } from "./mobile-nav";

// ─────────────────────────────────────────────
// SECTION: Types & Data
// ─────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  {
    href: "/inventory",
    label: "Inventory",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/services",
    label: "Services & Advisory",
  },
  {
    href: "/contact",
    label: "Book Viewing & Contact",
  },
];

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

function HeaderLink({ label, href, isActive }: NavItem) {
  const baseClasses = "font-label-lg text-label-lg transition-colors";
  const activeClasses = isActive
    ? "font-bold text-primary hover:text-primary"
    : "text-on-surface-variant hover:text-on-surface";

  return (
    <Link
      className={`flex h-20 items-center ${baseClasses} ${activeClasses}`}
      href={href || "#"}
    >
      {label}
    </Link>
  );
}

export function HeaderMainNav() {
  const pathname = usePathname();

  const navItems = NAV_ITEMS.map((item) => ({
    ...item,
    isActive: Boolean(
      item.href && item.href !== "#" && pathname.startsWith(item.href)
    ),
  }));

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
          {navItems.map((item) => (
            <HeaderLink key={item.label} {...item} />
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-space-md">
          <MobileNav items={navItems} />

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
            href="/contact"
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
