// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import {
  AboutHeroSection,
  AboutInquirySection,
  AboutInspectionProtocol,
  AboutLeadershipSection,
  AboutPhilosophySection,
  AboutShowroomSection,
  AboutStatsMosaic,
} from "../components";

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function AboutView() {
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
      <AboutHeroSection />
      <AboutStatsMosaic />
      <AboutPhilosophySection />
      <AboutInspectionProtocol />
      <AboutLeadershipSection />
      <AboutShowroomSection />
      <AboutInquirySection />
    </div>
  );
}
