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
      <HeroSelect.Trigger className="w-full appearance-none rounded border border-white/10 bg-neutral-900 px-3.5 py-3 text-left text-sm text-white transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 data-[hover=true]:border-red-600 md:text-base">
        <HeroSelect.Value />
        <HeroSelect.Indicator>
          <HiMiniChevronDown className="h-5 w-5 text-gray-400" />
        </HeroSelect.Indicator>
      </HeroSelect.Trigger>
      <HeroSelect.Popover className="dark rounded border border-white/10 bg-neutral-950 p-1 shadow-2xl">
        <ListBox>
          {options.map((option) => (
            <ListBox.Item
              className="cursor-pointer rounded-sm px-3 py-2 transition-colors hover:bg-red-600 hover:text-white"
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
