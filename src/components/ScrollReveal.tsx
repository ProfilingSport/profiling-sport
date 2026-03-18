"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ───────────────────────── Variants ───────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const variantMap = {
  "fade-up": fadeUp,
  "fade-in": fadeIn,
  "scale-in": scaleIn,
} as const;

/* ───────────────────────── Props ───────────────────────── */

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation variant (default: "fade-up") */
  variant?: keyof typeof variantMap;
  /** Animation duration in seconds (default: 0.6) */
  duration?: number;
  /** Delay in seconds (default: 0) */
  delay?: number;
  /** Viewport threshold to trigger (default: 0.15) */
  threshold?: number;
  /** Extra className */
  className?: string;
  /** Render as a different element (default: div) */
  as?: "div" | "section" | "article" | "li" | "span";
}

/* ───────────────────────── Component ───────────────────────── */

export default function ScrollReveal({
  children,
  variant = "fade-up",
  duration = 0.6,
  delay = 0,
  threshold = 0.15,
  className = "",
  as = "div",
}: ScrollRevealProps) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}

/* ───────────────────────── Stagger container ───────────────────────── */

interface StaggerContainerProps {
  children: ReactNode;
  /** Delay between each child (default: 0.1s) */
  stagger?: number;
  /** Extra className */
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

export function StaggerContainer({
  children,
  stagger = 0.1,
  className = "",
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────── Stagger item ───────────────────────── */

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variantMap;
  duration?: number;
}

export function StaggerItem({
  children,
  className = "",
  variant = "fade-up",
  duration = 0.5,
}: StaggerItemProps) {
  return (
    <motion.div
      variants={variantMap[variant]}
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
