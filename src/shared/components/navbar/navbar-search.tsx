import { Popover } from "@heroui/react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Button } from "../button";
import { Input } from "../input";

export function NavbarSearch() {
  return (
    <Popover>
      <Popover.Trigger>
        <button
          aria-label="Search"
          className="group flex min-h-11 min-w-11 items-center justify-center text-foreground transition hover:text-primary dark:text-white"
          type="button"
        >
          <HiMiniMagnifyingGlass className="h-5 w-5 group-hover:text-primary sm:h-6 sm:w-6" />
        </button>
      </Popover.Trigger>
      <Popover.Content offset={8} placement="bottom">
        <Popover.Arrow />
        <Popover.Dialog className="rounded-xl border border-border bg-surface p-3 shadow-2xl">
          <form action="#" className="flex items-center gap-2">
            <div className="relative w-full sm:w-64">
              <HiMiniMagnifyingGlass className="absolute top-1/2 left-3 z-10 h-5 w-5 -translate-y-1/2 text-muted" />
              <Input
                aria-label="Search term"
                inputClassName="pl-10 py-2.5 bg-surface-alt"
                placeholder="Search for car..."
                type="text"
              />
            </div>
            <Button type="submit" variant="primary">
              Search
            </Button>
          </form>
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
}
