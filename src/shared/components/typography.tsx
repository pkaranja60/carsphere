import { Typography as HeroTypography } from "@heroui/react";
import type { ComponentProps } from "react";
import { typographyVariants } from "./typography-variants";

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
