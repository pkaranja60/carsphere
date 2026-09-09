// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { BrowseByCategory } from "../components/browse-by-category";
import { FeaturedCars } from "../components/featured-cars";
import { FeaturesCta } from "../components/features-cta";
import { Hero } from "../components/hero";
import { SpecialOffers } from "../components/special-offers";
import { TopBrands } from "../components/top-brands";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function HomeView() {
  return (
    <>
      <Hero />
      <main className="bg-surface-alt">
        <div className="mx-auto flex w-full max-w-384 flex-col gap-y-10 px-4 pt-12 pb-0 sm:px-6 sm:pt-32 lg:gap-y-16 lg:px-8 lg:pt-40">
          <BrowseByCategory />
          <FeaturedCars />
          <SpecialOffers />
          <TopBrands />
          <FeaturesCta />
        </div>
      </main>
    </>
  );
}
