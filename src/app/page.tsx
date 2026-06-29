"use client";

import { useState, useCallback, useEffect } from "react";
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
    let currentIdx = 0;
    let autoScrollTimer: NodeJS.Timeout;
    let userInteracted = false;
    let inactivityTimeout: NodeJS.Timeout;

    const startAutoScroll = () => {
      autoScrollTimer = setInterval(() => {
        if (userInteracted) return;
        currentIdx = (currentIdx + 1) % sections.length;
        const nextSec = document.getElementById(sections[currentIdx]);
        if (nextSec) {
          nextSec.scrollIntoView({ behavior: "smooth" });
        }
      }, 9000); // Step to the next section every 9 seconds
    };

    const handleUserInteraction = () => {
      userInteracted = true;
      clearInterval(autoScrollTimer);
      // Resume auto scroll after 15 seconds of inactivity
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(() => {
        userInteracted = false;
        // Reset current index to closest section
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
        currentIdx = closestIdx;
        startAutoScroll();
      }, 15000);
    };

    // Listen to scroll, touches and wheel to pause auto-scrolling
    window.addEventListener("scroll", handleUserInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    window.addEventListener("wheel", handleUserInteraction, { passive: true });

    // Start auto scrolling once loading finishes
    const initialDelay = setTimeout(() => {
      startAutoScroll();
    }, 6000);

    return () => {
      clearInterval(autoScrollTimer);
      clearTimeout(inactivityTimeout);
      clearTimeout(initialDelay);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("wheel", handleUserInteraction);
    };
  }, [isLoading]);



  return (
    <main
      className="relative"
      onClick={handleFirstInteraction}
      role="main"
    >
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Floating Particles Background */}
      {!isLoading && <FloatingParticles count={15} />}

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
