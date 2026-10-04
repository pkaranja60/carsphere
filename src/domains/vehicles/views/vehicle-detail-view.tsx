"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { useCallback, useEffect, useState } from "react";
import {
  VehicleBookingSection,
  VehicleBreadcrumbsHeader,
  VehicleCuratedAlternatives,
  VehicleGallery,
  VehicleInspectionReport,
  VehicleNarrativeOptions,
  VehicleSpecsMatrix,
  VehicleStickyReservation,
  type VehicleTabId,
  VehicleTabsNav,
  VehicleWarrantyFinancial,
} from "../components";
import type { VehicleDetail } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

interface VehicleDetailViewProps {
  vehicle: VehicleDetail;
}

const VALID_TABS: VehicleTabId[] = [
  "overview",
  "specs",
  "inspection",
  "warranty",
];

// ─────────────────────────────────────────────
// SECTION: Component
// ─────────────────────────────────────────────

export function VehicleDetailView({ vehicle }: VehicleDetailViewProps) {
  const [activeTab, setActiveTab] = useState<VehicleTabId>("overview");
  const vehicleTitle = `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim}`;

  // biome-ignore lint/correctness/useExhaustiveDependencies: Scroll to top when vehicle changes
  useEffect(() => {
    // Ensures navigating to a vehicle page starts at the top
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [vehicle.id]);

  useEffect(() => {
    // Reads initial URL anchor so deep links to specific tabs work seamlessly
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.slice(1) as VehicleTabId;
      if (VALID_TABS.includes(hash)) {
        setActiveTab(hash);
      }
    }
  }, []);

  const handleSelectTab = useCallback((tab: VehicleTabId) => {
    setActiveTab(tab);
  }, []);

  const handleInquire = useCallback(() => {
    setActiveTab("overview");
    setTimeout(() => {
      document
        .getElementById("inquiry")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  }, []);

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

      <VehicleBreadcrumbsHeader vehicle={vehicle} />

      <section className="relative z-10 w-full bg-surface pb-14">
        <div className="mx-auto max-w-400 px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <VehicleGallery vehicle={vehicle} />
            </div>
            <div className="lg:col-span-5">
              <VehicleStickyReservation vehicle={vehicle} />
            </div>
          </div>
        </div>
      </section>

      <VehicleTabsNav
        activeTab={activeTab}
        onInquire={handleInquire}
        onSelectTab={handleSelectTab}
        price={vehicle.price}
      />

      <div className="relative z-10">
        {activeTab === "overview" ? (
          <>
            <VehicleNarrativeOptions vehicle={vehicle} />
            <VehicleBookingSection
              allocationRef={vehicle.allocationNumber}
              vehicleTitle={vehicleTitle}
            />
          </>
        ) : null}

        {activeTab === "specs" ? (
          <VehicleSpecsMatrix specs={vehicle.specsMatrix} />
        ) : null}

        {activeTab === "inspection" ? (
          <VehicleInspectionReport
            inspectionDate={vehicle.inspectionDate}
            items={vehicle.inspectionItems}
            technician={vehicle.certifiedTechnician}
          />
        ) : null}

        {activeTab === "warranty" ? (
          <VehicleWarrantyFinancial
            financialSchedule={vehicle.financialSchedule}
            warrantyItems={vehicle.warrantyItems}
          />
        ) : null}

        <VehicleCuratedAlternatives
          alternatives={vehicle.curatedAlternatives}
        />
      </div>
    </div>
  );
}
