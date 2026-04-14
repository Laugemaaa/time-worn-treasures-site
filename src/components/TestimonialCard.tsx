type Testimonial = {
  quote: string;
  name: string;
  descriptor: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "I've bought three watches through this collection now. Each one arrived exactly as described — honest about every scratch and every story. That's rare.",
    name: "Erik Lindström",
    descriptor: "Watch collector since 1998",
  },
  {
    quote: "The descriptions alone are worth reading. I ended up buying a Certina I'd never heard of because the story was so good. No regrets.",
    name: "Anna Björk",
    descriptor: "Vintage enthusiast, Stockholm",
  },
  {
    quote: "Finally, someone who treats vintage watches as artifacts rather than commodities. The attention to provenance is what keeps me coming back.",
    name: "Marcus Holm",
    descriptor: "Horologist & collector",
  },
];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="rounded-lg border border-border bg-card p-6 space-y-4">
      <p className="text-sm leading-relaxed text-foreground italic">
        "{testimonial.quote}"
      </p>
      <footer className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-muted-foreground">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-medium text-foreground">{testimonial.name}</div>
          <div className="text-xs text-muted-foreground">{testimonial.descriptor}</div>
        </div>
      </footer>
    </blockquote>
  );
}

export { testimonials };
export type { Testimonial };
