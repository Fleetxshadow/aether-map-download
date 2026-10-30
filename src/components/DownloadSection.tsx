'use client';

import React, { useState, useEffect, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { APP_CONFIG } from '@/lib/config';
import {
  Download,
  QrCode,
  Copy,
  Check,
  Shield,
  FileCode,
  Smartphone,
  ExternalLink,
  Server,
  Share2,
  HardDriveDownload,
  AlertCircle,
} from 'lucide-react';

export function DownloadSection() {
  const [siteUrl, setSiteUrl] = useState(APP_CONFIG.defaultSiteUrl);
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [qrSize, setQrSize] = useState(200);
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Use current window location (origin + pathname) so QR code stays dynamic across preview/staging/production
      setSiteUrl(window.location.origin + window.location.pathname);
    }
  }, []);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(APP_CONFIG.sha256);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(siteUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownloadQr = () => {
    if (!qrRef.current) return;
    const svg = qrRef.current.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);

    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = 'aether-map-portal-qr.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgUrl);
  };

  return (
    <section id="download" className="relative py-24 bg-[#0a0e0b] border-t border-[#1e281f] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] radar-glow blur-3xl pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1410] border border-[#2a382c] text-xs font-mono text-[#bbf451]">
            <HardDriveDownload className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">OFFICIAL DISTRIBUTION PORTAL</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#f2f7ec]">
            Download AETHER MAP for Android
          </h2>
          <p className="text-sm sm:text-base text-[#95a591] leading-relaxed">
            Get the standalone Android APK directly. Built for direct installation, zero third-party store tracking, and instant route exploration.
          </p>
        </div>

        {/* Dual Cards: Primary Download & Dynamic QR Code Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Direct APK Download & Specs (7 cols) */}
          <div className="lg:col-span-7 bg-[#0e1410] rounded-3xl border border-[#2a382c] p-7 sm:p-9 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {/* Corner Decorative HUD line */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#bbf451]/10 to-transparent pointer-events-none" />

            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#151d16] border border-[#2a382c] flex items-center justify-center p-2">
                    <Smartphone className="w-6 h-6 text-[#bbf451]" />
                  </div>
                  <div>
                    <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#f2f7ec] uppercase">
                      AETHER MAP Android Package
                    </h3>
                    <span className="text-xs font-mono text-[#95a591]">
                      Package ID: <code className="text-[#bbf451]">{APP_CONFIG.packageId}</code>
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono bg-[#bbf451]/10 text-[#bbf451] border border-[#bbf451]/30 px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                  Release v{APP_CONFIG.version}
                </span>
              </div>

              {/* Big Prominent Download Button */}
              <div className="pt-2 space-y-3">
                <a
                  href={APP_CONFIG.apkDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between bg-[#bbf451] hover:bg-[#c9f868] text-[#080c09] p-5 sm:p-6 rounded-2xl font-bold transition-all duration-200 shadow-xl shadow-[#bbf451]/20 hover:shadow-[#bbf451]/35 hover:translate-y-[-2px] active:translate-y-[0px] cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#080c09] text-[#bbf451] p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Download className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#080c09]/80">
                        Primary Release CDN
                      </div>
                      <div className="text-xl sm:text-2xl font-['Barlow_Condensed'] uppercase tracking-wider font-extrabold text-[#080c09]">
                        Download Android APK
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-sm font-mono font-bold bg-[#080c09] text-[#bbf451] px-3 py-1 rounded-lg">
                      {APP_CONFIG.apkSize}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[#080c09]/70 mt-1">
                      .apk format
                    </span>
                  </div>
                </a>

                {/* Android Finalization Notice */}
                <div className="p-3.5 rounded-xl bg-[#ffb347]/10 border border-[#ffb347]/30 text-xs text-[#ffb347] flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="font-bold font-mono uppercase tracking-wide block">
                      Android Finalization Note:
                    </span>
                    <span className="text-[#f2f7ec]/90 leading-relaxed block text-[11px]">
                      When the download reaches 100%, Chrome or your Android notification bar may display: <em>&quot;File might be harmful. Keep anyway?&quot;</em> Tap <strong>&quot;Download anyway&quot;</strong> or <strong>&quot;Keep&quot;</strong> to finalize the file on your device.
                    </span>
                  </div>
                </div>

                {/* Secondary Backup Mirrors */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono pt-1 gap-2">
                  <span className="text-[#5c6859]">Direct Mirrors:</span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://drive.google.com/file/d/1ghc8rX8bSV_sZTf2wJx6cTWdRV9wKvyq/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#38bdf8] hover:text-[#bbf451] transition-colors flex items-center gap-1"
                    >
                      <span>Google Drive View</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-[#2a382c]">·</span>
                    <a
                      href="https://github.com/Fleetxshadow/aether-map-download/releases/tag/v1.0.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#95a591] hover:text-[#bbf451] transition-colors flex items-center gap-1"
                    >
                      <span>GitHub Release</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Storage Architecture Disclosure */}
              <div className="p-4 rounded-xl bg-[#151d16]/70 border border-[#1e281f] text-xs text-[#95a591] flex items-start gap-3">
                <Server className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-mono text-[#f2f7ec] font-semibold text-[11px] uppercase tracking-wider">
                    High-Speed External APK Delivery
                  </div>
                  <div>
                    The 105.2 MB APK is hosted on dedicated cloud object storage (Cloudflare R2) rather than inside the web bundle, ensuring blazing fast multi-threaded downloads with zero edge quota constraints.
                  </div>
                </div>
              </div>

              {/* Specs Table */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#151d16] border border-[#1e281f]">
                  <span className="text-[10px] uppercase text-[#5c6859] block">File Size</span>
                  <span className="text-[#f2f7ec] font-bold">{APP_CONFIG.apkSize} (105,220,548 B)</span>
                </div>
                <div className="p-3 rounded-xl bg-[#151d16] border border-[#1e281f]">
                  <span className="text-[10px] uppercase text-[#5c6859] block">Target Architecture</span>
                  <span className="text-[#f2f7ec] font-bold">arm64-v8a / x86_64</span>
                </div>
                <div className="p-3 rounded-xl bg-[#151d16] border border-[#1e281f]">
                  <span className="text-[10px] uppercase text-[#5c6859] block">Min Android OS</span>
                  <span className="text-[#f2f7ec] font-bold">{APP_CONFIG.minAndroidVersion}</span>
                </div>
              </div>

            </div>

            {/* Cryptographic Hash Verification Card */}
            <div className="mt-6 pt-5 border-t border-[#1e281f] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#95a591] flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#bbf451]" />
                  <span>SHA-256 Checksum:</span>
                </span>
                <button
                  onClick={handleCopyHash}
                  className="flex items-center gap-1 text-[#bbf451] hover:text-[#c9f868] transition-colors cursor-pointer"
                >
                  {copiedHash ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Hash</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-2.5 rounded-lg bg-[#080c09] border border-[#1e281f] font-mono text-[11px] text-[#95a591] break-all select-all">
                {APP_CONFIG.sha256}
              </div>
            </div>

          </div>

          {/* Card 2: Exhibition & Sharing QR Code (5 cols) */}
          <div id="qr-code" className="lg:col-span-5 bg-[#0e1410] rounded-3xl border border-[#2a382c] p-7 sm:p-9 flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-[#bbf451]" />
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#f2f7ec] uppercase">
                    Scan or Print QR Code
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase bg-[#151d16] border border-[#1e281f] text-[#95a591] px-2 py-0.5 rounded">
                  PORTAL LINK
                </span>
              </div>

              <p className="text-xs text-[#95a591] leading-relaxed">
                This QR code points to <strong className="text-[#f2f7ec]">this download website</strong>, not directly to the APK file. This ensures you can print this QR code on exhibition boards, pamphlets, and posters, and update the APK in the future without changing the code.
              </p>

              {/* Dynamic QR Code Render */}
              <div className="flex justify-center py-4">
                <div
                  ref={qrRef}
                  className="p-5 rounded-2xl bg-white shadow-2xl border-4 border-[#bbf451]/40 flex flex-col items-center justify-center"
                >
                  <QRCodeSVG
                    value={siteUrl}
                    size={qrSize}
                    level="H"
                    includeMargin={false}
                    fgColor="#080c09"
                    bgColor="#ffffff"
                    imageSettings={{
                      src: '/assets/brand/official-emblem-extracted.png',
                      x: undefined,
                      y: undefined,
                      height: 38,
                      width: 38,
                      excavate: true,
                    }}
                  />
                  <span className="mt-2 text-[9px] font-mono font-bold tracking-widest text-[#080c09] uppercase">
                    AETHER MAP · PORTAL
                  </span>
                </div>
              </div>

              {/* Link Display with Copy CTA */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#151d16] border border-[#1e281f]">
                <input
                  type="text"
                  readOnly
                  value={siteUrl}
                  className="bg-transparent text-xs font-mono text-[#95a591] flex-1 outline-none truncate"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1 bg-[#2a382c] hover:bg-[#bbf451] hover:text-[#080c09] text-[#f2f7ec] rounded-lg text-xs font-mono transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

            </div>

            {/* Print & Exhibition Actions */}
            <div className="pt-6 mt-4 border-t border-[#1e281f] flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownloadQr}
                className="flex-1 flex items-center justify-center gap-2 bg-[#151d16] hover:bg-[#1e281f] text-[#f2f7ec] hover:text-[#bbf451] border border-[#2a382c] py-2.5 px-4 rounded-xl font-mono text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Vector QR (SVG)</span>
              </button>
              <a
                href="#install-guide"
                className="flex items-center justify-center gap-1 text-xs font-mono text-[#95a591] hover:text-[#bbf451] transition-colors py-2 px-2"
              >
                <span>Install Guide →</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
