import { useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, subscribe } from "./viewport.store";
import type { ViewportConfig, ViewportState } from "./viewport.types";
import { resolveBreakpoint } from "./viewport.utils";

// ─────────────────────────────────────────────
// SECTION: Hook
// ─────────────────────────────────────────────

/**
 * Reactive hook that provides a normalized description of the current
 * viewport and environment. Driven by the layout viewport, visual
 * viewport, screen APIs, and capability detection — never user-agent strings.
 *
 * All consumers share a single set of global event listeners via a
 * singleton store. The hook returns a stable object reference that only
 * changes when measured values actually differ.
 *
 * When no config is provided, uses default Tailwind-aligned breakpoints.
 * Custom breakpoints override only the `breakpoint` field; all raw
 * measurements remain identical across all consumers.
 *
 * @example
 * ```tsx
 * const { width, breakpoint, orientation, capabilities } = useViewport();
 *
 * // With custom breakpoints
 * const { breakpoint } = useViewport({
 *   breakpoints: { compact: 0, medium: 600, expanded: 840 },
 * });
 * ```
 */
export function useViewport(config?: ViewportConfig): ViewportState {
  const rawSnapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  if (!config?.breakpoints) {
    return rawSnapshot;
  }

  const customBreakpoint = resolveBreakpoint(
    rawSnapshot.width,
    config.breakpoints
  );

  // Preserve referential stability when custom breakpoints produce
  // the same result as the default breakpoints
  if (customBreakpoint === rawSnapshot.breakpoint) {
    return rawSnapshot;
  }

  return { ...rawSnapshot, breakpoint: customBreakpoint };
}
