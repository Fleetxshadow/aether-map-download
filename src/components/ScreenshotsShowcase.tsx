'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Layers, Navigation, MapPin, AlertTriangle, ShieldCheck, Car, Eye, ChevronRight } from 'lucide-react';

interface ScreenItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  badge: string;
  image: string;
  icon: React.ReactNode;
  technicalNotes: string[];
}

const SCREENS: ScreenItem[] = [
  {
    id: 'dark-nav',
    title: 'Vector Map Navigation',
    subtitle: 'High-framerate Gurugram road corridors',
    category: 'MAPPING',
    description:
      'Native vector rendering on MapLibre Native with OpenFreeMap tiles. Shows real Gurugram roads, sector boundaries, and DLF Cyber City landmarks with instant compass snapping and smooth pan/zoom.',
    badge: 'MapLibre Native',
    image: '/assets/screenshots/phone-dark.png',
    icon: <Navigation className="w-4 h-4 text-[#bbf451]" />,
    technicalNotes: [
      'Bounded Gurugram road network vector tiles',
      'High-contrast tactical dark mode for night driving',
      'Real-time GPS bearing and vehicle marker alignment',
    ],
  },
  {
    id: 'route-preview',
    title: 'Turn-by-Turn Guidance & Preview',
    subtitle: 'Deterministic OSRM road geometry',
    category: 'ROUTING',
    description:
      'Calculates accurate road routes using Open Source Routing Machine (OSRM). Offers a dedicated Virtual Preview mode to fly through the maneuvers, highway exits, and sector intersections before starting.',
    badge: 'OSRM Engine',
    image: '/assets/screenshots/phone-route.png',
    icon: <MapPin className="w-4 h-4 text-[#bbf451]" />,
    technicalNotes: [
      'Exact road coordinates with zero straight-line shortcuts',
      'Step-by-step turn maneuvers with distance countdown',
      'Interactive virtual preview with pause/resume controls',
    ],
  },
  {
    id: '3d-urban',
    title: '3D Urban Building Extrusion',
    subtitle: 'Volumetric city models with provider heights',
    category: '3D PERSPECTIVE',
    description:
      'Real 3D building parts and heights derived from OpenStreetMap provider data. Tilt the camera to inspect building heights in Cyber Hub, Sector 29, and commercial high-rises with spatial clarity.',
    badge: '3D Extrusion',
    image: '/assets/screenshots/phone-3d.png',
    icon: <Layers className="w-4 h-4 text-[#38bdf8]" />,
    technicalNotes: [
      'Tile-specific OSM height fields and footprint extrusion',
      'Interactive pitch (0° to 60°) and bearing rotation',
      'Maintains 60 FPS performance on mid-range Android chipsets',
    ],
  },
  {
    id: 'sector-search',
    title: 'Sector Search & Landmark Discovery',
    subtitle: 'Photon geocoded destination query',
    category: 'SEARCH',
    description:
      'Search across Gurugram sectors, commercial plazas, metro stations, and key intersections. Provides instant autocomplete and one-tap destination routing through an expandable bottom sheet.',
    badge: 'Photon Geocoding',
    image: '/assets/screenshots/phone-search.png',
    icon: <Navigation className="w-4 h-4 text-[#bbf451]" />,
    technicalNotes: [
      'Explicit destination search with bounded Gurugram bias',
      'Bottom drawer route sheet with ETA and distance estimation',
      'Cached query history for fast repeat destination selection',
    ],
  },
  {
    id: 'hazard-sim',
    title: 'Waterlogging & Hazard Detour',
    subtitle: 'Demonstration road graph rerouting',
    category: 'SAFETY SIMULATOR',
    description:
      'Integrated development simulator demonstrating how AETHER responds when monsoon waterlogging or flash flooding blocks a road segment. Recalculates detours via Dijkstra shortest path algorithms.',
    badge: 'Demonstration Engine',
    image: '/assets/screenshots/waterlogging-detour.png',
    icon: <AlertTriangle className="w-4 h-4 text-[#ffb347]" />,
    technicalNotes: [
      'Preserved synthetic road graph with incident injection',
      'Automatic detour recalculation when segment is blocked',
      'Clearly disclosed as a demonstration capability',
    ],
  },
  {
    id: 'aether-garage',
    title: 'AETHER Garage & Avatars',
    subtitle: 'Customizable 3D vehicle representation',
    category: 'GARAGE',
    description:
      'Personalize your vehicle avatar on the map interface. Choose 3D vehicle paint, select between vehicle archetypes, and view vehicle profiles stored securely in local device storage.',
    badge: '3D Avatars',
    image: '/assets/screenshots/phone-garage.png',
    icon: <Car className="w-4 h-4 text-[#38bdf8]" />,
    technicalNotes: [
      'Original generic 3D body customization',
      'No third-party licensed meshes bundled',
      'Persistent local profile storage with zero tracking',
    ],
  },
];

export function ScreenshotsShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const currentScreen = SCREENS[activeTab];

  return (
    <section id="preview" className="relative py-24 bg-[#0a0e0b] border-t border-b border-[#1e281f] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] radar-glow blur-3xl pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1410] border border-[#2a382c] text-xs font-mono text-[#bbf451]">
            <Eye className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">GENUINE APPLICATION CAPTURES</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f2f7ec]">
            Verified App Interface
          </h2>
          <p className="text-sm sm:text-base text-[#95a591] leading-relaxed">
            Every screenshot below is captured directly from physical Android devices and development client runs of AETHER MAP. No fabricated mockups or simulated claims.
          </p>
        </div>

        {/* Interactive Screen Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {SCREENS.map((screen, idx) => (
            <button
              key={screen.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer border ${
                activeTab === idx
                  ? 'bg-[#bbf451] text-[#080c09] font-bold border-[#bbf451] shadow-lg shadow-[#bbf451]/15 scale-105'
                  : 'bg-[#0e1410] text-[#95a591] hover:text-[#f2f7ec] hover:bg-[#151d16] border-[#1e281f]'
              }`}
            >
              <span>{screen.icon}</span>
              <span>{screen.title}</span>
            </button>
          ))}
        </div>

        {/* Screen Showcase Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0e1410]/80 rounded-3xl border border-[#2a382c] p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          
          {/* Left Column: Device Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[310px]">
              {/* Outer halo */}
              <div className="absolute -inset-3 bg-[#bbf451]/15 rounded-[44px] blur-xl opacity-60 pointer-events-none" />

              {/* Hardware Bezel */}
              <div className="relative rounded-[36px] p-2.5 bg-gradient-to-b from-[#2a382c] to-[#0e1410] border-2 border-[#364438] shadow-2xl">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-[#080c09] rounded-full z-20 flex items-center justify-center">
                  <div className="w-8 h-1 bg-[#2a382c] rounded-full" />
                </div>

                {/* Actual Real Screenshot */}
                <div className="relative rounded-[28px] overflow-hidden bg-[#080c09] border border-[#1e281f] aspect-[9/19.5]">
                  <Image
                    key={currentScreen.id}
                    src={currentScreen.image}
                    alt={`AETHER MAP - ${currentScreen.title}`}
                    width={540}
                    height={1170}
                    className="w-full h-full object-cover object-top transition-opacity duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Verified Feature Explanation */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#95a591] bg-[#151d16] border border-[#1e281f] px-2 py-0.5 rounded">
                  {currentScreen.category}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#bbf451] bg-[#bbf451]/10 border border-[#bbf451]/30 px-2 py-0.5 rounded font-semibold">
                  {currentScreen.badge}
                </span>
              </div>
              <h3 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#f2f7ec]">
                {currentScreen.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-[#bbf451]/90">
                {currentScreen.subtitle}
              </p>
            </div>

            <p className="text-base text-[#95a591] leading-relaxed">
              {currentScreen.description}
            </p>

            {/* Technical Highlights Checklist */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#f2f7ec]">
                Engineering Specifications:
              </div>
              <div className="space-y-2">
                {currentScreen.technicalNotes.map((note, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#95a591]">
                    <ChevronRight className="w-4 h-4 text-[#bbf451] shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#download"
                className="inline-flex items-center gap-2 bg-[#bbf451] hover:bg-[#c9f868] text-[#080c09] px-5 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#bbf451]/15"
              >
                <span>Download APK to Experience</span>
              </a>
              <span className="text-xs font-mono text-[#5c6859]">
                Android APK · 105.2 MB
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
