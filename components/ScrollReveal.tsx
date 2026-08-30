"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Children,
  isValidElement,
  useId,
  useSyncExternalStore,
  type ReactElement,
  type ReactNode,
  type CSSProperties,
} from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  stagger?: number;
  duration?: number;
  /** Animate on mount (for above-the-fold content) instead of waiting for scroll */
  playOnMount?: boolean;
}

const OFFSET = 24;

const viewport = { once: true, amount: 0.2 } as const;

const itemTransition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  form: motion.form,
  ul: motion.ul,
  li: motion.li,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  a: motion.a,
} as const;

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

function getHiddenStyle(direction: Direction): CSSProperties {
  switch (direction) {
    case "up":
      return { opacity: 0, transform: `translateY(${OFFSET}px)` };
    case "down":
      return { opacity: 0, transform: `translateY(-${OFFSET}px)` };
    case "left":
      return { opacity: 0, transform: `translateX(${OFFSET}px)` };
    case "right":
      return { opacity: 0, transform: `translateX(-${OFFSET}px)` };
    case "none":
      return { opacity: 0 };
    default:
      return { opacity: 0, transform: `translateY(${OFFSET}px)` };
  }
}

function getHiddenState(direction: Direction) {
  switch (direction) {
    case "up":
      return { opacity: 0, y: OFFSET };
    case "down":
      return { opacity: 0, y: -OFFSET };
    case "left":
      return { opacity: 0, x: OFFSET };
    case "right":
      return { opacity: 0, x: -OFFSET };
    case "none":
      return { opacity: 0 };
    default:
      return { opacity: 0, y: OFFSET };
  }
}

function getVisibleState(direction: Direction) {
  switch (direction) {
    case "up":
    case "down":
      return { opacity: 1, y: 0 };
    case "left":
    case "right":
      return { opacity: 1, x: 0 };
    case "none":
      return { opacity: 1 };
    default:
      return { opacity: 1, y: 0 };
  }
}

function StaggerItem({
  child,
  index,
  variants,
}: {
  child: ReactElement;
  index: number;
  variants: Variants;
}) {
  const tag = typeof child.type === "string" ? child.type : null;
  const MotionTag =
    tag && tag in motionTags
      ? motionTags[tag as keyof typeof motionTags]
      : null;

  if (MotionTag) {
    return (
      <MotionTag
        key={child.key ?? index}
        variants={variants}
        {...(child.props as object)}
      />
    );
  }

  if (typeof child.type !== "string") {
    return (
      <motion.div key={child.key ?? index} variants={variants} className="h-full">
        {child}
      </motion.div>
    );
  }

  return (
    <motion.div key={child.key ?? index} variants={variants} className="contents">
      {child}
    </motion.div>
  );
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  stagger,
  duration = 0.6,
  playOnMount = false,
}: ScrollRevealProps) {
  const pathname = usePathname();
  const instanceId = useId();
  const resetKey = `${instanceId}-${pathname}`;

  const isMotionReady = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  if (!isMotionReady) {
    return (
      <div className={className} style={getHiddenStyle(direction)}>
        {children}
      </div>
    );
  }

  const hidden = getHiddenState(direction);
  const visible = getVisibleState(direction);
  const transition = {
    duration,
    ease: itemTransition.ease,
  };

  const motionProps = playOnMount
    ? {
        initial: hidden,
        animate: visible,
        transition: { ...transition, delay },
      }
    : {
        initial: hidden,
        whileInView: visible,
        viewport,
        transition: { ...transition, delay },
      };

  if (stagger !== undefined) {
    const containerVariants: Variants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: stagger,
          delayChildren: delay,
        },
      },
    };

    const itemVariants: Variants = {
      hidden,
      visible: {
        ...visible,
        transition,
      },
    };

    const staggerMotionProps = playOnMount
      ? {
          initial: "hidden" as const,
          animate: "visible" as const,
        }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport,
        };

    return (
      <motion.div
        key={resetKey}
        className={className}
        variants={containerVariants}
        {...staggerMotionProps}
      >
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return child;
          return (
            <StaggerItem
              key={child.key ?? index}
              child={child}
              index={index}
              variants={itemVariants}
            />
          );
        })}
      </motion.div>
    );
  }

  return (
    <motion.div key={resetKey} className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}
