import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLanguage } from "@/i18n/LanguageProvider";
import heroWatch2 from "@/assets/hero-watch-2.jpg";

export function HeroSection() {
  const [springScroll, setSpringScroll] = useState(0);
  const spring = useRef({ value: 0, velocity: 0 });
  const scroll = useScrollProgress(820);
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

      state.velocity += distance * 0.085;
      state.velocity *= 0.74;
      state.value += state.velocity;

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
  const eased = motionScroll * motionScroll * (3 - 2 * motionScroll);

  const backgroundY = eased * 34;
  const atmosphereScale = 1.05 + eased * 0.035;
  const watchX = eased * 18;
  const watchY = eased * -86;
  const watchScale = 1 - eased * 0.06;
  const watchRotate = eased * 1.2;
  const textY = eased * -24;
  const captionY = eased * 18;

  return (
    <section className="relative isolate overflow-hidden bg-[hsl(var(--surface-espresso))]" style={{ minHeight: "min(96vh, 860px)" }}>
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
          className="absolute inset-0 h-full w-full object-cover opacity-30 blur-[1px]"
          style={{
            transform: `scale(${atmosphereScale})`,
            transition: prefersReducedMotion ? "none" : "opacity var(--motion-duration-slow) var(--motion-ease-standard)",
            willChange: prefersReducedMotion ? "auto" : "transform",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_82%,rgba(219,171,92,0.34),transparent_28%),radial-gradient(circle_at_46%_48%,rgba(248,232,190,0.16),transparent_34%),linear-gradient(180deg,rgba(16,12,10,0.84)_0%,rgba(31,22,16,0.76)_48%,rgba(17,12,10,0.94)_100%)]" />
        <div className="absolute inset-x-0 bottom-[-18%] mx-auto h-[46vw] max-h-[620px] w-[86vw] max-w-[1180px] rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(224,166,74,0.24),rgba(224,166,74,0.08)_42%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="relative mx-auto flex min-h-[inherit] max-w-[1180px] flex-col items-center justify-center px-6 py-20 text-center md:py-24">
        <div
          aria-hidden
          className="hero-watch-object pointer-events-none absolute left-1/2 top-[48%] z-20 w-[min(72vw,560px)]"
          style={{
            transform: `translate3d(calc(-50% + ${watchX}px), calc(-50% + ${watchY}px), 0) scale(${watchScale}) rotate(${watchRotate}deg)`,
            willChange: prefersReducedMotion ? "auto" : "transform",
          }}
        >
          <div className="relative aspect-square">
            <div className="absolute inset-[6%] rounded-full bg-[rgba(232,181,94,0.22)] blur-3xl" />
            <img
              src="/hero-watch-object.webp"
              alt=""
              className="relative h-full w-full object-contain drop-shadow-[0_42px_70px_rgba(0,0,0,0.55)]"
              width={900}
              height={900}
              decoding="async"
              loading="eager"
            />
          </div>
        </div>

        <div
          className="relative z-30 max-w-4xl pt-4"
          style={{
            transform: `translate3d(0, ${textY}px, 0)`,
            willChange: prefersReducedMotion ? "auto" : "transform",
          }}
        >
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/68">
            Grandpa's Heritage
          </p>
          <h1 className="mx-auto max-w-4xl font-serif text-[clamp(3.1rem,8vw,7.25rem)] font-bold leading-[0.92] text-primary-foreground">
            {t("hero.title")}
          </h1>
        </div>

        <div
          className="relative z-40 mt-[min(24vh,220px)] flex max-w-xl flex-col items-center gap-6"
          style={{
            transform: `translate3d(0, ${captionY}px, 0)`,
            willChange: prefersReducedMotion ? "auto" : "transform",
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
    </section>
  );
}
