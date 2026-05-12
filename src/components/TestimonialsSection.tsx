import { useEffect, useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TestimonialCard } from "@/components/TestimonialCard";
import { fallbackTestimonials, getTestimonials, type Testimonial } from "@/data/testimonials";
import { useLanguage } from "@/i18n/LanguageProvider";

export function TestimonialsSection() {
  const { t } = useLanguage();
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

  return (
    <section className="overflow-hidden bg-sand py-16 md:py-24">
      <SectionWrapper as="div" reveal="fade" className="space-y-10">
        <h2 className="font-serif text-3xl font-semibold text-foreground mb-8 text-center md:text-4xl">
          {t("testimonials.title")}
        </h2>

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
