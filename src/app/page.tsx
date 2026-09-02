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
    <div className="min-h-screen bg-[#0b0c0e]">
      <Hero />
      <main className="bg-white">
        <div className="container mx-auto flex flex-col gap-y-16 px-4 pt-32 pb-16 sm:px-6 lg:gap-y-24 lg:px-8 lg:pt-40 lg:pb-0">
          <BrowseByCategory />
          <FeaturedCars />
          <SpecialOffers />
          <TopBrands />
          {/* FeaturesCta sits directly on the footer with 0 spacing, so we place it at the very bottom of the main container */}
          <FeaturesCta />
        </div>
      </main>
    </div>
  );
}
