"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { type Key, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { ViewingFormatId } from "../types/contact.types";
import {
  type ConsultationFormValues,
  consultationFormSchema,
} from "../validation/contact.validation";

// ─────────────────────────────────────────────
// SECTION: Defaults
// ─────────────────────────────────────────────

const DEFAULT_VALUES: ConsultationFormValues = {
  consultationFormat: "flagship",
  email: "",
  fullName: "",
  phone: "",
  preferredDate: "2025-05-18",
  preferredWindow: "Afternoon (1:00 PM – 4:00 PM)",
  tradeInNotes: "",
  vehicle: "general",
};

// ─────────────────────────────────────────────
// SECTION: Hook
// ─────────────────────────────────────────────

export function useContactBooking() {
  const searchParams = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] =
    useState<ConsultationFormValues | null>(null);

  const initialVehicle =
    searchParams.get("vehicle") || searchParams.get("v") || "general";
  const initialFormat = (searchParams.get("format") ||
    "flagship") as ViewingFormatId;

  const form = useForm<ConsultationFormValues>({
    defaultValues: {
      ...DEFAULT_VALUES,
      consultationFormat: ["flagship", "athome", "remote"].includes(
        initialFormat
      )
        ? initialFormat
        : "flagship",
      vehicle: initialVehicle,
    },
    mode: "onChange",
    resolver: zodResolver(consultationFormSchema),
  });

  const {
    formState: { dirtyFields, errors, isSubmitted },
    setValue,
    watch,
  } = form;

  // Keep format synced when user updates it via cards or pills
  const consultationFormat = watch("consultationFormat");

  useEffect(() => {
    if (initialVehicle && initialVehicle !== "general") {
      setValue("vehicle", initialVehicle, { shouldValidate: true });
    }
  }, [initialVehicle, setValue]);

  const getFieldError = useCallback(
    (name: keyof ConsultationFormValues) => {
      if (isSubmitted || dirtyFields[name]) {
        return errors[name]?.message;
      }
    },
    [dirtyFields, errors, isSubmitted]
  );

  const handleFormatSelect = useCallback(
    (format: ViewingFormatId) => {
      setValue("consultationFormat", format, {
        shouldDirty: true,
        shouldValidate: true,
      });
    },
    [setValue]
  );

  const handleWindowChange = useCallback(
    (key: Key | null) => {
      if (key) {
        setValue("preferredWindow", String(key), {
          shouldDirty: true,
          shouldValidate: true,
        });
      }
    },
    [setValue]
  );

  const handleVehicleChange = useCallback(
    (key: Key | null) => {
      if (key) {
        setValue("vehicle", String(key), {
          shouldDirty: true,
          shouldValidate: true,
        });
      }
    },
    [setValue]
  );

  const onSubmit = form.handleSubmit((data: ConsultationFormValues) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(data);
      setIsSuccess(true);
    }, 450);
  });

  const resetForm = useCallback(() => {
    form.reset(DEFAULT_VALUES);
    setIsSuccess(false);
    setSubmittedData(null);
  }, [form]);

  return {
    consultationFormat,
    form,
    getFieldError,
    handleFormatSelect,
    handleVehicleChange,
    handleWindowChange,
    isSubmitting,
    isSuccess,
    onSubmit,
    resetForm,
    submittedData,
  };
}
