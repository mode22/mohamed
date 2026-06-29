"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import WelcomeMessage from "@/components/WelcomeMessage";
import WeddingDetails from "@/components/WeddingDetails";
import CountdownSection from "@/components/CountdownSection";
import ThankYouSection from "@/components/ThankYouSection";
import { useMusic } from "@/hooks/useMusic";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

// Dynamic import for heavy decoration component
const FloatingParticles = dynamic(
  () => import("@/components/decorations/FloatingParticles"),
  { ssr: false }
);

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const music = useMusic("/music/background-music.mp3");

  // Initialize smooth scrolling and get scrollTo function
  const { scrollTo } = useSmoothScroll();

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleFirstInteraction = useCallback(() => {
    if (!music.isPlaying) {
      music.fadeIn();
    }
  }, [music]);

  // Intelligent Auto-Scrolling logic inside useEffect
  useEffect(() => {
    if (isLoading) return;

    const sections = ["hero", "invitation", "welcome", "details", "countdown", "thankyou"];
    let autoScrollTimer: NodeJS.Timeout;
    let inactivityTimeout: NodeJS.Timeout;
    let isAutoScrolling = false;

    const getClosestSectionIdx = () => {
      let closestIdx = 0;
      let minDistance = Infinity;
      sections.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          const dist = Math.abs(el.getBoundingClientRect().top);
          if (dist < minDistance) {
            minDistance = dist;
            closestIdx = idx;
          }
        }
      });
      return closestIdx;
    };

    const performAutoScroll = () => {
      autoScrollTimer = setInterval(() => {
        if (isAutoScrolling) return;

        const currentIdx = getClosestSectionIdx();
        const nextIdx = (currentIdx + 1) % sections.length;
        const nextSec = document.getElementById(sections[nextIdx]);

        if (nextSec) {
          isAutoScrolling = true;
          scrollTo(nextSec);
          // Allow manual scrolling to override after animation finishes
          setTimeout(() => {
            isAutoScrolling = false;
          }, 1500);
        }
      }, 3500); // الانتقال التلقائي كل 3.5 ثانية (تقليل الوقت للنصف)
    };

    const handleUserInteraction = () => {
      // إيقاف التمرير التلقائي فور قيام المستخدم بالتمرير اليدوي
      clearInterval(autoScrollTimer);
      clearTimeout(inactivityTimeout);

      // استئناف التمرير التلقائي بعد 6 ثوانٍ من التوقف أو السكون
      inactivityTimeout = setTimeout(() => {
        performAutoScroll();
      }, 6000);
    };

    // إعداد مستمعي الأحداث
    window.addEventListener("scroll", handleUserInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    window.addEventListener("wheel", handleUserInteraction, { passive: true });

    // تشغيل التمرير التلقائي فور فتح الصفحة
    performAutoScroll();

    return () => {
      clearInterval(autoScrollTimer);
      clearTimeout(inactivityTimeout);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("wheel", handleUserInteraction);
    };
  }, [isLoading, scrollTo, music]);



  return (
    <main
      className={`relative ${isLoading ? "h-screen overflow-hidden" : ""}`}
      onClick={handleFirstInteraction}
      role="main"
    >
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen 
          onComplete={handleLoadingComplete} 
          onEnterClicked={() => music.fadeIn()} 
        />
      )}

      {/* Floating Particles Background */}
      {!isLoading && <FloatingParticles count={15} />}

      {/* Floating Music Controller */}
      {!isLoading && (
        <motion.button
          onClick={music.toggle}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full glass-strong flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-[rgba(255,255,255,0.15)]"
          aria-label="تشغيل / إيقاف الموسيقى"
        >
          {music.isPlaying ? (
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-accent-gold)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 18V6" />
              <path d="M16 12V6" />
              <path d="M8 12V6" />
            </motion.svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-text-muted)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </motion.button>
      )}

      {/* Main Content */}
      <div className={`relative z-10 ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-1000`}>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* Section divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.2)] to-transparent mx-8" />

        {/* 2. Invitation / Welcome Message */}
        <InvitationSection />

        {/* Section divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.2)] to-transparent mx-8" />

        {/* 3. Bride & Groom Welcome */}
        <WelcomeMessage />

        {/* Section divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.2)] to-transparent mx-8" />

        {/* 4. Wedding Details (Location, Calendar) */}
        <WeddingDetails />

        {/* Section divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.2)] to-transparent mx-8" />

        {/* 5. Countdown */}
        <CountdownSection />

        {/* Section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.2)] to-transparent mx-8" />

        {/* 6. Thank You */}
        <ThankYouSection />
      </div>
    </main>
  );
}
