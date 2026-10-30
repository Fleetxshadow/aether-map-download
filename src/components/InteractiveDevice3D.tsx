'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Play, Pause, Video, Image as ImageIcon, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { soundFx } from '@/lib/audio';

interface InteractiveDeviceProps {
  imageSrc: string;
  videoSrc?: string;
  alt: string;
  captionTitle?: string;
  captionSubtitle?: string;
  allowVideoToggle?: boolean;
}

export function InteractiveDevice3D({
  imageSrc,
  videoSrc = '/assets/videos/phone-live-demo.mp4',
  alt,
  captionTitle = 'CYBER CITY · GURUGRAM',
  captionSubtitle = 'MapLibre Native 3D Corridors',
  allowVideoToggle = true,
}: InteractiveDeviceProps) {
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const toggleVideoMode = () => {
    soundFx.playClick();
    setIsVideoMode(!isVideoMode);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Mode Selector Toggle Switch */}
      {allowVideoToggle && (
        <div className="mb-4 inline-flex items-center gap-1 p-1 rounded-xl bg-[#0e1410] border border-[#2a382c] shadow-md z-20">
          <button
            onClick={() => {
              if (isVideoMode) toggleVideoMode();
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
              !isVideoMode
                ? 'bg-[#bbf451] text-[#080c09] font-bold shadow-sm'
                : 'text-[#95a591] hover:text-[#f2f7ec]'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>HD Screen</span>
          </button>

          <button
            onClick={() => {
              if (!isVideoMode) toggleVideoMode();
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
              isVideoMode
                ? 'bg-[#bbf451] text-[#080c09] font-bold shadow-sm'
                : 'text-[#95a591] hover:text-[#f2f7ec]'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span className="flex items-center gap-1">
              Live Walkthrough
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4444] animate-pulse" />
            </span>
          </button>
        </div>
      )}

      {/* 3D Perspective Box */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1200 }}
        className="relative w-full max-w-[310px] sm:max-w-[340px] cursor-grab active:cursor-grabbing"
      >
        {/* Glow ambient background halo */}
        <div className="absolute -inset-6 bg-gradient-to-tr from-[#bbf451]/20 via-[#38bdf8]/15 to-transparent rounded-[52px] blur-3xl opacity-70 pointer-events-none" />

        {/* 3D Tilting Phone Body */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative rounded-[44px] p-3 bg-gradient-to-b from-[#2a382c] via-[#151d16] to-[#080c09] border-2 border-[#364438] shadow-[0_30px_70px_rgba(0,0,0,0.9)] transition-shadow duration-300"
        >
          {/* Dynamic Glare Overlay */}
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, transparent 65%)`,
            }}
            className="absolute inset-0 rounded-[44px] pointer-events-none z-30"
          />

          {/* Speaker Notch & Camera Pin */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#080c09] rounded-full z-40 flex items-center justify-center border border-[#1e281f]">
            <div className="w-9 h-1 bg-[#2a382c] rounded-full" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#111712] ml-2 border border-[#364438]" />
          </div>

          {/* Screen Content Bezel */}
          <div className="relative rounded-[34px] overflow-hidden bg-[#080c09] border border-[#1e281f] aspect-[9/19.5]">
            
            {/* View Mode: Video Walkthrough */}
            {isVideoMode ? (
              <div className="relative w-full h-full bg-black">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Video In-Screen Controls Overlay */}
                <div className="absolute bottom-16 left-3 right-3 flex items-center justify-between p-2 rounded-xl bg-[#080c09]/80 backdrop-blur-md border border-[#2a382c] z-20">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg bg-[#151d16] text-[#bbf451] hover:bg-[#2a382c] transition-colors"
                    aria-label="Play/Pause Video"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <span className="text-[10px] font-mono text-[#f2f7ec] uppercase font-bold tracking-wider">
                    APP IN MOTION · 60 FPS
                  </span>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 rounded-lg bg-[#151d16] text-[#95a591] hover:text-[#f2f7ec] transition-colors"
                    aria-label="Mute/Unmute Video"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ) : (
              /* View Mode: High-Res Static Capture */
              <Image
                src={imageSrc}
                alt={alt}
                width={540}
                height={1170}
                className="w-full h-full object-cover object-top"
                priority
              />
            )}

            {/* Bottom In-Screen HUD Banner */}
            <div className="absolute bottom-3 left-3 right-3 bg-[#080c09]/90 backdrop-blur-md border border-[#2a382c] rounded-xl p-2.5 shadow-lg z-20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#bbf451] animate-pulse" />
                  <span className="font-mono text-[10px] text-[#f2f7ec] font-bold tracking-wider uppercase">
                    {captionTitle}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-[#bbf451] bg-[#bbf451]/10 px-1.5 py-0.5 rounded border border-[#bbf451]/20">
                  {isVideoMode ? 'RECORDING' : 'NATIVE'}
                </span>
              </div>
              <div className="text-[10px] text-[#95a591] font-mono mt-0.5 truncate">
                {captionSubtitle}
              </div>
            </div>

          </div>

          {/* Physical Side Buttons */}
          <div className="absolute -left-[3px] top-28 w-[3px] h-10 bg-[#364438] rounded-l" />
          <div className="absolute -left-[3px] top-42 w-[3px] h-14 bg-[#364438] rounded-l" />
          <div className="absolute -right-[3px] top-32 w-[3px] h-14 bg-[#364438] rounded-r" />
        </motion.div>

        {/* Interactive Tilt Hint */}
        <div className="mt-4 text-center">
          <span className="text-[10px] font-mono text-[#5c6859] uppercase tracking-widest flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 text-[#bbf451]" />
            Move cursor over device to tilt 3D
          </span>
        </div>
      </div>
    </div>
  );
}
