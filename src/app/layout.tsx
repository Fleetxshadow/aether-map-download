import type { Metadata, Viewport } from 'next';
import '@fontsource/barlow-condensed/500.css';
import '@fontsource/barlow-condensed/600.css';
import '@fontsource/barlow-condensed/700.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#080c09',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://aether-map-download.vercel.app'),
  title: 'AETHER MAP — Official Android App Download (v1.0.0 APK)',
  description:
    'Download AETHER MAP v1.0.0 for Android (105.2 MB). Official APK distribution portal for AETHER (Advanced Ecosystem for Traffic, Hazards, Emergencies & Routing). High-definition vector maps, 3D buildings, and hazard-aware navigation.',
  applicationName: 'AETHER MAP',
  keywords: [
    'AETHER MAP',
    'AETHER',
    'Android APK download',
    'Gurugram navigation app',
    'traffic hazard avoidance',
    'waterlogging routing',
    'MapLibre Android',
    'civic navigation',
  ],
  authors: [{ name: 'AETHER Project' }],
  creator: 'AETHER Engineering Team',
  publisher: 'AETHER Ecosystem',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'AETHER MAP — Official Android APK Download',
    description:
      'Your City. Your Route. Smarter. Download AETHER MAP v1.0.0 for Android (105.2 MB) with real Gurugram vector maps, 3D buildings, and hazard avoidance.',
    url: 'https://aether-map-download.vercel.app',
    siteName: 'AETHER MAP Portal',
    images: [
      {
        url: '/assets/brand/splash-lockup.png',
        width: 1200,
        height: 630,
        alt: 'AETHER MAP — Android Navigation App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AETHER MAP — Official Android APK Download',
    description:
      'Download AETHER MAP v1.0.0 for Android (105.2 MB). Real Gurugram maps, 3D urban models, and verified hazard avoidance.',
    images: ['/assets/brand/splash-lockup.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/brand/app-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#080c09] text-[#f2f7ec] min-h-screen selection:bg-[#bbf451] selection:text-[#080c09]">
        {children}
      </body>
    </html>
  );
}
