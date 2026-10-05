// ─────────────────────────────────────────────
// SECTION: Brand Identifiers & Technicians
// ─────────────────────────────────────────────

export const BRAND_VIN_PREFIXES: Record<string, string> = {
  BMW: "WBA33AY05P",
  Ferrari: "ZFF92NHA4M",
  Genesis: "KMHM34JA2P",
  Honda: "1HGCV1F38R",
  Lexus: "2T2BBRCA7R",
  Mazda: "JM3VA4BL8R",
  Porsche: "WP0AA2Y14P",
  "Range Rover": "SALWR2V47P",
  Subaru: "4S4GUBAC8R",
  Toyota: "5TDZZRAH8R",
};

export const BRAND_TECHNICIANS: Record<string, string> = {
  BMW: "K. Weber (#B-5219)",
  Ferrari: "G. Rossi (#F-0912)",
  Genesis: "D. Vance (#G-3104)",
  Honda: "J. Mercer (#H-4190)",
  Lexus: "H. Tanaka (#L-7720)",
  Mazda: "S. Sato (#M-6321)",
  Porsche: "M. Rosenthal (#P-8841)",
  "Range Rover": "C. Holloway (#RR-8012)",
  Subaru: "E. Lindqvist (#S-9014)",
  Toyota: "T. Nakamura (#T-3391)",
};

const DEFAULT_AVATAR =
  "https://lh3.googleusercontent.com/aida/AEtjO1V1FdzkqSDuv3IroFCOUCEpuPohPJ4g0eIey32Yex9Pqc_p_W-Msdej1G-KDNhx67-i6UpbG4bpxTOhYViBsM3WUye6O0n2CuxsVzwaQtfbp6hna1Ot891GD-jmKaWdqjfEUdRJhH_2qQfywjXhSkYOHs-EsoCWpV3mXnEpuo2t9XfCcX3CkCpQo-0vLl589vJ3n7z-E3sPjZfx7aPQgBThbnwKMCdQxG9zEIvDkvYMcZ1uGBfsRVWNRm4";

export const BRAND_SPECIALISTS: Record<
  string,
  { avatarUrl: string; directLine: string; name: string }
> = {
  BMW: {
    avatarUrl: DEFAULT_AVATAR,
    directLine: "+1 (310) 555-0188",
    name: "Marcus Sterling",
  },
  Genesis: {
    avatarUrl: DEFAULT_AVATAR,
    directLine: "+1 (310) 555-0144",
    name: "Elena Rostova",
  },
  Honda: {
    avatarUrl: DEFAULT_AVATAR,
    directLine: "+1 (310) 555-0177",
    name: "David Kim",
  },
  Lexus: {
    avatarUrl: DEFAULT_AVATAR,
    directLine: "+1 (310) 555-0162",
    name: "Kenji Takahashi",
  },
  Mazda: {
    avatarUrl: DEFAULT_AVATAR,
    directLine: "+1 (310) 555-0155",
    name: "Rachel Morgan",
  },
  Porsche: {
    avatarUrl: DEFAULT_AVATAR,
    directLine: "+1 (310) 555-0142",
    name: "Julian Sterling",
  },
  Subaru: {
    avatarUrl: DEFAULT_AVATAR,
    directLine: "+1 (310) 555-0133",
    name: "Erik Lind",
  },
  Toyota: {
    avatarUrl: DEFAULT_AVATAR,
    directLine: "+1 (310) 555-0129",
    name: "Chloe Bennett",
  },
};
