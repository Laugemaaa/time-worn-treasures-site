export type Testimonial = {
  id?: string;
  quote: string;
  name: string;
  descriptor: string;
  rating?: string;
  createdDateTime?: string;
  traderaUrl?: string;
};

const GENERATED_FEEDBACK_PATH = "/tradera-feedback.json";

export const fallbackTestimonials: Testimonial[] = [
  {
    "id": "327750630",
    "quote": "Good communication and delivery. The watch looks even better than expected.",
    "name": "Bas Hekkenberg",
    "descriptor": "Tradera-køber · 2026-10-01 16:05 · Seiko 5 Actus SS 6106-7470 Automatic 23J Vintage 1970",
    "rating": "Positive",
    "createdDateTime": "2026-10-01T16:05:07",
    "traderaUrl": "https://www.tradera.com/item/1000985/751611229/seiko-5-actus-ss-6106-7470-automatic-23j-vintage-1970"
  },
  {
    "id": "327011635",
    "quote": "Allt löste sig jättebra många pluss 👍👍",
    "name": "linkan 62",
    "descriptor": "Tradera-køber · 2026-09-16 12:05 · Collection of 5 Vintage Soviet / USSR Pocket Watches",
    "rating": "Positive",
    "createdDateTime": "2026-09-16T12:05:19",
    "traderaUrl": "https://www.tradera.com/item/191302/746249692/collection-of-5-vintage-soviet-ussr-pocket-watches"
  },
  {
    "id": "326808331",
    "quote": "Tolle Uhr. Schnelle Lieferung.\nAlles wie beschrieben. 👍👍👍",
    "name": "funny_metin95",
    "descriptor": "Tradera-køber · 2026-09-11 17:01 · Vintage Enicar MRO200 Automatic – 775-14-01B",
    "rating": "Positive",
    "createdDateTime": "2026-09-11T17:01:59",
    "traderaUrl": "https://www.tradera.com/item/1000985/745841271/vintage-enicar-mro200-automatic-775-14-01b"
  },
  {
    "id": "326743318",
    "quote": "Bra",
    "name": "exponiering424",
    "descriptor": "Tradera-køber · 2026-09-10 12:20 · Vintage Citizen Cosmotron Electronic – 4-790472 K – Blue Dial",
    "rating": "Positive",
    "createdDateTime": "2026-09-10T12:20:51",
    "traderaUrl": "https://www.tradera.com/item/1000983/745842495/vintage-citizen-cosmotron-electronic-4-790472-k-blue-dial"
  },
  {
    "id": "326538931",
    "quote": "Riktig bra,perfekt packning, hjälpsam",
    "name": "missmah",
    "descriptor": "Tradera-køber · 2026-09-06 10:15 · Tissot 1853, T020309",
    "rating": "Positive",
    "createdDateTime": "2026-09-06T10:15:41",
    "traderaUrl": "https://www.tradera.com/item/1902/746415156/tissot-1853-t020309"
  },
  {
    "id": "326528569",
    "quote": "Allt var perfekt! Tack så mycket för en smidig och trevlig affär! Rekommenderas",
    "name": "Mo102",
    "descriptor": "Tradera-køber · 2026-09-05 21:37 · Vintage Certina – Cal. 19-30",
    "rating": "Positive",
    "createdDateTime": "2026-09-05T21:37:46",
    "traderaUrl": "https://www.tradera.com/item/1000984/746414606/vintage-certina-cal-19-30"
  },
  {
    "id": "326520026",
    "quote": "Super! A++++",
    "name": "Alexander.LZ",
    "descriptor": "Tradera-køber · 2026-09-05 17:36 · Vintage Omega Sensorquartz – Ref. 186.0011 / 386.0811",
    "rating": "Positive",
    "createdDateTime": "2026-09-05T17:36:14",
    "traderaUrl": "https://www.tradera.com/item/1902/746510624/vintage-omega-sensorquartz-ref-186-0011-386-0811"
  },
  {
    "id": "326363385",
    "quote": "Bra packat och bra kommunikation 👍",
    "name": "Henrysvintagetees",
    "descriptor": "Tradera-køber · 2026-09-02 17:11 · Vintage Orient Quartz 100m – Two-Tone – Day/Date",
    "rating": "Positive",
    "createdDateTime": "2026-09-02T17:11:00",
    "traderaUrl": "https://www.tradera.com/item/1902/746415854/vintage-orient-quartz-100m-two-tone-day-date"
  },
  {
    "id": "326360900",
    "quote": "Positiv anmeldelse på Tradera.",
    "name": "ArchiveSpec",
    "descriptor": "Tradera-køber · 2026-09-02 16:35 · Vintage Seiko 5 Actus SS – 6106-7440",
    "rating": "Positive",
    "createdDateTime": "2026-09-02T16:35:36",
    "traderaUrl": "https://www.tradera.com/item/1000985/746493681/vintage-seiko-5-actus-ss-6106-7440"
  },
  {
    "id": "326253579",
    "quote": "Positiv anmeldelse på Tradera.",
    "name": "Loppis_online",
    "descriptor": "Tradera-køber · 2026-08-31 15:41 · Vintage Cimier Antimagnetic Swiss Made Mechanical Watch",
    "rating": "Positive",
    "createdDateTime": "2026-08-31T15:41:36",
    "traderaUrl": "https://www.tradera.com/item/1000984/745840674/vintage-cimier-antimagnetic-swiss-made-mechanical-watch"
  },
  {
    "id": "326113070",
    "quote": "Positiv anmeldelse på Tradera.",
    "name": "sociable_lukas",
    "descriptor": "Tradera-køber · 2026-08-28 10:23 · Seiko King Quartz 4823-8010 – 1976 – Vintage Japanese Day-Date Watch",
    "rating": "Positive",
    "createdDateTime": "2026-08-28T10:23:59",
    "traderaUrl": "https://www.tradera.com/item/1902/745841066/seiko-king-quartz-4823-8010-1976-vintage-japanese-day-date-watch"
  },
  {
    "id": "325727923",
    "quote": "Positiv anmeldelse på Tradera.",
    "name": "sven get",
    "descriptor": "Tradera-køber · 2026-08-19 20:42 · Vintage Seiko Digital Alarm Chronograph",
    "rating": "Positive",
    "createdDateTime": "2026-08-19T20:42:16",
    "traderaUrl": "https://www.tradera.com/item/1902/742973117/vintage-seiko-digital-alarm-chronograph"
  },
  {
    "id": "325212234",
    "quote": "Positiv anmeldelse på Tradera.",
    "name": "matket1",
    "descriptor": "Tradera-køber · 2026-08-07 19:14 · Vintage Tissot Seastar 10 ATM",
    "rating": "Positive",
    "createdDateTime": "2026-08-07T19:14:21",
    "traderaUrl": "https://www.tradera.com/item/1902/741773805/vintage-tissot-seastar-10-atm"
  },
  {
    "id": "324774700",
    "quote": "Seriös säljare, välpackat och god kommunikation en toppenvara till samlingen.",
    "name": "Obi-wan",
    "descriptor": "Tradera-køber · 2026-07-28 22:35 · Vintage Seiko Advan Automatic 6106-7670",
    "rating": "Positive",
    "createdDateTime": "2026-07-28T22:35:56",
    "traderaUrl": "https://www.tradera.com/item/1000985/740494537/vintage-seiko-advan-automatic-6106-7670"
  },
  {
    "id": "324719190",
    "quote": "Positiv anmeldelse på Tradera.",
    "name": "CrownCollective",
    "descriptor": "Tradera-køber · 2026-07-27 18:24 · Vintage Seiko LM Special Automatic 5216-7080",
    "rating": "Positive",
    "createdDateTime": "2026-07-27T18:24:21",
    "traderaUrl": "https://www.tradera.com/item/1000985/740496306/vintage-seiko-lm-special-automatic-5216-7080"
  },
  {
    "id": "324409759",
    "quote": "Allting helt perfekt. Suverän säljare!",
    "name": "Filke",
    "descriptor": "Tradera-køber · 2026-07-19 15:14 · Citizen Seven Star V2 Automatisk Herreur",
    "rating": "Positive",
    "createdDateTime": "2026-07-19T15:14:04",
    "traderaUrl": "https://www.tradera.com/item/1000985/738615592/citizen-seven-star-v2-automatisk-herreur"
  },
  {
    "id": "324327382",
    "quote": "Positiv anmeldelse på Tradera.",
    "name": "Cos008",
    "descriptor": "Tradera-køber · 2026-07-16 21:42 · Certina DS 100M Quartz",
    "rating": "Positive",
    "createdDateTime": "2026-07-16T21:42:14",
    "traderaUrl": "https://www.tradera.com/item/1902/739138493/certina-ds-100m-quartz"
  },
  {
    "id": "324177806",
    "quote": "Positiv anmeldelse på Tradera.",
    "name": "legolas4",
    "descriptor": "Tradera-køber · 2026-07-13 08:09 · Citizen Quartz 2110-895878 SMT",
    "rating": "Positive",
    "createdDateTime": "2026-07-13T08:09:01",
    "traderaUrl": "https://www.tradera.com/item/1902/739144161/citizen-quartz-2110-895878-smt"
  },
  {
    "id": "323856277",
    "quote": "Smidigt och enkelt. Proffsigt paketerat.",
    "name": "offtopic",
    "descriptor": "Tradera-køber · 2026-07-04 02:32 · Vintage Seiko 5 Actus 7019-7350 - Grøn skive",
    "rating": "Positive",
    "createdDateTime": "2026-07-04T02:32:34",
    "traderaUrl": "https://www.tradera.com/item/1000985/737062284/vintage-seiko-5-actus-7019-7350-gr%C3%B8n-skive"
  },
  {
    "id": "320830918",
    "quote": "Rekommenderar +++++++",
    "name": "Känsla..",
    "descriptor": "Tradera-køber · 2026-04-24 18:24",
    "rating": "Positive",
    "createdDateTime": "2026-04-24T18:24:06",
    "traderaUrl": "https://www.tradera.com/item/0/722436699/"
  },
  {
    "id": "320830917",
    "quote": "Rekommenderar +++++++",
    "name": "Känsla..",
    "descriptor": "Tradera-køber · 2026-04-24 18:24",
    "rating": "Positive",
    "createdDateTime": "2026-04-24T18:24:06",
    "traderaUrl": "https://www.tradera.com/item/0/725860385/"
  },
  {
    "id": "320336055",
    "quote": "Positiv anmeldelse på Tradera.",
    "name": "inik771",
    "descriptor": "Tradera-køber · 2026-04-14 19:02",
    "rating": "Positive",
    "createdDateTime": "2026-04-14T19:02:43",
    "traderaUrl": "https://www.tradera.com/item/0/721782123/"
  },
  {
    "id": "319347644",
    "quote": "🌟🌟🌟🌟🌟\nSuper nöjd, bra kommunikation och mycket trevlig säljare! 🙏",
    "name": "SPalangi",
    "descriptor": "Tradera-køber · 2026-03-25 11:30",
    "rating": "Positive",
    "createdDateTime": "2026-03-25T11:30:17",
    "traderaUrl": "https://www.tradera.com/item/0/720317766/"
  },
  {
    "id": "319347643",
    "quote": "🌟🌟🌟🌟🌟\nSuper nöjd, bra kommunikation och mycket trevlig säljare! 🙏",
    "name": "SPalangi",
    "descriptor": "Tradera-køber · 2026-03-25 11:30",
    "rating": "Positive",
    "createdDateTime": "2026-03-25T11:30:17",
    "traderaUrl": "https://www.tradera.com/item/0/720317700/"
  },
  {
    "id": "319318465",
    "quote": "Positiv anmeldelse på Tradera.",
    "name": "Daniel_Gråhns",
    "descriptor": "Tradera-køber · 2026-03-24 18:46",
    "rating": "Positive",
    "createdDateTime": "2026-03-24T18:46:42",
    "traderaUrl": "https://www.tradera.com/item/0/721062713/"
  },
  {
    "id": "318910048",
    "quote": "Positiv anmeldelse på Tradera.",
    "name": "simonandersson04",
    "descriptor": "Tradera-køber · 2026-03-16 12:43",
    "rating": "Positive",
    "createdDateTime": "2026-03-16T12:43:13",
    "traderaUrl": "https://www.tradera.com/item/0/717509357/"
  },
  {
    "id": "317584421",
    "quote": "Perfect. Thank you !",
    "name": "maamee",
    "descriptor": "Tradera-køber · 2026-02-17 19:42",
    "rating": "Positive",
    "createdDateTime": "2026-02-17T19:42:02",
    "traderaUrl": "https://www.tradera.com/item/0/714833528/"
  },
  {
    "id": "317444205",
    "quote": "Snabbt, smidigt och allt funkade som det skulle.",
    "name": "EricKarlsson123",
    "descriptor": "Tradera-køber · 2026-02-14 18:33",
    "rating": "Positive",
    "createdDateTime": "2026-02-14T18:33:46",
    "traderaUrl": "https://www.tradera.com/item/0/714862630/"
  },
  {
    "id": "316937011",
    "quote": "Positiv anmeldelse på Tradera.",
    "name": "inik771",
    "descriptor": "Tradera-køber · 2026-02-04 18:12",
    "rating": "Positive",
    "createdDateTime": "2026-02-04T18:12:40",
    "traderaUrl": "https://www.tradera.com/item/0/712811201/"
  }
];

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch(`${GENERATED_FEEDBACK_PATH}?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) {
      return fallbackTestimonials;
    }

    const json = await response.json();
    if (!Array.isArray(json)) {
      return fallbackTestimonials;
    }

    const liveTestimonials = json
      .map(normalizeTestimonial)
      .filter(Boolean);

    return liveTestimonials.length > 0 ? liveTestimonials : fallbackTestimonials;
  } catch {
    return fallbackTestimonials;
  }
}

function normalizeTestimonial(value: unknown): Testimonial | null {
  const testimonial = (value ?? {}) as Partial<Testimonial>;
  const quote = String(testimonial.quote ?? "").trim();
  const name = String(testimonial.name ?? "").trim();

  if (!quote || !name) {
    return null;
  }

  return {
    id: testimonial.id ? String(testimonial.id) : undefined,
    quote,
    name,
    descriptor: String(testimonial.descriptor ?? "Tradera-kober"),
    rating: testimonial.rating ? String(testimonial.rating) : undefined,
    createdDateTime: testimonial.createdDateTime ? String(testimonial.createdDateTime) : undefined,
    traderaUrl: testimonial.traderaUrl ? String(testimonial.traderaUrl) : undefined,
  };
}
