// ─────────────────────────────────────────────
// SECTION: Constants
// ─────────────────────────────────────────────

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

import type { BookingFormData } from "../types/vehicles.types";

export interface ValidationResult {
  errors: Partial<Record<keyof BookingFormData, string>>;
  isValid: boolean;
}

// ─────────────────────────────────────────────
// SECTION: Validation Methods
// ─────────────────────────────────────────────

export const bookingValidation = {
  validate: (data: BookingFormData): ValidationResult => {
    const errors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!data.fullName.trim()) {
      errors.fullName = "Full legal name is required";
    }

    if (!data.phone.trim()) {
      errors.phone = "Contact phone is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email address is required";
    } else if (!EMAIL_REGEX.test(data.email)) {
      errors.email = "Please provide a valid email address";
    }

    if (!data.preferredDate.trim()) {
      errors.preferredDate = "Preferred viewing date is required";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  },
};
