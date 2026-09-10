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
    const pages: { key: string | number; value: number | "ellipsis" }[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i += 1) {
        pages.push({ key: i, value: i });
      }
    } else {
      pages.push({ key: 1, value: 1 });

      if (currentPage > 3) {
        pages.push({ key: "ellipsis-start", value: "ellipsis" });
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i += 1) {
        pages.push({ key: i, value: i });
      }

      if (currentPage < totalPages - 2) {
        pages.push({ key: "ellipsis-end", value: "ellipsis" });
      }

      pages.push({ key: totalPages, value: totalPages });
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

        {getPageNumbers().map((p) =>
          p.value === "ellipsis" ? (
            <HeroUIPagination.Item key={p.key}>
              <HeroUIPagination.Ellipsis />
            </HeroUIPagination.Item>
          ) : (
            <HeroUIPagination.Item key={p.key}>
              <HeroUIPagination.Link
                isActive={p.value === currentPage}
                // biome-ignore lint/performance/noJsxPropsBind: safe inline
                onPress={() => onChange(p.value as number)}
              >
                {p.value}
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
