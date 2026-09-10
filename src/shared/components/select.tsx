"use client";

import { Select as HeroSelect, ListBox } from "@heroui/react";
import { HiMiniChevronDown } from "react-icons/hi2";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps
  extends Omit<React.ComponentProps<typeof HeroSelect>, "children"> {
  options: SelectOption[];
}

export function Select({
  options,
  placeholder = "Select an option",
  className = "",
  "aria-label": ariaLabel,
  ...props
}: SelectProps) {
  return (
    <HeroSelect
      aria-label={ariaLabel || placeholder}
      className={className}
      placeholder={placeholder}
      {...props}
    >
      <HeroSelect.Trigger className="w-full appearance-none rounded border border-border bg-surface px-3.5 py-3 text-left text-foreground text-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary data-[hover=true]:border-primary md:text-base">
        <HeroSelect.Value />
        <HeroSelect.Indicator>
          <HiMiniChevronDown className="h-5 w-5 text-muted" />
        </HeroSelect.Indicator>
      </HeroSelect.Trigger>
      <HeroSelect.Popover className="dark rounded border border-border bg-surface-alt p-1 shadow-2xl">
        <ListBox>
          {options.map((option) => (
            <ListBox.Item
              className="cursor-pointer rounded-sm px-3 py-2 text-muted transition-colors hover:bg-primary hover:text-white"
              id={option.value}
              key={option.value}
              textValue={option.label}
            >
              {option.label}
            </ListBox.Item>
          ))}
        </ListBox>
      </HeroSelect.Popover>
    </HeroSelect>
  );
}
