"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────
import { useCallback } from "react";
import { Button } from "@/shared/components/ui/button";
// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function FooterNewsletter() {
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="flex flex-col gap-space-md lg:col-span-1">
      <div className="flex items-center gap-2">
        <span className="font-bold font-display text-on-surface text-xl tracking-tight">
          Car<span className="text-primary">Sphere</span>
        </span>
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
        <form
          action="/api/subscribe"
          className="flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <input
            aria-label="Email address for newsletter"
            className="h-10 w-full rounded-lg border border-border-strong bg-surface px-space-md font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:border-primary-container focus:outline-none"
            id="newsletter-email"
            name="email"
            placeholder="Enter your private email"
            type="email"
          />
          <Button className="h-10" fullWidth type="submit" variant="primary">
            Subscribe to Journal
          </Button>
        </form>
      </div>
    </div>
  );
}
