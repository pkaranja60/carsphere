// ─────────────────────────────────────────────
// SECTION: Types & Interfaces
// ─────────────────────────────────────────────

export type ServiceTabKey = "trade" | "finance" | "sourcing";

export interface MetricItem {
  id: string;
  label: string;
  metric: string;
  subtext: string;
  unit?: string;
}

export interface ServicePillarPoint {
  description: string;
  id: string;
  title: string;
}

export interface ServicePillar {
  actionLabel: string;
  badge: string;
  description: string;
  iconName:
    | "account_balance"
    | "currency_exchange"
    | "security"
    | "travel_explore";
  id: string;
  points: ServicePillarPoint[];
  tabKey: ServiceTabKey;
  title: string;
}

export interface HandoverFeature {
  description: string;
  id: string;
  title: string;
}

export interface GuaranteeItem {
  badge: string;
  description: string;
  iconName: "verified" | "published_with_changes" | "shield";
  id: string;
  signoff: string;
  title: string;
}

export interface ServicesInquiryFormValues {
  budgetOrEquity?: string;
  clientName: string;
  email: string;
  make: string;
  mileage: string;
  modelTrim: string;
  modelYear: string;
  requirements?: string;
  serviceType: ServiceTabKey;
  telephone: string;
  timeline: "immediate" | "2weeks" | "month" | "market-watch";
}
