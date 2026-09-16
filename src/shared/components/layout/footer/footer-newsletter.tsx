import Image from "next/image";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function FooterNewsletter() {
  return (
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
        Curating exceptional luxury, sports, and dependable everyday vehicles
        across North America.
      </p>
      <div className="pt-space-xs">
        <span className="mb-space-xs block font-label-md font-semibold text-label-md text-on-surface uppercase tracking-wider">
          Curated Arrivals Newsletter
        </span>
        <div className="flex flex-col gap-2">
          <input
            className="h-10 w-full rounded-lg border border-border-strong bg-white px-space-md font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:border-primary-container focus:outline-none"
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
  );
}
