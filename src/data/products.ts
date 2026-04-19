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

const fallbackProducts: Product[] = [
  {
    id: "w001",
    title: "Omega Seamaster De Ville - 1967",
    slug: "omega-seamaster-de-ville-1967",
    imageUrl: "https://placehold.co/600x600/d4c5a9/1a1a1a?text=Omega+Seamaster+1967",
    shortDescription: "A dial aged to warm champagne - the kind of patina you can't fake and shouldn't want to.",
    fullDescription:
      "This Seamaster De Ville represents the quieter side of Omega's 1960s lineup. Where the Speedmaster chased the moon, the De Ville stayed closer to earth - boardrooms, weekend dinners, a life measured in handshakes rather than countdowns.\n\nThe dial has turned from its original silver to a rich champagne tone over nearly six decades, and the applied hour markers have developed a gentle warmth. The 34mm case wears true to the era - modest by today's standards, but perfectly proportioned on the wrist.\n\nThe cal. 565 movement inside runs smoothly after a recent service. This is a watch that has been worn, cared for, and passed along - exactly as it should be.",
    historyNote:
      "Found in a Gothenburg estate sale, still in its original box with the purchase receipt from 1967 - bought at Jacobson's Ur on Kungsgatan.",
    currentBidPrice: 4200,
    currency: "SEK",
    numberOfBids: 14,
    numberOfViewers: 87,
    timeRemaining: "PT2H34M",
    auctionEndDate: "2026-04-15T18:30:00+02:00",
    traderaUrl: "https://www.tradera.com/item/example-w001",
  },
  {
    id: "w002",
    title: "Certina DS Turtle - ca. 1970",
    slug: "certina-ds-turtle-1970",
    imageUrl: "https://placehold.co/600x600/b8a88a/1a1a1a?text=Certina+DS+Turtle",
    shortDescription: "Built for divers, worn by someone who probably never went deeper than a lake in Dalarna.",
    fullDescription:
      "The DS Turtle is one of Certina's most distinctive vintage designs. The asymmetric case was engineered for serious water resistance, but most surviving examples show the honest wear of everyday life rather than saltwater abuse.\n\nThis particular piece has a beautifully faded bezel insert - originally black, now a gradient of charcoal and gray that catches the light differently at every angle. The dial is clean, the lume plots have turned to a warm cream, and the crown still operates with Certina's signature DS resistance.\n\nA recent movement service confirmed the cal. 25-651 is in strong health. The original bracelet is long gone, replaced here with a period-correct tropic-style rubber strap.",
    historyNote:
      "Certina's Double Security case technology made these watches nearly indestructible - this one has survived over fifty years to prove it.",
    currentBidPrice: 3800,
    currency: "SEK",
    numberOfBids: 9,
    numberOfViewers: 52,
    timeRemaining: "PT5H12M",
    auctionEndDate: "2026-04-15T21:00:00+02:00",
    traderaUrl: "https://www.tradera.com/item/example-w002",
  },
  {
    id: "w003",
    title: "Tissot Visodate Seastar - 1963",
    slug: "tissot-visodate-seastar-1963",
    imageUrl: "https://placehold.co/600x600/c9b896/1a1a1a?text=Tissot+Visodate+1963",
    shortDescription: "A window date complication from the era when that alone was enough to impress.",
    fullDescription:
      "Before smartwatches displayed your heart rate and tomorrow's weather, a simple window showing the date was considered a remarkable complication. Tissot's Visodate line made this feature accessible and elegant.\n\nThis 1963 example has a sunburst silver dial that still catches light with authority. The date window at 3 o'clock is clean and legible, and the dauphine hands have developed a subtle oxidation that only adds to the character.\n\nThe case shows honest wear - desk marks on the bracelet-side and a few light scratches on the crystal that a watchmaker could polish out, but why would you?",
    currentBidPrice: 2600,
    currency: "SEK",
    numberOfBids: 6,
    numberOfViewers: 34,
    timeRemaining: "PT18H45M",
    auctionEndDate: "2026-04-16T10:30:00+02:00",
    traderaUrl: "https://www.tradera.com/item/example-w003",
  },
  {
    id: "w004",
    title: "Seiko 6139 Chronograph \"Pogue\" - 1972",
    slug: "seiko-6139-pogue-1972",
    imageUrl: "https://placehold.co/600x600/a89878/1a1a1a?text=Seiko+6139+Pogue",
    shortDescription: "The watch that went to space on a NASA astronaut's wrist - without NASA's permission.",
    fullDescription:
      "Colonel William Pogue smuggled a Seiko 6139 aboard Skylab in 1973 because he preferred it to the issued Omega. That story alone makes this reference one of the most charming in watchmaking.\n\nThis yellow-dial example is in remarkable condition for its age. The pepsi bezel has faded to a soft blue-and-red that's become a signature of well-loved Pogues. The automatic chronograph movement - one of the world's first - still runs and times accurately.\n\nThe 41mm case is large for the era and feels surprisingly modern on the wrist. The original Seiko bracelet has some stretch but remains fully functional.",
    historyNote:
      "The Seiko 6139 was the world's first automatic chronograph to reach production - beating Zenith and Chronomatic by a matter of weeks in 1969.",
    currentBidPrice: 5800,
    currency: "SEK",
    numberOfBids: 23,
    numberOfViewers: 142,
    timeRemaining: "PT1H08M",
    auctionEndDate: "2026-04-15T17:00:00+02:00",
    traderaUrl: "https://www.tradera.com/item/example-w004",
  },
];

export async function getProducts(): Promise<Product[]> {
  const generatedProducts = await loadGeneratedProducts();
  return generatedProducts.length > 0 ? generatedProducts : fallbackProducts;
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
      return [];
    }

    const json = await response.json();
    if (!Array.isArray(json)) {
      return [];
    }

    return json.map(normalizeProduct).filter(Boolean);
  } catch {
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
