"use client";

import type { ButtonHTMLAttributes, RefObject } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv(
  {
    base: "flex items-center justify-center transition-all",
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
      },
    },
  },
  {
    twMerge: false,
  }
);

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> &
  VariantProps<typeof buttonVariants>;

export const Button = ({
  className,
  variant,
  size,
  fullWidth,
  ref,
  type = "button",
  ...props
}: ButtonProps & { ref?: RefObject<HTMLButtonElement | null> }) => (
  <button
    className={buttonVariants({ className, fullWidth, size, variant })}
    ref={ref}
    type={type}
    {...props}
  />
);
Button.displayName = "Button";
