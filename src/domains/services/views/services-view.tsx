"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { Suspense, useMemo } from "react";
import {
  ServicesHandoverSection,
  ServicesHeroSection,
  ServicesHotlineBanner,
  ServicesInquirySection,
  ServicesPillarsSection,
} from "../components";
import { useServicesInquiry } from "../hooks";
import { servicesService } from "../services";

// ─────────────────────────────────────────────
// SECTION: Content Component
// ─────────────────────────────────────────────

function ServicesContent() {
  const inquiryState = useServicesInquiry();
  const metrics = useMemo(() => servicesService.listMetrics(), []);
  const pillars = useMemo(() => servicesService.listPillars(), []);
  const handoverFeatures = useMemo(
    () => servicesService.listHandoverFeatures(),
    []
  );

  return (
    <div className="relative flex w-full flex-col">
      {/* Background Texture Overlay matching CarSphere conventions */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.09] mix-blend-multiply dark:opacity-[0.15] dark:mix-blend-screen dark:invert"
        style={{
          backgroundImage: "url(/images/splatter-bg-v2.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
        }}
      />

      <ServicesHeroSection metrics={metrics} />
      <ServicesPillarsSection
        onSelectTab={inquiryState.handleTabChange}
        pillars={pillars}
      />
      <ServicesHandoverSection features={handoverFeatures} />
      <ServicesInquirySection inquiryState={inquiryState} />
      <ServicesHotlineBanner />
    </div>
  );
}

// ─────────────────────────────────────────────
// SECTION: View Component
// ─────────────────────────────────────────────

export function ServicesView() {
  return (
    <Suspense fallback={null}>
      <ServicesContent />
    </Suspense>
  );
}
