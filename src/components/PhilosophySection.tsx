import { SectionWrapper } from "@/components/SectionWrapper";
import { useLanguage } from "@/i18n/LanguageProvider";

export function PhilosophySection() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="text-[#2f241b]">
      <SectionWrapper className="py-16 md:py-24" reveal="fade">
        <div className="mx-auto max-w-[680px] space-y-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-[#2f241b] md:text-4xl">
            {t("philosophy.title")}
          </h2>
          <p className="text-base leading-relaxed text-[#4a3a2b]">{t("philosophy.p1")}</p>
          <p className="text-base leading-relaxed text-[#4a3a2b]">{t("philosophy.p2")}</p>
          <p className="text-base leading-relaxed text-[#4a3a2b]">{t("philosophy.p3")}</p>
        </div>
      </SectionWrapper>
    </section>
  );
}
