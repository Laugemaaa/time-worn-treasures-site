import fs from "node:fs/promises";
import path from "node:path";

await loadLocalEnvFile();

const APP_ID = process.env.TRADERA_APP_ID;
const APP_KEY = process.env.TRADERA_APP_KEY;
const SELLER_ID = process.env.TRADERA_SELLER_ID;
const SELLER_ALIAS = process.env.TRADERA_SELLER_ALIAS || "grandpasheritage";

if (!SELLER_ID) {
  console.error("Missing TRADERA_SELLER_ID.");
  process.exit(1);
}

const now = new Date();
let products = [];

if (APP_ID && APP_KEY) {
  products = await fetchProductsFromApi(now);
}

if (products.length === 0) {
  products = await scrapeProductsFromSellerProfile(now);
}

const outputPath = path.join(process.cwd(), "public", "tradera-products.json");
await fs.writeFile(outputPath, JSON.stringify(products, null, 2), "utf8");

console.log(`Wrote ${products.length} Tradera products to public/tradera-products.json`);

async function fetchProductsFromApi(referenceDate) {
  const endpoint = new URL("https://api.tradera.com/v3/PublicService.asmx/GetSellerItems");
  endpoint.search = new URLSearchParams({
    appId: APP_ID,
    appKey: APP_KEY,
    userId: SELLER_ID,
    categoryId: "0",
    filterType: "1",
    minEndDate: "0001-01-01T00:00:00",
    maxEndDate: "9999-12-31T23:59:59",
  }).toString();

  const response = await fetch(endpoint, {
    headers: {
      Accept: "text/xml, application/xml",
      "User-Agent": "grandpas-heritage-site-sync/1.0",
    },
  });

  if (!response.ok) {
    console.warn(`Tradera API request failed with ${response.status} ${response.statusText}`);
    return [];
  }

  const xml = await response.text();
  if (!xml.includes("GetSellerItemsResult")) {
    console.warn("Unexpected Tradera API response shape.");
    return [];
  }

  return findBlocks(xml, "Item")
    .map((itemXml) => mapItem(itemXml, referenceDate))
    .filter(Boolean)
    .sort((a, b) => new Date(a.auctionEndDate).getTime() - new Date(b.auctionEndDate).getTime());
}

async function scrapeProductsFromSellerProfile(referenceDate) {
  const sellerProfileUrl = `https://www.tradera.com/da/profile/items/${SELLER_ID}/${SELLER_ALIAS}`;
  const response = await fetch(sellerProfileUrl, {
    headers: {
      Accept: "text/html,application/xhtml+xml",
      "User-Agent": "grandpas-heritage-site-sync/1.0",
    },
  });

  if (!response.ok) {
    console.warn(`Seller profile request failed with ${response.status} ${response.statusText}`);
    return [];
  }

  const html = await response.text();
  const itemUrls = [...new Set(
    [...html.matchAll(/https:\/\/www\.tradera\.com\/da\/item\/\d+\/\d+\/[a-z0-9-]+|\/da\/item\/\d+\/\d+\/[a-z0-9-]+/gi)]
      .map((match) => match[0].startsWith("http") ? match[0] : `https://www.tradera.com${match[0]}`)
  )];

  const scrapedProducts = [];
  for (const itemUrl of itemUrls) {
    const product = await scrapeItemPage(itemUrl, referenceDate);
    if (product) {
      scrapedProducts.push(product);
    }
  }

  return scrapedProducts.sort((a, b) => new Date(a.auctionEndDate).getTime() - new Date(b.auctionEndDate).getTime());
}

async function scrapeItemPage(itemUrl, referenceDate) {
  const response = await fetch(itemUrl, {
    headers: {
      Accept: "text/html,application/xhtml+xml",
      "User-Agent": "grandpas-heritage-site-sync/1.0",
    },
  });

  if (!response.ok) {
    console.warn(`Item page request failed for ${itemUrl} with ${response.status}`);
    return null;
  }

  const html = await response.text();
  const text = toTextContent(html);

  const title = matchText(text, /#?\s*([^\n]+?)\n\s*Slutter\s+\d{1,2}\s+\w+\s+\d{2}:\d{2}/i)
    || matchMeta(html, "og:title")
    || matchTag(html, "h1");
  const endLabel = matchText(text, /Slutter\s+([^\n]+)/i);
  const priceText = matchText(text, /Udbudspris\s+([\d.\u00a0 ]+)\s*(DKK|SEK|NOK)/i);
  const bidCount = Number((matchText(text, /(\d+)\s+bud/i) || "").replace(/[^\d]/g, "")) || 0;
  const startPriceText = matchText(text, /(?:Startpris|Udbudspris)\s+([\d.\u00a0 ]+)\s*(DKK|SEK|NOK)/i);
  const description = cleanDescription(
    matchText(text, /Beskrivelse\s+([\s\S]*?)\s+Varenr\./i)
    || ""
  );
  const itemNumber = matchText(text, /Varenr\.\s*([\d\u00a0 ]+)/i)?.replace(/[^\d]/g, "");
  const views = Number((matchText(text, /Visninger\s+(\d+)/i) || "").replace(/[^\d]/g, "")) || undefined;
  const published = matchText(text, /Publiceret\s+([^\n]+)/i);
  const imageUrls = extractImageUrls(html);
  const imageUrl = imageUrls[0]
    || matchMeta(html, "og:image")
    || matchMeta(html, "twitter:image")
    || "https://placehold.co/600x600/d7c7ad/2f2117?text=Grandpa%27s+Heritage";

  if (!title || !endLabel) {
    return null;
  }

  const parsedPrice = parseMoney(priceText);
  const parsedStartingPrice = parseMoney(startPriceText);
  const auctionEndDate = parseTraderaDate(endLabel, referenceDate);

  return {
    id: itemNumber || itemUrl.match(/\/(\d+)\/[a-z0-9-]+$/i)?.[1] || slugify(title),
    title: normalizeWhitespace(title),
    slug: `${slugify(title)}-${itemNumber || "tradera"}`,
    imageUrl,
    images: imageUrls.length > 0 ? imageUrls : [imageUrl],
    shortDescription: buildShortDescription(description),
    fullDescription: description || undefined,
    currentBidPrice: parsedPrice.amount,
    startingBidPrice: parsedStartingPrice.amount || parsedPrice.amount,
    currency: parsedPrice.currency,
    numberOfBids: bidCount,
    numberOfViewers: views,
    timeRemaining: auctionEndDate ? toDuration(referenceDate, auctionEndDate) : undefined,
    auctionEndDate: auctionEndDate || published || undefined,
    traderaUrl: itemUrl,
  };
}

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

function toTextContent(html) {
  return decodeXml(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, "\n")
  )
    .replace(/\r/g, "")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

function matchMeta(html, property) {
  const escaped = property.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(`<meta[^>]+property=["']${escaped}["'][^>]+content=["']([^"']+)["']`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${escaped}["']`, "i"),
    new RegExp(`<meta[^>]+name=["']${escaped}["'][^>]+content=["']([^"']+)["']`, "i"),
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return decodeXml(match[1]).trim();
  }

  return "";
}

function extractImageUrls(html) {
  const carouselMatches = [
    ...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]+alt=["'](?:thumbnail|galleryimage[^"']*)["'][^>]*>/gi),
    ...html.matchAll(/<img[^>]+alt=["'](?:thumbnail|galleryimage[^"']*)["'][^>]+src=["']([^"']+)["'][^>]*>/gi),
    ...html.matchAll(/<img[^>]+class=["'][^"']*view-item-carousel[^"']*["'][^>]+src=["']([^"']+)["'][^>]*>/gi),
    ...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]+class=["'][^"']*view-item-carousel[^"']*["'][^>]*>/gi),
  ]
    .map((match) => decodeXml(match[1]))
    .map(normalizeImageUrl)
    .filter(Boolean);

  const prioritized = [...new Set(carouselMatches)].filter((url) => {
    const lower = url.toLowerCase();
    return lower.includes("img.tradera.net");
  });

  if (prioritized.length > 0) {
    return dedupeByImageIdentity(prioritized);
  }

  const fallback = [
    matchMeta(html, "og:image:secure_url"),
    matchMeta(html, "og:image"),
    matchMeta(html, "twitter:image"),
  ]
    .map(normalizeImageUrl)
    .filter(Boolean);

  return dedupeByImageIdentity(fallback);
}

function normalizeImageUrl(url) {
  return url
    .replace(/\\u002F/g, "/")
    .replace(/\\\//g, "/")
    .replace(/&amp;/g, "&")
    .trim();
}

function dedupeByImageIdentity(urls) {
  const byIdentity = new Map();

  for (const url of urls) {
    const identity = url
      .replace(/https?:\/\/img\.tradera\.net\//i, "")
      .replace(/^(?:large-fit|medium-fit|large|medium|images)\//i, "")
      .split("?")[0]
      .toLowerCase();

    if (!byIdentity.has(identity)) {
      byIdentity.set(identity, url);
    }
  }

  return [...byIdentity.values()];
}

function matchTag(html, tag) {
  const match = html.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? cleanDescription(match[1]) : "";
}

function matchText(text, pattern) {
  const match = text.match(pattern);
  return match ? normalizeWhitespace(match[1]) : "";
}

function parseMoney(raw) {
  if (!raw) {
    return { amount: undefined, currency: undefined };
  }

  const match = raw.match(/([\d.\u00a0 ]+)\s*(DKK|SEK|NOK)/i);
  if (!match) {
    return { amount: undefined, currency: undefined };
  }

  return {
    amount: Number(match[1].replace(/[^\d]/g, "")) || undefined,
    currency: match[2].toUpperCase(),
  };
}

function parseTraderaDate(label, referenceDate) {
  const match = label.match(/(\d{1,2})\s+([A-Za-zÆØÅæøå]{3,})\s+(\d{2}:\d{2})/i);
  if (!match) return undefined;

  const monthMap = {
    jan: 0, feb: 1, mar: 2, apr: 3, maj: 4, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, okt: 9, oct: 9, nov: 10, dec: 11, des: 11,
  };

  const day = Number(match[1]);
  const monthKey = match[2].slice(0, 3).toLowerCase();
  const month = monthMap[monthKey];
  if (month == null) return undefined;

  const [hours, minutes] = match[3].split(":").map(Number);
  let year = referenceDate.getFullYear();
  const candidate = new Date(Date.UTC(year, month, day, hours - 2, minutes));
  if (candidate.getTime() < referenceDate.getTime() - 30 * 24 * 60 * 60 * 1000) {
    year += 1;
  }

  const date = new Date(year, month, day, hours, minutes, 0);
  return date.toISOString();
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
    startingBidPrice: openingBid || buyItNowPrice || currentBidPrice,
    currency: "SEK",
    numberOfBids: toNumber(readTag(itemXml, "TotalBids")) || undefined,
    timeRemaining: toDuration(referenceDate, endDate),
    auctionEndDate: endDate,
    traderaUrl: itemLink,
  };
}

function readTag(xml, tag) {
  const match = xml.match(new RegExp(`<(?:(?:\\w+):)?${tag}\\b[^>]*>([\\s\\S]*?)<\\/(?:(?:\\w+):)?${tag}>`));
  return match ? decodeXml(match[1]).trim() : "";
}

function readDetailedImageUrls(xml) {
  return findBlocks(xml, "DetailedImageLinks")
    .map((block) => readTag(block, "Url"))
    .filter(Boolean);
}

function readLegacyImageUrls(xml) {
  const sections = findBlocks(xml, "ImageLinks");
  if (sections.length === 0) return [];

  return sections.flatMap((section) =>
    findBlocks(section, "string")
      .map((value) => decodeXml(value).trim())
      .filter(Boolean)
  );
}

function findBlocks(xml, tag) {
  const pattern = new RegExp(
    `<(?:(?:\\w+):)?${tag}\\b[^>]*>([\\s\\S]*?)<\\/(?:(?:\\w+):)?${tag}>`,
    "g"
  );

  return [...xml.matchAll(pattern)]
    .map((match) => match[1])
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
