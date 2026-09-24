import { CheckCircle2 } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

function formatDate(value?: string) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const date = formatDate(testimonial.createdDateTime);
  const isTraderaReview = Boolean(testimonial.traderaUrl || /tradera/i.test(testimonial.descriptor));
  const content = (
    <blockquote className="testimonial-card flex min-h-[285px] h-full flex-col border border-border bg-card p-7 shadow-[0_18px_42px_-34px_rgba(43,30,22,0.5)] md:p-8">
      <span className="font-serif text-5xl leading-none text-primary/45" aria-hidden="true">“</span>
      <p className="mt-2 flex-1 text-sm italic leading-7 text-foreground">{testimonial.quote}</p>
      <footer className="mt-7 border-t border-primary/15 pt-5">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="truncate font-serif text-lg font-semibold text-foreground">{testimonial.name}</div>
            {isTraderaReview ? (
              <div className="mt-1 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                <span>Tradera buyer</span>
              </div>
            ) : <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{testimonial.descriptor}</div>}
          </div>
          {date ? <time dateTime={testimonial.createdDateTime} className="shrink-0 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{date}</time> : null}
        </div>
      </footer>
    </blockquote>
  );

  return testimonial.traderaUrl ? (
    <a href={testimonial.traderaUrl} target="_blank" rel="noreferrer" className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-sand" aria-label={`See review from ${testimonial.name} on Tradera`}>
      {content}
    </a>
  ) : content;
}
