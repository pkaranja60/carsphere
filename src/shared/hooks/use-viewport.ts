"use client";

import { useSyncExternalStore } from "react";

const getSnapshot = () => {
  if (typeof window === "undefined") {
    return 0;
  }
  return window.innerWidth;
};

const getServerSnapshot = () => {
  return 0; // Default to 0 on SSR
};

const subscribe = (callback: () => void) => {
  if (typeof window === "undefined") {
    return function noop() {
      // Do nothing during SSR
    };
  }
  window.addEventListener("resize", callback);
  // Optional: add matchMedia listeners here if needed, but resize is fine for now
  return () => window.removeEventListener("resize", callback);
};

export function useViewport() {
  const width = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return {
    isClient: width > 0, // Helps determine if we are hydrated
    isDesktop: width >= 1024,
    isMobile: width > 0 && width < 768,
    isSplitScreen: width >= 768 && width < 1100, // Safe threshold to collapse horizontal menus
    isTablet: width >= 768 && width < 1024,
    width,
  };
}
