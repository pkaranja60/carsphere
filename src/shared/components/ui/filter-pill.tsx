import type { ButtonHTMLAttributes } from "react";

export interface FilterPillProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  count?: number;
  isActive?: boolean;
  label: string;
}

export function FilterPill({
  count,
  isActive = false,
  label,
  className = "",
  ...props
}: FilterPillProps) {
  const baseClasses =
    "inline-flex shrink-0 whitespace-nowrap items-center gap-1 rounded-[99px] px-3.5 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm font-medium transition-colors";

  const activeClasses = isActive
    ? "bg-on-surface text-surface shadow-sm"
    : "border border-border bg-surface text-on-surface hover:border-border-strong hover:bg-surface-container-low";

  return (
    <button
      className={`${baseClasses} ${activeClasses} ${className}`}
      type="button"
      {...props}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span className={isActive ? "opacity-75" : "text-primary"}>
          ({count})
        </span>
      )}
    </button>
  );
}
