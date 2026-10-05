"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";
import { MdCheckCircle, MdSearch } from "react-icons/md";
import { ConciergeBanner } from "@/shared/components";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function AboutInquirySection() {
  const [query, setQuery] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        setIsSubmitted(true);
      }
    },
    [query]
  );

  const handleQueryChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <ConciergeBanner
      badge="Direct Inquiries · Private Sourcing Desk"
      description="Our private acquisitions desk sources unlisted collector inventory and low-mileage executive crossovers directly from private collections and corporate allocations before public offering."
      title="Seeking a Specific Chassis or Marque?"
      variant="surface"
    >
      {isSubmitted ? (
        <div className="flex items-center gap-3 rounded-lg border border-tertiary/30 bg-tertiary/10 p-4 text-tertiary">
          <MdCheckCircle className="text-2xl" />
          <span className="font-body-sm font-medium text-body-sm">
            Inquiry registered. A private advisor will contact you within 24
            hours.
          </span>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:items-center">
          <form
            className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center"
            onSubmit={handleSubmit}
          >
            <label className="sr-only" htmlFor="chassis-inquiry">
              Desired Marque, Model or Spec
            </label>
            <input
              className="h-10.5 w-full rounded-lg border border-border bg-surface-container px-3.5 font-body-sm text-on-surface text-xs placeholder:text-secondary focus:border-primary focus:bg-surface-container-high focus:outline-none sm:w-64 sm:text-sm"
              id="chassis-inquiry"
              onChange={handleQueryChange}
              placeholder="Desired Marque, Model or Spec"
              required
              type="text"
              value={query}
            />
            <button
              className="flex h-10.5 items-center justify-center gap-1.5 rounded-lg bg-primary px-5 font-label-md font-medium text-on-primary text-xs shadow-none transition-colors hover:bg-primary-fixed-dim hover:text-on-primary-fixed sm:px-6 sm:text-sm"
              type="submit"
            >
              <MdSearch className="text-base" />
              <span>Submit Private Search</span>
            </button>
          </form>
          <a
            className="flex h-10.5 items-center justify-center rounded-lg bg-surface-container-high px-5 font-label-md font-medium text-on-surface text-xs transition-colors hover:bg-surface-container-highest sm:px-6 sm:text-sm"
            href="tel:18005550199"
          >
            Call Concierge Team
          </a>
        </div>
      )}
    </ConciergeBanner>
  );
}
