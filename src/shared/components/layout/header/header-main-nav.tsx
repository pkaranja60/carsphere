// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { MdOutlineFavoriteBorder } from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function HeaderMainNav() {
  return (
    <div className="w-full border-border border-b bg-surface-container-lowest/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-345 items-center justify-between gap-space-md px-margin-mobile md:px-margin">
        <Link className="flex shrink-0 items-center" href="/">
          <Image
            alt="Drivez Premium Motors"
            className="h-9 w-auto object-contain"
            height={36}
            priority
            src="https://lh3.googleusercontent.com/aida/AEtjO1Vwe5yZ48YSwXVGgjY8470BrT1AnG0L3VcRnzM1G1a-X2JRj4RRgdQuZq735rWrwXr0QrWIRXS7_lWgKOh0yxts_Gl-7Oa-JXkwUXhMNSi0GlSh5Aicfm6HHzEWzBZ6sryvWR91IRn2zaPj4C2oFsTqdZ0LYoBorwwcuXajNtDxCNQydVRnylhgwtSpGUwhLWtiOmJpyyJrhoAK6gYA5Z8rJYaXpdUNodGM6jtBKopy04ivO-WCDJDoGuQ"
            width={180}
          />
        </Link>

        <nav className="hidden items-center gap-space-lg xl:flex">
          <Link
            className="font-bold font-label-lg text-label-lg text-primary transition-colors hover:text-primary"
            href="#"
          >
            Inventory
          </Link>
          <Link
            className="font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-on-surface"
            href="#"
          >
            Premium & Performance
          </Link>
          <Link
            className="font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-on-surface"
            href="#"
          >
            Everyday Excellence
          </Link>
          <Link
            className="font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-on-surface"
            href="#"
          >
            Sell & Trade
          </Link>
          <Link
            className="font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-on-surface"
            href="#"
          >
            Financing
          </Link>
          <Link
            className="font-label-lg text-label-lg text-on-surface-variant transition-colors hover:text-on-surface"
            href="#"
          >
            Concierge
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-space-md">
          <Link
            className="flex h-10 items-center gap-2 rounded-full border border-border-strong bg-surface-container-low px-3 text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-primary"
            href="#"
            title="Saved Vehicles"
          >
            <MdOutlineFavoriteBorder className="text-primary text-xl" />
            <span className="rounded-full bg-surface px-1.5 py-0.5 font-bold font-label-sm text-on-surface text-xs shadow-sm">
              0
            </span>
          </Link>

          <Link
            className="flex items-center gap-space-sm rounded-full bg-primary-container py-1.5 pr-4 pl-1.5 text-on-primary shadow-sm transition-all hover:bg-primary hover:shadow active:translate-y-0.5"
            href="#"
          >
            <Image
              alt="Concierge"
              className="h-8 w-8 rounded-full border border-primary object-cover ring-1 ring-on-primary-container/20"
              height={32}
              src="https://lh3.googleusercontent.com/aida/AEtjO1V1FdzkqSDuv3IroFCOUCEpuPohPJ4g0eIey32Yex9Pqc_p_W-Msdej1G-KDNhx67-i6UpbG4bpxTOhYViBsM3WUye6O0n2CuxsVzwaQtfbp6hna1Ot891GD-jmKaWdqjfEUdRJhH_2qQfywjXhSkYOHs-EsoCWpV3mXnEpuo2t9XfCcX3CkCpQo-0vLl589vJ3n7z-E3sPjZfx7aPQgBThbnwKMCdQxG9zEIvDkvYMcZ1uGBfsRVWNRm4"
              width={32}
            />
            <div className="flex flex-col text-left leading-tight">
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
