import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ScreenshotsShowcase } from '@/components/ScreenshotsShowcase';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { DownloadSection } from '@/components/DownloadSection';
import { InstallationGuide } from '@/components/InstallationGuide';
import { CloudflareStorageGuide } from '@/components/CloudflareStorageGuide';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080c09] text-[#f2f7ec]">
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <ScreenshotsShowcase />
        <FeaturesGrid />
        <DownloadSection />
        <InstallationGuide />
        <CloudflareStorageGuide />
      </main>
      <Footer />
    </div>
  );
}
