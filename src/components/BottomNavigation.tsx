"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";

interface BottomNavigationProps {
  onMusicToggle: () => void;
  isMusicPlaying: boolean;
}

interface NavItem {
  id: string;
  label: string;
  icon: string;
  section?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "بداية", icon: "🏠", section: "hero" },
  { id: "music", label: "موسيقى", icon: "🎵" },
];

export default function BottomNavigation({
  onMusicToggle,
  isMusicPlaying,
}: BottomNavigationProps) {
  const [activeId, setActiveId] = useState("home");

  const handleClick = useCallback(
    (item: NavItem) => {
      setActiveId(item.id);

      if (item.id === "music") {
        onMusicToggle();
        return;
      }

      if (item.section) {
        const element = document.getElementById(item.section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [onMusicToggle]
  );

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)]"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      role="navigation"
      aria-label="التنقل الرئيسي"
    >
      <div className="mx-4 mb-4 glass-strong rounded-2xl">
        <div className="flex items-center justify-around py-2 px-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            const isMusicItem = item.id === "music";
            const showActive = isMusicItem ? isMusicPlaying : isActive;

            return (
              <motion.button
                key={item.id}
                onClick={() => handleClick(item)}
                className={`
                  flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all duration-300 cursor-pointer
                  ${showActive
                    ? "bg-[rgba(201,169,110,0.15)]"
                    : "hover:bg-[rgba(255,255,255,0.05)]"
                  }
                `}
                whileTap={{ scale: 0.9 }}
                aria-label={item.label}
                role="button"
                tabIndex={0}
              >
                <motion.span
                  className="text-lg"
                  animate={
                    isMusicItem && isMusicPlaying
                      ? {
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.span>
                <span
                  className={`text-[10px] ${
                    showActive
                      ? "text-[var(--color-accent-gold)]"
                      : "text-[var(--color-text-muted)]"
                  }`}
                >
                  {item.label}
                </span>
                {showActive && (
                  <motion.div
                    className="absolute bottom-1 w-1 h-1 rounded-full bg-[var(--color-accent-gold)]"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
