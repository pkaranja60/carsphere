// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { z } from "zod";
import type { ConsultationFormData } from "../types/contact.types";

// ─────────────────────────────────────────────
// SECTION: Zod Schema
// ─────────────────────────────────────────────

export const consultationFormSchema = z.object({
  consultationFormat: z.enum(["flagship", "athome", "remote"], {
    message: "Please select a viewing format",
  }),
  email: z
    .string()
    .min(1, "Private email is required")
    .email("Please provide a valid email address"),
  fullName: z.string().min(2, "Full legal name must be at least 2 characters"),
  phone: z.string().min(7, "Valid contact phone number is required"),
  preferredDate: z.string().min(1, "Preferred viewing date is required"),
  preferredWindow: z
    .string()
    .min(1, "Preferred consultation window is required"),
  tradeInNotes: z.string().optional(),
  vehicle: z.string().min(1, "Vehicle selection is required"),
});

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

export interface ValidationResult {
  errors: Partial<Record<keyof ConsultationFormData, string>>;
  isValid: boolean;
}

// ─────────────────────────────────────────────
// SECTION: Validation Container
// ─────────────────────────────────────────────

export const contactValidation = {
  schema: consultationFormSchema,
  validate: (data: ConsultationFormData): ValidationResult => {
    const result = consultationFormSchema.safeParse(data);
    if (result.success) {
      return { errors: {}, isValid: true };
    }

    const errors: Partial<Record<keyof ConsultationFormData, string>> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof ConsultationFormData;
      if (field && !errors[field]) {
        errors[field] = issue.message;
      }
    }

    return { errors, isValid: false };
  },
};
