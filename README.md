# AETHER MAP — Official Android App Download Portal

Independent, premium web distribution portal for **AETHER MAP** (`city.nexus.map`), the citizen-facing Android navigation application within the **AETHER** (Advanced Ecosystem for Traffic, Hazards, Emergencies & Routing) ecosystem.

This repository is completely standalone and decoupled from the main AETHER website and Expo app repositories.

---

## 📱 Application Overview

- **App Name:** AETHER MAP
- **Package ID:** `city.nexus.map`
- **Platform:** Android 8.0 (API 26) through Android 15 (API 35)
- **Target Architectures:** `arm64-v8a`, `x86_64`
- **Current Version:** `1.0.0` (Build 100)
- **File Size:** `105.2 MB` (105,220,548 bytes)
- **Cryptographic Hash (SHA-256):** `3b5b6bfa91e5d5a77228ea473832a059d9a978541df6a233c1140002427237ed`

---

## 🎨 Visual Identity & Design

- **Deep Charcoal / Black Background:** `#080c09`, `#0e1410`
- **AETHER Signature Lime Accents:** `#bbf451`, `#d8ed86`
- **Subtle Cyan & Amber Highlights:** `#38bdf8`, `#ffb347`
- **Typography:**
  - Display Headings: *Barlow Condensed*
  - Body Copy: *Manrope*
  - Telemetry & Technical Tags: *IBM Plex Mono*
- **Aesthetic:** Tactical, futuristic civic intelligence interface with radar glow, HUD corner brackets, and responsive hardware mockups.

---

## 🌐 Architecture & Deployment

### 1. Website Hosting (Vercel)
The download website is built with Next.js 16 App Router and Tailwind CSS v4. It prerenders 100% static HTML for sub-second loading on Vercel's free Hobby tier.

### 2. APK Hosting (Cloudflare R2 / External Object Storage)
The 105.2 MB APK is decoupled from the website deployment:
- **Never committed to Git** (enforced in `.gitignore`).
- **Never bundled into Vercel build** (prevents serverless bundle limit violations).
- **Configurable via environment variable:** `NEXT_PUBLIC_APK_DOWNLOAD_URL`.

### 3. Dynamic QR Code
The QR code displayed on the website dynamically encodes the current web portal URL (e.g. `https://aether-map-download.vercel.app`):
- When printed on exhibition boards, banners, flyers, or project stands, visitors can scan to open the website.
- New APK versions can be published without needing to re-print materials.
- Includes an instant SVG export button for high-resolution printing.

---

## 🚀 Local Development

```powershell
# Navigate to the project directory
cd C:\Users\rohit\aether-map-download

# Run development server (default port 3005)
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

---

## ☁️ How to Upload APK to Cloudflare R2 & Deploy to Vercel

### Step 1: Upload APK to Cloudflare R2
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **R2 Object Storage**.
2. Create a bucket (e.g., `aether-storage`) and enable the **Public R2.dev URL** or connect your custom domain (e.g., `download.aethercity.org`).
3. Upload the APK using Wrangler or web dashboard:
   ```powershell
   npx wrangler r2 object put aether-storage/AETHER-Release.apk --file="C:\Users\rohit\OneDrive\Documents\ChatGPT\Nexus Drone app\AETHER-Release.apk" --content-type="application/vnd.android.package-archive"
   ```
4. Note your public APK download link:
   `https://pub-<bucket-id>.r2.dev/AETHER-Release.apk`

### Step 2: Deploy to Vercel
1. Run `npx vercel` from `C:\Users\rohit\aether-map-download` or push to a GitHub repository and link it in the Vercel Dashboard.
2. In Vercel Project Settings → **Environment Variables**, add:
   ```env
   NEXT_PUBLIC_APK_DOWNLOAD_URL=https://pub-<bucket-id>.r2.dev/AETHER-Release.apk
   ```
3. Deploy! Your site will be live at `https://aether-map-download.vercel.app`.

---

## 🛡️ Data Honesty & Feature Scope

- **Real Vector Geography:** Powered by MapLibre Native and OpenFreeMap tiles.
- **3D Urban Buildings:** OSM provider footprints & height fields in Gurugram (DLF Cyber Hub, Sector 29, Sector 51).
- **Road Routing & Preview:** OSRM road geometry calculation with virtual route preview.
- **Waterlogging Awareness Simulator:** Integrated synthetic road graph with real Dijkstra detour recalculation for simulated monsoon flooding. Transparently identified as a demonstration feature.
- **Zero Privacy Intrusion:** Foreground-only GPS; no microphone permission, no background telemetry, and no ad trackers.
