import { useEffect, useState } from "react";
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
  const scroll = useScrollProgress(700);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useLanguage();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, ROTATION_MS);

    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  const scrollToCollection = () => {
    document
      .getElementById("collection")
      ?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  const motionScroll = prefersReducedMotion ? 0 : scroll;
  const eased = motionScroll * motionScroll * (3 - 2 * motionScroll);

  // Keep motion editorial and secondary to the copy.
  const bgTextureY = eased * 24;
  const watchY = eased * 48;
  const watchScale = 1 + eased * 0.02;
  const watchRotate = eased * -0.6;

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "min(92vh, 800px)" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          transform: `translate3d(0, ${bgTextureY}px, 0)`,
          willChange: prefersReducedMotion ? "auto" : "transform",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/40" />
        <div
          className="absolute -top-32 -right-40 h-[520px] w-[520px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle at center, hsl(var(--surface-sand)) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 -left-32 h-[420px] w-[420px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle at center, hsl(var(--surface-sand)) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative z-20 space-y-6">
            <h1 className="font-serif text-4xl font-bold leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              {t("hero.subtitle")}
            </p>
            <button
              onClick={scrollToCollection}
              className="cta-press inline-flex h-12 items-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t("hero.cta")}
            </button>
          </div>

          <div
            className="relative z-30"
            style={{
              transform: `translate3d(0, ${watchY}px, 0) scale(${watchScale}) rotate(${watchRotate}deg)`,
              willChange: prefersReducedMotion ? "auto" : "transform",
              transformOrigin: "center center",
            }}
          >
            <div
              className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-lg shadow-2xl"
              style={{ boxShadow: "0 30px 60px -20px rgba(44, 33, 24, 0.35)" }}
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
                    opacity: i === active || prefersReducedMotion ? 1 : 0,
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
                    "radial-gradient(ellipse at center, transparent 55%, rgba(44, 33, 24, 0.18) 100%)",
                }}
              />

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
