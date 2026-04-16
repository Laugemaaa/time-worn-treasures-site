import { SectionWrapper } from "@/components/SectionWrapper";
import { useLanguage } from "@/i18n/LanguageProvider";

export function PhilosophySection() {
  const { t } = useLanguage();
  return (
    <SectionWrapper id="philosophy" className="py-16 md:py-24">
      <div className="mx-auto max-w-[680px] space-y-6 text-center">
        <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
          {t("philosophy.title")}
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">{t("philosophy.p1")}</p>
        <p className="text-base leading-relaxed text-muted-foreground">{t("philosophy.p2")}</p>
        <p className="text-base leading-relaxed text-muted-foreground">{t("philosophy.p3")}</p>
      </div>
    </SectionWrapper>
  );
}
