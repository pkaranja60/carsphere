"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { type FieldError, useForm } from "react-hook-form";
import { servicesService } from "../services/services.service";
import type { ServiceTabKey } from "../types/services.types";
import {
  type ServicesInquiryInput,
  servicesInquirySchema,
} from "../validation/inquiry.schema";

// ─────────────────────────────────────────────
// SECTION: Hook
// ─────────────────────────────────────────────

export function useServicesInquiry(initialTab: ServiceTabKey = "trade") {
  const [activeTab, setActiveTab] = useState<ServiceTabKey>(initialTab);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const form = useForm<ServicesInquiryInput>({
    defaultValues: {
      budgetOrEquity: "",
      clientName: "",
      email: "",
      make: "",
      mileage: "",
      modelTrim: "",
      modelYear: "",
      requirements: "",
      serviceType: initialTab,
      telephone: "",
      timeline: "immediate",
    },
    mode: "onBlur",
    resolver: zodResolver(servicesInquirySchema),
  });

  const handleTabChange = useCallback(
    (tab: ServiceTabKey) => {
      setActiveTab(tab);
      form.setValue("serviceType", tab, { shouldValidate: true });
    },
    [form]
  );

  const resetForm = useCallback(() => {
    setIsSuccess(false);
    setSubmissionId(null);
    form.reset({
      budgetOrEquity: "",
      clientName: "",
      email: "",
      make: "",
      mileage: "",
      modelTrim: "",
      modelYear: "",
      requirements: "",
      serviceType: activeTab,
      telephone: "",
      timeline: "immediate",
    });
  }, [form, activeTab]);

  const onSubmit = form.handleSubmit(async (data: ServicesInquiryInput) => {
    const response = await servicesService.createInquiry(data);
    if (response.success) {
      setSubmissionId(response.id);
      setIsSuccess(true);
    }
  });

  const getFieldError = useCallback(
    (field: keyof ServicesInquiryInput): string | undefined => {
      const error = form.formState.errors[field] as FieldError | undefined;
      return error?.message;
    },
    [form.formState.errors]
  );

  return {
    activeTab,
    form,
    getFieldError,
    handleTabChange,
    isSubmitting: form.formState.isSubmitting,
    isSuccess,
    onSubmit,
    resetForm,
    submissionId,
  };
}
