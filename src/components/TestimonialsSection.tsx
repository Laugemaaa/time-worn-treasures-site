import { testimonials } from "@/components/TestimonialCard";
import { useLanguage } from "@/i18n/LanguageProvider";

export function TestimonialsSection() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto max-w-[1440px] bg-white px-5 pb-12 md:px-8">
      <div className="border-t border-black/10 pt-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-serif text-4xl font-semibold leading-none text-black md:text-5xl">
            Editor's Picks
          </h2>
          <p className="hidden max-w-xs text-right text-xs leading-relaxed text-black/48 md:block">
            {t("testimonials.title")}
          </p>
        </div>
        <div className="grid gap-px bg-black/10 md:grid-cols-3">
          {testimonials.map((tt, i) => (
            <blockquote key={i} className="bg-white p-5 md:p-6">
              <p className="text-sm leading-relaxed text-black/68">"{tt.quote}"</p>
              <footer className="mt-6 border-t border-black/10 pt-4">
                <p className="text-sm font-semibold text-black">{tt.name}</p>
                <p className="mt-1 text-xs text-black/48">{tt.descriptor}</p>
              </footer>
            </blockquote>
          ))}
        </div>
        <h3 className="sr-only">
          {t("testimonials.title")}
        </h3>
      </div>
    </section>
  );
}
