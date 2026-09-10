// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

"use client";

import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Typography } from "@/shared";
import { Button } from "@/shared/components/button";

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface VehicleSidebarProps {
  isPhoneRevealed: boolean;
  onFinanceClick: () => void;
  onMessageClick: () => void;
  onOfferClick: () => void;
  onPhoneRevealClick: () => void;
  onTestDriveClick: () => void;
}

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function VehicleSidebar({
  isPhoneRevealed,
  onFinanceClick,
  onMessageClick,
  onOfferClick,
  onPhoneRevealClick,
  onTestDriveClick,
}: VehicleSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-72 xl:w-80">
      <div className="sticky top-28 space-y-8">
        <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm xl:p-8">
          <Typography className="mb-8 text-xl" type="h3" variant="subheading">
            Interested in this car?
          </Typography>

          <div className="space-y-4">
            <Button
              className="w-full justify-center py-6 text-base"
              onClick={onTestDriveClick}
              variant="primary"
            >
              Schedule Test Drive
            </Button>
            <Button
              className="w-full justify-center py-6 text-base"
              onClick={onOfferClick}
              variant="outline"
            >
              Make an Offer
            </Button>
          </div>

          <div className="mt-8 border-border border-t pt-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2 text-foreground text-sm">
                <HiOutlineCurrencyDollar className="h-5 w-5 text-muted" />{" "}
                Finance Options
              </span>
              <span className="text-muted text-sm">2.9% APR</span>
            </div>
            <Button
              className="w-full justify-center"
              onClick={onFinanceClick}
              variant="ghost"
            >
              Calculate Financing
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm xl:p-8">
          <Typography className="font-medium text-foreground text-lg">
            DriveEz Elite Dealership
          </Typography>
          <Typography className="mt-1 mb-6 text-muted text-sm">
            Contact us for more details
          </Typography>
          <div className="flex flex-col gap-3">
            <Button
              className="w-full justify-center"
              onClick={onMessageClick}
              variant="primary"
            >
              Message Dealer
            </Button>
            <Button
              className="w-full justify-center"
              onClick={onPhoneRevealClick}
              variant="outline"
            >
              {isPhoneRevealed ? "(555) 123-4567" : "Reveal Phone Number"}
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
