"use client";

import { motion } from "framer-motion";
import { fadeInUp, blurFadeIn, staggerContainer, scrollRevealConfig } from "@/lib/animations";
import GoldOrnament from "./decorations/GoldOrnament";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(201, 169, 110, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Decorative arch background */}
      <motion.div
        className="absolute top-[8%] w-[90%] max-w-[420px] h-[80%] rounded-t-full border border-[rgba(201,169,110,0.12)] pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: "linear-gradient(180deg, rgba(201, 169, 110, 0.04) 0%, transparent 60%)",
        }}
      />

      <motion.div
        variants={staggerContainer}
        {...scrollRevealConfig}
        className="relative z-10 flex flex-col items-center text-center max-w-lg"
      >
        {/* Small header */}
        <motion.p
          variants={fadeInUp}
          className="text-[var(--color-text-muted)] text-sm tracking-widest mb-6 font-[family-name:var(--font-arabic)]"
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </motion.p>

        {/* Main calligraphy title */}
        <motion.h1
          variants={blurFadeIn}
          className="text-5xl sm:text-6xl md:text-7xl font-[family-name:var(--font-arabic-heading)] gold-shimmer mb-4 leading-tight"
        >
          حفل زفاف
        </motion.h1>

        <GoldOrnament variant="small-divider" />

        {/* Names (Replacing Monogram with Full Names) */}
        <motion.div
          variants={fadeInUp}
          className="my-10"
        >
          <motion.div
            className="relative flex flex-col items-center gap-2"
            animate={{
              textShadow: [
                "0 0 20px rgba(201, 169, 110, 0.1)",
                "0 0 40px rgba(201, 169, 110, 0.25)",
                "0 0 20px rgba(201, 169, 110, 0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <h2 className="text-6xl sm:text-7xl font-[family-name:var(--font-arabic-heading)] text-[var(--color-accent-warm-white)]">
              محمد
            </h2>
            <span className="text-3xl sm:text-4xl font-[family-name:var(--font-english)] text-[var(--color-accent-gold)] my-1">
              &
            </span>
            <h2 className="text-6xl sm:text-7xl font-[family-name:var(--font-arabic-heading)] text-[var(--color-accent-warm-white)]">
              علا
            </h2>
          </motion.div>
        </motion.div>

        <GoldOrnament variant="divider" />

        {/* Date */}
        <motion.div
          variants={fadeInUp}
          className="mt-4"
        >
          <p className="text-[var(--color-text-secondary)] text-lg font-[family-name:var(--font-arabic)] arabic-text">
            الجمعة, 07 أغسطس 2026 في 9:00 م
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.p
          className="text-[var(--color-text-muted)] text-xs tracking-wider"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          اسحب للأعلى
        </motion.p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-accent-gold)"
            strokeWidth="1.5"
          >
            <path d="M7 10l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
