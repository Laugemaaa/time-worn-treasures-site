import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const content = (
    <blockquote className="h-full rounded-lg border border-border bg-card p-6 space-y-4 shadow-[0_14px_35px_rgba(43,30,22,0.08)]">
      <p className="text-sm leading-relaxed text-foreground italic">
        "{testimonial.quote}"
      </p>
      <footer className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-muted-foreground">
          {testimonial.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-medium text-foreground">{testimonial.name}</div>
          <div className="text-xs leading-relaxed text-muted-foreground">{testimonial.descriptor}</div>
        </div>
      </footer>
    </blockquote>
  );

  if (!testimonial.traderaUrl) {
    return content;
  }

  return (
    <a
      href={testimonial.traderaUrl}
      target="_blank"
      rel="noreferrer"
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`Se anmeldelse fra ${testimonial.name} på Tradera`}
    >
      {content}
    </a>
  );
}
