import { Typography } from "@/shared/components/typography";

export interface PageHeaderProps {
  description: string;
  title: string;
}

export function PageHeader({ description, title }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <Typography type="h1" variant="heading">
        {title}
      </Typography>
      <Typography className="mt-2 max-w-2xl text-muted text-sm md:text-base">
        {description}
      </Typography>
    </div>
  );
}
