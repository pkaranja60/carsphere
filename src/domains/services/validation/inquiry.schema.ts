// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { z } from "zod";

// ─────────────────────────────────────────────
// SECTION: Validation Schema
// ─────────────────────────────────────────────

export const servicesInquirySchema = z.object({
  budgetOrEquity: z.string().optional(),
  clientName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please provide a valid confidential email address."),
  make: z.string().min(2, "Please specify the vehicle marque."),
  mileage: z.string().min(1, "Please provide current or target mileage."),
  modelTrim: z.string().min(2, "Please specify the model and trim."),
  modelYear: z
    .string()
    .regex(/^\d{4}$/, "Please enter a valid 4-digit model year."),
  requirements: z.string().optional(),
  serviceType: z.enum(["trade", "finance", "sourcing"]),
  telephone: z.string().min(7, "Please enter a valid direct telephone number."),
  timeline: z.enum(["immediate", "2weeks", "month", "market-watch"]),
});

export type ServicesInquiryInput = z.infer<typeof servicesInquirySchema>;
