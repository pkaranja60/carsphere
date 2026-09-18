"use client";

import { Select as HeroSelect, Label, ListBox } from "@heroui/react";
import type { ComponentProps } from "react";

const triggerClassName = [
  "flex h-9 md:h-11 w-full cursor-pointer items-center justify-between rounded-lg border border-outline-variant bg-surface-bright px-3 font-body-sm text-xs md:text-body-sm text-on-surface transition-all",
  "data-[focus-visible=true]:border-primary-container data-[focus-visible=true]:bg-surface data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-primary-container/30",
].join(" ");

const popoverClassName =
  "rounded-xl border border-outline-variant bg-surface-container-lowest p-1 shadow-lg";

const itemClassName = [
  "cursor-pointer rounded-lg px-3 py-2 font-body-sm text-xs md:text-body-sm text-on-surface outline-none transition-colors",
  "data-[hovered=true]:bg-surface-container-low data-[hovered=true]:text-on-surface",
  "data-[focused=true]:bg-surface-container-low",
  "data-[selected=true]:bg-primary-container/20 data-[selected=true]:font-medium data-[selected=true]:text-primary",
].join(" ");

export function Select({
  label,
  placeholder,
  children,
  className,
  ...props
}: ComponentProps<typeof HeroSelect> & { label?: string }) {
  return (
    <HeroSelect className={className} placeholder={placeholder} {...props}>
      {label ? (
        <Label className="font-label-sm font-semibold text-[10px] text-on-surface uppercase tracking-wider md:text-label-sm">
          {label}
        </Label>
      ) : null}
      <HeroSelect.Trigger className={triggerClassName}>
        <HeroSelect.Value className="truncate text-xs md:text-body-sm" />
        <HeroSelect.Indicator />
      </HeroSelect.Trigger>
      <HeroSelect.Popover className={popoverClassName}>
        <ListBox>{children}</ListBox>
      </HeroSelect.Popover>
    </HeroSelect>
  );
}

export function SelectItem({
  className,
  children,
  ...props
}: ComponentProps<typeof ListBox.Item>) {
  return (
    <ListBox.Item className={`${itemClassName} ${className || ""}`} {...props}>
      {/* biome-ignore lint/suspicious/noExplicitAny: Required to intercept HeroUI render props */}
      {(itemProps: any) => (
        <>
          {/* biome-ignore lint/suspicious/noLeakedRender: Expected React children behavior */}
          {typeof children === "function" ? children(itemProps) : children}
          <ListBox.ItemIndicator />
        </>
      )}
    </ListBox.Item>
  );
}
