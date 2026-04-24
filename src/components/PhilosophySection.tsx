import { SectionWrapper } from "@/components/SectionWrapper";
import { useLanguage } from "@/i18n/LanguageProvider";

export function PhilosophySection() {
  const { t } = useLanguage();
  return (
    <section
      id="philosophy"
      className="text-primary-foreground"
      style={{ backgroundColor: "hsl(var(--surface-espresso))" }}
    >
      <SectionWrapper className="py-16 md:py-24" reveal="fade">
        <div className="mx-auto max-w-[680px] space-y-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-primary-foreground md:text-4xl">
            {t("philosophy.title")}
          </h2>
          <p className="text-base leading-relaxed text-primary-foreground/78">{t("philosophy.p1")}</p>
          <p className="text-base leading-relaxed text-primary-foreground/78">{t("philosophy.p2")}</p>
          <p className="text-base leading-relaxed text-primary-foreground/78">{t("philosophy.p3")}</p>
        </div>
      </SectionWrapper>
    </section>
  );
}
