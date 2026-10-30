import { NextResponse } from 'next/server';

export async function GET() {
  const externalUrl =
    process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL ||
    'https://drive.usercontent.google.com/download?id=1ghc8rX8bSV_sZTf2wJx6cTWdRV9wKvyq&export=download&confirm=t';

  return NextResponse.redirect(externalUrl, 302);
}
