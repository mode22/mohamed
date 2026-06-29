"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scrollRevealConfig } from "@/lib/animations";
import GoldOrnament from "./decorations/GoldOrnament";

export default function ThankYouSection() {
  return (
    <section
      id="thankyou"
      className="relative py-24 px-6 flex flex-col items-center"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(201, 169, 110, 0.06) 0%, transparent 50%)",
        }}
      />

      <motion.div
        variants={staggerContainer}
        {...scrollRevealConfig}
        className="max-w-lg w-full text-center relative z-10"
      >
        {/* Decorative icon */}
        <motion.div
          variants={fadeInUp}
          className="mb-6"
        >
          <motion.span
            className="text-4xl inline-block"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🕊️
          </motion.span>
        </motion.div>

        {/* Thank you text */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-[family-name:var(--font-arabic-heading)] gold-shimmer mb-6"
        >
          النهاية
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-[var(--color-text-secondary)] text-base leading-[2] arabic-text mb-6"
        >
          شكراً لكم على مشاركتنا هذه اللحظات الجميلة
          <br />
          نتطلع لرؤيتكم في أسعد أيام حياتنا
        </motion.p>

        <GoldOrnament variant="divider" />

        {/* Names */}
        <motion.div
          variants={fadeInUp}
          className="mt-6"
        >
          <p className="text-2xl font-[family-name:var(--font-arabic-heading)] text-[var(--color-accent-champagne)]">
            محمد
            <span className="text-[var(--color-accent-gold)] mx-3 font-[family-name:var(--font-english)]">
              &
            </span>
            علا
          </p>
        </motion.div>

        {/* Decorative hearts */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex items-center justify-center gap-3"
        >
          {["💛", "🤍", "💛"].map((heart, i) => (
            <motion.span
              key={i}
              className="text-lg"
              animate={{
                y: [0, -5, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {heart}
            </motion.span>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={fadeInUp}
          className="mt-12 text-[var(--color-text-muted)] text-xs flex items-center justify-center gap-1.5"
        >
          <span>صُممت بكل حب</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="var(--color-accent-gold)"
            className="text-[var(--color-accent-gold)] inline-block animate-pulse-soft"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.p>
      </motion.div>
    </section>
  );
}
