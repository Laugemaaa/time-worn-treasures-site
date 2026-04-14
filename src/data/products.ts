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

const products: Product[] = [
  {
    id: "w001",
    title: "Omega Seamaster De Ville — 1967",
    slug: "omega-seamaster-de-ville-1967",
    imageUrl: "https://placehold.co/600x600/d4c5a9/1a1a1a?text=Omega+Seamaster+1967",
    shortDescription: "A dial aged to warm champagne — the kind of patina you can't fake and shouldn't want to.",
    fullDescription: "This Seamaster De Ville represents the quieter side of Omega's 1960s lineup. Where the Speedmaster chased the moon, the De Ville stayed closer to earth — boardrooms, weekend dinners, a life measured in handshakes rather than countdowns.\n\nThe dial has turned from its original silver to a rich champagne tone over nearly six decades, and the applied hour markers have developed a gentle warmth. The 34mm case wears true to the era — modest by today's standards, but perfectly proportioned on the wrist.\n\nThe cal. 565 movement inside runs smoothly after a recent service. This is a watch that has been worn, cared for, and passed along — exactly as it should be.",
    historyNote: "Found in a Gothenburg estate sale, still in its original box with the purchase receipt from 1967 — bought at Jacobson's Ur on Kungsgatan.",
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
    title: "Certina DS Turtle — ca. 1970",
    slug: "certina-ds-turtle-1970",
    imageUrl: "https://placehold.co/600x600/b8a88a/1a1a1a?text=Certina+DS+Turtle",
    shortDescription: "Built for divers, worn by someone who probably never went deeper than a lake in Dalarna.",
    fullDescription: "The DS Turtle is one of Certina's most distinctive vintage designs. The asymmetric case was engineered for serious water resistance, but most surviving examples show the honest wear of everyday life rather than saltwater abuse.\n\nThis particular piece has a beautifully faded bezel insert — originally black, now a gradient of charcoal and gray that catches the light differently at every angle. The dial is clean, the lume plots have turned to a warm cream, and the crown still operates with Certina's signature DS resistance.\n\nA recent movement service confirmed the cal. 25-651 is in strong health. The original bracelet is long gone, replaced here with a period-correct tropic-style rubber strap.",
    historyNote: "Certina's Double Security case technology made these watches nearly indestructible — this one has survived over fifty years to prove it.",
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
    title: "Tissot Visodate Seastar — 1963",
    slug: "tissot-visodate-seastar-1963",
    imageUrl: "https://placehold.co/600x600/c9b896/1a1a1a?text=Tissot+Visodate+1963",
    shortDescription: "A window date complication from the era when that alone was enough to impress.",
    fullDescription: "Before smartwatches displayed your heart rate and tomorrow's weather, a simple window showing the date was considered a remarkable complication. Tissot's Visodate line made this feature accessible and elegant.\n\nThis 1963 example has a sunburst silver dial that still catches light with authority. The date window at 3 o'clock is clean and legible, and the dauphine hands have developed a subtle oxidation that only adds to the character.\n\nThe case shows honest wear — desk marks on the bracelet-side and a few light scratches on the crystal that a watchmaker could polish out, but why would you?",
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
    title: "Seiko 6139 Chronograph \"Pogue\" — 1972",
    slug: "seiko-6139-pogue-1972",
    imageUrl: "https://placehold.co/600x600/a89878/1a1a1a?text=Seiko+6139+Pogue",
    shortDescription: "The watch that went to space on a NASA astronaut's wrist — without NASA's permission.",
    fullDescription: "Colonel William Pogue smuggled a Seiko 6139 aboard Skylab in 1973 because he preferred it to the issued Omega. That story alone makes this reference one of the most charming in watchmaking.\n\nThis yellow-dial example is in remarkable condition for its age. The pepsi bezel has faded to a soft blue-and-red that's become a signature of well-loved Pogues. The automatic chronograph movement — one of the world's first — still runs and times accurately.\n\nThe 41mm case is large for the era and feels surprisingly modern on the wrist. The original Seiko bracelet has some stretch but remains fully functional.",
    historyNote: "The Seiko 6139 was the world's first automatic chronograph to reach production — beating Zenith and Chronomatic by a matter of weeks in 1969.",
    currentBidPrice: 5800,
    currency: "SEK",
    numberOfBids: 23,
    numberOfViewers: 142,
    timeRemaining: "PT1H08M",
    auctionEndDate: "2026-04-15T17:00:00+02:00",
    traderaUrl: "https://www.tradera.com/item/example-w004",
  },
  {
    id: "w005",
    title: "Longines Conquest — 1959",
    slug: "longines-conquest-1959",
    imageUrl: "https://placehold.co/600x600/c2b08e/1a1a1a?text=Longines+Conquest+1959",
    shortDescription: "Sixty-five years old and still the most elegant thing in the room.",
    fullDescription: "Longines has always understood restraint. The Conquest line, launched in 1954, was designed to be the brand's flagship — not through complication or size, but through finishing and proportion.\n\nThis 1959 example shows that philosophy clearly. The crosshair dial is clean enough to read in a glance, the applied gold markers catch light without shouting, and the 35mm case sits flush on the wrist with an elegance that larger modern watches rarely achieve.\n\nThe cal. 19AS movement is a workhorse — accurate, reliable, and beautifully finished for its era. A recent service has it running within acceptable daily tolerances.",
    currentBidPrice: 6200,
    currency: "SEK",
    numberOfBids: 18,
    numberOfViewers: 96,
    timeRemaining: "PT8H22M",
    auctionEndDate: "2026-04-16T00:15:00+02:00",
    traderaUrl: "https://www.tradera.com/item/example-w005",
  },
  {
    id: "w006",
    title: "Junghans Max Bill Handwind — ca. 1965",
    slug: "junghans-max-bill-1965",
    imageUrl: "https://placehold.co/600x600/bfb094/1a1a1a?text=Junghans+Max+Bill",
    shortDescription: "Bauhaus on your wrist. Designed by an architect who believed a watch face was just another surface to get right.",
    fullDescription: "Max Bill was a Swiss architect, painter, and sculptor trained at the Bauhaus. When Junghans asked him to design a watch in 1961, he applied the same principles he used in buildings — no unnecessary elements, perfect proportion, absolute legibility.\n\nThis mid-1960s example has the signature domed plexiglass crystal that gives the dial a subtle depth. The numerals are clean and spaced with an architect's precision. At 34mm, it disappears under a shirt cuff and reappears exactly when you need it.\n\nThe hand-wound movement is simple and satisfying to wind each morning. There's something grounding about a daily ritual with a sixty-year-old machine.",
    currentBidPrice: 3400,
    currency: "SEK",
    numberOfBids: 11,
    timeRemaining: "PT12H00M",
    auctionEndDate: "2026-04-16T03:45:00+02:00",
    traderaUrl: "https://www.tradera.com/item/example-w006",
  },
  {
    id: "w007",
    title: "Helvetia Military — ca. 1945",
    slug: "helvetia-military-1945",
    imageUrl: "https://placehold.co/600x600/9e8e72/1a1a1a?text=Helvetia+Military+1945",
    fullDescription: "Military watches from the 1940s are some of the most honest objects in watchmaking. They were designed for one purpose: to tell the time reliably under terrible conditions. Decoration was irrelevant.\n\nThis Helvetia shows that ethos clearly. The black dial has a matte finish that avoids reflections. The radium lume on the hands and numerals has aged to a warm orange. The steel case shows tool marks and wear consistent with genuine field use.\n\nThere's no pretension here — just a small machine that did its job for eighty years.",
    currentBidPrice: 2100,
    currency: "SEK",
    numberOfBids: 4,
    timeRemaining: "P1DT6H30M",
    auctionEndDate: "2026-04-16T22:15:00+02:00",
    traderaUrl: "https://www.tradera.com/item/example-w007",
  },
  {
    id: "w008",
    title: "Zenith Sporto — 1960s",
    slug: "zenith-sporto-1960s",
    imageUrl: "https://placehold.co/600x600/c8b898/1a1a1a?text=Zenith+Sporto+1960s",
    shortDescription: "Before Zenith made the El Primero, they made this — and it's just as worthy of your attention.",
    fullDescription: "Zenith's Sporto models from the 1960s are quietly becoming collector favorites. They offer genuine Swiss manufacture quality at a fraction of what the brand's more famous references command.\n\nThis example has a striking two-tone dial — silver center with a contrasting outer track — that gives it more visual presence than its modest 35mm case would suggest. The baton hands are sharp, the markers are clean, and the overall impression is of a watch that punched above its weight from day one.\n\nThe manual-wind movement is a Zenith in-house caliber, which means the finishing and reliability are a step above most watches at this price point.",
    historyNote: "Zenith has been manufacturing movements in Le Locle since 1865 — making them one of the few Swiss brands with an unbroken manufacture heritage.",
    currentBidPrice: 4500,
    currency: "SEK",
    numberOfBids: 16,
    numberOfViewers: 73,
    timeRemaining: "PT4H50M",
    auctionEndDate: "2026-04-15T20:45:00+02:00",
    traderaUrl: "https://www.tradera.com/item/example-w008",
  },
];

export async function getProducts(): Promise<Product[]> {
  // Simulate network delay
  await new Promise((r) => setTimeout(r, 300));
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  await new Promise((r) => setTimeout(r, 200));
  return products.find((p) => p.slug === slug);
}

// Placeholder for future Tradera API integration
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapTraderaProduct(_apiResponse: any): Product {
  throw new Error("Not implemented — replace with actual Tradera API mapping");
}
