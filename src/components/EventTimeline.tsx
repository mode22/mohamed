"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scrollRevealConfig, cardReveal } from "@/lib/animations";
import GlassCard from "./ui/GlassCard";

interface TimelineEvent {
  time: string;
  title: string;
  icon: string;
}

const events: TimelineEvent[] = [
  { time: "PM 8:00", title: "استقبال الضيوف", icon: "🌙" },
  { time: "PM 9:00", title: "دخول العروسين", icon: "💍" },
];

export default function EventTimeline() {
  return (
    <section
      id="timeline"
      className="relative py-20 px-6 flex flex-col items-center"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-[family-name:var(--font-arabic-heading)] text-[var(--color-accent-champagne)] text-center mb-10"
        {...scrollRevealConfig}
        variants={fadeInUp}
      >
        برنامج المناسبة
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        {...scrollRevealConfig}
        className="max-w-lg w-full"
      >
        <GlassCard variant="strong" hover={false} className="!p-6 sm:!p-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--color-accent-gold)] to-transparent" />

            <div className="space-y-12 relative">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  variants={cardReveal}
                  className="flex items-center gap-4"
                  style={{
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  }}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                  >
                    <p className="text-[var(--color-accent-champagne)] text-base font-[family-name:var(--font-arabic-heading)]">
                      {event.title}
                    </p>
                  </div>

                  {/* Dot */}
                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    whileInView={{
                      scale: [0, 1.3, 1],
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="timeline-dot flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-accent-gold-light)]" />
                    </div>
                    {/* Glow ring */}
                    <motion.div
                      className="absolute inset-[-4px] rounded-full border border-[var(--color-accent-gold)]"
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>

                  {/* Time */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "text-left" : "text-right"}`}
                  >
                    <span className="text-[var(--color-accent-gold)] text-sm font-[family-name:var(--font-display)]" dir="ltr">
                      {event.icon} {event.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
