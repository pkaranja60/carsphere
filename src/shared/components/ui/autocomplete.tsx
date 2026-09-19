"use client";

import {
  EmptyState,
  Autocomplete as HeroAutocomplete,
  Label,
  ListBox,
  SearchField,
  useFilter,
} from "@heroui/react";
import type { ComponentProps } from "react";

const triggerClassName = [
  "flex h-9 md:h-11 w-full cursor-pointer items-center justify-between rounded-lg border border-outline-variant bg-surface-bright px-3 font-body-sm text-xs md:text-body-sm text-on-surface transition",
  "data-[focus-visible=true]:border-primary-container data-[focus-visible=true]:bg-surface data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-primary-container/30",
].join(" ");

const popoverClassName =
  "rounded-xl border border-outline-variant bg-surface-container-lowest p-2 shadow-lg";

const itemClassName = [
  "cursor-pointer rounded-lg px-3 py-2 font-body-sm text-xs md:text-body-sm text-on-surface outline-none transition-colors",
  "data-[hovered=true]:bg-surface-container-low data-[hovered=true]:text-on-surface",
  "data-[focused=true]:bg-surface-container-low",
  "data-[selected=true]:bg-primary-container/20 data-[selected=true]:font-medium data-[selected=true]:text-primary",
].join(" ");

export function Autocomplete({
  label,
  placeholder,
  children,
  className,
  ...props
}: ComponentProps<typeof HeroAutocomplete> & { label?: string }) {
  const { contains } = useFilter({ sensitivity: "base" });

  return (
    <HeroAutocomplete
      className={className}
      placeholder={placeholder}
      {...props}
    >
      {label ? (
        <Label className="font-label-sm font-semibold text-[10px] text-on-surface uppercase tracking-wider md:text-label-sm">
          {label}
        </Label>
      ) : null}
      <HeroAutocomplete.Trigger className={triggerClassName}>
        <HeroAutocomplete.Value className="truncate text-xs md:text-body-sm" />
        <HeroAutocomplete.ClearButton />
        <HeroAutocomplete.Indicator />
      </HeroAutocomplete.Trigger>
      <HeroAutocomplete.Popover className={popoverClassName}>
        <HeroAutocomplete.Filter filter={contains}>
          <SearchField
            aria-label="Search"
            autoFocus
            className="mb-2"
            name="search"
          >
            <SearchField.Group className="flex items-center gap-2 rounded-lg border border-outline-variant bg-surface px-2 py-1.5 focus-within:border-primary-container focus-within:ring-1 focus-within:ring-primary-container/30">
              <SearchField.SearchIcon className="text-outline" />
              <SearchField.Input
                className="w-full bg-transparent font-body-sm text-on-surface text-xs outline-none placeholder:text-outline md:text-body-sm"
                placeholder="Search..."
              />
              <SearchField.ClearButton className="text-outline hover:text-on-surface" />
            </SearchField.Group>
          </SearchField>
          <ListBox
            // biome-ignore lint/performance/noJsxPropsBind: required by HeroUI docs
            renderEmptyState={() => (
              <EmptyState className="py-4 text-center font-body-sm text-on-surface-variant text-xs md:text-body-sm">
                No results found
              </EmptyState>
            )}
          >
            {children}
          </ListBox>
        </HeroAutocomplete.Filter>
      </HeroAutocomplete.Popover>
    </HeroAutocomplete>
  );
}

export function AutocompleteItem({
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
