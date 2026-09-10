"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";
import { NavLink } from "../nav-link";
import { Typography } from "../typography";
import type { NavLinkItem } from "./nav-data";

export function MobileNavItem({
  link,
  onClose,
}: {
  link: NavLinkItem;
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  if (!link.items) {
    return (
      <div className="w-full">
        <NavLink href={link.href} label={link.label} onClick={onClose} />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col">
      <button
        className="group flex w-full items-center justify-between outline-none"
        onClick={toggleOpen}
        type="button"
      >
        <Typography
          className="text-foreground"
          color="none"
          type="body"
          variant="navLink"
        >
          {link.label}
        </Typography>
        <HiMiniChevronDown
          className={`h-5 w-5 text-foreground transition-transform duration-200 group-hover:text-primary ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen ? (
        <div className="mt-4 ml-2 flex flex-col space-y-4 border-border border-l pl-4">
          {link.items.map((item) => (
            <Link
              className="block w-full outline-none"
              href={item.href}
              key={item.href}
              onClick={onClose}
            >
              <Typography
                className="text-muted text-sm hover:text-primary"
                type="body"
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
