"use client";

import { useLayoutEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/** Resets scroll position on route change so in-view animations can re-trigger. */
export default function NavigationAnimationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.get();

    if (smoother) {
      smoother.scrollTo(0, false);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return children;
}
