// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { useCallback } from "react";
import {
  MdAccountBalance,
  MdArrowForward,
  MdCheckCircle,
  MdChevronRight,
  MdCurrencyExchange,
  MdSecurity,
  MdTravelExplore,
} from "react-icons/md";
import type { ServicePillar, ServiceTabKey } from "../types/services.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface ServicesPillarCardProps {
  onSelectTab: (tab: ServiceTabKey) => void;
  pillar: ServicePillar;
}

// ─────────────────────────────────────────────
// SECTION: Helpers
// ─────────────────────────────────────────────

function getPillarIcon(iconName: ServicePillar["iconName"]) {
  const iconClass = "text-2xl text-primary";
  switch (iconName) {
    case "account_balance":
      return <MdAccountBalance className={iconClass} />;
    case "currency_exchange":
      return <MdCurrencyExchange className={iconClass} />;
    case "security":
      return <MdSecurity className={iconClass} />;
    default:
      return <MdTravelExplore className={iconClass} />;
  }
}

function PillarWidget({ id }: { id: string }) {
  if (id === "pillar-finance") {
    return (
      <div className="mt-space-lg flex flex-col gap-1.5 rounded-xl border border-border/80 bg-surface-container-low p-3.5 sm:p-space-md">
        <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
          <span>Indicative Payment Schedule</span>
          <span className="font-semibold text-primary">
            $120,000 Cap / 48 Mo
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-high">
          <div className="h-full w-2/3 rounded-full bg-primary" />
        </div>
        <div className="mt-1 flex justify-between font-body-sm text-[11px] text-on-surface sm:text-xs">
          <span>Principal: $102,400</span>
          <span className="font-medium">
            Interest &amp; Tier Est: ~$1,780/mo
          </span>
        </div>
      </div>
    );
  }

  if (id === "pillar-trade") {
    return (
      <div className="mt-space-lg flex items-center justify-between rounded-xl border border-border/80 bg-surface-container-low p-3 text-center sm:p-space-md">
        <div className="flex-1">
          <span className="font-label-sm text-[10px] text-primary uppercase sm:text-xs">
            Step 01
          </span>
          <p className="font-body-sm font-medium text-on-surface text-xs sm:text-sm">
            VIN &amp; Telemetry
          </p>
        </div>
        <MdChevronRight className="text-base text-on-surface-variant sm:text-lg" />
        <div className="flex-1">
          <span className="font-label-sm text-[10px] text-primary uppercase sm:text-xs">
            Step 02
          </span>
          <p className="font-body-sm font-medium text-on-surface text-xs sm:text-sm">
            Binding Offer
          </p>
        </div>
        <MdChevronRight className="text-base text-on-surface-variant sm:text-lg" />
        <div className="flex-1">
          <span className="font-label-sm text-[10px] text-primary uppercase sm:text-xs">
            Step 03
          </span>
          <p className="font-body-sm font-medium text-on-surface text-xs sm:text-sm">
            Wire / Rollout
          </p>
        </div>
      </div>
    );
  }

  if (id === "pillar-warranty") {
    return (
      <div className="mt-space-lg grid grid-cols-3 gap-2 text-center font-label-sm text-[11px] sm:text-xs">
        <div className="rounded-lg border border-border/80 bg-surface p-2 text-on-surface shadow-2xs">
          Engine &amp; Hybrid
        </div>
        <div className="rounded-lg border border-border/80 bg-surface p-2 text-on-surface shadow-2xs">
          Transmission
        </div>
        <div className="rounded-lg border border-border/80 bg-surface p-2 text-on-surface shadow-2xs">
          AWD &amp; Drivetrain
        </div>
      </div>
    );
  }

  return (
    <div className="mt-space-lg flex items-center justify-between rounded-xl border border-border/80 bg-surface-container-low p-3 sm:p-space-md">
      <div className="flex items-center gap-2">
        <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-tertiary" />
        <span className="font-body-sm text-on-surface text-xs sm:text-sm">
          Active Global Channels
        </span>
      </div>
      <span className="font-label-sm text-[11px] text-on-surface-variant sm:text-xs">
        14 Curated Searches Live
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function ServicesPillarCard({
  pillar,
  onSelectTab,
}: ServicesPillarCardProps) {
  const handleClick = useCallback(() => {
    onSelectTab(pillar.tabKey);
    const element = document.getElementById("quick-inquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [onSelectTab, pillar.tabKey]);

  return (
    <div className="flex flex-col justify-between border-0 bg-transparent p-0 shadow-none transition sm:rounded-2xl sm:border sm:border-border sm:bg-surface-container-lowest sm:p-space-lg sm:shadow-xs sm:hover:border-border-strong sm:hover:shadow-md md:p-space-xl">
      <div>
        <div className="mb-space-md flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/80 bg-surface-container-low">
            {getPillarIcon(pillar.iconName)}
          </div>
          <span className="rounded-full bg-surface-container-high px-2.5 py-1 font-label-sm text-[11px] text-on-surface-variant sm:text-xs">
            {pillar.badge}
          </span>
        </div>

        <h3 className="font-bold font-display text-headline-sm text-on-surface sm:text-headline-md">
          {pillar.title}
        </h3>

        <p className="mt-space-sm mb-space-lg font-body-sm text-body-sm text-on-surface-variant leading-relaxed sm:text-body-md">
          {pillar.description}
        </p>

        <div className="space-y-space-sm pt-space-sm">
          {pillar.points.map((point) => (
            <div className="flex items-start gap-2.5" key={point.id}>
              <MdCheckCircle className="mt-0.5 shrink-0 text-base text-primary sm:text-lg" />
              <p className="font-body-sm text-on-surface text-xs leading-relaxed sm:text-sm">
                <strong className="font-semibold text-on-surface">
                  {point.title}:{" "}
                </strong>
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <PillarWidget id={pillar.id} />
      </div>

      <div className="pt-8 sm:pt-space-xl">
        <button
          className="group inline-flex items-center gap-1.5 font-label-md font-semibold text-label-md text-primary transition hover:text-primary-container"
          onClick={handleClick}
          type="button"
        >
          <span>{pillar.actionLabel}</span>
          <MdArrowForward className="text-base transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
