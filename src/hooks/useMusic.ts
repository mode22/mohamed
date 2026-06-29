"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface MusicControls {
  isPlaying: boolean;
  volume: number;
  toggle: () => void;
  setVolume: (vol: number) => void;
  fadeIn: () => void;
  fadeOut: () => void;
}

export function useMusic(src: string): MusicControls {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.5);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const audio = new Audio(src);
      audio.loop = true;
      audio.volume = 0;
      audio.preload = "auto";
      audioRef.current = audio;

      return () => {
        audio.pause();
        audio.src = "";
      };
    }
  }, [src]);

  const clearFadeInterval = () => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  };

  const fadeIn = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    clearFadeInterval();
    audio.volume = 0;
    audio.play().catch(() => {});
    setIsPlaying(true);

    let currentVol = 0;
    fadeIntervalRef.current = setInterval(() => {
      currentVol += 0.02;
      if (currentVol >= volume) {
        audio.volume = volume;
        clearFadeInterval();
      } else {
        audio.volume = currentVol;
      }
    }, 50);
  }, [volume]);

  const fadeOut = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    clearFadeInterval();
    let currentVol = audio.volume;

    fadeIntervalRef.current = setInterval(() => {
      currentVol -= 0.02;
      if (currentVol <= 0) {
        audio.volume = 0;
        audio.pause();
        setIsPlaying(false);
        clearFadeInterval();
      } else {
        audio.volume = currentVol;
      }
    }, 50);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      fadeOut();
    } else {
      fadeIn();
    }
  }, [isPlaying, fadeIn, fadeOut]);

  const setVolume = useCallback((vol: number) => {
    setVolumeState(vol);
    if (audioRef.current && isPlaying) {
      audioRef.current.volume = vol;
    }
  }, [isPlaying]);

  return { isPlaying, volume, toggle, setVolume, fadeIn, fadeOut };
}
