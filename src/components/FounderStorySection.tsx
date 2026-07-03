import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { WatchCarousel } from "@/components/WatchCarousel";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { TranslationKey } from "@/i18n/translations";

type StorySectionProps = {
  prefix: "founder" | "curation";
  reversed?: boolean;
};

function useSubtleParallax(strength: number) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setOffset(0);
      return;
    }

    let raf = 0;
    const update = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distance = (viewportCenter - elementCenter) / window.innerHeight;
      const clamped = Math.max(-1, Math.min(1, distance));

      setOffset(clamped * strength);
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [prefersReducedMotion, strength]);

  return { ref, offset };
}

function useScrollPresence(threshold = 0.24) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        rootMargin: "-10% 0px -16% 0px",
        threshold,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion, threshold]);

  return { ref, visible };
}

function SoldWatchesCta() {
  const { t } = useLanguage();
  const { ref, visible } = useScrollPresence(0.3);

  return (
    <div
      ref={ref}
      className={[
        "absolute -left-4 bottom-8 z-20 max-w-[240px] transition-[filter,opacity,transform] duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] md:-left-8 lg:-left-12",
        visible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0"
          : "pointer-events-none -translate-x-8 translate-y-3 scale-[0.96] opacity-0 blur-sm",
      ].join(" ")}
    >
      <Link
        to="/solgte-ure"
        className="group block rounded-md border border-[#eadcc6]/70 bg-[#eadcc6]/90 px-5 py-4 text-[#120b07] shadow-[0_18px_42px_rgba(0,0,0,0.36)] backdrop-blur-md transition-colors duration-200 hover:border-[#fff4dc]/90 hover:bg-[#fff4dc]/96 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eadcc6] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-[#4f351c]">
          {t("curation.ctaEyebrow")}
        </span>
        <span className="mt-2 block font-serif text-xl font-bold leading-tight text-[#120b07]">
          {t("curation.ctaTitle")}
        </span>
        <span className="mt-3 inline-flex items-center text-xs font-bold uppercase tracking-[0.18em] text-[#4f351c]">
          {t("curation.ctaLink")}
          <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      </Link>
    </div>
  );
}

function StoryVideo() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px] bg-black/20 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
      <video
        className="h-full w-full object-cover"
        src="/media/selection-watch.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Vintage watch video"
      />
    </div>
  );
}

function StoryImagePanel({
  strength,
  showSoldWatchesCta = false,
  useVideo = false,
}: {
  strength: number;
  showSoldWatchesCta?: boolean;
  useVideo?: boolean;
}) {
  const { ref, offset } = useSubtleParallax(strength);

  return (
    <div className="flex min-h-[420px] items-center justify-center p-6 md:p-10 lg:p-0">
      <div
        ref={ref}
        className="relative w-full max-w-[580px] transition-transform duration-200 ease-out will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        {useVideo ? <StoryVideo /> : <WatchCarousel />}
        {showSoldWatchesCta ? <SoldWatchesCta /> : null}
      </div>
    </div>
  );
}

function StorySection({ prefix, reversed = false }: StorySectionProps) {
  const { t } = useLanguage();
  const key = (name: string) => `${prefix}.${name}` as TranslationKey;
  const imagePanel = (
    <StoryImagePanel
      strength={72}
      showSoldWatchesCta={prefix === "curation"}
      useVideo={prefix === "curation"}
    />
  );

  const textPanel = (
    <div className="flex items-center px-6 py-12 md:px-10 lg:px-0">
      <div className="max-w-[560px] space-y-7 lg:mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
          {t(key("eyebrow"))}
        </p>

        <h2 className="font-serif text-4xl font-medium uppercase leading-[1.15] tracking-[0.12em] text-foreground md:text-5xl">
          {t(key("title"))}
        </h2>

        <div className="space-y-5 text-sm leading-7 text-muted-foreground md:text-[15px]">
          <p>{t(key("p1"))}</p>
          <p>{t(key("p2"))}</p>
          <p>{t(key("p3"))}</p>
          <p>{t(key("p4"))}</p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          <span className="rounded-full border border-primary/25 px-4 py-2 transition-colors duration-200 hover:border-[#eadcc6] hover:bg-[#eadcc6] hover:text-[#1d140f]">
            {t(key("tag1"))}
          </span>
          <span className="rounded-full border border-primary/25 px-4 py-2 transition-colors duration-200 hover:border-[#eadcc6] hover:bg-[#eadcc6] hover:text-[#1d140f]">
            {t(key("tag2"))}
          </span>
          <span className="rounded-full border border-primary/25 px-4 py-2 transition-colors duration-200 hover:border-[#eadcc6] hover:bg-[#eadcc6] hover:text-[#1d140f]">
            {t(key("tag3"))}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid items-center gap-y-8 lg:grid-cols-2 lg:gap-x-20">
      {reversed ? textPanel : imagePanel}
      {reversed ? imagePanel : textPanel}
    </div>
  );
}

export function FounderStorySection() {
  return (
    <section className="overflow-hidden border-y border-border/70 bg-[linear-gradient(135deg,hsl(var(--card))_0%,hsl(var(--background))_100%)]">
      <div className="mx-auto max-w-[1280px] px-0 py-16 md:py-20 lg:px-10 lg:py-28">
        <StorySection prefix="founder" />
        <div className="h-16 md:h-24 lg:h-36" />
        <StorySection prefix="curation" reversed />
      </div>
    </section>
  );
}
