"use client";

import { motion } from "framer-motion";

interface GoldOrnamentProps {
  variant?: "divider" | "corner-tl" | "corner-br" | "frame" | "small-divider";
  className?: string;
}

export default function GoldOrnament({
  variant = "divider",
  className = "",
}: GoldOrnamentProps) {
  if (variant === "divider") {
    return (
      <motion.div
        className={`flex items-center justify-center gap-3 py-4 ${className}`}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <svg width="80" height="2" viewBox="0 0 80 2" className="rtl:rotate-0">
          <defs>
            <linearGradient id="gold-grad-l" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="#c9a96e" />
            </linearGradient>
          </defs>
          <line x1="0" y1="1" x2="80" y2="1" stroke="url(#gold-grad-l)" strokeWidth="1" />
        </svg>

        <svg width="20" height="20" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="gold-diamond" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4bc8a" />
              <stop offset="50%" stopColor="#c9a96e" />
              <stop offset="100%" stopColor="#a88a50" />
            </linearGradient>
          </defs>
          <path
            d="M10 2 L18 10 L10 18 L2 10 Z"
            fill="none"
            stroke="url(#gold-diamond)"
            strokeWidth="1"
          />
          <circle cx="10" cy="10" r="2" fill="#c9a96e" />
        </svg>

        <svg width="80" height="2" viewBox="0 0 80 2">
          <defs>
            <linearGradient id="gold-grad-r" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c9a96e" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <line x1="0" y1="1" x2="80" y2="1" stroke="url(#gold-grad-r)" strokeWidth="1" />
        </svg>
      </motion.div>
    );
  }

  if (variant === "small-divider") {
    return (
      <motion.div
        className={`flex items-center justify-center gap-2 py-2 ${className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="h-[1px] w-8 bg-gradient-to-l from-[var(--color-accent-gold)] to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)]" />
        <div className="h-[1px] w-8 bg-gradient-to-r from-[var(--color-accent-gold)] to-transparent" />
      </motion.div>
    );
  }

  if (variant === "frame") {
    return (
      <svg
        className={`absolute ${className}`}
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        <defs>
          <linearGradient id="gold-frame-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4bc8a" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#c9a96e" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#a88a50" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M10 0 Q0 0 0 10 L0 40"
          stroke="url(#gold-frame-grad)"
          strokeWidth="1"
        />
        <path
          d="M0 10 Q0 0 10 0 L40 0"
          stroke="url(#gold-frame-grad)"
          strokeWidth="1"
        />
        <circle cx="4" cy="4" r="1.5" fill="#c9a96e" opacity="0.5" />
      </svg>
    );
  }

  // Corner variants
  const rotation = variant === "corner-tl" ? "" : "rotate-180";
  return (
    <svg
      className={`absolute ${rotation} ${className}`}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
    >
      <path
        d="M0 60 Q0 0 60 0"
        stroke="#c9a96e"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <path
        d="M0 40 Q0 10 30 0"
        stroke="#c9a96e"
        strokeWidth="0.5"
        opacity="0.2"
      />
    </svg>
  );
}
