// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { z } from "zod";
import type { BookingFormData } from "../types/vehicles.types";

// ─────────────────────────────────────────────
// SECTION: Zod Schema
// ─────────────────────────────────────────────

export const bookingFormSchema = z.object({
  consultationFormat: z.string().min(1, "Please select a consultation format"),
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please provide a valid email address"),
  fullName: z.string().min(2, "Full legal name must be at least 2 characters"),
  phone: z.string().min(7, "Valid contact phone number is required"),
  preferredDate: z.string().min(1, "Preferred viewing date is required"),
  preferredWindow: z
    .string()
    .min(1, "Preferred consultation window is required"),
  tradeInNotes: z.string(),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export interface ValidationResult {
  errors: Partial<Record<keyof BookingFormData, string>>;
  isValid: boolean;
}

// ─────────────────────────────────────────────
// SECTION: Validation Container
// ─────────────────────────────────────────────

export const bookingValidation = {
  schema: bookingFormSchema,
  validate: (data: BookingFormData): ValidationResult => {
    const result = bookingFormSchema.safeParse(data);
    if (result.success) {
      return { errors: {}, isValid: true };
    }

    const errors: Partial<Record<keyof BookingFormData, string>> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof BookingFormData;
      if (field && !errors[field]) {
        errors[field] = issue.message;
      }
    }

    return { errors, isValid: false };
  },
};
