"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scrollRevealConfig, cardReveal } from "@/lib/animations";
import GlassCard from "./ui/GlassCard";
import LuxuryButton from "./ui/LuxuryButton";
import GoldOrnament from "./decorations/GoldOrnament";

const LOCATION_URL = "https://maps.app.goo.gl/fV849NWW8YD76SKf6?g_st=iw";

const AUGUST_2026 = {
  year: 2026,
  month: "أغسطس",
  monthEn: "August",
  days: 31,
  startDay: 0, // August 1, 2026 is Saturday (0 in our Sat-Fri cycle)
  highlightDay: 7,
};

const DAY_NAMES = ["السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"];

export default function WeddingDetails() {
  const handleViewLocation = () => {
    window.open(LOCATION_URL, "_blank");
  };

  const handleAddToCalendar = () => {
    // Google Calendar URL
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("حفل زفاف محمد و أولا")}&dates=20260807T180000Z/20260807T230000Z&details=${encodeURIComponent("يسعدنا دعوتكم لحضور حفل زفافنا")}&location=${encodeURIComponent("Wedding Venue")}`;
    window.open(calendarUrl, "_blank");
  };

  const renderCalendar = () => {
    const days: (number | null)[] = [];
    // Fill empty cells before the first day
    for (let i = 0; i < AUGUST_2026.startDay; i++) {
      days.push(null);
    }
    // Fill actual days
    for (let i = 1; i <= AUGUST_2026.days; i++) {
      days.push(i);
    }

    return (
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {/* Day headers */}
        {DAY_NAMES.map((day) => (
          <div key={day} className="text-[var(--color-text-muted)] text-xs py-1">
            {day}
          </div>
        ))}
        {/* Calendar cells */}
        {days.map((day, index) => (
          <div
            key={index}
            className={`
              py-1.5 rounded-lg text-sm transition-all duration-300
              ${day === AUGUST_2026.highlightDay
                ? "bg-[var(--color-accent-gold)] text-[var(--color-bg-primary)] font-bold shadow-lg scale-110"
                : day
                  ? "text-[var(--color-text-secondary)] hover:bg-[rgba(255,255,255,0.05)]"
                  : ""
              }
            `}
          >
            {day || ""}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="details"
      className="relative py-20 px-6 flex flex-col items-center"
    >
      {/* Section header */}
      <motion.h2
        className="text-3xl sm:text-4xl font-[family-name:var(--font-arabic-heading)] text-[var(--color-accent-champagne)] text-center mb-10"
        {...scrollRevealConfig}
        variants={fadeInUp}
      >
        تفاصيل الحفل
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        {...scrollRevealConfig}
        className="max-w-xl w-full space-y-16"
      >
        {/* Location card */}
        <motion.div variants={cardReveal}>
          <GlassCard variant="strong" className="text-center px-4 sm:px-8 py-8">
            <p className="text-[var(--color-text-muted)] text-sm mb-2">الموقع</p>
            <p className="text-[var(--color-accent-champagne)] text-xl sm:text-2xl font-[family-name:var(--font-arabic-heading)] arabic-text leading-relaxed font-semibold">
              Port Said Grand L&apos;Amour Mredian
            </p>
            <GoldOrnament variant="small-divider" className="my-3" />
            <LuxuryButton
              variant="outline"
              size="md"
              onClick={handleViewLocation}
              ariaLabel="عرض موقع الحفل على الخريطة"
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[var(--color-accent-gold)]"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
            >
              عرض الموقع
            </LuxuryButton>
          </GlassCard>
        </motion.div>

        {/* Calendar card */}
        <motion.div variants={cardReveal}>
          <GlassCard variant="strong" className="text-center px-4 sm:px-8 py-8">
            {/* Month navigation display */}
            <div className="flex items-center justify-between mb-6 px-2">
              <span className="text-[var(--color-text-muted)] text-sm">الزفاف</span>
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-accent-gold)] text-sm">🌙</span>
                <span className="text-[var(--color-accent-champagne)] font-[family-name:var(--font-arabic-heading)] text-lg">
                  {AUGUST_2026.month}
                </span>
              </div>
              <span className="text-[var(--color-text-muted)] text-sm font-[family-name:var(--font-display)]">
                {AUGUST_2026.year}
              </span>
            </div>

            {/* Calendar grid */}
            {renderCalendar()}

            {/* Highlighted date detail */}
            <motion.div
              className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <GlassCard variant="subtle" className="!p-4 text-center">
                <p className="text-5xl font-[family-name:var(--font-display)] text-[var(--color-accent-warm-white)] font-bold mb-2">
                  07
                </p>
                <p className="text-[var(--color-text-secondary)] text-base mb-1">
                  الجمعة
                </p>
                <p className="text-[var(--color-accent-gold)] text-lg font-[family-name:var(--font-display)]" dir="ltr">
                  PM 9:00
                </p>
              </GlassCard>
            </motion.div>
          </GlassCard>
        </motion.div>

        {/* Save the date button */}
        <motion.div variants={cardReveal} className="flex justify-center pt-2">
          <LuxuryButton
            variant="glass"
            size="lg"
            onClick={handleAddToCalendar}
            ariaLabel="إضافة الموعد إلى التقويم"
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[var(--color-accent-gold)]"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            }
          >
            احفظ الموعد
          </LuxuryButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
