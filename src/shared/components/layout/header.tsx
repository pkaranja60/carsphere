import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full">
      {/* Tier 1: Static Top Utility Bar */}
      <div className="w-full border-surface-variant border-b bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant">
        <div className="mx-auto flex h-10 max-w-345 items-center justify-between gap-4 px-margin-mobile md:px-margin">
          {/* Left static facts */}
          <div className="flex items-center gap-space-lg overflow-x-auto whitespace-nowrap py-1">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base text-primary">
                location_on
              </span>
              <span>
                Showroom:{" "}
                <strong className="font-medium text-on-surface">
                  9400 Wilshire Blvd, Beverly Hills, CA
                </strong>
              </span>
            </div>
            <span className="hidden text-outline-variant sm:inline">|</span>
            <div className="hidden items-center gap-1.5 sm:flex">
              <span className="material-symbols-outlined text-base text-primary">
                local_shipping
              </span>
              <span>Nationwide Enclosed White-Glove Delivery</span>
            </div>
            <span className="hidden text-outline-variant md:inline">|</span>
            <div className="hidden items-center gap-1.5 md:flex">
              <span className="material-symbols-outlined text-base text-primary">
                schedule
              </span>
              <span>Mon–Sat: 9:00 AM – 8:00 PM</span>
            </div>
          </div>
          {/* Right direct line */}
          <div className="ml-auto flex shrink-0 items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-primary">
              call
            </span>
            <span className="hidden text-on-surface-variant lg:inline">
              Direct Line:
            </span>
            <a
              className="font-semibold text-on-surface tracking-wide transition-colors hover:text-primary"
              href="tel:18005550199"
            >
              +1 (800) 555-0199
            </a>
          </div>
        </div>
      </div>
      {/* Tier 2: Main Navigation Bar */}
      <div className="w-full border-surface-variant border-b bg-surface-container-lowest/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-345 items-center justify-between gap-space-md px-margin-mobile md:px-margin">
          {/* Brand Logo */}
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
          {/* Main Navigation Links */}
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
          {/* Right Utility Actions */}
          <div className="flex shrink-0 items-center gap-space-md">
            {/* Saved Vehicles Counter */}
            <Link
              className="flex h-10 items-center gap-2 rounded-full border border-surface-variant bg-surface-container-low px-3 text-on-surface-variant transition-all hover:bg-surface-container hover:text-primary"
              href="#"
              title="Saved Vehicles"
            >
              <span className="material-symbols-outlined text-primary text-xl">
                favorite
              </span>
              <span className="rounded-full bg-white px-1.5 py-0.5 font-bold font-label-sm text-on-surface text-xs shadow-sm">
                0
              </span>
            </Link>
            {/* VIP Concierge Consultation CTA Button with Consultant Avatar */}
            <Link
              className="flex items-center gap-space-sm rounded-full bg-primary py-1.5 pr-4 pl-1.5 text-white shadow-sm transition-all hover:bg-primary-container hover:shadow active:translate-y-0.5"
              href="#"
            >
              <Image
                alt="Concierge"
                className="h-8 w-8 rounded-full border border-primary object-cover ring-1 ring-white/40"
                height={32}
                src="https://lh3.googleusercontent.com/aida/AEtjO1V1FdzkqSDuv3IroFCOUCEpuPohPJ4g0eIey32Yex9Pqc_p_W-Msdej1G-KDNhx67-i6UpbG4bpxTOhYViBsM3WUye6O0n2CuxsVzwaQtfbp6hna1Ot891GD-jmKaWdqjfEUdRJhH_2qQfywjXhSkYOHs-EsoCWpV3mXnEpuo2t9XfCcX3CkCpQo-0vLl589vJ3n7z-E3sPjZfx7aPQgBThbnwKMCdQxG9zEIvDkvYMcZ1uGBfsRVWNRm4"
                width={32}
              />
              <div className="flex flex-col text-left leading-tight">
                <span className="font-label-sm font-semibold tracking-wide">
                  Speak with Concierge
                </span>
                <span className="text-[10px] text-primary-fixed opacity-90">
                  Private VIP Desk
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
