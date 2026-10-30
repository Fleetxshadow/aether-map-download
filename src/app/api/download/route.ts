import { NextResponse } from 'next/server';

export async function GET() {
  const externalUrl =
    process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL ||
    'https://github.com/Fleetxshadow/aether-map-download/releases/download/v1.0.0/AETHER-Release.apk';

  return NextResponse.redirect(externalUrl, 302);
}
