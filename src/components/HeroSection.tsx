import { useEffect, useRef, useState } from "react";
import { Search, ShieldCheck, ShoppingBag } from "lucide-react";
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

const watches = [
  {
    title: "Seiko Chronograph",
    meta: "1970s automatic",
    price: "Live auction",
    image: heroWatch2,
  },
  {
    title: "Omega Dress Watch",
    meta: "Champagne dial",
    price: "Curated find",
    image: heroWatch1,
  },
  {
    title: "Crosshair Classic",
    meta: "1950s linen dial",
    price: "Story piece",
    image: heroWatch3,
  },
  {
    title: "Grandpa's Pick",
    meta: "Daily wear patina",
    price: "On Tradera",
    image: heroWatch2,
  },
];

export function HeroSection() {
  const [springScroll, setSpringScroll] = useState(0);
  const spring = useRef({ value: 0, velocity: 0 });
  const scroll = useScrollProgress(1500);
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

      state.velocity += distance * 0.055;
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

  const progress = prefersReducedMotion ? 0 : springScroll;
  const eased = smootherstep(progress);
  const catalogEase = smootherstep((eased - 0.16) / 0.38);
  const featureEase = smootherstep((eased - 0.56) / 0.36);

  const frameY = -12 + eased * 22;
  const frameScale = 0.93 + eased * 0.045;
  const ghostY = -eased * 42;
  const contentY = -(catalogEase * 358 + featureEase * 330);
  const heroFade = 1 - catalogEase * 0.55;
  const footerOpacity = smootherstep((eased - 0.66) / 0.28);

  return (
    <section className="relative isolate h-[235vh] overflow-clip bg-[#e8e7e3] text-[#171717]">
      <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden px-5 py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-4 -z-10 w-[150vw] -translate-x-1/2 select-none text-center font-serif text-[clamp(6rem,16vw,16rem)] italic leading-none text-white/70"
          style={{
            transform: `translate3d(-50%, ${ghostY}px, 0)`,
            willChange: prefersReducedMotion ? "auto" : "transform",
          }}
        >
          Grandpa's Heritage
        </div>

        <div
          className="relative w-full max-w-[1040px] overflow-hidden rounded-sm border border-black/10 bg-white shadow-[0_34px_90px_rgba(0,0,0,0.18)]"
          style={{
            transform: `translate3d(0, ${frameY}px, 0) scale(${frameScale})`,
            willChange: prefersReducedMotion ? "auto" : "transform",
          }}
        >
          <div className="flex h-7 items-center justify-center bg-[#111] px-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
            Vintage watches with stories worth hearing
          </div>

          <div className="flex h-14 items-center justify-between border-b border-black/10 bg-white px-5 text-[11px] font-medium text-black/70 md:px-7">
            <div className="hidden gap-5 md:flex">
              <button type="button" onClick={scrollToCollection} className="transition-colors hover:text-black">
                Collection
              </button>
              <span>Stories</span>
              <span>About</span>
            </div>
            <div className="font-serif text-3xl italic leading-none text-black md:text-5xl">
              Grandpa's Heritage
            </div>
            <div className="flex items-center gap-3 text-black/75">
              <Search className="h-4 w-4" aria-hidden />
              <ShieldCheck className="h-4 w-4" aria-hidden />
              <ShoppingBag className="h-4 w-4" aria-hidden />
            </div>
          </div>

          <div className="relative h-[590px] overflow-hidden bg-white md:h-[620px]">
            <div
              className="will-change-transform"
              style={{
                transform: `translate3d(0, ${contentY}px, 0)`,
                willChange: prefersReducedMotion ? "auto" : "transform",
              }}
            >
              <div className="relative h-[390px] overflow-hidden">
                <img
                  src={heroWatch2}
                  alt="Vintage Seiko chronograph with weathered patina"
                  className="h-full w-full object-cover"
                  style={{
                    opacity: heroFade,
                    transform: `scale(${1.02 + eased * 0.025})`,
                    willChange: prefersReducedMotion ? "auto" : "transform, opacity",
                  }}
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40" />
                <div className="absolute inset-x-0 bottom-8 mx-auto max-w-lg px-6 text-center text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                    New arrivals
                  </p>
                  <h1 className="mt-3 font-serif text-3xl font-bold leading-tight md:text-5xl">
                    Every watch tells a story worth hearing.
                  </h1>
                </div>
              </div>

              <div className="bg-white px-5 py-7 md:px-7">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h2 className="font-serif text-3xl font-semibold md:text-4xl">New In</h2>
                  <div className="hidden gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/50 md:flex">
                    <span>Shop watches</span>
                    <span>Shop stories</span>
                    <span>Shop Tradera</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {watches.map((watch) => (
                    <article key={watch.title} className="group">
                      <div className="aspect-[3/4] overflow-hidden bg-[#f2f0ea]">
                        <img
                          src={watch.image}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <h3 className="mt-3 text-sm font-semibold leading-snug">{watch.title}</h3>
                      <p className="mt-1 text-xs text-black/55">{watch.meta}</p>
                      <p className="mt-2 text-xs font-semibold">{watch.price}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="bg-white px-5 pb-10 md:px-7">
                <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
                  <div className="relative h-60 overflow-hidden bg-black text-white md:h-72">
                    <img src={heroWatch1} alt="" className="h-full w-full object-cover opacity-70" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-5 left-5 max-w-xs">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-white/65">Collectors</p>
                      <h3 className="mt-2 font-serif text-3xl">Patina with proof</h3>
                    </div>
                  </div>
                  <div className="relative h-60 overflow-hidden bg-black text-white md:h-72">
                    <img src={heroWatch3} alt="" className="h-full w-full object-cover opacity-72" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-white/65">Daily wear</p>
                      <h3 className="mt-2 font-serif text-2xl">Quiet classics</h3>
                    </div>
                  </div>
                  <div className="relative h-60 overflow-hidden bg-black text-white md:h-72">
                    <img src={heroWatch2} alt="" className="h-full w-full object-cover opacity-72" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-white/65">On Tradera</p>
                      <h3 className="mt-2 font-serif text-2xl">Live auctions</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <h2 className="font-serif text-3xl font-semibold">Editor's Picks</h2>
                  <button
                    type="button"
                    onClick={scrollToCollection}
                    className="rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-black hover:text-white"
                  >
                    See collection
                  </button>
                </div>
              </div>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white"
              style={{ opacity: 1 - footerOpacity * 0.7 }}
            />
            <button
              type="button"
              onClick={scrollToCollection}
              className="absolute inset-x-0 bottom-0 z-10 h-12 bg-[#111] text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#242424]"
              style={{ opacity: 0.88 + footerOpacity * 0.12 }}
            >
              Discover the latest on Tradera
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
