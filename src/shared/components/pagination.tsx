"use client";

import { Pagination as HeroUIPagination } from "@heroui/react";
import { useCallback } from "react";

export interface PaginationProps {
  className?: string;
  currentPage: number;
  onChange: (page: number) => void;
  totalPages: number;
}

export function Pagination({
  currentPage,
  totalPages,
  onChange,
  className = "",
}: PaginationProps) {
  const getPageNumbers = useCallback(() => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i += 1) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("ellipsis");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i += 1) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("ellipsis");
      }

      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <HeroUIPagination className={`flex justify-center ${className}`}>
      <HeroUIPagination.Content>
        <HeroUIPagination.Item>
          <HeroUIPagination.Previous
            isDisabled={currentPage === 1}
            // biome-ignore lint/performance/noJsxPropsBind: safe inline
            onPress={() => onChange(currentPage - 1)}
          >
            <HeroUIPagination.PreviousIcon />
            <span className="hidden sm:inline">Previous</span>
          </HeroUIPagination.Previous>
        </HeroUIPagination.Item>

        {getPageNumbers().map((p, i) =>
          p === "ellipsis" ? (
            // biome-ignore lint/suspicious/noArrayIndexKey: static ellipsis
            <HeroUIPagination.Item key={`ellipsis-${i}`}>
              <HeroUIPagination.Ellipsis />
            </HeroUIPagination.Item>
          ) : (
            <HeroUIPagination.Item key={p}>
              <HeroUIPagination.Link
                isActive={p === currentPage}
                // biome-ignore lint/performance/noJsxPropsBind: safe inline
                onPress={() => onChange(p as number)}
              >
                {p}
              </HeroUIPagination.Link>
            </HeroUIPagination.Item>
          )
        )}

        <HeroUIPagination.Item>
          <HeroUIPagination.Next
            isDisabled={currentPage === totalPages}
            // biome-ignore lint/performance/noJsxPropsBind: safe inline
            onPress={() => onChange(currentPage + 1)}
          >
            <span className="hidden sm:inline">Next</span>
            <HeroUIPagination.NextIcon />
          </HeroUIPagination.Next>
        </HeroUIPagination.Item>
      </HeroUIPagination.Content>
    </HeroUIPagination>
  );
}
