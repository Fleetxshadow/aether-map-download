'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Navigation, MapPin, AlertTriangle, ShieldCheck, Car, Eye, ChevronRight, Video, Image as ImageIcon } from 'lucide-react';
import { InteractiveDevice3D } from '@/components/InteractiveDevice3D';
import { soundFx } from '@/lib/audio';

interface ScreenItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  badge: string;
  image: string;
  video?: string;
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
    video: '/assets/videos/phone-live-demo.mp4',
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
    video: '/assets/videos/garage-demo.mp4',
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

  const handleTabChange = (idx: number) => {
    soundFx.playClick();
    setActiveTab(idx);
  };

  return (
    <section id="preview" className="relative py-28 bg-[#0a0e0b] border-t border-b border-[#1e281f] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] radar-glow blur-3xl pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1410] border border-[#2a382c] text-xs font-mono text-[#bbf451]">
            <Eye className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">SCROLLTIDE INTERACTIVE PREVIEW</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#f2f7ec]">
            Real App in Action
          </h2>
          <p className="text-sm sm:text-base text-[#95a591] leading-relaxed">
            Captured directly from Android development client runs in Gurugram. Tilt the 3D phone or switch to live in-app recordings.
          </p>
        </div>

        {/* Interactive Screen Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {SCREENS.map((screen, idx) => (
            <button
              key={screen.id}
              onClick={() => handleTabChange(idx)}
              className={`relative px-4 py-2.5 rounded-xl font-mono text-xs tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer border ${
                activeTab === idx
                  ? 'bg-[#bbf451] text-[#080c09] font-bold border-[#bbf451] shadow-lg shadow-[#bbf451]/20 scale-105'
                  : 'bg-[#0e1410] text-[#95a591] hover:text-[#f2f7ec] hover:bg-[#151d16] border-[#1e281f]'
              }`}
            >
              <span>{screen.title}</span>
            </button>
          ))}
        </div>

        {/* Screen Showcase Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0e1410]/80 rounded-3xl border border-[#2a382c] p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          
          {/* Left Column: Interactive 3D Phone with Video Support */}
          <div className="lg:col-span-5 flex justify-center">
            <InteractiveDevice3D
              key={currentScreen.id}
              imageSrc={currentScreen.image}
              videoSrc={currentScreen.video || '/assets/videos/phone-live-demo.mp4'}
              alt={`AETHER MAP - ${currentScreen.title}`}
              captionTitle={currentScreen.title.toUpperCase()}
              captionSubtitle={currentScreen.subtitle}
              allowVideoToggle={!!currentScreen.video}
            />
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
              <h3 className="font-['Barlow_Condensed'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f2f7ec]">
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
                Verified Technical Implementations:
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
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 bg-[#bbf451] hover:bg-[#c9f868] text-[#080c09] px-5 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#bbf451]/15 hover:scale-[1.02] cursor-pointer"
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
