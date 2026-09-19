"use client";

import { Tabs as HeroTabs } from "@heroui/react";
import type { ComponentProps } from "react";

const listClassName = [
  "flex max-w-full overflow-x-auto items-center rounded-lg border border-surface-variant bg-surface-container-low p-1 sm:inline-flex",
  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  "**:data-[slot=tabs-tab]:rounded-lg **:data-[slot=tabs-tab]:px-4 **:data-[slot=tabs-tab]:py-1.5 **:data-[slot=tabs-tab]:whitespace-nowrap",
  "**:data-[slot=tabs-tab]:font-semibold **:data-[slot=tabs-tab]:text-xs md:**:data-[slot=tabs-tab]:text-label-sm **:data-[slot=tabs-tab]:transition",
  "**:data-[slot=tabs-tab]:data-[selected=true]:bg-surface **:data-[slot=tabs-tab]:data-[selected=true]:font-bold **:data-[slot=tabs-tab]:data-[selected=true]:text-on-surface **:data-[slot=tabs-tab]:data-[selected=true]:shadow-sm",
  "**:data-[slot=tabs-tab]:not-data-[selected=true]:text-on-surface-variant **:data-[slot=tabs-tab]:not-data-[selected=true]:hover:text-on-surface",
  "**:data-[slot=tabs-indicator]:hidden",
].join(" ");

export const Tabs = HeroTabs;

export const TabList = ({
  className,
  ...props
}: ComponentProps<typeof HeroTabs.List>) => (
  <HeroTabs.List className={`${listClassName} ${className || ""}`} {...props} />
);

export const { Tab, Panel: TabPanel } = HeroTabs;

export const TabListContainer = ({
  className,
  ...props
}: ComponentProps<typeof HeroTabs.ListContainer>) => (
  <HeroTabs.ListContainer
    className={`max-w-full bg-transparent ${className || ""}`}
    {...props}
  />
);
