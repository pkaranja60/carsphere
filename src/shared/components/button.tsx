import { Button as HeroButton } from "@heroui/react";
import type { ComponentProps } from "react";
import { buttonVariants } from "./button-variants";

type ButtonVariantProps = typeof buttonVariants.variants;

export type ButtonProps = Omit<
  ComponentProps<typeof HeroButton>,
  "variant" | "size" | "className"
> & {
  className?: string;
  variant?: keyof ButtonVariantProps["variant"];
  size?: keyof ButtonVariantProps["size"];
  fullWidth?: boolean;
};

export function Button({
  className,
  variant,
  size,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <HeroButton
      className={buttonVariants({ className, fullWidth, size, variant })}
      {...props}
    />
  );
}
