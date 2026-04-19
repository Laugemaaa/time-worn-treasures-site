import fs from "node:fs/promises";
import path from "node:path";

await loadLocalEnvFile();

const APP_ID = process.env.TRADERA_APP_ID;
const APP_KEY = process.env.TRADERA_APP_KEY;
const SELLER_ID = process.env.TRADERA_SELLER_ID;

if (!APP_ID || !APP_KEY || !SELLER_ID) {
  console.error("Missing TRADERA_APP_ID, TRADERA_APP_KEY, or TRADERA_SELLER_ID.");
  process.exit(1);
}

const now = new Date();
const endpoint = new URL("https://api.tradera.com/v3/PublicService.asmx/GetSellerItems");
endpoint.search = new URLSearchParams({
  appId: APP_ID,
  appKey: APP_KEY,
  userId: SELLER_ID,
  categoryId: "0",
  filterActive: "Active",
  minEndDate: "0001-01-01T00:00:00",
  maxEndDate: "9999-12-31T23:59:59",
  filterItemType: "All",
}).toString();

const response = await fetch(endpoint, {
  headers: {
    Accept: "text/xml, application/xml",
    "User-Agent": "grandpas-heritage-site-sync/1.0",
  },
});

if (!response.ok) {
  console.error(`Tradera request failed with ${response.status} ${response.statusText}`);
  process.exit(1);
}

const xml = await response.text();

if (!xml.includes("<GetSellerItemsResult")) {
  console.error("Unexpected Tradera response shape.");
  process.exit(1);
}

const items = [...xml.matchAll(/<Item>([\s\S]*?)<\/Item>/g)].map((match) => match[1]);

const products = items
  .map((itemXml) => mapItem(itemXml, now))
  .filter(Boolean)
  .sort((a, b) => new Date(a.auctionEndDate).getTime() - new Date(b.auctionEndDate).getTime());

const outputPath = path.join(process.cwd(), "public", "tradera-products.json");
await fs.writeFile(outputPath, JSON.stringify(products, null, 2), "utf8");

console.log(`Wrote ${products.length} Tradera products to public/tradera-products.json`);

async function loadLocalEnvFile() {
  const envPath = path.join(process.cwd(), ".env.local");
  try {
    const raw = await fs.readFile(envPath, "utf8");
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;

      const separatorIndex = trimmed.indexOf("=");
      if (separatorIndex <= 0) continue;

      const key = trimmed.slice(0, separatorIndex).trim();
      let value = trimmed.slice(separatorIndex + 1).trim();

      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      if (!(key in process.env)) {
        process.env[key] = value;
      }
    }
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return;
    }

    throw error;
  }
}

function mapItem(itemXml, referenceDate) {
  const id = readTag(itemXml, "Id");
  const title = normalizeWhitespace(readTag(itemXml, "ShortDescription"));
  const itemLink = readTag(itemXml, "ItemLink");
  const endDate = readTag(itemXml, "EndDate");

  if (!id || !title || !itemLink || !endDate) {
    return null;
  }

  const longDescription = cleanDescription(readTag(itemXml, "LongDescription"));
  const imageLinks = [
    ...readDetailedImageUrls(itemXml),
    ...readLegacyImageUrls(itemXml),
    readTag(itemXml, "ThumbnailLink"),
  ].filter(Boolean);

  const uniqueImages = [...new Set(imageLinks)];
  const maxBid = toNumber(readTag(itemXml, "MaxBid"));
  const openingBid = toNumber(readTag(itemXml, "OpeningBid"));
  const buyItNowPrice = toNumber(readTag(itemXml, "BuyItNowPrice"));
  const currentBidPrice = maxBid || openingBid || buyItNowPrice || undefined;

  return {
    id,
    title,
    slug: `${slugify(title)}-${id}`,
    imageUrl: uniqueImages[0] || "https://placehold.co/600x600/d7c7ad/2f2117?text=Grandpa%27s+Heritage",
    images: uniqueImages.length > 0 ? uniqueImages : undefined,
    shortDescription: buildShortDescription(longDescription),
    fullDescription: longDescription || undefined,
    currentBidPrice,
    currency: "SEK",
    numberOfBids: toNumber(readTag(itemXml, "TotalBids")) || undefined,
    timeRemaining: toDuration(referenceDate, endDate),
    auctionEndDate: endDate,
    traderaUrl: itemLink,
  };
}

function readTag(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
  return match ? decodeXml(match[1]).trim() : "";
}

function readDetailedImageUrls(xml) {
  return [...xml.matchAll(/<DetailedImageLinks>([\s\S]*?)<\/DetailedImageLinks>/g)]
    .map((match) => readTag(match[1], "Url"))
    .filter(Boolean);
}

function readLegacyImageUrls(xml) {
  const section = xml.match(/<ImageLinks>([\s\S]*?)<\/ImageLinks>/);
  if (!section) return [];
  return [...section[1].matchAll(/<string>([\s\S]*?)<\/string>/g)]
    .map((match) => decodeXml(match[1]).trim())
    .filter(Boolean);
}

function buildShortDescription(description) {
  if (!description) return undefined;
  const firstParagraph = description.split("\n\n")[0]?.trim() || "";
  if (!firstParagraph) return undefined;
  return firstParagraph.length <= 170 ? firstParagraph : `${firstParagraph.slice(0, 167).trimEnd()}...`;
}

function cleanDescription(value) {
  if (!value) return "";
  return normalizeWhitespace(
    decodeXml(value)
      .replace(/<\s*br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n\n")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeWhitespace(value) {
  return value
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/[ \t]{2,}/g, " ");
}

function decodeXml(value) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
}

function toNumber(value) {
  if (!value) return 0;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function toDuration(fromDate, endDateString) {
  const endDate = new Date(endDateString);
  const diff = endDate.getTime() - fromDate.getTime();
  if (!Number.isFinite(diff) || diff <= 0) return undefined;

  const totalMinutes = Math.floor(diff / 60000);
  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const minutes = totalMinutes % 60;

  let duration = "P";
  if (days > 0) duration += `${days}D`;
  if (hours > 0 || minutes > 0) {
    duration += "T";
    if (hours > 0) duration += `${hours}H`;
    if (minutes > 0) duration += `${minutes}M`;
  }

  return duration === "P" ? "PT0M" : duration;
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}
