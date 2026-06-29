"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

interface LuxuryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "gold" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
}

export default function LuxuryButton({
  children,
  onClick,
  variant = "gold",
  size = "md",
  className = "",
  icon,
  ariaLabel,
  disabled = false,
}: LuxuryButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = "20px";
    ripple.style.height = "20px";

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    onClick?.();
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    gold: `
      bg-gradient-to-l from-[var(--color-accent-gold-dark)] via-[var(--color-accent-gold)] to-[var(--color-accent-gold-light)]
      text-[var(--color-bg-primary)]
      shadow-[var(--shadow-button)]
      font-bold
    `,
    glass: `
      glass
      text-[var(--color-text-primary)]
      border border-[var(--color-border)]
    `,
    outline: `
      bg-transparent
      text-[var(--color-accent-gold)]
      border border-[var(--color-border-gold)]
    `,
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`
        ripple-container
        rounded-xl
        font-[family-name:var(--font-arabic)]
        cursor-pointer
        inline-flex items-center justify-center gap-2
        transition-all
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      whileHover={
        disabled
          ? undefined
          : {
              scale: 1.04,
              boxShadow: "0 0 24px rgba(201, 169, 110, 0.25)",
            }
      }
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={handleRipple}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
}
