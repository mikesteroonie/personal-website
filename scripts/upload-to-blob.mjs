import { put } from "@vercel/blob";
import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { config } from "dotenv";

// Load .env.local
config({ path: ".env.local" });

const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

if (!BLOB_READ_WRITE_TOKEN) {
  console.error("❌ BLOB_READ_WRITE_TOKEN environment variable is required");
  console.log("\nGet your token from: https://vercel.com/dashboard/stores");
  process.exit(1);
}

async function uploadDirectory(localPath, blobPrefix) {
  const files = await readdir(localPath);
  const urls = {};

  for (const file of files) {
    const filePath = join(localPath, file);
    const fileBuffer = await readFile(filePath);
    const blobPath = `${blobPrefix}/${file}`;

    console.log(`📤 Uploading ${file}...`);

    const blob = await put(blobPath, fileBuffer, {
      access: "public",
      token: BLOB_READ_WRITE_TOKEN,
    });

    urls[file] = blob.url;
    console.log(`✅ ${file} -> ${blob.url}`);
  }

  return urls;
}

async function main() {
  console.log("🚀 Starting upload to Vercel Blob...\n");

  // Upload images
  console.log("📸 Uploading images...");
  const imageUrls = await uploadDirectory(
    "public/images/2025-year-in-review",
    "2025-year-in-review"
  );

  // Upload videos
  console.log("\n🎥 Uploading videos...");
  const videoUrls = await uploadDirectory("public/videos", "videos");

  // Save URL mapping
  const urlMap = {
    images: imageUrls,
    videos: videoUrls,
  };

  console.log("\n✨ Upload complete!");
  console.log("\n📋 URL Mapping:");
  console.log(JSON.stringify(urlMap, null, 2));

  // Save to file for reference
  await writeFile("blob-urls.json", JSON.stringify(urlMap, null, 2));
  console.log("\n💾 URLs saved to blob-urls.json");
}

main().catch(console.error);
