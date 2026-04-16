import { useEffect, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useLanguage } from "@/i18n/LanguageProvider";
import heroWatch1 from "@/assets/hero-watch-1.jpg";
import heroWatch2 from "@/assets/hero-watch-2.jpg";
import heroWatch3 from "@/assets/hero-watch-3.jpg";

const slides = [
  { src: heroWatch1, alt: "Vintage Omega Seamaster with champagne dial on parchment" },
  { src: heroWatch2, alt: "Vintage Seiko chronograph with patina bezel on weathered wood" },
  { src: heroWatch3, alt: "1950s dress watch with crosshair dial resting on linen" },
];

const ROTATION_MS = 5000;

export function HeroSection() {
  const [active, setActive] = useState(0);
  const scroll = useScrollProgress(700);
  const { t } = useLanguage();

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, []);

  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  };

  // Spring-like ease curve applied to the linear scroll progress
  const eased = scroll * scroll * (3 - 2 * scroll);

  // Layered parallax — each layer moves at a different speed/direction for depth.
  // Keep transforms subtle and editorial.
  const bgTextureY = eased * 60;        // slowest — atmospheric backdrop
  const textY = eased * -30;            // headline drifts up gently
  const textOpacity = 1 - eased * 0.4;  // recede slightly, stay legible
  const watchY = eased * 140;           // watch travels downward, overlapping
  const watchScale = 1 + eased * 0.06;  // subtle zoom for depth
  const watchRotate = eased * -2;       // tilts as it passes
  const captionOpacity = 1 - eased * 0.6;

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "min(92vh, 800px)" }}
    >
      {/* Atmospheric backdrop layer — deepest parallax */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          transform: `translate3d(0, ${bgTextureY}px, 0)`,
          willChange: "transform",
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
          {/* Text — midground layer */}
          <div
            className="relative z-20 space-y-6"
            style={{
              transform: `translate3d(0, ${textY}px, 0)`,
              opacity: textOpacity,
              willChange: "transform, opacity",
              transition: "opacity 200ms ease-out",
            }}
          >
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

          {/* Watch carousel — foreground layer, overlaps as it scrolls */}
          <div
            className="relative z-30"
            style={{
              transform: `translate3d(0, ${watchY}px, 0) scale(${watchScale}) rotate(${watchRotate}deg)`,
              willChange: "transform",
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
                    opacity: i === active ? 1 : 0,
                    transform: `scale(${i === active ? 1 : 1.04})`,
                    transition:
                      "opacity 1200ms cubic-bezier(0.4, 0, 0.2, 1), transform 6000ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              ))}

              {/* Subtle vignette for depth */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 55%, rgba(44, 33, 24, 0.18) 100%)",
                }}
              />

              {/* Slide indicators */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5"
                style={{ opacity: captionOpacity }}
                aria-hidden
              >
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className="block h-1 rounded-full transition-all duration-500"
                    style={{
                      width: i === active ? 20 : 6,
                      backgroundColor:
                        i === active
                          ? "hsl(var(--primary-foreground))"
                          : "hsla(var(--primary-foreground) / 0.5)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft fade into next section — preserves continuity of paper texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(var(--background)))",
        }}
      />
    </section>
  );
}
