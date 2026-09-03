import { Button as HeroButton } from "@heroui/react";
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

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
      ghost: "bg-transparent text-neutral-700 hover:bg-neutral-100",
      inverseOutline:
        "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10",
      outline:
        "border border-neutral-300 bg-white text-neutral-800 hover:border-neutral-400 hover:bg-neutral-50",
      primary:
        "bg-red-600 text-white shadow-red-600/20 shadow-sm hover:bg-red-700",
    },
  },
});

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
