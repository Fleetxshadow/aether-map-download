'use client';

import React from 'react';
import { APP_FEATURES } from '@/lib/config';
import { Layers, Navigation, MapPin, AlertTriangle, ShieldCheck, Compass, Radio, Cpu, CheckCircle } from 'lucide-react';

export function FeaturesGrid() {
  return (
    <section id="features" className="relative py-24 bg-[#080c09] overflow-hidden">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] radar-glow blur-3xl pointer-events-none opacity-25" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1410] border border-[#2a382c] text-xs font-mono text-[#bbf451]">
            <Cpu className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">VERIFIED CAPABILITY AUDIT</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f2f7ec]">
            Real Features. No Fabricated Claims.
          </h2>
          <p className="text-sm sm:text-base text-[#95a591] leading-relaxed">
            AETHER MAP follows strict data honesty principles. Below are genuine, tested capabilities implemented in the APK package, with demonstration modes clearly disclosed.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APP_FEATURES.map((feature) => {
            const isDemonstration = feature.isDemonstration;
            return (
              <div
                key={feature.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border backdrop-blur-sm group hover:translate-y-[-2px] ${
                  isDemonstration
                    ? 'bg-[#15120c]/80 border-[#4a391e] hover:border-[#ffb347]'
                    : feature.accent === 'cyan'
                    ? 'bg-[#0e1415]/80 border-[#1e2f38] hover:border-[#38bdf8]'
                    : 'bg-[#0e1410]/80 border-[#1e281f] hover:border-[#bbf451]'
                }`}
              >
                {/* Tactical Corner Bracket */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border font-semibold ${
                        isDemonstration
                          ? 'bg-[#ffb347]/10 text-[#ffb347] border-[#ffb347]/30'
                          : feature.accent === 'cyan'
                          ? 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/30'
                          : 'bg-[#bbf451]/10 text-[#bbf451] border-[#bbf451]/30'
                      }`}
                    >
                      {feature.tag}
                    </span>

                    {isDemonstration && (
                      <span className="text-[9px] font-mono uppercase tracking-wider text-[#ffb347] bg-[#ffb347]/15 px-1.5 py-0.5 rounded flex items-center gap-1 font-bold">
                        <AlertTriangle className="w-3 h-3" />
                        DEMO MODE
                      </span>
                    )}
                  </div>

                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase tracking-wide text-[#f2f7ec] group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#95a591] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1e281f] space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#5c6859] block">
                    Verified Specs:
                  </span>
                  <ul className="space-y-1.5">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#95a591]">
                        <CheckCircle
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isDemonstration
                              ? 'text-[#ffb347]'
                              : feature.accent === 'cyan'
                              ? 'text-[#38bdf8]'
                              : 'text-[#bbf451]'
                          }`}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Data Honesty Architecture Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0e1410] border border-[#2a382c] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#bbf451]/10 border border-[#bbf451]/20 text-[#bbf451] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-['Barlow_Condensed'] text-lg font-bold uppercase tracking-wide text-[#f2f7ec]">
                Zero-Telemetry · Privacy Respecting Architecture
              </h4>
              <p className="text-xs text-[#95a591]">
                AETHER MAP requests GPS location in the foreground only when you start navigation. Microphone is blocked in manifest; no background location monitoring or surveillance cookies are stored.
              </p>
            </div>
          </div>
          <a
            href="#install-guide"
            className="text-xs font-mono text-[#bbf451] hover:underline uppercase tracking-wider shrink-0 flex items-center gap-1 font-semibold"
          >
            Review Permissions →
          </a>
        </div>

      </div>
    </section>
  );
}
