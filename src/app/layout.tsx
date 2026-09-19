import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { MainLayout } from "@/shared/components";
import { ThemeProvider } from "./providers";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  description:
    "Shop cars online with ease. Browse, compare, and buy vehicles that match your needs, preferences, and budget from a modern car marketplace.",
  title: "CarSphere - Car Marketplace",
};

export const viewport: Viewport = {
  initialScale: 1,
  viewportFit: "cover",
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${plusJakartaSans.variable} ${inter.variable} h-full overflow-x-hidden antialiased`}
      lang="en"
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col overflow-x-hidden bg-background font-sans text-on-background"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
