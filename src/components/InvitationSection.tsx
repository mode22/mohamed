"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scrollRevealConfig, blurFadeIn } from "@/lib/animations";
import GlassCard from "./ui/GlassCard";
import GoldOrnament from "./decorations/GoldOrnament";

export default function InvitationSection() {
  return (
    <section
      id="invitation"
      className="relative py-20 px-6 flex flex-col items-center"
    >
      <motion.div
        variants={staggerContainer}
        {...scrollRevealConfig}
        className="max-w-lg w-full"
      >
        {/* Calligraphy header */}
        <motion.h2
          variants={blurFadeIn}
          className="text-5xl sm:text-6xl font-[family-name:var(--font-arabic-heading)] gold-shimmer text-center mt-6 mb-12"
        >
          دعوة زفاف
        </motion.h2>

        <div className="mt-28">
          <GlassCard variant="strong" hover={false} className="text-center !pt-8">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {/* Invitation text */}
              <motion.p
                variants={fadeInUp}
                className="text-[var(--color-text-secondary)] text-lg leading-relaxed arabic-text mb-6"
              >
                يتشرفون بدعوتكم حضور
                <br />
                حفل زفافنا ...
              </motion.p>

              <GoldOrnament variant="small-divider" />

              {/* Date */}
              <motion.div variants={fadeInUp} className="my-6">
                <p className="text-[var(--color-text-secondary)] text-base mb-1">
                  يـوم الجمعة
                </p>
                <p className="text-[var(--color-accent-champagne)] text-2xl font-[family-name:var(--font-display)]" dir="ltr">
                  07.08.2026
                </p>
              </motion.div>

              <GoldOrnament variant="small-divider" />

              {/* Welcome text */}
              <motion.p
                variants={fadeInUp}
                className="text-[var(--color-text-secondary)] text-base leading-relaxed arabic-text my-6"
              >
                يسعدنا حضوركم وتواجدكم الذي
                <br />
                يضفي على ليلنا كل البهجة
                <br />
                والسرور في
              </motion.p>

              {/* Venue highlight */}
              <motion.div
                variants={fadeInUp}
                className="my-4"
              >
                <span className="text-[var(--color-accent-gold)] text-sm">✦</span>
                <p className="text-[var(--color-accent-champagne)] text-xl font-[family-name:var(--font-arabic-heading)] mt-1">
                  Port Said Grand L&apos;Amour Mredian
                </p>
              </motion.div>

              <GoldOrnament variant="small-divider" />

              {/* Closing message */}
              <motion.p
                variants={fadeInUp}
                className="text-[var(--color-text-secondary)] text-base leading-relaxed arabic-text my-6"
              >
                <span className="text-lg">🌿</span>
                <br />
                بانتظار تشريفكم لنا لنحتفل
                <br />
                معاً بهذه المناسبة السعيدة ...
                <br />
                <span className="text-lg">👰🤵</span>
              </motion.p>

              {/* Names */}
              <motion.div
                variants={fadeInUp}
                className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.08)]"
              >
                <p className="text-2xl font-[family-name:var(--font-arabic-heading)] text-[var(--color-accent-champagne)]">
                  محمد
                  <span className="text-[var(--color-accent-gold)] mx-2 font-[family-name:var(--font-english)]">&</span>
                  علا
                </p>
              </motion.div>
            </motion.div>
          </GlassCard>
        </div>
      </motion.div>
    </section>
  );
}
