"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scrollRevealConfig, blurFadeIn } from "@/lib/animations";
import GoldOrnament from "./decorations/GoldOrnament";

export default function WelcomeMessage() {
  return (
    <section
      id="welcome"
      className="relative py-20 px-6 flex flex-col items-center"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(201, 169, 110, 0.04) 0%, transparent 60%)",
        }}
      />

      <motion.div
        variants={staggerContainer}
        {...scrollRevealConfig}
        className="max-w-lg w-full text-center relative z-10"
      >
        {/* Decorative emoji */}
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="text-3xl">💝</span>
        </motion.div>

        {/* Welcome text */}
        <motion.p
          variants={blurFadeIn}
          className="text-[var(--color-text-secondary)] text-lg leading-[2] arabic-text mb-8"
        >
          بقلوب يملؤها الفرح والامتنان يسعدنا أن نشارككم
          أجمل لحظات حياتنا وأن نحتفل معكم ببداية رحلة
          جديدة جمع الله بيننا فيها بالمودة والرحمة.
        </motion.p>

        <GoldOrnament variant="divider" />

        {/* Couple names */}
        <motion.div
          variants={fadeInUp}
          className="mt-8"
        >
          <motion.div
            className="inline-block"
            whileInView={{
              textShadow: [
                "0 0 10px rgba(201, 169, 110, 0)",
                "0 0 20px rgba(201, 169, 110, 0.2)",
                "0 0 10px rgba(201, 169, 110, 0)",
              ],
            }}
            viewport={{ once: true }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h3 className="text-3xl sm:text-4xl font-[family-name:var(--font-arabic-heading)] text-[var(--color-accent-champagne)]">
              محمد
            </h3>
            <span className="text-2xl text-[var(--color-accent-gold)] font-[family-name:var(--font-english)] block my-2">
              &
            </span>
            <h3 className="text-3xl sm:text-4xl font-[family-name:var(--font-arabic-heading)] text-[var(--color-accent-champagne)]">
              علا
            </h3>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
