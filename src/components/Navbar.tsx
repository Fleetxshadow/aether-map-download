'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { APP_CONFIG } from '@/lib/config';
import { Download, ShieldCheck, Menu, X, Smartphone, Volume2, VolumeX, Compass } from 'lucide-react';
import { soundFx } from '@/lib/audio';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    soundFx.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      soundFx.playBlip(980, 0.05);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c09]/92 backdrop-blur-xl border-b border-[#1e281f] py-3 shadow-xl shadow-black/50'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Lockup */}
          <a
            href="#"
            onClick={() => soundFx.playClick()}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-[#2a382c] group-hover:border-[#bbf451] transition-colors bg-[#0e1410] flex items-center justify-center p-1.5 shadow-sm">
              <Image
                src="/assets/brand/official-emblem-extracted.png"
                alt="AETHER MAP"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-['Barlow_Condensed'] text-xl sm:text-2xl font-bold tracking-wider text-[#f2f7ec] uppercase">
                  AETHER <span className="text-[#bbf451]">MAP</span>
                </span>
                <span className="text-[10px] font-mono bg-[#bbf451]/10 text-[#bbf451] border border-[#bbf451]/30 px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">
                  v{APP_CONFIG.version}
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#95a591] tracking-widest uppercase hidden sm:block">
                Citizen Navigation System
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7">
            <a
              href="#overview"
              onClick={() => soundFx.playClick()}
              className="text-xs font-mono font-semibold tracking-wider uppercase text-[#95a591] hover:text-[#bbf451] transition-colors"
            >
              Overview
            </a>
            <a
              href="#preview"
              onClick={() => soundFx.playClick()}
              className="text-xs font-mono font-semibold tracking-wider uppercase text-[#95a591] hover:text-[#bbf451] transition-colors"
            >
              Live Demo
            </a>
            <a
              href="#features"
              onClick={() => soundFx.playClick()}
              className="text-xs font-mono font-semibold tracking-wider uppercase text-[#95a591] hover:text-[#bbf451] transition-colors"
            >
              Features
            </a>
            <a
              href="#install-guide"
              onClick={() => soundFx.playClick()}
              className="text-xs font-mono font-semibold tracking-wider uppercase text-[#95a591] hover:text-[#bbf451] transition-colors"
            >
              Install Guide
            </a>
            <a
              href="#qr-code"
              onClick={() => soundFx.playClick()}
              className="text-xs font-mono font-semibold tracking-wider uppercase text-[#95a591] hover:text-[#bbf451] transition-colors"
            >
              Share QR
            </a>
          </nav>

          {/* Action CTAs & Sound Control */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-lg border font-mono text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
                soundEnabled
                  ? 'bg-[#bbf451]/10 border-[#bbf451]/40 text-[#bbf451]'
                  : 'bg-[#0e1410] border-[#1e281f] text-[#5c6859] hover:text-[#95a591]'
              }`}
              title={soundEnabled ? 'Mute Interface Audio' : 'Enable Tactical Audio'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="text-[10px] uppercase font-bold">{soundEnabled ? 'SFX ON' : 'SFX'}</span>
            </button>

            {/* GPS Telemetry Pill */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#0e1410] border border-[#1e281f] text-[10px] font-mono text-[#95a591]">
              <Compass className="w-3.5 h-3.5 text-[#38bdf8] animate-spin-slow" />
              <span>28.4595° N, 77.0266° E</span>
            </div>

            <a
              href="#download"
              onClick={() => soundFx.playClick()}
              className="flex items-center gap-2 bg-[#bbf451] text-[#080c09] hover:bg-[#c9f868] px-4 py-2 rounded-lg font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-[#bbf451]/15 hover:shadow-lg hover:shadow-[#bbf451]/25 hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download APK</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className={`p-1.5 rounded-md border text-xs ${
                soundEnabled ? 'bg-[#bbf451]/10 text-[#bbf451] border-[#bbf451]/40' : 'bg-[#0e1410] text-[#5c6859] border-[#1e281f]'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <a
              href="#download"
              className="flex items-center gap-1.5 bg-[#bbf451] text-[#080c09] px-3 py-1.5 rounded-md font-semibold text-xs tracking-wider uppercase"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get APK</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#95a591] hover:text-[#f2f7ec] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080c09]/98 border-b border-[#1e281f] px-4 pt-3 pb-5 space-y-3 mt-2 shadow-2xl backdrop-blur-xl">
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-mono uppercase text-[#95a591] hover:text-[#bbf451] hover:bg-[#0e1410] rounded-md"
          >
            Overview
          </a>
          <a
            href="#preview"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-mono uppercase text-[#95a591] hover:text-[#bbf451] hover:bg-[#0e1410] rounded-md"
          >
            App Preview & Live Demo
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-mono uppercase text-[#95a591] hover:text-[#bbf451] hover:bg-[#0e1410] rounded-md"
          >
            Verified Features
          </a>
          <a
            href="#install-guide"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-mono uppercase text-[#95a591] hover:text-[#bbf451] hover:bg-[#0e1410] rounded-md"
          >
            Installation Guide
          </a>
          <a
            href="#qr-code"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-mono uppercase text-[#95a591] hover:text-[#bbf451] hover:bg-[#0e1410] rounded-md"
          >
            Share & Print QR
          </a>
          <div className="pt-2 border-t border-[#1e281f]">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#bbf451] text-[#080c09] py-2.5 rounded-lg font-bold text-sm tracking-wide uppercase"
            >
              <Download className="w-4 h-4" />
              <span>Download AETHER MAP (105.2 MB)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
