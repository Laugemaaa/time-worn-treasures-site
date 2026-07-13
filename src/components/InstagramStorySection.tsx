import { ExternalLink, Instagram } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { useLanguage } from "@/i18n/LanguageProvider";
import instagramWatchVideo from "@/assets/instagram-watch-video.mp4";

export function InstagramStorySection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border/70 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--card))_100%)] text-foreground">
      <SectionWrapper className="py-16 md:py-24" reveal="up">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_0.72fr] lg:gap-16">
          <div className="max-w-[620px]">
            <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              <Instagram className="h-4 w-4" aria-hidden="true" />
              <span>{t("instagram.eyebrow")}</span>
            </div>

            <h2 className="max-w-[560px] font-serif text-4xl font-medium uppercase leading-[1.08] tracking-[0.08em] text-foreground md:text-5xl">
              {t("instagram.title")}
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-muted-foreground md:text-[15px]">
              <p>{t("instagram.p1")}</p>
              <p>{t("instagram.p2")}</p>
            </div>

            <a
              href="https://www.instagram.com/grandpasheritage/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-press mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              {t("instagram.cta")}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="mx-auto w-full max-w-[330px] lg:mr-8">
            <div className="relative rounded-[2rem] border border-primary/20 bg-[#120d0a] p-3 shadow-[0_34px_90px_-52px_rgba(0,0,0,0.95)]">
              <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[#eadcc6]/30" />
              <div className="relative aspect-[9/16] overflow-hidden rounded-[1.55rem] bg-background">
                <video
                  className="h-full w-full object-cover"
                  src={instagramWatchVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={t("instagram.videoLabel")}
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(18,13,10,0.1)_0%,rgba(18,13,10,0)_45%,rgba(18,13,10,0.28)_100%)]" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
