import { SectionWrapper } from "@/components/SectionWrapper";
import { useLanguage } from "@/i18n/LanguageProvider";

export function PhilosophySection() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="border-b border-border/70 bg-background text-foreground">
      <SectionWrapper className="py-18 md:py-24 lg:py-28" reveal="fade">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              Grandpa's Heritage
            </p>
            <h2 className="max-w-[420px] font-serif text-4xl font-medium uppercase leading-[1.08] tracking-[0.1em] text-foreground md:text-5xl">
            {t("philosophy.title")}
          </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {[t("philosophy.p1"), t("philosophy.p2"), t("philosophy.p3")].map((paragraph, index) => (
              <article
                key={paragraph}
                className="border-t border-primary/25 pt-5"
              >
                <span className="mb-5 block font-serif text-2xl text-primary/75">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-7 text-muted-foreground md:text-[15px]">
                  {paragraph}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
