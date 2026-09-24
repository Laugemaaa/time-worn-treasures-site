import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLanguage } from "@/i18n/LanguageProvider";
import philosophyVideoMobile from "@/assets/instagram-watch-video.mp4";
import philosophyVideoDesktop from "@/assets/instagram-watch-video-desktop.mp4";
import philosophyPoster from "@/assets/instagram-watch-poster.webp";


function useScrollCardPresence(threshold = 0.28) {
  const ref = useRef<HTMLElement>(null);
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
        rootMargin: "-8% 0px -14% 0px",
        threshold,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion, threshold]);

  return { ref, visible };
}

function PhilosophyCard({
  paragraph,
  index,
}: {
  paragraph: string;
  index: number;
}) {
  const { ref, visible } = useScrollCardPresence();

  return (
    <article
      ref={ref}
      className={[
        "group rounded-md border border-[#eadcc6]/20 bg-[#1b120d]/55 p-6 shadow-[0_24px_70px_-42px_rgba(0,0,0,0.95)] backdrop-blur-md transition-[background-color,border-color,box-shadow,filter,opacity,transform] duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:border-[#eadcc6]/45 hover:bg-[#2b1d16]/72 hover:shadow-[0_28px_76px_-38px_rgba(0,0,0,0.98)] lg:p-6 xl:p-7",
        visible
          ? "translate-y-0 scale-100 opacity-100 blur-0"
          : "translate-y-8 scale-[0.97] opacity-0 blur-sm",
      ].join(" ")}
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
    >
      <div className="mb-6 h-px w-full bg-primary/25 transition-colors duration-300 group-hover:bg-[#eadcc6]/55" />
      <span className="mb-5 block font-serif text-2xl text-primary/80 transition-colors duration-300 group-hover:text-[#eadcc6]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="max-w-[18rem] text-sm leading-7 text-[#d8cbb8]/82 transition-colors duration-300 group-hover:text-[#f0e2cc]/95 md:text-[15px]">
        {paragraph}
      </p>
    </article>
  );
}

export function PhilosophySection() {
  const { t } = useLanguage();

  const prefersReducedMotion = usePrefersReducedMotion();
  const videoReady = !prefersReducedMotion;

  return (
    <section id="philosophy" className="relative isolate overflow-hidden border-b border-[#eadcc6]/15 bg-[#20140e] text-foreground">
      <video

        className="autoplay-background-video pointer-events-none absolute inset-0 -z-30 h-full w-full select-none object-cover object-center"
        poster={philosophyPoster}
        autoPlay={videoReady}
        muted
        loop
        playsInline
        preload={videoReady ? "auto" : "none"}
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload noplaybackrate nofullscreen"
        tabIndex={-1}
        aria-hidden="true"
        onCanPlay={(event) => { if (videoReady) void event.currentTarget.play().catch(() => undefined); }}
        onPause={(event) => {
          if (videoReady && document.visibilityState === "visible") void event.currentTarget.play().catch(() => undefined);
        }}
      >
        {videoReady ? (
          <>
            <source media="(max-width: 767px)" src={philosophyVideoMobile} type="video/mp4" />
            <source src={philosophyVideoDesktop} type="video/mp4" />
          </>
        ) : null}
      </video>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(24,15,10,0.88)_0%,rgba(25,16,11,0.70)_40%,rgba(25,16,11,0.86)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(24,15,10,0.34)_0%,rgba(24,15,10,0.10)_44%,rgba(24,15,10,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#eadcc6]/35 to-transparent" />
      <SectionWrapper className="relative py-20 md:py-28 lg:py-32" reveal="fade">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-[480px]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e1c694] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Grandpa's Heritage
            </p>
            <h2 className="max-w-[420px] font-serif text-4xl font-medium uppercase leading-[1.08] tracking-[0.1em] text-[#fff4e2] drop-shadow-[0_3px_18px_rgba(0,0,0,0.75)] md:text-5xl">
              {t("philosophy.title")}
            </h2>
            <p className="mt-7 max-w-[360px] text-sm leading-7 text-[#eadcc6]/86 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-[15px]">
              {t("philosophy.intro")}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:gap-5 xl:gap-6">
            {[t("philosophy.p1"), t("philosophy.p2"), t("philosophy.p3")].map((paragraph, index) => (
              <PhilosophyCard
                key={paragraph}
                paragraph={paragraph}
                index={index}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
