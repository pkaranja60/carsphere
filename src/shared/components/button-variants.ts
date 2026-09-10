// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { tv } from "tailwind-variants";

// ─────────────────────────────────────────────
// SECTION: Variants
// ─────────────────────────────────────────────

export const buttonVariants = tv({
  base: "inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-95",
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
  variants: {
    fullWidth: {
      true: "w-full",
    },
    size: {
      lg: "h-12 rounded-xl px-6 text-base",
      md: "h-10 rounded-lg px-4 text-sm",
      sm: "h-8 rounded-md px-3 text-xs",
    },
    variant: {
      ghost:
        "bg-transparent text-muted hover:bg-surface-alt hover:text-foreground",
      inverseOutline:
        "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10",
      outline:
        "border border-border bg-surface text-foreground hover:border-foreground/30 hover:bg-surface-alt",
      primary:
        "bg-red-600 text-white shadow-red-600/20 shadow-sm hover:bg-red-700",
    },
  },
});
