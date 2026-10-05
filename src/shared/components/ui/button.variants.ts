import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "flex items-center justify-center transition",
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
  variants: {
    fullWidth: {
      true: "w-full",
    },
    size: {
      "icon-lg": "h-11 w-11 min-w-11 px-0",
      "icon-md": "h-8 w-8 min-w-8 px-0",
      "icon-sm": "h-6 w-6 min-w-6 px-0",
      lg: "h-11 px-6",
      md: "h-10 px-space-lg",
      sm: "h-8 px-3 text-label-sm",
    },
    variant: {
      icon: "rounded-full text-on-surface-variant hover:bg-surface-variant/50 hover:text-primary",
      "icon-blur":
        "rounded-full bg-surface/90 text-on-surface-variant shadow-sm backdrop-blur-sm hover:text-primary",
      primary:
        "rounded-lg bg-primary-container font-label-md font-semibold text-label-md text-white uppercase tracking-wider shadow-md hover:bg-primary hover:shadow-lg active:translate-y-0.5",
      secondary:
        "rounded-lg bg-surface-container-high font-label-md font-semibold text-label-md text-on-surface hover:bg-surface-container-highest",
      surface:
        "rounded-lg border border-border bg-surface-container-lowest font-label-md font-semibold text-label-md text-on-surface hover:border-border-strong",
      tertiary:
        "rounded-lg font-label-md font-semibold text-label-md text-primary hover:bg-surface-variant/50",
    },
  },
});
