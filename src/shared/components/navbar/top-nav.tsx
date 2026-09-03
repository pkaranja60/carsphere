import type { ReactNode } from "react";
import { Typography } from "../typography";

export function TopNav({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-red-400/80">
      {icon}
      <Typography className="text-gray-300" color="none" type="body">
        {label}
      </Typography>
    </div>
  );
}
