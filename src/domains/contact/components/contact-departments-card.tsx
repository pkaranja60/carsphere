// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { DepartmentLine } from "../types/contact.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ContactDepartmentsCardProps {
  departments: DepartmentLine[];
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ContactDepartmentsCard({
  departments,
}: ContactDepartmentsCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface-container-lowest p-5 shadow-xs sm:p-space-lg">
      <span className="font-label-sm font-semibold text-label-sm text-on-surface-variant uppercase tracking-wider">
        Immediate Department Lines
      </span>

      <div className="flex flex-col divide-y divide-border/60">
        {departments.map((dept) => (
          <div
            className="flex items-center justify-between py-2.5 font-body-sm text-body-sm"
            key={dept.id}
          >
            <span className="font-medium text-on-surface">{dept.name}</span>
            <a
              className={`font-label-sm font-semibold text-label-sm transition-colors hover:underline ${
                dept.isPrimary
                  ? "font-bold text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              href={dept.telHref}
            >
              {dept.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
