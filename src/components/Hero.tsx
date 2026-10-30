'use client';

import React from 'react';
import { motion } from 'motion/react';
import { APP_CONFIG } from '@/lib/config';
import { Download, QrCode, Shield, Layers, Navigation, ArrowRight, Smartphone, Sparkles, CheckCircle2, Activity, Play } from 'lucide-react';
import { InteractiveDevice3D } from '@/components/InteractiveDevice3D';
import { soundFx } from '@/lib/audio';

export function Hero() {
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] radar-glow blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] radar-glow-cyan blur-3xl pointer-events-none opacity-40" />

      {/* Subtle Scanline Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#bbf451]/[0.015] to-transparent h-40 animate-scanline pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status Beacon & Identity Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e1410] border border-[#2a382c] text-xs font-mono text-[#95a591] shadow-inner"
            >
              <span className="relative flex h-2 w-2">
                <span className="beacon-ring absolute inline-flex h-full w-full rounded-full bg-[#bbf451]"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bbf451]"></span>
              </span>
              <span className="text-[#f2f7ec] font-semibold tracking-wider uppercase">AETHER ECOSYSTEM</span>
              <span className="text-[#425845]">|</span>
              <span className="text-[#bbf451]">STANDALONE ANDROID APK</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-['Barlow_Condensed'] text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#f2f7ec] uppercase leading-[0.92]"
              >
                Your City. <br />
                Your Route. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bbf451] via-[#d8ed86] to-[#38bdf8] drop-shadow-[0_0_35px_rgba(187,244,81,0.4)]">
                  Smarter.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-mono text-xs sm:text-sm text-[#bbf451]/90 uppercase tracking-widest pt-1 flex items-center justify-center lg:justify-start gap-2"
              >
                <Activity className="w-4 h-4 text-[#bbf451] animate-pulse" />
                <span>{APP_CONFIG.subtagline}</span>
              </motion.p>
            </div>

            {/* Product Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-[#95a591] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              <strong className="text-[#f2f7ec] font-semibold">AETHER MAP</strong> is the dedicated citizen navigation application within the{' '}
              <span className="text-[#f2f7ec]">Advanced Ecosystem for Traffic, Hazards, Emergencies & Routing</span>. Built for real Gurugram roads with high-density vector maps, 3D urban buildings, and hazard-aware detour intelligence.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href={APP_CONFIG.apkDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playSuccess()}
                onMouseEnter={() => soundFx.playClick()}
                className="group relative flex items-center justify-center gap-3 bg-[#bbf451] hover:bg-[#c9f868] text-[#080c09] px-7 py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#bbf451]/20 hover:shadow-[#bbf451]/40 hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
              >
                <div className="bg-[#080c09]/10 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                  <Download className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-mono tracking-wider text-[#080c09]/80 uppercase leading-none">
                    Direct Release APK
                  </div>
                  <div className="text-base font-extrabold tracking-wide uppercase leading-tight">
                    Download for Android
                  </div>
                </div>
                <span className="ml-2 bg-[#080c09] text-[#bbf451] text-xs font-mono px-2 py-0.5 rounded font-semibold">
                  105.2 MB
                </span>
              </a>

              <a
                href="#qr-code"
                onClick={() => soundFx.playClick()}
                className="flex items-center justify-center gap-2.5 bg-[#0e1410] hover:bg-[#151d16] text-[#f2f7ec] hover:text-[#bbf451] border border-[#2a382c] hover:border-[#bbf451]/50 px-5 py-4 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer"
              >
                <QrCode className="w-4 h-4 text-[#bbf451]" />
                <span>Exhibition QR Code</span>
              </a>
            </motion.div>

            {/* Technical Specifications Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 border-t border-[#1e281f] max-w-xl mx-auto lg:mx-0"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div className="bg-[#0e1410]/70 p-2.5 rounded-lg border border-[#1e281f]/80">
                  <span className="block text-[10px] font-mono uppercase text-[#5c6859]">Version</span>
                  <span className="text-xs font-mono font-bold text-[#f2f7ec]">v{APP_CONFIG.version}</span>
                </div>
                <div className="bg-[#0e1410]/70 p-2.5 rounded-lg border border-[#1e281f]/80">
                  <span className="block text-[10px] font-mono uppercase text-[#5c6859]">File Size</span>
                  <span className="text-xs font-mono font-bold text-[#bbf451]">{APP_CONFIG.apkSize}</span>
                </div>
                <div className="bg-[#0e1410]/70 p-2.5 rounded-lg border border-[#1e281f]/80">
                  <span className="block text-[10px] font-mono uppercase text-[#5c6859]">Platform</span>
                  <span className="text-xs font-mono font-bold text-[#f2f7ec]">Android 8.0+</span>
                </div>
                <div className="bg-[#0e1410]/70 p-2.5 rounded-lg border border-[#1e281f]/80">
                  <span className="block text-[10px] font-mono uppercase text-[#5c6859]">Distribution</span>
                  <span className="text-xs font-mono font-bold text-[#38bdf8]">Direct APK</span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center lg:justify-start gap-4 text-[11px] font-mono text-[#95a591]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#bbf451]" />
                  <span>No Play Store login required</span>
                </span>
                <span className="text-[#2a382c]">·</span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>SHA-256 cryptographically verified</span>
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive 3D Smartphone Mockup with Video Reel Toggle */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <InteractiveDevice3D
              imageSrc="/assets/screenshots/phone-dark.png"
              videoSrc="/assets/videos/phone-live-demo.mp4"
              alt="AETHER MAP Real Screenshot - Cyber Hub Gurugram"
              captionTitle="CYBER CITY · GURUGRAM"
              captionSubtitle="OSM Vector Tiles · MapLibre Native 3D"
              allowVideoToggle={true}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
