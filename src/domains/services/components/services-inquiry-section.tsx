"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { useCallback } from "react";
import { MdCheckCircle } from "react-icons/md";
import type { useServicesInquiry } from "../hooks/use-services-inquiry";
import type { ServiceTabKey } from "../types/services.types";
import { ServicesInquiryForm } from "./services-inquiry-form";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ServicesInquirySectionProps {
  inquiryState: ReturnType<typeof useServicesInquiry>;
}

interface InquiryTabButtonProps {
  isSelected: boolean;
  label: string;
  onSelect: (key: ServiceTabKey) => void;
  tabKey: ServiceTabKey;
}

// ─────────────────────────────────────────────
// SECTION: Helpers
// ─────────────────────────────────────────────

const TAB_DESCRIPTIONS: Record<ServiceTabKey, string> = {
  finance:
    "Explore custom single-asset corporate leases, balloon amortization structures, and tier-1 bank schedules.",
  sourcing:
    "Access off-market European inventory, limited numbered series allocations, and private collector vaults.",
  trade:
    "Receive a formal, guaranteed equity offer valid for 7 days or 250 miles across all 48 continental states.",
};

const TABS: { key: ServiceTabKey; label: string }[] = [
  { key: "trade", label: "Instant Equity & Trade" },
  { key: "finance", label: "Bespoke Financing" },
  { key: "sourcing", label: "Off-Market Sourcing" },
];

function InquiryTabButton({
  tabKey,
  label,
  isSelected,
  onSelect,
}: InquiryTabButtonProps) {
  const handleClick = useCallback(() => {
    onSelect(tabKey);
  }, [onSelect, tabKey]);

  return (
    <button
      className={`min-w-32.5 flex-1 rounded-lg px-4 py-2.5 font-label-md font-semibold text-xs transition sm:text-label-md ${
        isSelected
          ? "bg-primary-container text-white shadow-xs"
          : "text-on-surface-variant hover:text-on-surface"
      }`}
      onClick={handleClick}
      type="button"
    >
      {label}
    </button>
  );
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ServicesInquirySection({
  inquiryState,
}: ServicesInquirySectionProps) {
  const { activeTab, handleTabChange, isSuccess, resetForm, submissionId } =
    inquiryState;

  return (
    <section
      className="w-full border-border/80 border-t bg-surface-container py-12 sm:py-16 md:py-20 lg:py-24"
      id="quick-inquiry"
    >
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <span className="font-label-sm font-semibold text-label-sm text-primary uppercase tracking-wider">
            Fast-Track Consultation
          </span>
          <h2 className="mt-1 font-bold font-display text-headline-md text-on-surface sm:text-headline-lg">
            Initiate Your Advisory Request
          </h2>
          <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant leading-relaxed sm:text-body-md">
            Select your primary service of interest below. A senior CarSphere
            Private Client Advisor will review market parameters and respond
            with customized specifications.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-surface-container-lowest p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 rounded-xl border border-border/80 bg-surface-container-low p-1.5 sm:mb-8">
            {TABS.map((tab) => (
              <InquiryTabButton
                isSelected={activeTab === tab.key}
                key={tab.key}
                label={tab.label}
                onSelect={handleTabChange}
                tabKey={tab.key}
              />
            ))}
          </div>

          <div className="mb-6 text-center sm:mb-8">
            <p className="font-body-sm text-on-surface-variant text-xs sm:text-sm">
              {TAB_DESCRIPTIONS[activeTab]}
            </p>
          </div>

          {isSuccess ? (
            <div className="flex flex-col items-center gap-4 rounded-xl border border-tertiary/30 bg-tertiary-container/30 p-6 text-center text-on-surface sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary text-white shadow-xs">
                <MdCheckCircle className="text-2xl" />
              </div>
              <h3 className="font-bold font-display text-headline-sm text-on-surface">
                Advisory Dossier Transmitted
              </h3>
              <p className="max-w-xl font-body-sm text-on-surface-variant text-xs leading-relaxed sm:text-sm">
                Reference dossier identifier:{" "}
                <span className="font-mono font-semibold text-primary">
                  {submissionId}
                </span>
                . A senior private client advisor has received your vehicle
                parameters and will initiate encrypted contact within 15 minutes
                during showroom hours.
              </p>
              <button
                className="mt-2 rounded-lg border border-border bg-surface px-6 py-2.5 font-label-md font-semibold text-on-surface text-xs transition hover:bg-surface-container-high"
                onClick={resetForm}
                type="button"
              >
                Submit Additional Inquiries
              </button>
            </div>
          ) : (
            <ServicesInquiryForm inquiryState={inquiryState} />
          )}
        </div>
      </div>
    </section>
  );
}
