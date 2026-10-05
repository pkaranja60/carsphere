"use client";

// ─────────────────────────────────────────────
// SECTION: Imports
// ─────────────────────────────────────────────

import { Drawer as HeroDrawer } from "@heroui/react";
import type { ReactNode } from "react";
import { MdClose } from "react-icons/md";

// ─────────────────────────────────────────────
// SECTION: Compound Exports
// ─────────────────────────────────────────────

export const Drawer = HeroDrawer;
export const DrawerBackdrop = HeroDrawer.Backdrop;
export const DrawerContent = HeroDrawer.Content;
export const DrawerDialog = HeroDrawer.Dialog;
export const DrawerHeader = HeroDrawer.Header;
export const DrawerHeading = HeroDrawer.Heading;
export const DrawerBody = HeroDrawer.Body;
export const DrawerFooter = HeroDrawer.Footer;
export const DrawerCloseTrigger = HeroDrawer.CloseTrigger;

// ─────────────────────────────────────────────
// SECTION: High-Level Standardized Drawer Component
// ─────────────────────────────────────────────

export interface DrawerPanelProps {
  children: ReactNode;
  className?: string;
  description?: string;
  footer?: ReactNode;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  placement?: "left" | "right" | "top" | "bottom";
  title: ReactNode;
}

export function DrawerPanel({
  children,
  className = "",
  description,
  footer,
  isOpen,
  onOpenChange,
  placement = "right",
  title,
}: DrawerPanelProps) {
  return (
    <HeroDrawer.Backdrop
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <HeroDrawer.Content
        className={`flex h-full max-h-screen flex-col border-border bg-surface-container-lowest text-on-surface shadow-2xl ${className}`}
        placement={placement}
      >
        <HeroDrawer.Dialog className="flex h-full flex-col outline-none">
          <HeroDrawer.Header className="flex shrink-0 items-start justify-between border-border border-b px-6 py-5">
            <div className="space-y-1">
              <HeroDrawer.Heading className="font-bold font-display text-headline-sm text-on-surface">
                {title}
              </HeroDrawer.Heading>
              {description ? (
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {description}
                </p>
              ) : null}
            </div>
            <HeroDrawer.CloseTrigger className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-border text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface">
              <MdClose className="text-xl" />
            </HeroDrawer.CloseTrigger>
          </HeroDrawer.Header>

          <HeroDrawer.Body className="flex-1 overflow-y-auto px-6 py-5">
            {children}
          </HeroDrawer.Body>

          {footer ? (
            <HeroDrawer.Footer className="shrink-0 border-border border-t bg-surface px-6 py-4">
              {footer}
            </HeroDrawer.Footer>
          ) : null}
        </HeroDrawer.Dialog>
      </HeroDrawer.Content>
    </HeroDrawer.Backdrop>
  );
}
