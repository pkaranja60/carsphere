// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type {
  DedicatedHost,
  DepartmentLine,
  GuaranteeItem,
  ShowroomInfo,
  ViewingFormatId,
  ViewingFormatOption,
} from "../types/contact.types";
import {
  CONSULTATION_WINDOWS,
  DEDICATED_HOST,
  DEPARTMENT_LINES,
  GUARANTEE_ITEMS,
  SHOWROOM_INFO,
  VIEWING_FORMATS,
} from "./contact.data";

// ─────────────────────────────────────────────
// SECTION: Service Container
// ─────────────────────────────────────────────

export const contactService = {
  getConsultationWindows: (): readonly string[] => CONSULTATION_WINDOWS,

  getDedicatedHost: (): DedicatedHost => DEDICATED_HOST,

  getDepartmentLines: (): DepartmentLine[] => DEPARTMENT_LINES,

  getFormatById: (id: ViewingFormatId): ViewingFormatOption | undefined =>
    VIEWING_FORMATS.find((format) => format.id === id),

  getGuarantees: (): GuaranteeItem[] => GUARANTEE_ITEMS,

  getShowroomInfo: (): ShowroomInfo => SHOWROOM_INFO,

  getViewingFormats: (): ViewingFormatOption[] => VIEWING_FORMATS,
};
