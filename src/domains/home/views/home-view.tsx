// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import {
  BespokeServices,
  CategoryGrid,
  CuratedPortfolios,
  EverydayVehicles,
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
    <div className="relative flex w-full flex-col">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.12] mix-blend-multiply dark:opacity-[0.15] dark:mix-blend-screen dark:invert"
        style={{
          backgroundImage: "url(/images/splatter-bg.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
        }}
      />
      <HeroSection />
      <OmniSearch />
      <CuratedPortfolios />
      <FeaturedVehicles />
      <CategoryGrid />
      <BespokeServices />
      <EverydayVehicles />
      <TopBrands />
    </div>
  );
}
