// ─────────────────────────────────────────────
// SECTION: Types
// ─────────────────────────────────────────────

export type ViewingFormatId = "flagship" | "athome" | "remote";

export interface ViewingFormatOption {
  badge: string;
  description: string;
  footerIcon: string;
  footerText: string;
  id: ViewingFormatId;
  imageUrl: string;
  title: string;
}

export interface DepartmentLine {
  id: string;
  isPrimary?: boolean;
  name: string;
  phone: string;
  telHref: string;
}

export interface ShowroomInfo {
  address: string;
  cityStateZip: string;
  coordinates: string;
  fullAddress: string;
  imageUrl: string;
  name: string;
  operatingHours: string;
  statusBadge: string;
  subtitle: string;
  sundayHours: string;
  valetNote: string;
}

export interface DedicatedHost {
  avatarUrl: string;
  directDeskPhone: string;
  email: string;
  name: string;
  quote: string;
  role: string;
  tag: string;
}

export interface GuaranteeItem {
  description: string;
  iconName: string;
  id: string;
  title: string;
}

export interface ConsultationFormData {
  consultationFormat: ViewingFormatId;
  email: string;
  fullName: string;
  phone: string;
  preferredDate: string;
  preferredWindow: string;
  tradeInNotes?: string;
  vehicle: string;
}
