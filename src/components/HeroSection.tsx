import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLanguage } from "@/i18n/LanguageProvider";
import heroWatch1 from "@/assets/hero-watch-1.jpg";
import heroWatch2 from "@/assets/hero-watch-2.jpg";
import heroWatch3 from "@/assets/hero-watch-3.jpg";

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
const smootherstep = (value: number) => {
  const t = clamp01(value);
  return t * t * t * (t * (t * 6 - 15) + 10);
};

const featureTiles = [
  { label: "Collectors", title: "Patina with proof", image: heroWatch1 },
  { label: "Daily wear", title: "Quiet classics", image: heroWatch3 },
  { label: "On Tradera", title: "Live auctions", image: heroWatch2 },
];

export function HeroSection() {
  const [springScroll, setSpringScroll] = useState(0);
  const spring = useRef({ value: 0, velocity: 0 });
  const scroll = useScrollProgress(900);
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

      state.velocity += distance * 0.05;
      state.velocity *= 0.84;
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

  const progress = prefersReducedMotion ? 0 : springScroll;
  const eased = smootherstep(progress);
  const imageScale = 1.02 + eased * 0.035;
  const headlineY = -eased * 22;
  const featureY = 28 - eased * 28;

  const scrollToCollection = () => {
    document
      .getElementById("collection")
      ?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <section className="bg-white">
      <div className="relative min-h-[620px] overflow-hidden md:min-h-[680px]">
        <img
          src={heroWatch2}
          alt="Vintage Seiko chronograph with weathered patina"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `scale(${imageScale})`,
            willChange: prefersReducedMotion ? "auto" : "transform",
          }}
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-black/10 to-black/58" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />

        <div
          className="absolute inset-x-0 bottom-16 mx-auto max-w-2xl px-6 text-center text-white"
          style={{
            transform: `translate3d(0, ${headlineY}px, 0)`,
            willChange: prefersReducedMotion ? "auto" : "transform",
          }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
            New arrivals
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[0.98] md:text-6xl">
            Every watch tells a story worth hearing.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/78 md:text-base">
            {t("hero.subtitle")}
          </p>
          <button
            type="button"
            onClick={scrollToCollection}
            className="mt-7 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black transition-colors hover:bg-[#efefef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {t("hero.cta")}
          </button>
        </div>
      </div>

      <div
        className="grid gap-px bg-black/10 md:grid-cols-3"
        style={{
          transform: `translate3d(0, ${featureY}px, 0)`,
          willChange: prefersReducedMotion ? "auto" : "transform",
        }}
      >
        {featureTiles.map((tile) => (
          <article key={tile.title} className="relative h-64 overflow-hidden bg-black text-white md:h-80">
            <img src={tile.image} alt="" className="h-full w-full object-cover opacity-72" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-xs">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/62">
                {tile.label}
              </p>
              <h2 className="mt-2 font-serif text-3xl leading-none">{tile.title}</h2>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
