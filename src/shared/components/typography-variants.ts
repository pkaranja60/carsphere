// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { tv } from "tailwind-variants";

// ─────────────────────────────────────────────
// SECTION: Variants
// ─────────────────────────────────────────────

export const typographyVariants = tv({
  base: "",
  defaultVariants: {
    color: "default",
    variant: "default",
  },
  variants: {
    color: {
      default: "text-foreground",
      inverse: "text-background",
      inverseMuted: "text-gray-300",
      muted: "text-muted",
      none: "",
      primary: "text-primary",
    },
    variant: {
      body: "font-light text-sm leading-relaxed sm:font-normal sm:text-base md:text-lg",
      default: "",
      heading:
        "font-bold text-xl tracking-tight sm:text-2xl md:text-3xl lg:text-4xl",
      heroHeading:
        "font-racing text-4xl uppercase italic leading-none tracking-tight sm:text-5xl md:text-7xl",
      metadata: "font-normal text-xs sm:text-xs md:text-sm",
      navLink: "transition-colors duration-200 hover:text-primary md:text-lg",
      subheading:
        "font-semibold text-xs tracking-tight sm:text-sm md:text-base lg:text-lg",
    },
  },
});
