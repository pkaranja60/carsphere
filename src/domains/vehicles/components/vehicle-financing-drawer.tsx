"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type { Key } from "react";
import { useCallback, useMemo, useState } from "react";
import { MdCheck } from "react-icons/md";
import { DrawerPanel, Select, SelectItem } from "@/shared/components";
import {
  CREDIT_TIERS,
  type CustomizedFinancingTerms,
  calculateMonthlyPayment,
} from "../services/vehicle-financing.utils";

export type { CustomizedFinancingTerms } from "../services/vehicle-financing.utils";

import type { VehicleDetail } from "../types/vehicles.types";
import {
  DownPaymentSelector,
  TermSelector,
} from "./vehicle-financing-controls";
import {
  VehicleFinancingHeroCard,
  VehicleFinancingSummaryBreakdown,
} from "./vehicle-financing-summary";

// ─────────────────────────────────────────────
// SECTION: Main Component
// ─────────────────────────────────────────────

interface VehicleFinancingDrawerProps {
  isOpen: boolean;
  onApplyTerms: (terms: CustomizedFinancingTerms) => void;
  onClose: () => void;
  vehicle: VehicleDetail;
}

export function VehicleFinancingDrawer({
  isOpen,
  onApplyTerms,
  onClose,
  vehicle,
}: VehicleFinancingDrawerProps) {
  const vehiclePrice = useMemo(
    () => Number.parseInt(vehicle.price.replace(/[^0-9]/g, ""), 10) || 50_000,
    [vehicle.price]
  );

  const [termMonths, setTermMonths] = useState(36);
  const [downPercent, setDownPercent] = useState(10);
  const [selectedTierId, setSelectedTierId] = useState("tier-1");

  const currentTier = useMemo(
    () => CREDIT_TIERS.find((t) => t.id === selectedTierId) || CREDIT_TIERS[0],
    [selectedTierId]
  );

  const downPaymentAmount = useMemo(
    () => Math.round((vehiclePrice * downPercent) / 100),
    [vehiclePrice, downPercent]
  );

  const financedPrincipal = useMemo(
    () => Math.max(0, vehiclePrice - downPaymentAmount),
    [vehiclePrice, downPaymentAmount]
  );

  const monthlyPayment = useMemo(
    () =>
      calculateMonthlyPayment(financedPrincipal, currentTier.apr, termMonths),
    [financedPrincipal, currentTier.apr, termMonths]
  );

  const totalInterest = useMemo(
    () => Math.max(0, monthlyPayment * termMonths - financedPrincipal),
    [monthlyPayment, termMonths, financedPrincipal]
  );

  const handleApply = useCallback(() => {
    onApplyTerms({
      apr: currentTier.apr,
      downPayment: downPaymentAmount,
      downPaymentPercent: downPercent,
      monthlyPayment,
      termMonths,
    });
    onClose();
  }, [
    currentTier.apr,
    downPaymentAmount,
    downPercent,
    monthlyPayment,
    onApplyTerms,
    onClose,
    termMonths,
  ]);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        onClose();
      }
    },
    [onClose]
  );

  const handleTierChange = useCallback((key: Key | null) => {
    if (key) {
      setSelectedTierId(String(key));
    }
  }, []);

  return (
    <DrawerPanel
      className="w-full max-w-md sm:max-w-lg"
      description={`Bespoke financial architecture · ${vehicle.year} ${vehicle.make} ${vehicle.model}`}
      footer={
        <button
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary-container px-6 py-4 text-center font-label-lg font-semibold text-label-lg text-on-primary shadow-lg transition-colors hover:bg-primary hover:shadow-xl active:scale-[0.99]"
          onClick={handleApply}
          type="button"
        >
          <MdCheck className="text-xl" />
          <span>
            Apply Customized Terms (${monthlyPayment.toLocaleString()}/mo)
          </span>
        </button>
      }
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      title="Interactive Financing Studio"
    >
      <div className="space-y-6">
        <VehicleFinancingHeroCard
          apr={currentTier.apr}
          downPercent={downPercent}
          monthlyPayment={monthlyPayment}
          termMonths={termMonths}
          vehiclePrice={vehicle.price}
        />

        <TermSelector onSelectTerm={setTermMonths} selectedTerm={termMonths} />

        <DownPaymentSelector
          downPaymentAmount={downPaymentAmount}
          downPercent={downPercent}
          onSelectPercent={setDownPercent}
        />

        <div className="space-y-2">
          <Select
            label="Credit Tier & APR Tier"
            onSelectionChange={handleTierChange}
            selectedKey={selectedTierId}
          >
            {CREDIT_TIERS.map((tier) => (
              <SelectItem id={tier.id} key={tier.id}>
                {tier.label}
              </SelectItem>
            ))}
          </Select>
        </div>

        <VehicleFinancingSummaryBreakdown
          apr={currentTier.apr}
          downPaymentAmount={downPaymentAmount}
          downPercent={downPercent}
          financedPrincipal={financedPrincipal}
          monthlyPayment={monthlyPayment}
          termMonths={termMonths}
          totalInterest={totalInterest}
          vehiclePrice={vehicle.price}
        />
      </div>
    </DrawerPanel>
  );
}
