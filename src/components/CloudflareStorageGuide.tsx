'use client';

import React, { useState } from 'react';
import { Server, Cloud, Check, Copy, ChevronDown, ChevronUp, Terminal, Shield, ArrowUpRight } from 'lucide-react';

export function CloudflareStorageGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);

  const r2GuideScript = `# 1. Upload AETHER-Release.apk (105.2 MB) to your Cloudflare R2 Bucket
# Using Cloudflare Wrangler CLI:
npx wrangler r2 object put aether-storage/AETHER-Release.apk --file="./AETHER-Release.apk" --content-type="application/vnd.android.package-archive"

# 2. In Vercel Project Settings -> Environment Variables, add:
NEXT_PUBLIC_APK_DOWNLOAD_URL="https://pub-your-bucket-id.r2.dev/AETHER-Release.apk"
# (or your custom domain: https://download.aethercity.org/AETHER-Release.apk)

# 3. Redeploy on Vercel without touching or bloating the Git repository!`;

  const handleCopyScript = () => {
    navigator.clipboard.writeText(r2GuideScript);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  return (
    <section className="relative py-12 bg-[#080c09] border-t border-[#1e281f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl bg-[#0e1410] border border-[#2a382c] overflow-hidden shadow-lg">
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-[#151d16] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-[#f2f7ec]">
                    External Storage & Cloudflare R2 Architecture
                  </h3>
                  <span className="text-[10px] font-mono text-[#bbf451] bg-[#bbf451]/10 px-2 py-0.5 rounded border border-[#bbf451]/20 uppercase">
                    Configurable
                  </span>
                </div>
                <p className="text-xs text-[#95a591] mt-0.5">
                  How the 105.2 MB APK is decoupled from Vercel edge deployment via <code className="text-[#bbf451]">NEXT_PUBLIC_APK_DOWNLOAD_URL</code>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#95a591]">
              <span>{isOpen ? 'Collapse' : 'View Architecture'}</span>
              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {isOpen && (
            <div className="p-6 sm:p-8 pt-0 border-t border-[#1e281f] space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#95a591]">
                <div className="space-y-3">
                  <div className="font-mono text-[#f2f7ec] font-bold uppercase text-[11px] tracking-wider">
                    Why Cloudflare R2 / External Object Storage?
                  </div>
                  <p className="leading-relaxed">
                    Vercel is optimized for serverless applications and static assets under 50MB. Bundling a 105.2 MB APK directly into Git or Vercel would exceed free serverless execution limits, slow down build times, and consume edge bandwidth quotas.
                  </p>
                  <p className="leading-relaxed">
                    Hosting the APK on Cloudflare R2 provides zero egress fees, fast global CDN distribution, and ensures that website builds remain lightweight, instant, and 100% compliant with Vercel&apos;s Hobby plan.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="font-mono text-[#f2f7ec] font-bold uppercase text-[11px] tracking-wider">
                    Storage Alternative Comparison:
                  </div>
                  <ul className="space-y-2 font-mono text-[11px]">
                    <li className="flex items-center justify-between p-2 rounded bg-[#151d16] border border-[#1e281f]">
                      <span className="text-[#f2f7ec] font-bold">Cloudflare R2 (Recommended)</span>
                      <span className="text-[#bbf451]">10 GB Free · $0 Egress</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-[#151d16] border border-[#1e281f]">
                      <span className="text-[#f2f7ec]">GitHub Releases (Alternative)</span>
                      <span className="text-[#95a591]">Free · 2GB per asset limit</span>
                    </li>
                    <li className="flex items-center justify-between p-2 rounded bg-[#151d16] border border-[#1e281f]">
                      <span className="text-[#f2f7ec]">AWS S3</span>
                      <span className="text-[#95a591]">5 GB Free · Egress fees apply</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Terminal Code Snippet */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#95a591] flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>R2 Upload & Environment Variable Setup:</span>
                  </span>
                  <button
                    onClick={handleCopyScript}
                    className="flex items-center gap-1 text-[#bbf451] hover:text-[#c9f868] transition-colors cursor-pointer"
                  >
                    {copiedScript ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedScript ? 'Copied!' : 'Copy Script'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-[#080c09] border border-[#1e281f] text-[11px] font-mono text-[#95a591] overflow-x-auto">
                  {r2GuideScript}
                </pre>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
