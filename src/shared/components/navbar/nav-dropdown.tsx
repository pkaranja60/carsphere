"use client";

import { Dropdown, Label } from "@heroui/react";
import { useCallback, useState } from "react";
import { Typography } from "../typography";
import type { NavLinkItem } from "./nav-data";

export function NavDropdown({ link }: { link: NavLinkItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = useCallback(() => setIsOpen(true), []);
  const handleMouseLeave = useCallback(() => setIsOpen(false), []);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: wrapper for hover detection
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: wrapper for hover detection
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
        <Dropdown.Trigger>
          <div className="flex cursor-pointer items-center gap-1">
            <Typography
              className="whitespace-nowrap text-foreground"
              color="none"
              type="body"
              variant="navLink"
            >
              {link.label}
            </Typography>
          </div>
        </Dropdown.Trigger>
        <Dropdown.Popover className="dark rounded-lg border border-border bg-surface p-2 shadow-2xl">
          <Dropdown.Menu
            aria-label={`${link.label} submenu`}
            className="text-muted"
          >
            {link.items?.map((item) => (
              <Dropdown.Item
                className="cursor-pointer rounded-md px-3 py-2 transition-colors hover:bg-primary hover:text-white"
                href={item.href}
                id={item.href}
                key={item.href}
                textValue={item.label}
              >
                <Label className="cursor-pointer font-medium">
                  {item.label}
                </Label>
              </Dropdown.Item>
            )) || []}
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
}
