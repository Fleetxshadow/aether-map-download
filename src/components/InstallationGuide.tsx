'use client';

import React from 'react';
import {
  Download,
  FolderOpen,
  ShieldAlert,
  CheckCircle2,
  PlayCircle,
  HelpCircle,
  Info,
  Smartphone,
  ExternalLink,
} from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Download the APK',
    description:
      'Tap the "Download for Android" button above. Your browser will start downloading the AETHER-Release.apk file (105.2 MB) directly from external cloud storage.',
    icon: <Download className="w-5 h-5 text-[#bbf451]" />,
    detail: 'Saved to your device’s Downloads folder.',
  },
  {
    step: '02',
    title: 'Open Downloaded File',
    description:
      'When download finishes, tap the completed notification or navigate to your device’s Files / Downloads app and tap "AETHER-Release.apk".',
    icon: <FolderOpen className="w-5 h-5 text-[#bbf451]" />,
    detail: 'Direct package installer will trigger.',
  },
  {
    step: '03',
    title: 'Allow Unknown Sources (If Prompted)',
    description:
      'If Android displays: "For your security, your phone is not allowed to install unknown apps from this source", tap Settings, toggle "Allow from this source", and return.',
    icon: <ShieldAlert className="w-5 h-5 text-[#ffb347]" />,
    detail: 'Standard Android protection mechanism for sideloading.',
  },
  {
    step: '04',
    title: 'Confirm Installation',
    description:
      'On the installation dialog showing AETHER MAP, tap "Install". The system package manager will unpack and verify the native binaries.',
    icon: <CheckCircle2 className="w-5 h-5 text-[#bbf451]" />,
    detail: 'Installs in approximately 5 to 10 seconds.',
  },
  {
    step: '05',
    title: 'Launch AETHER MAP',
    description:
      'Tap "Open" or find AETHER on your home screen or app launcher. Explore the vector map, test 3D buildings, or simulate waterlogging detours.',
    icon: <PlayCircle className="w-5 h-5 text-[#38bdf8]" />,
    detail: 'Location permission requested only when starting navigation.',
  },
];

export function InstallationGuide() {
  return (
    <section id="install-guide" className="relative py-24 bg-[#080c09] border-t border-[#1e281f] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1410] border border-[#2a382c] text-xs font-mono text-[#bbf451]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">STEP-BY-STEP ONBOARDING</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f2f7ec]">
            Simple Installation Instructions
          </h2>
          <p className="text-sm sm:text-base text-[#95a591] leading-relaxed">
            Because AETHER MAP is distributed directly as an APK without middleman store delays, follow these 5 straightforward steps to install it on any modern Android device.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="bg-[#0e1410] border border-[#1e281f] hover:border-[#2a382c] rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 group relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#151d16] border border-[#2a382c] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-['Barlow_Condensed'] text-2xl font-bold text-[#425845] group-hover:text-[#bbf451] transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-[#f2f7ec]">
                  {item.title}
                </h3>

                <p className="text-xs text-[#95a591] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1e281f] text-[10px] font-mono text-[#5c6859]">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Reassuring Android Security Sideloading Notice */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-[#151d16]/80 border border-[#2a382c] shadow-xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#ffb347]/10 border border-[#ffb347]/30 text-[#ffb347] shrink-0 mt-1">
              <ShieldAlert className="w-6 h-6" />
            </div>

            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-[#f2f7ec]">
                  Why does Android show a security warning?
                </h4>
                <span className="text-[10px] font-mono bg-[#ffb347]/10 text-[#ffb347] border border-[#ffb347]/30 px-2 py-0.5 rounded uppercase">
                  Expected Android Behavior
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#95a591] leading-relaxed">
                Modern Android versions (Android 10 through Android 15) display a precautionary prompt (&quot;File might be harmful&quot; or &quot;Unknown app source&quot;) whenever an APK is downloaded directly from a web browser rather than through the Google Play Store. This is standard operating system protocol for any external application.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#f2f7ec]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bbf451]" />
                  <span>No background audio or microphone</span>
                </div>
                <div className="flex items-center gap-2 text-[#f2f7ec]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bbf451]" />
                  <span>Foreground-only GPS position</span>
                </div>
                <div className="flex items-center gap-2 text-[#f2f7ec]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bbf451]" />
                  <span>Cryptographically SHA-256 verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
