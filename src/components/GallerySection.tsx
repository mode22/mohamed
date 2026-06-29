"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scrollRevealConfig, cardReveal } from "@/lib/animations";

const GALLERY_PLACEHOLDERS = [
  { id: 1, gradient: "from-[#3a3430] to-[#2a2420]", icon: "📸" },
  { id: 2, gradient: "from-[#2e2824] to-[#3a3430]", icon: "💐" },
  { id: 3, gradient: "from-[#3a3430] to-[#2e2824]", icon: "💍" },
  { id: 4, gradient: "from-[#2a2420] to-[#3a3430]", icon: "🕌" },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative py-20 px-6 flex flex-col items-center"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-[family-name:var(--font-arabic-heading)] text-[var(--color-accent-champagne)] text-center mb-4"
        {...scrollRevealConfig}
        variants={fadeInUp}
      >
        ذكريات جميلة
      </motion.h2>

      <motion.p
        className="text-[var(--color-text-muted)] text-sm text-center mb-10"
        {...scrollRevealConfig}
        variants={fadeInUp}
      >
        لحظات من حفل زفافنا
      </motion.p>

      <motion.div
        variants={staggerContainer}
        {...scrollRevealConfig}
        className="max-w-lg w-full grid grid-cols-2 gap-3"
      >
        {GALLERY_PLACEHOLDERS.map((item, index) => (
          <motion.div
            key={item.id}
            variants={cardReveal}
            className={`
              relative overflow-hidden rounded-2xl
              ${index === 0 ? "col-span-2 h-48" : "h-40"}
            `}
          >
            {/* Placeholder with gradient */}
            <div
              className={`
                w-full h-full bg-gradient-to-br ${item.gradient}
                flex flex-col items-center justify-center
                border border-[rgba(255,255,255,0.06)]
              `}
            >
              <motion.span
                className="text-3xl mb-2"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                {item.icon}
              </motion.span>
              <p className="text-[var(--color-text-muted)] text-xs">
                صور قريباً
              </p>
            </div>

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
