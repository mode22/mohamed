"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { fadeInUp, staggerContainer, scrollRevealConfig, cardReveal } from "@/lib/animations";
import GlassCard from "./ui/GlassCard";
import { useEffect, useRef, useState } from "react";

// Wedding date: August 7, 2026, 9:00 PM (local time)
const WEDDING_DATE = new Date("2026-08-07T21:00:00");

interface CountdownCardProps {
  value: number;
  label: string;
  index: number;
}

function CountdownCard({ value, label, index }: CountdownCardProps) {
  const [prevValue, setPrevValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (value !== prevValue) {
      setIsFlipping(true);
      const timer = setTimeout(() => {
        setPrevValue(value);
        setIsFlipping(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <motion.div
      variants={cardReveal}
      custom={index}
    >
      <GlassCard
        variant="strong"
        hover={false}
        className="!p-3 sm:!p-4 text-center min-w-[70px] sm:min-w-[80px]"
      >
        <div className="relative overflow-hidden" style={{ perspective: "200px" }}>
          <AnimatePresence mode="popLayout">
            <motion.p
              key={value}
              className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-display)] text-[var(--color-accent-warm-white)] font-bold"
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: 90, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {String(value).padStart(2, "0")}
            </motion.p>
          </AnimatePresence>
        </div>
        <p className="text-[var(--color-text-muted)] text-xs sm:text-sm mt-1 font-[family-name:var(--font-arabic)]">
          {label}
        </p>
      </GlassCard>
    </motion.div>
  );
}

export default function CountdownSection() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(WEDDING_DATE);

  const countdownItems = [
    { value: seconds, label: "ثواني" },
    { value: minutes, label: "دقائق" },
    { value: hours, label: "ساعات" },
    { value: days, label: "أيام" },
  ];

  return (
    <section
      id="countdown"
      className="relative py-20 px-6 flex flex-col items-center"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(201, 169, 110, 0.05) 0%, transparent 50%)",
        }}
      />

      <motion.h2
        className="text-3xl sm:text-4xl font-[family-name:var(--font-arabic-heading)] text-[var(--color-accent-champagne)] text-center mb-10 relative z-10"
        {...scrollRevealConfig}
        variants={fadeInUp}
      >
        العد التنازلي
      </motion.h2>

      {isExpired ? (
        <motion.div
          {...scrollRevealConfig}
          variants={fadeInUp}
          className="text-center"
        >
          <GlassCard variant="strong" className="!px-10 !py-8">
            <p className="text-2xl font-[family-name:var(--font-arabic-heading)] text-[var(--color-accent-gold)]">
              🎊 اليوم الموعود! 🎊
            </p>
          </GlassCard>
        </motion.div>
      ) : (
        <motion.div
          variants={staggerContainer}
          {...scrollRevealConfig}
          className="flex gap-3 sm:gap-4 relative z-10"
          dir="ltr"
        >
          {countdownItems.map((item, index) => (
            <CountdownCard
              key={item.label}
              value={item.value}
              label={item.label}
              index={index}
            />
          ))}
        </motion.div>
      )}
    </section>
  );
}
