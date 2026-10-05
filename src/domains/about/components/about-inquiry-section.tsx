"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";
import { MdCheckCircle, MdSearch } from "react-icons/md";

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
    <section
      className="px-4 pt-2 pb-6 sm:px-margin-mobile sm:pt-4 sm:pb-8 md:px-margin"
      data-purpose="concierge-cta"
    >
      <div className="mx-auto flex max-w-1400 flex-col items-start justify-between gap-6 rounded-xl border border-border/80 bg-surface p-5 shadow-none sm:rounded-2xl sm:p-8 md:shadow-sm lg:flex-row lg:items-center lg:gap-8 lg:p-10">
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2 font-label-sm font-semibold text-[11px] text-primary uppercase tracking-widest sm:text-xs">
            <svg
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            Direct Inquiries · Private Sourcing Desk
          </div>

          <h2 className="font-bold font-display text-on-surface text-xl sm:text-2xl lg:text-3xl">
            Seeking a Specific Chassis or Marque?
          </h2>

          <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed sm:text-sm">
            Our private acquisitions desk sources unlisted collector inventory
            and low-mileage executive crossovers directly from private
            collections and corporate allocations before public offering.
          </p>
        </div>

        <div className="w-full shrink-0 lg:w-auto">
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
        </div>
      </div>
    </section>
  );
}
