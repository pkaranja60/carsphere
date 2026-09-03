import Link from "next/link";
import { Typography, type TypographyProps } from "./typography";

export interface NavLinkProps {
  className?: string;
  href: string;
  label: string;
  onClick?: () => void;
  variant?: TypographyProps["variant"];
}

export function NavLink({
  label,
  href,
  onClick,
  className,
  variant = "navLink",
}: NavLinkProps) {
  return (
    <Link className={className} href={href} onClick={onClick}>
      <Typography
        className={variant === "navLink" ? "text-white" : "text-inherit"}
        color="none"
        type="body"
        variant={variant}
      >
        {label}
      </Typography>
    </Link>
  );
}
