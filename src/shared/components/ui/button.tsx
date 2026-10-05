import type { ButtonHTMLAttributes, RefObject } from "react";
import type { VariantProps } from "tailwind-variants";
import { buttonVariants } from "./button.variants";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: RefObject<HTMLButtonElement | null>;
}

export function Button({
  children,
  className,
  fullWidth,
  ref,
  size,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ className, fullWidth, size, variant })}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
}
