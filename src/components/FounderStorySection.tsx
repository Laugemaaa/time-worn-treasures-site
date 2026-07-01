import { WatchCarousel } from "@/components/WatchCarousel";
import { useLanguage } from "@/i18n/LanguageProvider";

export function FounderStorySection() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-border/70 bg-[linear-gradient(135deg,hsl(var(--card))_0%,hsl(var(--background))_100%)]">
      <div className="grid min-h-[720px] lg:grid-cols-[1.05fr_1fr]">
        <div className="flex min-h-[420px] items-center justify-center bg-espresso p-6 md:p-10 lg:min-h-full lg:p-14">
          <div className="w-full max-w-[580px]">
            <WatchCarousel />
          </div>
        </div>

        <div className="flex items-center px-6 py-16 md:px-12 lg:px-24">
          <div className="max-w-[560px] space-y-7">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              {t("founder.eyebrow")}
            </p>

            <h2 className="font-serif text-4xl font-medium uppercase leading-[1.15] tracking-[0.12em] text-foreground md:text-5xl">
              {t("founder.title")}
            </h2>

            <div className="space-y-5 text-sm leading-7 text-muted-foreground md:text-[15px]">
              <p>{t("founder.p1")}</p>
              <p>{t("founder.p2")}</p>
              <p>{t("founder.p3")}</p>
              <p>{t("founder.p4")}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="rounded-full border border-primary/25 px-4 py-2">
                {t("founder.tagVintage")}
              </span>
              <span className="rounded-full border border-primary/25 px-4 py-2">
                {t("founder.tagCharacter")}
              </span>
              <span className="rounded-full border border-primary/25 px-4 py-2">
                {t("founder.tagProvenance")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
