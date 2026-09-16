import { type RefObject, useEffect, useMemo, useState } from "react";
import { DEFAULT_BREAKPOINTS } from "./viewport.constants";
import type { ContainerViewportState, ViewportConfig } from "./viewport.types";
import { resolveBreakpoint, resolveOrientation } from "./viewport.utils";

// ─────────────────────────────────────────────
// SECTION: Constants
// ─────────────────────────────────────────────

const EMPTY_STATE: ContainerViewportState = {
  aspectRatio: 0,
  breakpoint: "xs",
  height: 0,
  orientation: "portrait",
  width: 0,
};

// ─────────────────────────────────────────────
// SECTION: Hook
// ─────────────────────────────────────────────

/**
 * Measures a specific container element's dimensions via ResizeObserver.
 * Fully independent of the global viewport — responds only to the
 * element's own size changes from CSS grid, flexbox, sidebar collapse,
 * split-pane drag, and any other layout recalculation.
 *
 * Prefer this over useViewport() when a component needs to adapt its
 * layout to its available container space rather than the browser window.
 * A sidebar component inside a 300px panel should not think it's on a
 * "desktop" layout just because the browser window is 1920px wide.
 *
 * @param ref - React ref attached to the container element to observe
 * @param config - Optional custom breakpoints for container classification
 *
 * @example
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null);
 * const { width, breakpoint } = useContainerViewport(containerRef);
 *
 * return (
 *   <div ref={containerRef}>
 *     {breakpoint === 'xs' ? <CompactLayout /> : <WideLayout />}
 *   </div>
 * );
 * ```
 *
 * NOTE: If the ref target conditionally renders (mounts/unmounts), the
 * observer will not re-attach automatically when it reappears. Use a
 * React `key` prop on the parent to force remount in that scenario.
 */
export function useContainerViewport(
  ref: RefObject<HTMLElement | null>,
  config?: ViewportConfig
): ContainerViewportState {
  const [size, setSize] = useState({ height: 0, width: 0 });
  const breakpoints = config?.breakpoints ?? DEFAULT_BREAKPOINTS;

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (typeof ResizeObserver === "undefined") {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "[useContainerViewport] ResizeObserver is not supported. Container measurements will not update."
        );
      }
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const [entry] = entries;
      if (!entry) {
        return;
      }

      // borderBoxSize provides dimensions including padding and border,
      // more accurate for layout calculations. Falls back to contentRect
      // which excludes padding/border but has wider support.
      const box = entry.borderBoxSize?.[0];
      const width = box ? box.inlineSize : entry.contentRect.width;
      const height = box ? box.blockSize : entry.contentRect.height;

      setSize((prev) =>
        prev.width === width && prev.height === height
          ? prev
          : { height, width }
      );
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return useMemo<ContainerViewportState>(() => {
    if (size.width === 0 && size.height === 0) {
      return EMPTY_STATE;
    }

    const orientation = resolveOrientation(size.width, size.height);
    const breakpoint = resolveBreakpoint(size.width, breakpoints);
    const aspectRatio = size.height > 0 ? size.width / size.height : 0;

    return {
      aspectRatio,
      breakpoint,
      height: size.height,
      orientation,
      width: size.width,
    };
  }, [size.width, size.height, breakpoints]);
}
