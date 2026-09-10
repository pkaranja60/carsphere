// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { PageLayout } from "@/shared";
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
      <PageLayout
        className="min-h-0"
        containerClassName="gap-y-10 pb-0 pt-12 sm:pt-32 lg:gap-y-16 lg:pt-40"
      >
        <BrowseByCategory />
        <FeaturedCars />
        <SpecialOffers />
        <TopBrands />
        <FeaturesCta />
      </PageLayout>
    </>
  );
}
