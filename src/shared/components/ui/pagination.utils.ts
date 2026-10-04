// ─────────────────────────────────────────────
// SECTION: Types
// ─────────────────────────────────────────────

export type PaginationItem = number | "ellipsis-start" | "ellipsis-end";

export interface PaginationRangeParams {
  currentPage: number;
  siblingCount: number;
  totalPages: number;
}

// ─────────────────────────────────────────────
// SECTION: Calculation Helpers
// ─────────────────────────────────────────────

export function calculatePaginationRange({
  currentPage,
  totalPages,
  siblingCount,
}: PaginationRangeParams): PaginationItem[] {
  const totalSlots = siblingCount * 2 + 5;

  if (totalPages <= totalSlots) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, "ellipsis-end", totalPages];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + 1 + i
    );
    return [1, "ellipsis-start", ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i
  );
  return [1, "ellipsis-start", ...middleRange, "ellipsis-end", totalPages];
}

export function calculateItemRange(
  currentPage: number,
  pageSize: number,
  totalItems: number
): { end: number; start: number } {
  if (totalItems === 0) {
    return { end: 0, start: 0 };
  }
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(start + pageSize - 1, totalItems);
  return { end, start };
}
