// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import type {
  DedicatedHost,
  DepartmentLine,
  GuaranteeItem,
  ShowroomInfo,
  ViewingFormatOption,
} from "../types/contact.types";

// ─────────────────────────────────────────────
// SECTION: Viewing Formats Data
// ─────────────────────────────────────────────

export const VIEWING_FORMATS: ViewingFormatOption[] = [
  {
    badge: "Flagship Suite",
    description:
      "Quiet private presentation lounge with dedicated technical marque specialist, bespoke espresso bar, and private indoor climate-controlled bay.",
    footerIcon: "location_on",
    footerText: "9400 Wilshire Blvd",
    id: "flagship",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7MWh-oy8uurGLk5XjgZVVj9LlL9S2M5gr7V-RL-wx4Wcz13KXFRFQ7YIEwljwPG9LXjQBOYqmqp0kpw3fDktEBmphD2ehrKHuszo8QZPfoWQWByizd7WezI1LAW1Pzp1IyT2HvjyBgw5obKDznsN1l-R2WluC2_CwSO6oKaF11y4-00SzSYwsdNJLa8RN4SXEsAGueFTGWDfuT5UX1hei144s6bjvT_dxmVee_AiNphl4MA-0wXcV",
    title: "Beverly Hills Flagship Suite",
  },
  {
    badge: "Doorstep Delivery",
    description:
      "Delivered directly to your residence in greater Los Angeles or SoCal via enclosed carrier for an unhurried, pressure-free evaluation window.",
    footerIcon: "local_shipping",
    footerText: "SoCal Radius",
    id: "athome",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCwD4zp20C4-BpKmFllHGm7xLhzrwU176_CdIy7zOeEbZIJ4bvYIrA7mcwgG_59s5PJwzaX9LwLTRX0trUT8M56QkXPwElESSQ3ac4Wpxdiew-5TzbUa2tiCI-NjE9EmvB2PI52FgSIjbXIKk5_gNGRH3tfVC7V7tjqWSN-rUThhgRUHr4Qw9b32jqiIBmAlXeK_5IYNqTMHSp5BuNO6-Ei_R1hxMnQgd8erD8ItYr-5tkd41Xz8eFn",
    title: "At-Home White-Glove Test Drive",
  },
  {
    badge: "Worldwide 4K Stream",
    description:
      "Live high-definition video walkthrough, paint-depth micro-inspection, cold start, and acoustic diagnostic streaming over a private encrypted session.",
    footerIcon: "videocam",
    footerText: "Nationwide & Global",
    id: "remote",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQYEYTVF3kQHq2VcGw4oAUAo35Lgr2OifjPh9dtNGL_CaTKR-NNJvg16sp1_xB3JCf56VuikgEJhDcnXfSgRO7R5c_KLzoefi1xG7pilyjiRTzqaDyANbBWTWItmZH7oHp16hbcf_huqMwly9-GiSiTpoV-LijuEu9-MiL2YiuEt_HzYwzkeqWpMRbf6shmg7HmKWp6UOdDDLnHWx7wBdeq-sZR9NHRWqN4tggMHqcQt5ExtKxid32",
    title: "Interactive 4K Remote Walkaround",
  },
];

// ─────────────────────────────────────────────
// SECTION: Showroom & Contact Data
// ─────────────────────────────────────────────

export const SHOWROOM_INFO: ShowroomInfo = {
  address: "9400 Wilshire Blvd, Suite 100",
  cityStateZip: "Beverly Hills, CA 90212",
  coordinates: "34.0668,-118.3976",
  fullAddress: "9400 Wilshire Blvd, Suite 100, Beverly Hills, CA 90212",
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB3kSmbhuVHHsA74NVSuB7Wm6kcP-9Lt1ctoXFXk5v2351viNJZTJcnqi3RAFTrFNl8JABqoyV_vepyF2w2DNAhVoOs2394JjSLmkUADi4wMeOIwSyrnizSKyd8ron9PedIYp4C-QfaU2Kh_F32LX01BpePxyyg0edVHwUe9VYOmf0vd1lZ_7X1eegr5h5abjsyNSqksHYAYuLaZ8tXkGb-Axjs-nNkS4M7DXt6VKa97baeBykc4N7b",
  name: "Beverly Hills Salon",
  operatingHours: "Monday – Saturday: 9:00 AM – 8:00 PM",
  statusBadge: "Open Today",
  subtitle: "Flagship Showroom",
  sundayHours: "Sunday: By Private Advance Appointment",
  valetNote: "Complimentary Valet at Main Portico",
};

export const DEDICATED_HOST: DedicatedHost = {
  avatarUrl:
    "https://lh3.googleusercontent.com/aida/AEtjO1V1FdzkqSDuv3IroFCOUCEpuPohPJ4g0eIey32Yex9Pqc_p_W-Msdej1G-KDNhx67-i6UpbG4bpxTOhYViBsM3WUye6O0n2CuxsVzwaQtfbp6hna1Ot891GD-jmKaWdqjfEUdRJhH_2qQfywjXhSkYOHs-EsoCWpV3mXnEpuo2t9XfCcX3CkCpQo-0vLl589vJ3n7z-E3sPjZfx7aPQgBThbnwKMCdQxG9zEIvDkvYMcZ1uGBfsRVWNRm4",
  directDeskPhone: "+1 (800) 555-0199",
  email: "concierge@carsphere.com",
  name: "Julian Sterling",
  quote:
    "We coordinate viewings that honor your schedule. Whether you require vehicle acoustics tests, bespoke paint gauge reports, or immediate vehicle trade-in terms, my desk oversees every detail before you step through our doors.",
  role: "Lead Private Client Advisor & Marque Specialist",
  tag: "Dedicated Host",
};

export const DEPARTMENT_LINES: DepartmentLine[] = [
  {
    id: "vip-allocation",
    isPrimary: true,
    name: "Private VIP Allocation",
    phone: "+1 (800) 555-0199",
    telHref: "tel:18005550199",
  },
  {
    id: "enclosed-transport",
    name: "Nationwide Enclosed Transport Desk",
    phone: "+1 (800) 555-0182",
    telHref: "tel:18005550182",
  },
  {
    id: "off-market-sourcing",
    name: "Off-Market Sourcing Advisory",
    phone: "+1 (800) 555-0144",
    telHref: "tel:18005550144",
  },
];

export const GUARANTEE_ITEMS: GuaranteeItem[] = [
  {
    description:
      "Rigorous mechanical and cosmetic testing for enduring quality assurance.",
    iconName: "verified",
    id: "inspection",
    title: "150-Point Inspection",
  },
  {
    description:
      "Experience your vehicle with 500 worry-free miles and complete peace of mind.",
    iconName: "published_with_changes",
    id: "buyback",
    title: "7-Day Buyback Guarantee",
  },
  {
    description:
      "Direct market valuation, zero dealer markups, and clear upfront terms.",
    iconName: "payments",
    id: "pricing",
    title: "Transparent Pricing",
  },
];

export const CONSULTATION_WINDOWS = [
  "Morning (10:00 AM – 1:00 PM)",
  "Afternoon (1:00 PM – 4:00 PM)",
  "Twilight Session (5:00 PM – 7:30 PM)",
  "Private Off-Hours (By Request)",
] as const;
