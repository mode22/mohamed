"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
  onEnterClicked: () => void;
}

export default function LoadingScreen({ onComplete, onEnterClicked }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          return 100;
        }
        return prev + Math.random() * 12 + 4;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    try {
      onEnterClicked();
    } catch (e) {
      console.warn("Autoplay block bypass error:", e);
    }
    onComplete(); // انتقال مباشر
  };

  return (
    <AnimatePresence>
      {true && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #1e1a16 0%, #2a2420 50%, #1e1a16 100%)",
          }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
          }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Decorative background circles */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(201, 169, 110, 0.06) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Monogram */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="text-4xl sm:text-5xl font-[family-name:var(--font-arabic-heading)] gold-shimmer"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(201, 169, 110, 0.2)",
                    "0 0 30px rgba(201, 169, 110, 0.4)",
                    "0 0 10px rgba(201, 169, 110, 0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                محمد & علا
              </motion.div>
            </div>
          </motion.div>

          {/* Wedding text */}
          <motion.p
            className="text-[var(--color-text-secondary)] text-lg mb-8 font-[family-name:var(--font-arabic)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            حفل زفاف
          </motion.p>

          {/* Progress bar or Enter Button */}
          <div className="h-16 flex flex-col items-center justify-center mt-6 relative z-50">
            {!isLoaded ? (
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-48 h-[2px] bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, var(--color-accent-gold-dark), var(--color-accent-gold-light))",
                      width: `${Math.min(progress, 100)}%`,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                {/* Loading dots */}
                <motion.div
                  className="flex gap-1.5 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)]"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            ) : (
              <motion.button
                onClick={handleEnter}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full text-base font-[family-name:var(--font-arabic)] bg-gradient-to-l from-[var(--color-accent-gold-dark)] to-[var(--color-accent-gold-light)] text-[var(--color-bg-primary)] shadow-[var(--shadow-button)] font-semibold cursor-pointer border border-[rgba(255,255,255,0.1)] hover:shadow-lg transition-all duration-300 relative z-50"
              >
                دخول الدعوة
              </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
