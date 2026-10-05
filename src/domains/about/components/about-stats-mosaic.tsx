// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { aboutService } from "../services/about.service";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function AboutStatsMosaic() {
  const metrics = aboutService.getMetrics();

  return (
    <section className="mx-auto w-full max-w-400 px-margin-mobile pb-16 md:px-margin md:pb-20">
      <div className="grid grid-cols-2 gap-3 md:gap-gutter lg:grid-cols-4">
        {metrics.map((item) => (
          <div
            className="flex flex-col justify-between rounded-xl border border-border bg-surface-container-lowest p-5 shadow-xs transition-shadow hover:shadow-sm md:p-6"
            key={item.id}
          >
            <span className="font-label-sm font-semibold text-label-sm text-secondary uppercase tracking-wider">
              {item.label}
            </span>
            <span className="my-2 font-bold font-display text-3xl text-on-surface tracking-tight md:text-5xl">
              {item.value}
              {item.unit ? (
                <span className="font-normal text-primary text-xl md:text-2xl">
                  {item.unit}
                </span>
              ) : null}
            </span>
            <span className="font-body-sm text-[12px] text-on-surface-variant leading-snug md:text-body-sm">
              {item.subtext}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
