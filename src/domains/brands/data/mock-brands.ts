export interface Brand {
  id: string;
  isTextOnly?: boolean;
  logoSrc?: string;
  name: string;
}

export const MOCK_BRANDS: Brand[] = [
  {
    id: "bmw",
    logoSrc: "https://cdn.simpleicons.org/bmw/ffffff",
    name: "BMW",
  },
  {
    id: "mercedes-benz",
    isTextOnly: true,
    name: "Mercedes-Benz",
  },
  {
    id: "audi",
    logoSrc: "https://cdn.simpleicons.org/audi/ffffff",
    name: "Audi",
  },
  {
    id: "porsche",
    logoSrc: "https://cdn.simpleicons.org/porsche/D5001C",
    name: "Porsche",
  },
  {
    id: "land-rover",
    isTextOnly: true,
    name: "Land Rover",
  },
  {
    id: "toyota",
    logoSrc: "https://cdn.simpleicons.org/toyota/EB0A1E",
    name: "Toyota",
  },
  {
    id: "honda",
    logoSrc: "https://cdn.simpleicons.org/honda/CC0000",
    name: "Honda",
  },
  {
    id: "tesla",
    logoSrc: "https://cdn.simpleicons.org/tesla/E82127",
    name: "Tesla",
  },
  {
    id: "lexus",
    isTextOnly: true,
    name: "Lexus",
  },
  {
    id: "ford",
    logoSrc: "https://cdn.simpleicons.org/ford/ffffff",
    name: "Ford",
  },
];
