'use client';

import React from 'react';
import Image from 'next/image';
import { APP_CONFIG } from '@/lib/config';
import { Download, QrCode, Shield, Layers, Navigation, ArrowRight, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] radar-glow blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] radar-glow-cyan blur-3xl pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status Beacon & Identity Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e1410] border border-[#2a382c] text-xs font-mono text-[#95a591] shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="beacon-ring absolute inline-flex h-full w-full rounded-full bg-[#bbf451]"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bbf451]"></span>
              </span>
              <span className="text-[#f2f7ec] font-semibold tracking-wider uppercase">AETHER ECOSYSTEM</span>
              <span className="text-[#425845]">|</span>
              <span className="text-[#bbf451]">OFFICIAL ANDROID APK</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-3">
              <h1 className="font-['Barlow_Condensed'] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f2f7ec] uppercase leading-[0.95]">
                Your City. <br />
                Your Route. <br />
                <span className="text-[#bbf451] drop-shadow-[0_0_25px_rgba(187,244,81,0.35)]">
                  Smarter.
                </span>
              </h1>
              <p className="font-mono text-xs sm:text-sm text-[#bbf451]/90 uppercase tracking-widest pt-1">
                {APP_CONFIG.subtagline}
              </p>
            </div>

            {/* Product Narrative */}
            <p className="text-base sm:text-lg text-[#95a591] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <strong className="text-[#f2f7ec] font-semibold">AETHER MAP</strong> is the dedicated citizen navigation application within the{' '}
              <span className="text-[#f2f7ec]">Advanced Ecosystem for Traffic, Hazards, Emergencies & Routing</span>. Built for real Gurugram roads with high-density vector maps, 3D urban buildings, and hazard-aware detour intelligence.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={APP_CONFIG.apkDownloadUrl}
                download="AETHER-Release.apk"
                className="group relative flex items-center justify-center gap-3 bg-[#bbf451] hover:bg-[#c9f868] text-[#080c09] px-7 py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#bbf451]/20 hover:shadow-[#bbf451]/35 hover:translate-y-[-2px] active:translate-y-[0px]"
              >
                <div className="bg-[#080c09]/10 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                  <Download className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-mono tracking-wider text-[#080c09]/80 uppercase leading-none">
                    Direct APK Download
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
                className="flex items-center justify-center gap-2.5 bg-[#0e1410] hover:bg-[#151d16] text-[#f2f7ec] hover:text-[#bbf451] border border-[#2a382c] hover:border-[#bbf451]/50 px-5 py-4 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-200"
              >
                <QrCode className="w-4 h-4 text-[#bbf451]" />
                <span>Exhibition QR Code</span>
              </a>
            </div>

            {/* Technical Specifications Bar */}
            <div className="pt-4 border-t border-[#1e281f] max-w-xl mx-auto lg:mx-0">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div className="bg-[#0e1410]/60 p-2.5 rounded-lg border border-[#1e281f]/80">
                  <span className="block text-[10px] font-mono uppercase text-[#5c6859]">Version</span>
                  <span className="text-xs font-mono font-bold text-[#f2f7ec]">v{APP_CONFIG.version}</span>
                </div>
                <div className="bg-[#0e1410]/60 p-2.5 rounded-lg border border-[#1e281f]/80">
                  <span className="block text-[10px] font-mono uppercase text-[#5c6859]">File Size</span>
                  <span className="text-xs font-mono font-bold text-[#bbf451]">{APP_CONFIG.apkSize}</span>
                </div>
                <div className="bg-[#0e1410]/60 p-2.5 rounded-lg border border-[#1e281f]/80">
                  <span className="block text-[10px] font-mono uppercase text-[#5c6859]">Platform</span>
                  <span className="text-xs font-mono font-bold text-[#f2f7ec]">Android 8.0+</span>
                </div>
                <div className="bg-[#0e1410]/60 p-2.5 rounded-lg border border-[#1e281f]/80">
                  <span className="block text-[10px] font-mono uppercase text-[#5c6859]">Distribution</span>
                  <span className="text-xs font-mono font-bold text-[#38bdf8]">Direct APK</span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center lg:justify-start gap-4 text-[11px] font-mono text-[#95a591]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#bbf451]" />
                  <span>No Google Play dependency</span>
                </span>
                <span className="text-[#2a382c]">·</span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Self-contained offline routing engine</span>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Smartphone Mockup with Real App Screenshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#bbf451]/20 via-[#38bdf8]/10 to-transparent rounded-[48px] blur-2xl opacity-70 pointer-events-none" />

              {/* Hardware Device Mockup Frame */}
              <div className="relative rounded-[40px] p-3 bg-gradient-to-b from-[#2a382c] via-[#151d16] to-[#0e1410] border-2 border-[#364438] shadow-2xl shadow-black/80">
                
                {/* Speaker Grill & Camera Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#080c09] rounded-full z-20 flex items-center justify-center">
                  <div className="w-10 h-1 bg-[#2a382c] rounded-full" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111712] ml-2 border border-[#2a382c]" />
                </div>

                {/* Inner Bezel Screen Area */}
                <div className="relative rounded-[32px] overflow-hidden bg-[#080c09] border border-[#1e281f] aspect-[9/19.5]">
                  <Image
                    src="/assets/screenshots/phone-dark.png"
                    alt="AETHER MAP Real Screenshot - Cyber Hub Gurugram Navigation"
                    width={540}
                    height={1170}
                    className="w-full h-full object-cover object-top"
                    priority
                  />

                  {/* High-Tech Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#080c09]/85 backdrop-blur-md border border-[#2a382c] rounded-xl p-2.5 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#bbf451] animate-pulse" />
                        <span className="font-mono text-[10px] text-[#f2f7ec] font-bold tracking-wider uppercase">
                          CYBER CITY · GURUGRAM
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-[#bbf451] bg-[#bbf451]/10 px-1.5 py-0.5 rounded border border-[#bbf451]/20">
                        LIVE HUD
                      </span>
                    </div>
                    <div className="text-[10px] text-[#95a591] font-mono mt-0.5">
                      OSM Vector Tiles · MapLibre Native Engine
                    </div>
                  </div>
                </div>

                {/* Device side button hints */}
                <div className="absolute -left-[3px] top-28 w-[3px] h-10 bg-[#364438] rounded-l" />
                <div className="absolute -left-[3px] top-42 w-[3px] h-14 bg-[#364438] rounded-l" />
                <div className="absolute -right-[3px] top-32 w-[3px] h-14 bg-[#364438] rounded-r" />
              </div>

              {/* Floating Technical Stat Tag */}
              <div className="hidden sm:block absolute -top-4 -left-6 bg-[#0e1410] border border-[#2a382c] text-[#f2f7ec] p-2.5 rounded-xl shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#bbf451]" />
                  <span className="text-xs font-mono font-bold">100% Native Vector</span>
                </div>
                <span className="text-[10px] text-[#95a591] font-mono">Zero raster blurring</span>
              </div>

              {/* Floating 3D Stat Tag */}
              <div className="hidden sm:block absolute -bottom-4 -right-6 bg-[#0e1410] border border-[#2a382c] text-[#f2f7ec] p-2.5 rounded-xl shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#38bdf8]" />
                  <span className="text-xs font-mono font-bold">3D Extrusion</span>
                </div>
                <span className="text-[10px] text-[#95a591] font-mono">Real provider height fields</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
