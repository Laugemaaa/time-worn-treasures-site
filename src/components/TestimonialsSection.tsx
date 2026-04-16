import { SectionWrapper } from "@/components/SectionWrapper";
import { TestimonialCard, testimonials } from "@/components/TestimonialCard";
import { useLanguage } from "@/i18n/LanguageProvider";

export function TestimonialsSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-sand py-16 md:py-24">
      <SectionWrapper as="div">
        <h2 className="font-serif text-3xl font-semibold text-foreground mb-8 text-center md:text-4xl">
          {t("testimonials.title")}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((tt, i) => (
            <TestimonialCard key={i} testimonial={tt} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
