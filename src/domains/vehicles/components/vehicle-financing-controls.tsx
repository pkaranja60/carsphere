"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { useCallback } from "react";
import {
  DOWN_PAYMENT_PRESETS,
  TERM_OPTIONS,
} from "../services/vehicle-financing.utils";

// ─────────────────────────────────────────────
// SECTION: Sub-components
// ─────────────────────────────────────────────

interface TermButtonProps {
  isSelected: boolean;
  onSelect: (term: number) => void;
  term: number;
}

function TermButton({ isSelected, onSelect, term }: TermButtonProps) {
  const handleClick = useCallback(() => onSelect(term), [onSelect, term]);
  return (
    <button
      className={`cursor-pointer rounded-xl border py-2.5 text-center font-label-md font-semibold text-label-md transition-all duration-200 ${
        isSelected
          ? "border-primary bg-primary text-on-primary shadow-sm"
          : "border-border/80 bg-surface-container-low text-on-surface hover:border-border hover:bg-surface-container hover:text-on-surface"
      }`}
      onClick={handleClick}
      type="button"
    >
      {term}m
    </button>
  );
}

interface DownPercentButtonProps {
  isSelected: boolean;
  onSelect: (percent: number) => void;
  percent: number;
}

function DownPercentButton({
  isSelected,
  onSelect,
  percent,
}: DownPercentButtonProps) {
  const handleClick = useCallback(() => onSelect(percent), [onSelect, percent]);
  return (
    <button
      className={`cursor-pointer rounded-xl border py-2.5 text-center font-label-md font-semibold text-label-md transition-all duration-200 ${
        isSelected
          ? "border-primary bg-primary text-on-primary shadow-sm"
          : "border-border/80 bg-surface-container-low text-on-surface hover:border-border hover:bg-surface-container hover:text-on-surface"
      }`}
      onClick={handleClick}
      type="button"
    >
      {percent}%
    </button>
  );
}

// ─────────────────────────────────────────────
// SECTION: Term & Down Payment Controls
// ─────────────────────────────────────────────

interface TermSelectorProps {
  onSelectTerm: (term: number) => void;
  selectedTerm: number;
}

export function TermSelector({
  onSelectTerm,
  selectedTerm,
}: TermSelectorProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-label-sm font-semibold text-label-sm text-on-surface">
          Loan Duration
        </span>
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          {selectedTerm} Months ({(selectedTerm / 12).toFixed(1)} Years)
        </span>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {TERM_OPTIONS.map((term) => (
          <TermButton
            isSelected={selectedTerm === term}
            key={term}
            onSelect={onSelectTerm}
            term={term}
          />
        ))}
      </div>
    </div>
  );
}

interface DownPaymentSelectorProps {
  downPaymentAmount: number;
  downPercent: number;
  onSelectPercent: (percent: number) => void;
}

export function DownPaymentSelector({
  downPaymentAmount,
  downPercent,
  onSelectPercent,
}: DownPaymentSelectorProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-label-sm font-semibold text-label-sm text-on-surface">
          Down Payment Allocation
        </span>
        <span className="font-bold font-label-md text-label-md text-primary">
          ${downPaymentAmount.toLocaleString()} ({downPercent}%)
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {DOWN_PAYMENT_PRESETS.map((pct) => (
          <DownPercentButton
            isSelected={downPercent === pct}
            key={pct}
            onSelect={onSelectPercent}
            percent={pct}
          />
        ))}
      </div>
    </div>
  );
}
