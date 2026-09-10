import type { ReactNode } from "react";

export interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function PageLayout({
  children,
  className = "",
  containerClassName = "",
}: PageLayoutProps) {
  return (
    <main className={`flex flex-1 flex-col bg-surface-alt ${className}`.trim()}>
      <div
        className={`mx-auto flex w-full max-w-384 flex-1 flex-col px-4 sm:px-6 lg:px-8 ${containerClassName}`.trim()}
      >
        {children}
      </div>
    </main>
  );
}
