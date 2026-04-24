import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLanguage } from "@/i18n/LanguageProvider";
import heroWatch1 from "@/assets/hero-watch-1.jpg";
import heroWatch2 from "@/assets/hero-watch-2.jpg";
import heroWatch3 from "@/assets/hero-watch-3.jpg";

const slides = [
  { src: heroWatch1, alt: "Vintage Omega Seamaster with champagne dial on parchment" },
  { src: heroWatch2, alt: "Vintage Seiko chronograph with patina bezel on weathered wood" },
  { src: heroWatch3, alt: "1950s dress watch with crosshair dial resting on linen" },
];

const ROTATION_MS = 9000;

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [springScroll, setSpringScroll] = useState(0);
  const spring = useRef({ value: 0, velocity: 0 });
  const scroll = useScrollProgress(820);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useLanguage();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, ROTATION_MS);

    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

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

  const backgroundY = eased * 36;
  const atmosphereScale = 1.04 + eased * 0.04;
  const watchX = eased * -92;
  const watchY = eased * 108;
  const watchScale = 1 + eased * 0.035;
  const watchRotate = eased * -1.25;
  const textY = eased * -18;

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "min(96vh, 860px)" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[hsl(var(--surface-espresso))]"
        style={{
          transform: `translate3d(0, ${backgroundY}px, 0)`,
          willChange: prefersReducedMotion ? "auto" : "transform",
        }}
      >
        <img
          src={prefersReducedMotion ? heroWatch2 : "/hero-atmosphere.webp"}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          style={{
            transform: `scale(${atmosphereScale})`,
            transition: prefersReducedMotion ? "none" : "opacity var(--motion-duration-slow) var(--motion-ease-standard)",
            willChange: prefersReducedMotion ? "auto" : "transform",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,23,17,0.9)_0%,rgba(32,23,17,0.76)_38%,rgba(32,23,17,0.28)_72%,rgba(32,23,17,0.7)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,rgba(244,230,202,0.22),transparent_34%),linear-gradient(to_bottom,rgba(239,232,219,0.08),hsl(var(--background))_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="mx-auto flex min-h-[inherit] max-w-[1240px] flex-col justify-center px-6 py-20 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] md:gap-6">
          <div
            className="relative z-40 max-w-xl space-y-6 pt-8 md:pt-0"
            style={{
              transform: `translate3d(0, ${textY}px, 0)`,
              willChange: prefersReducedMotion ? "auto" : "transform",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
              Grandpa's Heritage
            </p>
            <h1 className="font-serif text-5xl font-bold leading-[1.02] text-primary-foreground md:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-primary-foreground/78">
              {t("hero.subtitle")}
            </p>
            <button
              onClick={scrollToCollection}
              className="cta-press inline-flex h-12 items-center rounded-md bg-primary-foreground px-8 text-sm font-semibold text-primary transition-colors duration-150 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--surface-espresso))]"
            >
              {t("hero.cta")}
            </button>
          </div>

          <div
            className="relative z-30 -mt-3 md:-ml-12 md:mt-8"
            style={{
              transform: `translate3d(${watchX}px, ${watchY}px, 0) scale(${watchScale}) rotate(${watchRotate}deg)`,
              willChange: prefersReducedMotion ? "auto" : "transform",
              transformOrigin: "center center",
            }}
          >
            <div
              className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-lg border border-primary-foreground/15 shadow-2xl"
              style={{ boxShadow: "0 44px 90px -28px rgba(0, 0, 0, 0.58)" }}
            >
              {slides.map((slide, i) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  width={1024}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    opacity: i === active || (prefersReducedMotion && i === 0) ? 1 : 0,
                    transform: "scale(1)",
                    transition: prefersReducedMotion
                      ? "none"
                      : "opacity var(--motion-duration-standard) var(--motion-ease-enter)",
                  }}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              ))}

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 52%, rgba(19, 14, 10, 0.32) 100%)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_38%,rgba(0,0,0,0.12)_100%)]" />

              {!prefersReducedMotion && (
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5" aria-hidden>
                  {slides.map((_, i) => (
                    <span
                      key={i}
                      className="block h-1 rounded-full"
                      style={{
                        width: i === active ? 18 : 6,
                        backgroundColor:
                          i === active
                            ? "hsl(var(--primary-foreground))"
                            : "hsla(var(--primary-foreground) / 0.45)",
                        transition:
                          "width var(--motion-duration-fast) var(--motion-ease-enter), background-color var(--motion-duration-fast) linear",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
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
