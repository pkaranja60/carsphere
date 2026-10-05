// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { describe, expect, it } from "bun:test";
import { contactValidation } from "../validation";

// ─────────────────────────────────────────────
// SECTION: Tests
// ─────────────────────────────────────────────

describe("contactValidation", () => {
  it("validates correct form payload", () => {
    const validData = {
      consultationFormat: "flagship" as const,
      email: "harrison@vance.com",
      fullName: "Harrison Vance",
      phone: "+1 (310) 555-0199",
      preferredDate: "2025-05-18",
      preferredWindow: "Morning (10:00 AM – 1:00 PM)",
      tradeInNotes: "Porsche Macan trade-in",
      vehicle: "general",
    };

    const result = contactValidation.validate(validData);
    expect(result.isValid).toBe(true);
    expect(Object.keys(result.errors).length).toBe(0);
  });

  it("fails on invalid email and short name", () => {
    const invalidData = {
      consultationFormat: "flagship" as const,
      email: "invalid-email",
      fullName: "H",
      phone: "123",
      preferredDate: "",
      preferredWindow: "",
      tradeInNotes: "",
      vehicle: "",
    };

    const result = contactValidation.validate(invalidData);
    expect(result.isValid).toBe(false);
    expect(result.errors.email).toBeDefined();
    expect(result.errors.fullName).toBeDefined();
    expect(result.errors.phone).toBeDefined();
  });
});
