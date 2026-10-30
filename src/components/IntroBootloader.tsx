'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { soundFx } from '@/lib/audio';

const BOOT_LOGS = [
  'INITIALIZING AETHER CIVIC NAVIGATION CORE...',
  'CONNECTING GURUGRAM ROAD GRAPH & OPENFREEMAP TILES...',
  'CALIBRATING 3D BUILDING HEIGHT MATRIX (CYBER CITY)...',
  'SYNCHRONIZING OSRM ROUTE OPTIMIZATION ENGINE...',
  'AETHER MAP v1.0.0 READY · STANDALONE PORTAL ONLINE',
];

export function IntroBootloader({ onComplete }: { onComplete?: () => void }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    // Check if user already saw the intro in this tab
    const alreadySeen = sessionStorage.getItem('aether_intro_viewed');
    if (alreadySeen === 'true') {
      setVisible(false);
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            sessionStorage.setItem('aether_intro_viewed', 'true');
            onComplete?.();
          }, 350);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 5;
        soundFx.playBlip(600 + next * 4, 0.03, 'sine');
        return Math.min(next, 100);
      });
    }, 90);

    const logTimer = setInterval(() => {
      setLogIndex((prev) => (prev < BOOT_LOGS.length - 1 ? prev + 1 : prev));
    }, 280);

    return () => {
      clearInterval(interval);
      clearInterval(logTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('aether_intro_viewed', 'true');
    setVisible(false);
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#050806] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Background scanlines & radar grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#bbf451]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Skip Button */}
          <div className="absolute top-6 right-6 z-20">
            <button
              onClick={handleSkip}
              className="px-3.5 py-1.5 rounded-lg bg-[#0e1410] border border-[#2a382c] hover:border-[#bbf451] text-[#95a591] hover:text-[#bbf451] font-mono text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer"
            >
              [ SKIP INTRO ]
            </button>
          </div>

          <div className="relative w-full max-w-md space-y-7 text-center">
            
            {/* Emblem with pulsing beacon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative mx-auto w-20 h-20 rounded-2xl bg-[#0e1410] border-2 border-[#bbf451]/40 flex items-center justify-center p-3 shadow-2xl shadow-[#bbf451]/20"
            >
              <Image
                src="/assets/brand/official-emblem-extracted.png"
                alt="AETHER Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
              <div className="absolute -inset-1 rounded-2xl border border-[#bbf451] animate-ping opacity-20 pointer-events-none" />
            </motion.div>

            {/* Title & Acronym */}
            <div className="space-y-1">
              <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl font-bold tracking-wider uppercase text-[#f2f7ec]">
                AETHER <span className="text-[#bbf451]">MAP</span>
              </h2>
              <p className="text-[10px] font-mono tracking-widest text-[#95a591] uppercase">
                Advanced Ecosystem for Traffic, Hazards, Emergencies & Routing
              </p>
            </div>

            {/* Boot Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#95a591]">
                <span className="text-[#bbf451] tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bbf451] animate-pulse" />
                  SYSTEM INITIALIZATION
                </span>
                <span className="font-bold text-[#f2f7ec]">{progress}%</span>
              </div>

              <div className="h-1.5 w-full bg-[#151d16] rounded-full overflow-hidden border border-[#2a382c]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#38bdf8] to-[#bbf451] rounded-full shadow-[0_0_12px_rgba(187,244,81,0.6)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Terminal Log Readout */}
            <div className="h-6 flex items-center justify-center">
              <motion.span
                key={logIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-[11px] text-[#95a591] uppercase tracking-wider"
              >
                &gt; {BOOT_LOGS[logIndex]}
              </motion.span>
            </div>

            {/* Corner Bracket Detailing */}
            <div className="pt-4 flex items-center justify-center gap-6 text-[10px] font-mono text-[#5c6859]">
              <span>NODE: GURUGRAM_SECTOR_MATRIX</span>
              <span>·</span>
              <span>APK: 105.2 MB</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
