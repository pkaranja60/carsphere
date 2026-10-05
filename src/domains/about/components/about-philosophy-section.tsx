// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import Link from "next/link";
import {
  MdArrowForward,
  MdBatteryChargingFull,
  MdCommute,
  MdHistoryEdu,
  MdLocalShipping,
  MdPriceCheck,
  MdSecurityUpdateGood,
  MdSportsScore,
  MdTune,
  MdVerifiedUser,
} from "react-icons/md";
import { aboutService } from "../services/about.service";

// ─────────────────────────────────────────────
// SECTION: Icons Map
// ─────────────────────────────────────────────

const TIER_ICONS = {
  "everyday-excellence": [
    MdBatteryChargingFull,
    MdSecurityUpdateGood,
    MdPriceCheck,
  ],
  "premium-performance": [MdVerifiedUser, MdLocalShipping, MdHistoryEdu],
};

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function AboutPhilosophySection() {
  const tiers = aboutService.getPhilosophyTiers();

  return (
    <section className="w-full bg-surface-container-low py-16 md:py-24">
      <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-label-md font-semibold text-label-md text-primary uppercase tracking-wider">
              The Philosophy
            </span>
            <h2 className="mt-2 font-bold font-display text-headline-lg text-on-surface">
              The Dual-Curation Mandate.
            </h2>
            <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Most dealerships segregate prestige from utility. At CarSphere, we
              deploy the exact same forensic scrutiny, white-glove logistics,
              and unhurried consultation to a limited-series supercar as we do
              to a pristine family hybrid.
            </p>
          </div>

          <div className="flex items-center gap-2 font-label-sm font-semibold text-label-sm text-secondary md:font-label-md md:text-label-md">
            <MdTune className="text-base text-primary" />
            <span>EQUAL STANDARDS · TWO SPECIALIZED TIERS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {tiers.map((tier) => {
            const isPremium = tier.id === "premium-performance";
            const icons =
              TIER_ICONS[tier.id as keyof typeof TIER_ICONS] ??
              TIER_ICONS["premium-performance"];

            return (
              <div
                className="flex flex-col justify-between rounded-xl border border-border bg-surface-container-lowest p-6 shadow-xs transition-shadow duration-300 hover:shadow-md md:p-8 lg:p-10"
                key={tier.id}
              >
                <div>
                  <div className="-mx-6 -mt-6 mb-6 flex items-center justify-between rounded-t-xl bg-surface-container-low/60 p-6 md:-mx-8 md:-mt-8 md:p-8 lg:-mx-10 lg:-mt-10 lg:p-8">
                    <div>
                      <span
                        className={`font-label-sm font-semibold text-label-sm uppercase tracking-widest ${
                          isPremium ? "text-primary" : "text-tertiary"
                        }`}
                      >
                        Allocation Tier {tier.tierNumber}
                      </span>
                      <h3 className="mt-1 font-bold font-display text-headline-md text-on-surface">
                        {tier.title}
                      </h3>
                    </div>
                    {isPremium ? (
                      <MdSportsScore className="text-3xl text-primary md:text-4xl" />
                    ) : (
                      <MdCommute className="text-3xl text-tertiary md:text-4xl" />
                    )}
                  </div>

                  <p className="mb-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mb-8 space-y-5">
                    {tier.features.map((feature, idx) => {
                      const FeatureIcon = icons[idx] ?? MdVerifiedUser;
                      return (
                        <div
                          className="flex items-start gap-3.5"
                          key={feature.title}
                        >
                          <FeatureIcon
                            className={`mt-0.5 shrink-0 text-xl ${
                              isPremium ? "text-primary" : "text-tertiary"
                            }`}
                          />
                          <div>
                            <h4 className="font-label-lg font-semibold text-label-lg text-on-surface">
                              {feature.title}
                            </h4>
                            <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col items-start justify-between gap-3 rounded-xl border border-border bg-surface-container-low p-4 sm:flex-row sm:items-center">
                  <span className="font-label-sm text-secondary text-xs">
                    {tier.priceRange}
                  </span>
                  <Link
                    className={`inline-flex items-center gap-1 font-label-md font-semibold text-label-md transition-colors ${
                      isPremium
                        ? "text-primary hover:text-primary-container"
                        : "text-tertiary hover:text-tertiary-container"
                    }`}
                    href={tier.ctaHref}
                  >
                    <span>{tier.ctaText}</span>
                    <MdArrowForward className="text-base" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
