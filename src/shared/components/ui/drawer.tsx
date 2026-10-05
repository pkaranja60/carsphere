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
  isDismissable?: boolean;
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
  isDismissable = true,
  isOpen,
  onOpenChange,
  placement = "right",
  title,
}: DrawerPanelProps) {
  const borderPlacementMap: Record<string, string> = {
    bottom: "border-t border-border rounded-t-2xl",
    left: "border-r border-border",
    right: "border-l border-border",
    top: "border-b border-border rounded-b-2xl",
  };
  const borderPlacementClass =
    borderPlacementMap[placement] ?? "border-l border-border";

  return (
    <HeroDrawer.Backdrop
      isDismissable={isDismissable}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      variant="transparent"
    >
      <HeroDrawer.Content placement={placement}>
        <HeroDrawer.Dialog
          className={`pointer-events-auto relative flex h-full max-h-screen flex-col overflow-hidden bg-surface-container-lowest p-0 text-on-surface shadow-2xl outline-none ${borderPlacementClass} ${className}`}
        >
          <HeroDrawer.Header className="flex shrink-0 items-start justify-between border-border border-b bg-surface-container-lowest/90 px-6 py-5 backdrop-blur-md">
            <div className="space-y-1 pr-4">
              <HeroDrawer.Heading className="font-bold font-display text-headline-sm text-on-surface tracking-tight">
                {title}
              </HeroDrawer.Heading>
              {description ? (
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {description}
                </p>
              ) : null}
            </div>
            <HeroDrawer.CloseTrigger className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border/80 bg-surface-container-low text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface active:scale-95">
              <MdClose className="text-xl" />
            </HeroDrawer.CloseTrigger>
          </HeroDrawer.Header>

          <HeroDrawer.Body className="scrollbar-thin flex-1 overflow-y-auto px-6 py-6">
            {children}
          </HeroDrawer.Body>

          {footer ? (
            <HeroDrawer.Footer className="shrink-0 border-border border-t bg-surface-container-lowest px-6 py-4">
              {footer}
            </HeroDrawer.Footer>
          ) : null}
        </HeroDrawer.Dialog>
      </HeroDrawer.Content>
    </HeroDrawer.Backdrop>
  );
}
