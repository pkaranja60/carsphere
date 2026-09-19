// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import {
  BespokeCarousel,
  CategoryGrid,
  CuratedPortfolios,
  EverydayVehicles,
  FeaturedVehicles,
  HeroSection,
  OmniSearch,
  RecentlySold,
  TopBrands,
} from "../components";

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function HomeView() {
  return (
    <div className="relative flex w-full flex-col">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.09] mix-blend-multiply dark:opacity-[0.15] dark:mix-blend-screen dark:invert"
        style={{
          backgroundImage: "url(/images/splatter-bg-v2.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
        }}
      />
      <HeroSection />
      <OmniSearch />
      <CuratedPortfolios />
      <FeaturedVehicles />
      <CategoryGrid />
      <BespokeCarousel />
      <EverydayVehicles />
      <RecentlySold />
      <TopBrands />
    </div>
  );
}
