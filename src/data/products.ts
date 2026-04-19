export type Product = {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  images?: string[];
  shortDescription?: string;
  fullDescription?: string;
  historyNote?: string;
  currentBidPrice?: number;
  currency?: string;
  numberOfBids?: number;
  numberOfViewers?: number;
  timeRemaining?: string;
  auctionEndDate?: string;
  traderaUrl: string;
};

const GENERATED_PRODUCTS_PATH = "/tradera-products.json";

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
    const response = await fetch(GENERATED_PRODUCTS_PATH, { cache: "no-store" });
    if (!response.ok) {
      console.warn("No generated Tradera product feed found at /tradera-products.json.");
      return [];
    }

    const json = await response.json();
    if (!Array.isArray(json)) {
      console.warn("Generated Tradera product feed was not an array.");
      return [];
    }

    return json.map(normalizeProduct).filter(Boolean);
  } catch {
    console.warn("Failed to load generated Tradera product feed.");
    return [];
  }
}

function normalizeProduct(value: unknown): Product {
  const product = (value ?? {}) as Partial<Product>;

  return {
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
    traderaUrl: String(product.traderaUrl ?? "https://www.tradera.com"),
  };
}
