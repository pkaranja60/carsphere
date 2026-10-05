"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  type BookingFormValues,
  bookingFormSchema,
} from "../validation/booking.validation";

// ─────────────────────────────────────────────
// SECTION: Defaults
// ─────────────────────────────────────────────

const DEFAULT_VALUES: BookingFormValues = {
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormValues | null>(
    null
  );

  const form = useForm<BookingFormValues>({
    defaultValues: DEFAULT_VALUES,
    mode: "onBlur",
    resolver: zodResolver(bookingFormSchema),
  });

  const onSubmit = form.handleSubmit((data: BookingFormValues) => {
    setIsSubmitting(true);
    // Simulating instant consultation allocation per private desk protocol
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(data);
      setIsSuccess(true);
    }, 400);
  });

  const resetForm = () => {
    form.reset(DEFAULT_VALUES);
    setIsSuccess(false);
    setSubmittedData(null);
  };

  return {
    form,
    isSubmitting,
    isSuccess,
    onSubmit,
    resetForm,
    submittedData,
    vehicleTitle,
  };
}
