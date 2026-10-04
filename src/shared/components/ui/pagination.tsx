"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { type MouseEvent, useCallback, useMemo } from "react";
import {
  calculateItemRange,
  calculatePaginationRange,
} from "./pagination.utils";

export type { PaginationItem } from "./pagination.utils";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface PaginationProps {
  className?: string;
  currentPage: number;
  disabled?: boolean;
  isLoading?: boolean;
  onPageChange?: (page: number) => void;
  pageSize?: number;
  siblingCount?: number;
  totalItems: number;
  totalPages: number;
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function Pagination({
  className = "",
  currentPage,
  disabled = false,
  isLoading = false,
  onPageChange,
  pageSize = 9,
  siblingCount = 1,
  totalItems,
  totalPages,
}: PaginationProps) {
  const isInteractiveDisabled = disabled || isLoading;

  const pageItems = useMemo(
    () =>
      calculatePaginationRange({
        currentPage,
        siblingCount,
        totalPages,
      }),
    [currentPage, totalPages, siblingCount]
  );

  const rangeDisplay = useMemo(
    () => calculateItemRange(currentPage, pageSize, totalItems),
    [currentPage, pageSize, totalItems]
  );

  const handlePageClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (isInteractiveDisabled || !onPageChange) {
        return;
      }
      const page = Number(e.currentTarget.dataset.page);
      if (!Number.isNaN(page) && page >= 1 && page <= totalPages) {
        onPageChange(page);
        if (typeof window !== "undefined") {
          window.scrollTo({ behavior: "smooth", top: 0 });
        }
      }
    },
    [isInteractiveDisabled, onPageChange, totalPages]
  );

  const handlePrevious = useCallback(() => {
    if (!isInteractiveDisabled && currentPage > 1 && onPageChange) {
      onPageChange(currentPage - 1);
      if (typeof window !== "undefined") {
        window.scrollTo({ behavior: "smooth", top: 0 });
      }
    }
  }, [currentPage, isInteractiveDisabled, onPageChange]);

  const handleNext = useCallback(() => {
    if (!isInteractiveDisabled && currentPage < totalPages && onPageChange) {
      onPageChange(currentPage + 1);
      if (typeof window !== "undefined") {
        window.scrollTo({ behavior: "smooth", top: 0 });
      }
    }
  }, [currentPage, isInteractiveDisabled, onPageChange, totalPages]);

  return (
    <nav
      aria-busy={isLoading}
      aria-label="Pagination Navigation"
      className={`mt-10 flex flex-col items-center justify-between gap-4 border-border border-t pt-6 font-label-md text-on-surface-variant sm:flex-row ${className}`}
      data-purpose="pagination"
    >
      <div className="flex items-center gap-2">
        <span>
          Showing{" "}
          <span className="font-bold text-on-surface">
            {rangeDisplay.start} - {rangeDisplay.end}
          </span>{" "}
          of <span className="font-bold text-on-surface">{totalItems}</span>{" "}
          vehicles
        </span>
        {isLoading ? (
          <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        ) : null}
      </div>

      <div className="flex items-center space-x-1 font-medium">
        <button
          aria-label="Previous page"
          className="rounded px-3 py-1.5 text-on-surface-variant transition-colors hover:bg-surface-variant disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          disabled={isInteractiveDisabled || currentPage <= 1}
          onClick={handlePrevious}
          type="button"
        >
          Previous
        </button>

        {pageItems.map((item) => {
          if (item === "ellipsis-start" || item === "ellipsis-end") {
            return (
              <span
                className="px-2 text-on-surface-variant opacity-60"
                key={item}
              >
                ...
              </span>
            );
          }

          const isCurrent = currentPage === item;
          return (
            <button
              aria-current={isCurrent ? "page" : undefined}
              aria-label={`Page ${item}`}
              className={`flex h-8 w-8 items-center justify-center rounded transition-colors ${
                isCurrent
                  ? "bg-on-surface font-semibold text-surface"
                  : "text-on-surface-variant hover:bg-surface-variant"
              }`}
              data-page={item}
              disabled={isInteractiveDisabled}
              key={item}
              onClick={handlePageClick}
              type="button"
            >
              {item}
            </button>
          );
        })}

        <button
          aria-label="Next page"
          className="rounded px-3 py-1.5 text-on-surface-variant transition-colors hover:bg-surface-variant disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          disabled={isInteractiveDisabled || currentPage >= totalPages}
          onClick={handleNext}
          type="button"
        >
          Next
        </button>
      </div>
    </nav>
  );
}
