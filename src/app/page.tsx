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
    <div>
      <Hero />
      <main className="bg-white">
        <div className="container mx-auto bg-white">
          <BrowseByCategory />
          <FeaturedCars />
          <SpecialOffers />
          <TopBrands />
          <FeaturesCta />
        </div>
      </main>
    </div>
  );
}
