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
    quote:
      "I've bought three watches through this collection now. Each one arrived exactly as described - honest about every scratch and every story. That's rare.",
    name: "Erik Lindstrom",
    descriptor: "Watch collector since 1998",
  },
  {
    quote:
      "The descriptions alone are worth reading. I ended up buying a Certina I'd never heard of because the story was so good. No regrets.",
    name: "Anna Bjork",
    descriptor: "Vintage enthusiast, Stockholm",
  },
  {
    quote:
      "Finally, someone who treats vintage watches as artifacts rather than commodities. The attention to provenance is what keeps me coming back.",
    name: "Marcus Holm",
    descriptor: "Horologist & collector",
  },
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
