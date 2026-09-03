import { Typography as HeroTypography, tv } from "@heroui/react";
import type { ComponentProps } from "react";

export const typographyVariants = tv({
  base: "",
  defaultVariants: {
    color: "none",
    variant: "default",
  },
  variants: {
    color: {
      default: "text-neutral-900",
      inverse: "text-white",
      inverseMuted: "text-gray-300",
      muted: "text-neutral-500",
      none: "",
      primary: "text-red-600",
    },
    variant: {
      body: "font-light text-sm leading-relaxed sm:font-normal sm:text-base",
      default: "",
      heading: "font-bold text-xl tracking-tight sm:text-2xl",
      heroHeading:
        "font-racing text-4xl uppercase italic leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl",
      metadata: "font-normal text-[11px] sm:text-xs",
      navLink: "transition-colors duration-200 hover:text-red-400",
      subheading: "font-semibold text-xs tracking-tight sm:text-sm",
    },
  },
});

type TypographyVariant = keyof typeof typographyVariants.variants.variant;
type TypographyColor = keyof typeof typographyVariants.variants.color;

export type TypographyProps = Omit<
  ComponentProps<typeof HeroTypography>,
  "color"
> & {
  variant?: TypographyVariant;
  color?: TypographyColor;
};

export function Typography({
  className,
  variant,
  color,
  ...props
}: TypographyProps) {
  return (
    <HeroTypography
      className={typographyVariants({ className, color, variant })}
      {...props}
    />
  );
}

// Re-export subcomponents
Typography.Heading = HeroTypography.Heading;
Typography.Paragraph = HeroTypography.Paragraph;
Typography.Code = HeroTypography.Code;
Typography.Prose = HeroTypography.Prose;
