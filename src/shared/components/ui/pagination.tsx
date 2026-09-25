"use client";

import { type MouseEvent, type ReactNode, useCallback } from "react";

interface PaginationProps {
  currentPage: number;
  onPageChange?: (page: number) => void;
  totalItems: number;
  totalPages: number;
}

export function Pagination({
  currentPage,
  onPageChange,
  totalItems,
  totalPages,
}: PaginationProps) {
  const handlePageChange = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (!onPageChange) {
        return;
      }
      const page = Number(e.currentTarget.dataset.page);
      if (!Number.isNaN(page)) {
        onPageChange(page);
      }
    },
    [onPageChange]
  );

  // Simple pagination logic for display purposes
  const renderPageNumbers = () => {
    const pages: ReactNode[] = [];
    for (let i = 1; i <= Math.min(3, totalPages); i += 1) {
      pages.push(
        <button
          className={`flex h-8 w-8 items-center justify-center rounded transition ${
            currentPage === i
              ? "bg-on-surface text-surface"
              : "text-on-surface-variant hover:bg-surface-variant"
          }`}
          data-page={i}
          key={i}
          onClick={handlePageChange}
          type="button"
        >
          {i}
        </button>
      );
    }

    if (totalPages > 4) {
      pages.push(
        <span
          className="px-1 text-on-surface-variant opacity-70"
          key="ellipsis"
        >
          ...
        </span>
      );
      pages.push(
        <button
          className={`flex h-8 w-8 items-center justify-center rounded transition ${
            currentPage === totalPages
              ? "bg-on-surface text-surface"
              : "text-on-surface-variant hover:bg-surface-variant"
          }`}
          data-page={totalPages}
          key={totalPages}
          onClick={handlePageChange}
          type="button"
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div
      className="mt-10 flex flex-col items-center justify-between gap-4 border-border border-t pt-6 font-label-md text-on-surface-variant sm:flex-row"
      data-purpose="pagination"
    >
      <div>
        Viewing page{" "}
        <span className="font-bold text-on-surface">
          {currentPage} of {totalPages}
        </span>{" "}
        <span className="font-normal normal-case opacity-80">
          ({totalItems} total vehicles in current allocation)
        </span>
      </div>
      <div className="flex items-center space-x-1 font-semibold">
        <button
          className="rounded px-3 py-1.5 text-on-surface-variant transition hover:bg-surface-variant disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          data-page={currentPage - 1}
          disabled={currentPage === 1}
          onClick={handlePageChange}
          type="button"
        >
          Previous
        </button>
        {renderPageNumbers()}
        <button
          className="rounded px-3 py-1.5 text-on-surface-variant transition hover:bg-surface-variant disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          data-page={currentPage + 1}
          disabled={currentPage === totalPages}
          onClick={handlePageChange}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
