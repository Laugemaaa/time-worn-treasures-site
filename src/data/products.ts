export type Product = {
  listingType?: "auction" | "fixed-price";
  fixedPrice?: number;
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  images?: string[];
  shortDescription?: string;
  fullDescription?: string;
  historyNote?: string;
  currentBidPrice?: number;
  startingBidPrice?: number;
  currency?: string;
  numberOfBids?: number;
  numberOfViewers?: number;
  timeRemaining?: string;
  auctionEndDate?: string;
  traderaUrl: string;
};

const GENERATED_PRODUCTS_PATH = `${import.meta.env.BASE_URL}tradera-products.json`;

export function isActiveProduct(product: Product) {
  return !product.auctionEndDate || new Date(product.auctionEndDate).getTime() > Date.now();
}
export function isFixedPriceProduct(product: Product) { return product.listingType === "fixed-price"; }

export async function getProducts(): Promise<Product[]> {
  return loadGeneratedProducts();
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
}

export function mapTraderaProduct(apiResponse: unknown): Product {
  return normalizeProduct(apiResponse);
}

async function loadGeneratedProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${GENERATED_PRODUCTS_PATH}?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) {
      console.warn("No generated Tradera product feed found at /tradera-products.json.");
      throw new Error("Product feed unavailable");
    }

    const json = await response.json();
    if (!Array.isArray(json)) {
      console.warn("Generated Tradera product feed was not an array.");
      throw new Error("Product feed unavailable");
    }

    return json.map(normalizeProduct).filter(Boolean).sort(sortNewestTraderaItemsFirst);
  } catch {
    console.warn("Failed to load generated Tradera product feed.");
    throw new Error("Product feed unavailable");
  }
}

function normalizeProduct(value: unknown): Product {
  const product = (value ?? {}) as Partial<Product>;

  return {
    listingType: product.listingType === "fixed-price" ? "fixed-price" : "auction",
    fixedPrice: Number.isFinite(Number(product.fixedPrice)) && Number(product.fixedPrice) > 0 ? Number(product.fixedPrice) : undefined,
    id: String(product.id ?? ""),
    title: String(product.title ?? "Untitled watch"),
    slug: String(product.slug ?? "untitled-watch"),
    imageUrl: String(
      product.imageUrl ?? "https://placehold.co/600x600/d7c7ad/2f2117?text=Grandpa%27s+Heritage"
    ),
    images: Array.isArray(product.images) ? product.images.map(String) : undefined,
    shortDescription: product.shortDescription ? String(product.shortDescription) : undefined,
    fullDescription: product.fullDescription ? String(product.fullDescription) : undefined,
    historyNote: product.historyNote ? String(product.historyNote) : undefined,
    currentBidPrice:
      typeof product.currentBidPrice === "number"
        ? product.currentBidPrice
        : product.currentBidPrice != null
          ? Number(product.currentBidPrice)
          : undefined,
    startingBidPrice:
      typeof product.startingBidPrice === "number"
        ? product.startingBidPrice
        : product.startingBidPrice != null
          ? Number(product.startingBidPrice)
          : undefined,
    currency: product.currency ? String(product.currency) : undefined,
    numberOfBids:
      typeof product.numberOfBids === "number"
        ? product.numberOfBids
        : product.numberOfBids != null
          ? Number(product.numberOfBids)
          : undefined,
    numberOfViewers:
      typeof product.numberOfViewers === "number"
        ? product.numberOfViewers
        : product.numberOfViewers != null
          ? Number(product.numberOfViewers)
          : undefined,
    timeRemaining: product.timeRemaining ? String(product.timeRemaining) : undefined,
    auctionEndDate: product.auctionEndDate ? String(product.auctionEndDate) : undefined,
    traderaUrl: String(
      product.traderaUrl ?? "https://www.tradera.com/da/profile/items/6841860/grandpasheritage"
    ),
  };
}

function sortNewestTraderaItemsFirst(a: Product, b: Product) {
  const bId = Number(b.id);
  const aId = Number(a.id);

  if (Number.isFinite(aId) && Number.isFinite(bId) && aId !== bId) {
    return bId - aId;
  }

  return new Date(b.auctionEndDate ?? 0).getTime() - new Date(a.auctionEndDate ?? 0).getTime();
}
