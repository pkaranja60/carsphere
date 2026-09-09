import { Popover } from "@heroui/react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Button } from "../button";

export function NavbarSearch() {
  return (
    <Popover>
      <Popover.Trigger>
        <button
          className="flex min-h-11 min-w-11 items-center justify-center text-foreground transition hover:text-primary"
          type="button"
        >
          <HiMiniMagnifyingGlass className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </Popover.Trigger>
      <Popover.Content offset={8} placement="bottom">
        <Popover.Arrow />
        <Popover.Dialog className="rounded-xl border border-border bg-surface p-3 shadow-2xl">
          <form action="#" className="flex items-center gap-2">
            <div className="relative">
              <HiMiniMagnifyingGlass className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-muted" />
              <input
                className="w-full appearance-none rounded border border-border bg-surface-alt py-2.5 pr-4 pl-10 text-foreground text-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:w-64"
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
