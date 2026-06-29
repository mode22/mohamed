"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  variant?: "default" | "strong" | "subtle";
  gold?: boolean;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  variant = "default",
  gold = false,
  className = "",
  hover = true,
  ...props
}: GlassCardProps) {
  const variantClasses = {
    default: "glass",
    strong: "glass-strong",
    subtle: "glass-subtle",
  };

  return (
    <motion.div
      className={`
        ${variantClasses[variant]}
        ${gold ? "gold-border" : ""}
        p-6 
        ${className}
      `}
      whileHover={
        hover
          ? {
              scale: 1.01,
              boxShadow: "0 12px 48px rgba(0, 0, 0, 0.4)",
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
