// ─────────────────────────────────────────────
// SECTION: Interfaces
// ─────────────────────────────────────────────

export interface VehicleSpecs {
  label1: string;
  label2: string;
  label3: string;
  stat1: string;
  stat2: string;
  stat3: string;
  stat3Color?: "default" | "tertiary";
}

export interface Vehicle {
  badgeText: string;
  colorString: string;
  historyText: string;
  id: string;
  imageAlt: string;
  imageSrc: string;
  make: string;
  model: string;
  monthlyEstimate: string;
  price: string;
  slug?: string;
  specs: VehicleSpecs;
  trim: string;
  year: string;
}

export interface SpecMatrixItem {
  description: string;
  iconName: string;
  title: string;
  value: string;
}

export interface FactoryOption {
  id: string;
  name: string;
  price: string;
}

export interface InspectionCheckItem {
  completedChecks: number;
  description: string;
  id: string;
  resultBadge: string;
  title: string;
  totalChecks: number;
}

export interface WarrantyScheduleItem {
  id: string;
  periodText: string;
  statusBadge: string;
  statusType: "active" | "included";
  title: string;
}

export interface FinancialScheduleItem {
  id: string;
  isTotal?: boolean;
  label: string;
  value: string;
}

export interface VehicleDetail extends Vehicle {
  allocationNumber: string;
  batteryHealthSoh: string;
  certifiedTechnician: string;
  curatedAlternatives: Vehicle[];
  estimatedMonthly: string;
  factoryOptions: FactoryOption[];
  financialSchedule: FinancialScheduleItem[];
  galleryImages: { alt: string; url: string }[];
  inspectionDate: string;
  inspectionItems: InspectionCheckItem[];
  interiorColor: string;
  mileageFormatted: string;
  msrpOriginal: string;
  narrativeParagraphs: string[];
  paintDepthMil: string;
  savingsAmount: string;
  slug: string;
  specialist: {
    avatarUrl: string;
    directLine: string;
    name: string;
    title: string;
  };
  specsMatrix: SpecMatrixItem[];
  vin: string;
  warrantyActiveUntil: string;
  warrantyItems: WarrantyScheduleItem[];
}

export interface BookingFormData {
  consultationFormat: string;
  email: string;
  fullName: string;
  phone: string;
  preferredDate: string;
  preferredWindow: string;
  tradeInNotes?: string;
}
