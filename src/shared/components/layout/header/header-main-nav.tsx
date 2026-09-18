// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MobileNav } from "./mobile-nav";

// ─────────────────────────────────────────────
// SECTION: Types & Data
// ─────────────────────────────────────────────

interface NavItem {
  href: string;
  isActive?: boolean;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "#", isActive: true, label: "Inventory" },
  { href: "#", label: "Premium & Performance" },
  { href: "#", label: "Everyday Excellence" },
  { href: "#", label: "Sell & Trade" },
  { href: "#", label: "Financing" },
  { href: "#", label: "Concierge" },
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
    <Link className={`${baseClasses} ${activeClasses}`} href={href}>
      {label}
    </Link>
  );
}

export function HeaderMainNav() {
  return (
    <div className="w-full border-border border-b bg-surface-container-lowest/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-345 items-center justify-between gap-space-md px-margin-mobile md:px-margin">
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
            className="hidden h-10 items-center gap-2 rounded-full border border-border-strong bg-surface-container-low px-3 text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-primary md:flex"
            href="#"
            title="Saved Vehicles"
          >
            <MdOutlineFavoriteBorder className="text-primary text-xl" />
            <span className="rounded-full bg-surface px-1.5 py-0.5 font-bold font-label-sm text-on-surface text-xs shadow-sm">
              0
            </span>
          </Link>

          <Link
            className="hidden items-center gap-space-sm rounded-full bg-primary-container py-1.5 pr-4 pl-1.5 text-on-primary shadow-sm transition-all hover:bg-primary hover:shadow active:translate-y-0.5 md:flex"
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
