// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import {
  BespokeServices,
  CategoryGrid,
  CuratedPortfolios,
  FeaturedVehicles,
  HeroSection,
  OmniSearch,
  TopBrands,
} from "../components";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function HomeView() {
  return (
    <main className="min-h-screen w-full bg-surface pt-30">
      <div className="flex w-full flex-col">
        <HeroSection />
        <OmniSearch />
        <CuratedPortfolios />
        <FeaturedVehicles />
        <CategoryGrid />
        <BespokeServices />
        <TopBrands />
      </div>
    </main>
  );
}
