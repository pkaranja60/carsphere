// @ts-nocheck
// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { describe, expect, it } from "bun:test";
import { servicesService } from "../services";
import { servicesInquirySchema } from "../validation";

// ─────────────────────────────────────────────
// SECTION: Tests
// ─────────────────────────────────────────────

describe("servicesInquirySchema", () => {
  it("validates valid inquiry dossier input", () => {
    const validData = {
      budgetOrEquity: "$145,000",
      clientName: "Alexander Vance",
      email: "a.vance@executive.com",
      make: "Porsche",
      mileage: "8,450",
      modelTrim: "911 Carrera GTS",
      modelYear: "2023",
      requirements: "Looking for chalk exterior with GTS interior package",
      serviceType: "trade" as const,
      telephone: "+1 (310) 555-0182",
      timeline: "immediate" as const,
    };

    const parsed = servicesInquirySchema.safeParse(validData);
    expect(parsed.success).toBe(true);
  });

  it("rejects invalid email and malformed year", () => {
    const invalidData = {
      budgetOrEquity: "",
      clientName: "A",
      email: "not-an-email",
      make: "P",
      mileage: "",
      modelTrim: "",
      modelYear: "23",
      requirements: "",
      serviceType: "finance" as const,
      telephone: "123",
      timeline: "month" as const,
    };

    const parsed = servicesInquirySchema.safeParse(invalidData);
    expect(parsed.success).toBe(false);
  });
});

describe("servicesService", () => {
  it("returns four pillars with distinct keys", () => {
    const pillars = servicesService.listPillars();
    expect(pillars.length).toBe(4);
    expect(pillars.map((p) => p.id)).toContain("pillar-finance");
    expect(pillars.map((p) => p.id)).toContain("pillar-trade");
    expect(pillars.map((p) => p.id)).toContain("pillar-warranty");
    expect(pillars.map((p) => p.id)).toContain("pillar-sourcing");
  });

  it("returns three standard guarantees", () => {
    const guarantees = servicesService.listGuarantees();
    expect(guarantees.length).toBe(3);
  });
});
