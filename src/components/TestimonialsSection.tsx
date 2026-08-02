import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TestimonialCard } from "@/components/TestimonialCard";
import { fallbackTestimonials, getTestimonials, type Testimonial } from "@/data/testimonials";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const { t } = useLanguage();
  const ratingRef = useRef<HTMLDivElement>(null);
  const [ratingVisible, setRatingVisible] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const marqueeTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    let cancelled = false;

    getTestimonials().then((liveTestimonials) => {
      if (!cancelled) {
        setTestimonials(liveTestimonials);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const el = ratingRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRatingVisible(true);
          observer.unobserve(el);
        }
      },
      {
        rootMargin: "-12% 0px -12% 0px",
        threshold: 0.65,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="overflow-hidden bg-sand py-16 md:py-24">
      <SectionWrapper as="div" reveal="fade" className="space-y-10">
        <div className="space-y-5 text-center">
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            {t("testimonials.title")}
          </h2>
          <div
            ref={ratingRef}
            className={cn(
              "testimonial-rating-badge mx-auto inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-foreground shadow-[0_16px_45px_-30px_hsl(var(--primary)/0.9)]",
              ratingVisible && "is-visible"
            )}
          >
            <span className="inline-flex items-center gap-1 text-primary" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="testimonial-star h-5 w-5 fill-current"
                  style={{ animationDelay: `${index * 90}ms` }}
                  strokeWidth={2.35}
                />
              ))}
            </span>
            <span>5/5 på Tradera</span>
          </div>
        </div>

        <div className="relative -mx-6 overflow-hidden px-6 md:-mx-10 md:px-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-sand to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-sand to-transparent md:w-28" />

          <div className="testimonials-marquee flex w-max gap-6 will-change-transform">
            {marqueeTestimonials.map((tt, i) => (
              <div
                key={`${tt.id ?? i}-${i}`}
                className="w-[320px] shrink-0 md:w-[420px]"
                aria-hidden={i >= testimonials.length}
              >
                <TestimonialCard testimonial={tt} />
              </div>
            ))}
          </div>
        </div>

        <div className="sr-only" aria-live="polite">
          {testimonials.map((tt) => (
            <p key={tt.id ?? `${tt.name}-${tt.createdDateTime ?? tt.quote}`}>
              {tt.quote} - {tt.name}
            </p>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
