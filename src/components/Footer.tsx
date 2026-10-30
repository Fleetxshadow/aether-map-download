'use client';

import React from 'react';
import Image from 'next/image';
import { APP_CONFIG } from '@/lib/config';
import { ArrowUp, ShieldCheck, Download, ExternalLink, Github, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050806] border-t border-[#1e281f] text-[#95a591] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#151d16]">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0e1410] border border-[#2a382c] flex items-center justify-center p-1.5 shadow-sm">
                <Image
                  src="/assets/brand/official-emblem-extracted.png"
                  alt="AETHER MAP"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wider text-[#f2f7ec]">
                  AETHER <span className="text-[#bbf451]">MAP</span>
                </span>
                <span className="text-[10px] font-mono text-[#5c6859] tracking-widest uppercase">
                  Official Android Portal
                </span>
              </div>
            </div>

            <p className="text-xs text-[#95a591] leading-relaxed max-w-sm">
              <strong className="text-[#f2f7ec]">AETHER</strong> stands for{' '}
              <span className="text-[#f2f7ec]">{APP_CONFIG.acronym}</span>. Built to empower Gurugram citizens with high-precision vector road navigation, 3D building visualization, and transparent hazard awareness.
            </p>

            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#5c6859]">
              <span className="w-2 h-2 rounded-full bg-[#bbf451]" />
              <span>Standalone APK Distribution Network</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-wider text-[#f2f7ec]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#overview" className="hover:text-[#bbf451] transition-colors">
                  Overview & Specs
                </a>
              </li>
              <li>
                <a href="#preview" className="hover:text-[#bbf451] transition-colors">
                  App Screenshots
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#bbf451] transition-colors">
                  Verified Features
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-[#bbf451] transition-colors">
                  Direct APK Download
                </a>
              </li>
              <li>
                <a href="#install-guide" className="hover:text-[#bbf451] transition-colors">
                  Installation Steps
                </a>
              </li>
              <li>
                <a href="#qr-code" className="hover:text-[#bbf451] transition-colors">
                  Exhibition QR Code
                </a>
              </li>
            </ul>
          </div>

          {/* Release & Integrity (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-wider text-[#f2f7ec]">
              Package Integrity
            </h4>
            <div className="p-3.5 rounded-xl bg-[#0e1410] border border-[#1e281f] space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[#5c6859]">Package:</span>
                <span className="text-[#f2f7ec] font-bold">{APP_CONFIG.packageId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#5c6859]">Version:</span>
                <span className="text-[#bbf451] font-bold">v{APP_CONFIG.version} (Build {APP_CONFIG.buildNumber})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#5c6859]">File Size:</span>
                <span className="text-[#f2f7ec] font-bold">{APP_CONFIG.apkSize}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#5c6859]">OS Target:</span>
                <span className="text-[#38bdf8]">{APP_CONFIG.minAndroidVersion}</span>
              </div>
            </div>

            <a
              href={APP_CONFIG.apkDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#151d16] hover:bg-[#1e281f] text-[#f2f7ec] hover:text-[#bbf451] border border-[#2a382c] py-2 px-3 rounded-xl font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Direct APK Download</span>
            </a>
          </div>

        </div>

        {/* Legal, Disclaimer, & Back to top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5c6859]">
          <div className="text-center md:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} AETHER Project. All rights reserved.
            </p>
            <p className="text-[11px] text-[#425845]">
              Independent citizen navigation platform. Simulated waterlogging detours & hazard events are for demonstration purposes.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1410] border border-[#1e281f] hover:border-[#bbf451] text-[#95a591] hover:text-[#bbf451] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
