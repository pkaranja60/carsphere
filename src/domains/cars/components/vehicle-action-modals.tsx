// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

"use client";

import { Dialog, Input, Select } from "@/shared";
import { Button } from "@/shared/components/button";
import type { Car } from "../data/mock-cars";

// ─────────────────────────────────────────────
// SECTION: Types
// ─────────────────────────────────────────────

export type ActiveModalType =
  | "testDrive"
  | "offer"
  | "message"
  | "finance"
  | null;

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface VehicleActionModalsProps {
  activeModal: ActiveModalType;
  car: Car;
  onClose: (open: boolean) => void;
}

// ─────────────────────────────────────────────
// SECTION: Components
// ─────────────────────────────────────────────

export function VehicleActionModals({
  activeModal,
  car,
  onClose,
}: VehicleActionModalsProps) {
  return (
    <Dialog
      isOpen={activeModal !== null}
      onOpenChange={onClose}
      title={
        {
          finance: "Calculate Financing",
          message: "Message Dealer",
          offer: "Make an Offer",
          testDrive: "Schedule Test Drive",
        }[activeModal as string] || ""
      }
    >
      <Dialog.Body>
        <div className="flex flex-col gap-4">
          {activeModal === "offer" && (
            <Input
              defaultValue={car.price.toString()}
              label="Your Offer Amount"
              type="number"
            />
          )}
          {activeModal === "testDrive" && (
            <Input
              label="Preferred Date"
              // biome-ignore lint/performance/noJsxPropsBind: simple inline logic
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.type = "text";
                }
              }}
              // biome-ignore lint/performance/noJsxPropsBind: simple inline logic
              onFocus={(e) => {
                e.target.type = "date";
                if (typeof e.target.showPicker === "function") {
                  try {
                    e.target.showPicker();
                  } catch {
                    // ignore
                  }
                }
              }}
              placeholder="Select a date"
              type="text"
            />
          )}
          {(activeModal === "message" ||
            activeModal === "testDrive" ||
            activeModal === "offer") && (
            <>
              <Input label="Full Name" placeholder="John Doe" type="text" />
              <Input
                label="Phone Number"
                placeholder="(555) 000-0000"
                type="tel"
              />
            </>
          )}
          {activeModal === "message" && (
            <div className="flex flex-col gap-2">
              {/* biome-ignore lint/a11y/noLabelWithoutControl: simplified for demo */}
              <label className="font-medium text-foreground text-sm">
                Message
              </label>
              <textarea
                className="min-h-25 w-full rounded-lg border border-border bg-surface-alt px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder={`I'm interested in the ${car.name}...`}
              />
            </div>
          )}
          {activeModal === "finance" && (
            <div className="flex flex-col gap-4">
              <Input
                defaultValue={(car.price * 0.2).toString()}
                label="Down Payment"
                type="number"
              />
              <div className="flex flex-col gap-1">
                {/* biome-ignore lint/a11y/noLabelWithoutControl: simplified for demo */}
                <label className="pb-1 font-medium text-foreground">
                  Estimated Credit Score
                </label>
                <Select
                  aria-label="Estimated Credit Score"
                  options={[
                    { label: "Excellent (720+)", value: "excellent" },
                    { label: "Good (690-719)", value: "good" },
                    { label: "Fair (630-689)", value: "fair" },
                    { label: "Poor (300-629)", value: "poor" },
                  ]}
                  placeholder="Select Credit Score"
                />
              </div>
            </div>
          )}
          <Button
            className="mt-4 w-full justify-center"
            // biome-ignore lint/performance/noJsxPropsBind: simple state toggle
            onClick={() => onClose(false)}
            variant="primary"
          >
            Submit
          </Button>
        </div>
      </Dialog.Body>
    </Dialog>
  );
}
