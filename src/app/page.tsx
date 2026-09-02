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
      <main className="bg-white">
        <div className="container mx-auto flex flex-col gap-y-16 px-4 pt-32 pb-0 sm:px-6 lg:gap-y-24 lg:px-8 lg:pt-40">
          <BrowseByCategory />
          <FeaturedCars />
          <SpecialOffers />
          <TopBrands />
          {/* FeaturesCta sits directly on the footer with 0 spacing */}
          <FeaturesCta />
        </div>
      </main>
    </>
  );
}
