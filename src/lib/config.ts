export interface AppConfig {
  name: string;
  tagline: string;
  subtagline: string;
  acronym: string;
  version: string;
  buildNumber: string;
  packageId: string;
  apkSize: string;
  apkSizeBytes: number;
  sha256: string;
  minAndroidVersion: string;
  targetAndroidVersion: string;
  architectures: string[];
  apkDownloadUrl: string;
  defaultSiteUrl: string;
  releaseDate: string;
}

export const APP_CONFIG: AppConfig = {
  name: 'AETHER MAP',
  tagline: 'Your City. Your Route. Smarter.',
  subtagline: 'Intelligence Above. Safety Below.',
  acronym: 'Advanced Ecosystem for Traffic, Hazards, Emergencies & Routing',
  version: '1.0.0',
  buildNumber: '100',
  packageId: 'city.nexus.map',
  apkSize: '105.2 MB',
  apkSizeBytes: 105220548,
  sha256: '3b5b6bfa91e5d5a77228ea473832a059d9a978541df6a233c1140002427237ed',
  minAndroidVersion: 'Android 8.0 (Oreo) or later',
  targetAndroidVersion: 'Android 15 (API 35)',
  architectures: ['arm64-v8a', 'x86_64'],
  // Configurable external storage download URL (e.g. Cloudflare R2 bucket public endpoint)
  // Can be overridden via NEXT_PUBLIC_APK_DOWNLOAD_URL in Vercel environment settings
  apkDownloadUrl:
    process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL ||
    'https://pub-aether-map-storage.r2.dev/AETHER-Release.apk',
  defaultSiteUrl: 'https://aether-map-download.vercel.app',
  releaseDate: 'October 2026',
};

export interface AppFeature {
  id: string;
  title: string;
  tag: string;
  description: string;
  details: string[];
  isDemonstration?: boolean;
  screenshot: string;
  accent: 'lime' | 'cyan' | 'amber';
}

export const APP_FEATURES: AppFeature[] = [
  {
    id: 'vector-map',
    title: 'Real Gurugram Vector Geography',
    tag: 'MapLibre Native · OSM Engine',
    description:
      'Smooth, high-framerate vector map powered by MapLibre Native and OpenFreeMap tiles. Pan, tilt, rotate with zero raster pixelation, and snap north with instant compass re-centering.',
    details: [
      'Bounded Gurugram road network & landmark indexing',
      'Photon explicit search with instant autocomplete',
      'Clean night HUD & dark mode navigation color scheme',
    ],
    screenshot: '/assets/screenshots/phone-dark.png',
    accent: 'lime',
  },
  {
    id: '3d-elevation',
    title: '3D Urban Building Extrusion',
    tag: 'Provider Footprints · True Pitch',
    description:
      'True 3D vector building footprints and provider height fields rendered natively. Experience dense urban corridors including DLF Cyber Hub, Sector 29, and Golf Course Road in full 3D perspective.',
    details: [
      'OSM-derived building height extrusions',
      'Dynamic pitch & camera bearing control',
      'Realistic urban density perspective for spatial orientation',
    ],
    screenshot: '/assets/screenshots/phone-3d.png',
    accent: 'cyan',
  },
  {
    id: 'turn-navigation',
    title: 'Turn-by-Turn Road Guidance & Preview',
    tag: 'OSRM Engine · Virtual Cruise',
    description:
      'Deterministic road routing powered by the Open Source Routing Machine (OSRM). Computes exact road geometry, travel duration, distance, and ordered driving maneuvers with virtual route preview.',
    details: [
      'Virtual cruise mode drives the path before you travel',
      'Real road coordinates—no straight-line approximations',
      'Step-by-step turn cards and distance milestones',
    ],
    screenshot: '/assets/screenshots/phone-route.png',
    accent: 'lime',
  },
  {
    id: 'hazard-detour',
    title: 'Hazard & Waterlogging Awareness',
    tag: 'Simulator Demonstration · Dijkstra Graph',
    description:
      'Demonstration engine that evaluates urban hazards such as monsoon waterlogging, flash flooding, and road blockages. The graph engine re-routes traffic around blocked segments in real time.',
    details: [
      'Built-in development simulator with waterlogging injection',
      'Recalculates alternate detours via Dijkstra shortest-path algorithms',
      'Clearly labeled demonstration mode for safety honesty',
    ],
    isDemonstration: true,
    screenshot: '/assets/screenshots/waterlogging-detour.png',
    accent: 'amber',
  },
  {
    id: 'place-search',
    title: 'Instant Landmark & Sector Discovery',
    tag: 'Photon Geocoding · Offline Hints',
    description:
      'Search across Gurugram sectors, commercial hubs, metro stations, and key arterial junctions. Fast cached lookup ensures quick query resolution even with intermittent connectivity.',
    details: [
      'Sector-level and landmark-specific query resolution',
      'Quick shortcuts for frequently accessed destinations',
      'Clean bottom-sheet drawer with route parameters',
    ],
    screenshot: '/assets/screenshots/phone-search.png',
    accent: 'lime',
  },
  {
    id: 'garage-customizer',
    title: 'AETHER Garage & Digital Avatars',
    tag: '3D Vehicle Customizer',
    description:
      'Choose and personalize your vehicle avatar on the live map interface. Customize 3D vehicle paint, nickname vehicles, and select between civic, emergency, and personal transport styles.',
    details: [
      'Custom 3D vehicle representation on the navigation screen',
      'Colorway selection and local profile persistence',
      'Vehicle category specs and custom telemetry tag',
    ],
    screenshot: '/assets/screenshots/phone-garage.png',
    accent: 'cyan',
  },
];
