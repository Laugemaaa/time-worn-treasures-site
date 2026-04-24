import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLanguage } from "@/i18n/LanguageProvider";
import heroWatch2 from "@/assets/hero-watch-2.jpg";

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
const smootherstep = (value: number) => {
  const t = clamp01(value);
  return t * t * t * (t * (t * 6 - 15) + 10);
};

export function HeroSection() {
  const [springScroll, setSpringScroll] = useState(0);
  const spring = useRef({ value: 0, velocity: 0 });
  const scroll = useScrollProgress(1720);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useLanguage();

  useEffect(() => {
    if (prefersReducedMotion) {
      spring.current = { value: 0, velocity: 0 };
      setSpringScroll(0);
      return;
    }

    let frame = 0;
    const animate = () => {
      const state = spring.current;
      const distance = scroll - state.value;

      state.velocity += distance * 0.052;
      state.velocity *= 0.82;
      state.value = clamp01(state.value + state.velocity);

      if (Math.abs(distance) < 0.001 && Math.abs(state.velocity) < 0.001) {
        state.value = scroll;
        state.velocity = 0;
        setSpringScroll(scroll);
        return;
      }

      setSpringScroll(state.value);
      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [prefersReducedMotion, scroll]);

  const scrollToCollection = () => {
    document
      .getElementById("collection")
      ?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  const motionScroll = prefersReducedMotion ? 0 : springScroll;
  const eased = smootherstep(motionScroll);
  const focusEase = smootherstep(eased / 0.54);
  const backgroundEase = smootherstep((eased - 0.48) / 0.52);

  const backgroundY = eased * 34;
  const atmosphereScale = 1.035 + eased * 0.035;
  const watchY = 172 - focusEase * 172 + backgroundEase * 18;
  const watchScale = 0.74 + focusEase * 0.58 + backgroundEase * 0.92;
  const watchRotate = -1.1 + focusEase * 1.1 + backgroundEase * 0.65;
  const watchOpacity = 0.64 + focusEase * 0.32 - backgroundEase * 0.68;
  const headlineY = -focusEase * 46 - backgroundEase * 20;
  const headlineOpacity = 1 - backgroundEase * 0.28;
  const supportY = prefersReducedMotion ? 36 : 76 - focusEase * 34 - backgroundEase * 20;
  const supportOpacity = prefersReducedMotion ? 1 : 0.1 + backgroundEase * 0.9;

  return (
    <section className="relative isolate h-[220vh] overflow-clip bg-[hsl(var(--surface-espresso))]">
      <div className="sticky top-0 min-h-screen overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            transform: `translate3d(0, ${backgroundY}px, 0)`,
            willChange: prefersReducedMotion ? "auto" : "transform",
          }}
        >
          <img
            src={prefersReducedMotion ? heroWatch2 : "/hero-atmosphere.webp"}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-24 blur-[1px]"
            style={{
              transform: `scale(${atmosphereScale})`,
              willChange: prefersReducedMotion ? "auto" : "transform",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_72%,rgba(219,171,92,0.3),transparent_31%),radial-gradient(circle_at_50%_42%,rgba(248,232,190,0.12),transparent_34%),linear-gradient(180deg,rgba(15,11,9,0.86)_0%,rgba(31,22,16,0.74)_50%,rgba(17,12,10,0.96)_100%)]" />
          <div
            className="absolute inset-x-0 bottom-[-18%] mx-auto h-[48vw] max-h-[640px] w-[86vw] max-w-[1180px] rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(224,166,74,0.28),rgba(224,166,74,0.08)_42%,transparent_70%)] blur-3xl"
            style={{
              opacity: 0.56 + focusEase * 0.18 - backgroundEase * 0.22,
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-[1180px] flex-col items-center px-6 pb-20 pt-[14vh] text-center md:pt-[16vh]">
          <div
            className="relative z-30 max-w-5xl"
            style={{
              opacity: headlineOpacity,
              transform: `translate3d(0, ${headlineY}px, 0)`,
              willChange: prefersReducedMotion ? "auto" : "transform, opacity",
            }}
          >
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/64">
              Grandpa's Heritage
            </p>
            <h1 className="mx-auto max-w-5xl font-serif text-[clamp(3.2rem,8vw,7.5rem)] font-bold leading-[0.92] text-primary-foreground">
              Every watch tells a story worth hearing.
            </h1>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[48%] z-40 w-[min(74vw,590px)]"
            style={{
              opacity: watchOpacity,
              transform: `translate3d(-50%, calc(-50% + ${watchY}px), 0) scale(${watchScale}) rotate(${watchRotate}deg)`,
              willChange: prefersReducedMotion ? "auto" : "transform, opacity",
            }}
          >
            <div className="relative aspect-square">
              <div className="absolute inset-[6%] rounded-full bg-[rgba(232,181,94,0.24)] blur-3xl" />
              <img
                src="/hero-watch-object.webp"
                alt=""
                className="relative h-full w-full object-contain drop-shadow-[0_44px_76px_rgba(0,0,0,0.58)]"
                width={900}
                height={900}
                decoding="async"
                loading="eager"
              />
            </div>
          </div>

          <div
            className="relative z-50 mt-auto flex max-w-xl flex-col items-center gap-6 pb-[8vh]"
            style={{
              opacity: supportOpacity,
              transform: `translate3d(0, ${supportY}px, 0)`,
              willChange: prefersReducedMotion ? "auto" : "transform, opacity",
            }}
          >
            <p className="text-base leading-relaxed text-primary-foreground/76 md:text-lg">
              {t("hero.subtitle")}
            </p>
            <button
              onClick={scrollToCollection}
              className="cta-press inline-flex h-12 items-center rounded-md bg-primary-foreground px-8 text-sm font-semibold text-primary transition-colors duration-150 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--surface-espresso))]"
            >
              {t("hero.cta")}
            </button>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24"
          style={{
            background: "linear-gradient(to bottom, transparent, hsl(var(--background)))",
          }}
        />
      </div>
    </section>
  );
}
