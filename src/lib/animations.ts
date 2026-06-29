import { Variants } from "framer-motion";

// ===== FRAMER MOTION VARIANTS =====

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const blurFadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: -30 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const letterReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const floatingAnimation = {
  y: [-8, 8, -8],
  transition: {
    duration: 6,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

export const rotatingFloat = {
  y: [-5, 5, -5],
  rotate: [-2, 2, -2],
  transition: {
    duration: 8,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

export const pulseGlow = {
  boxShadow: [
    "0 0 5px rgba(201, 169, 110, 0.1)",
    "0 0 20px rgba(201, 169, 110, 0.3)",
    "0 0 5px rgba(201, 169, 110, 0.1)",
  ],
  transition: {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

// ===== SCROLL ANIMATION CONFIG =====
export const scrollRevealConfig = {
  viewport: { once: true, margin: "-80px" },
  initial: "hidden",
  whileInView: "visible",
};

// ===== TRANSITION PRESETS =====
export const luxuryTransition = {
  duration: 0.8,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export const bounceTransition = {
  duration: 0.6,
  ease: [0.34, 1.56, 0.64, 1] as const,
};

export const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
};
