import { SectionWrapper } from "@/components/SectionWrapper";
import { TestimonialCard, testimonials } from "@/components/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="bg-sand py-16 md:py-24">
      <SectionWrapper as="div">
        <h2 className="font-serif text-3xl font-semibold text-foreground mb-8 text-center md:text-4xl">
          What collectors say
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
