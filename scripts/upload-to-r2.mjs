/**
 * Helper script to upload AETHER-Release.apk to Cloudflare R2.
 * 
 * Usage:
 *   node scripts/upload-to-r2.mjs <path-to-apk> <r2-bucket-name>
 * 
 * Prerequisites:
 *   Set CLOUDFLARE_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY in environment,
 *   OR use the Cloudflare Wrangler CLI:
 *   npx wrangler r2 object put <bucket>/AETHER-Release.apk --file="<path-to-apk>" --content-type="application/vnd.android.package-archive"
 */

import fs from 'node:fs';
import path from 'node:path';

const defaultApkPath = 'C:\\Users\\rohit\\OneDrive\\Documents\\ChatGPT\\Nexus Drone app\\AETHER-Release.apk';
const apkPath = process.argv[2] || defaultApkPath;

console.log('--------------------------------------------------');
console.log('AETHER MAP APK Storage Uploader');
console.log('--------------------------------------------------');

if (!fs.existsSync(apkPath)) {
  console.error(`APK not found at path: ${apkPath}`);
  console.log('Please provide a valid path to the APK file.');
  process.exit(1);
}

const stats = fs.statSync(apkPath);
const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
console.log(`Found APK: ${path.basename(apkPath)}`);
console.log(`Size: ${sizeMB} MB (${stats.size} bytes)`);
console.log('\nSuggested Cloudflare Wrangler command:');
console.log(`npx wrangler r2 object put aether-storage/AETHER-Release.apk --file="${apkPath}" --content-type="application/vnd.android.package-archive"`);
console.log('\nAfter upload, set NEXT_PUBLIC_APK_DOWNLOAD_URL in Vercel to your public R2 URL.');
console.log('--------------------------------------------------');
