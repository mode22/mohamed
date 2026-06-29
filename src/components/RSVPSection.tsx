"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, staggerContainer, scrollRevealConfig, cardReveal } from "@/lib/animations";
import GlassCard from "./ui/GlassCard";
import LuxuryButton from "./ui/LuxuryButton";
import GoldOrnament from "./decorations/GoldOrnament";

export default function RSVPSection() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim()) return;
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section
      id="rsvp"
      className="relative py-20 px-6 flex flex-col items-center"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-[family-name:var(--font-arabic-heading)] text-[var(--color-accent-champagne)] text-center mb-10"
        {...scrollRevealConfig}
        variants={fadeInUp}
      >
        تأكيد الحضور
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        {...scrollRevealConfig}
        className="max-w-lg w-full"
      >
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <GlassCard variant="strong" className="text-center !py-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              >
                <span className="text-5xl block mb-4">🎉</span>
              </motion.div>
              <h3 className="text-2xl font-[family-name:var(--font-arabic-heading)] text-[var(--color-accent-champagne)] mb-3">
                شكراً لتأكيد حضوركم!
              </h3>
              <p className="text-[var(--color-text-secondary)] arabic-text">
                نتطلع لرؤيتكم في حفل زفافنا
              </p>
              <GoldOrnament variant="small-divider" className="mt-4" />
              <p className="text-[var(--color-accent-gold)] mt-3 text-sm">
                Can&apos;t wait! 💛
              </p>
            </GlassCard>
          </motion.div>
        ) : (
          <motion.div variants={cardReveal}>
            <GlassCard variant="strong" hover={false} className="!p-6 sm:!p-8">
              <div className="space-y-5">
                {/* Name input */}
                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="rsvp-name"
                    className="block text-[var(--color-text-secondary)] text-sm mb-2"
                  >
                    الاسم الكريم
                  </label>
                  <input
                    id="rsvp-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="أدخل اسمك الكريم"
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-gold)] focus:ring-1 focus:ring-[var(--color-accent-gold)] transition-all duration-300 outline-none font-[family-name:var(--font-arabic)] text-right"
                    aria-label="أدخل اسمك"
                    dir="rtl"
                  />
                </motion.div>

                {/* Number of guests */}
                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="rsvp-guests"
                    className="block text-[var(--color-text-secondary)] text-sm mb-2"
                  >
                    عدد الحضور
                  </label>
                  <select
                    id="rsvp-guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] focus:border-[var(--color-accent-gold)] focus:ring-1 focus:ring-[var(--color-accent-gold)] transition-all duration-300 outline-none font-[family-name:var(--font-arabic)] text-right appearance-none cursor-pointer"
                    aria-label="اختر عدد الحضور"
                    dir="rtl"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n} className="bg-[var(--color-bg-primary)]">
                        {n} {n === 1 ? "شخص" : "أشخاص"}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div variants={fadeInUp}>
                  <label
                    htmlFor="rsvp-message"
                    className="block text-[var(--color-text-secondary)] text-sm mb-2"
                  >
                    رسالة (اختياري)
                  </label>
                  <textarea
                    id="rsvp-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب رسالتك للعروسين..."
                    rows={3}
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-gold)] focus:ring-1 focus:ring-[var(--color-accent-gold)] transition-all duration-300 outline-none font-[family-name:var(--font-arabic)] text-right resize-none"
                    aria-label="اكتب رسالتك"
                    dir="rtl"
                  />
                </motion.div>

                {/* Submit button */}
                <motion.div variants={fadeInUp} className="pt-2">
                  <LuxuryButton
                    variant="gold"
                    size="lg"
                    onClick={handleSubmit}
                    disabled={!name.trim() || isSubmitting}
                    className="w-full"
                    ariaLabel="تأكيد الحضور"
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block"
                      >
                        ⏳
                      </motion.span>
                    ) : (
                      "تأكيد الحضور"
                    )}
                  </LuxuryButton>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
