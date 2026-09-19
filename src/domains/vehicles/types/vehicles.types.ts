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
  specs: VehicleSpecs;
  trim: string;
  year: string;
}
