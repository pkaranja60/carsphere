// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import {
  BrowseByCategory,
  FeaturedCars,
  FeaturesCta,
  Hero,
  SpecialOffers,
  TopBrands,
} from "@/domains/home";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Hero />
      <main className="bg-background">
        <div className="mx-auto flex w-full max-w-384 flex-col gap-y-10 px-4 pt-32 pb-0 sm:px-6 lg:gap-y-16 lg:px-8 lg:pt-40">
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
