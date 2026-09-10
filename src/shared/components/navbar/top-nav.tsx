import type { ReactNode } from "react";
import { Typography } from "../typography";

export function TopNav({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-primary opacity-80">
      {icon}
      <Typography className="text-muted" color="none" type="body">
        {label}
      </Typography>
    </div>
  );
}
