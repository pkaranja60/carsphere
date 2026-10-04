"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { useState } from "react";
import type { BookingFormData } from "../types/vehicles.types";
import { bookingValidation } from "../validation/booking.validation";

// ─────────────────────────────────────────────
// SECTION: Defaults
// ─────────────────────────────────────────────

const INITIAL_FORM_DATA: BookingFormData = {
  consultationFormat: "In-Person: Beverly Hills Showroom Suite",
  email: "",
  fullName: "",
  phone: "",
  preferredDate: "2025-05-18",
  preferredWindow: "Morning (10:00 AM – 1:00 PM)",
  tradeInNotes: "",
};

// ─────────────────────────────────────────────
// SECTION: Hook
// ─────────────────────────────────────────────

export function useBookingForm(vehicleTitle: string) {
  const [formData, setFormData] = useState<BookingFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<
    Partial<Record<keyof BookingFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingValidation.validate(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulating instant consultation allocation per private desk protocol
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 400);
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setIsSuccess(false);
  };

  return {
    errors,
    formData,
    handleSubmit,
    isSubmitting,
    isSuccess,
    resetForm,
    updateField,
    vehicleTitle,
  };
}
