import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLanguage } from "@/i18n/LanguageProvider";
import heroWatch2 from "@/assets/hero-watch-2.jpg";

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useLanguage();

  const scrollToCollection = () => {
    document
      .getElementById("collection")
      ?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative min-h-[520px] md:min-h-[700px]">
        <img
          src={heroWatch2}
          alt="Close-up of a vintage Seiko chronograph with a weathered bezel"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.3)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[960px] flex-col items-center justify-center px-6 pt-20 text-center text-white md:min-h-[700px]">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.32em] text-white/80">
            New arrivals
          </p>
          <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white md:text-lg">
            {t("hero.subtitle")}
          </p>
          <button
            onClick={scrollToCollection}
            className="cta-press mt-8 inline-flex h-12 items-center rounded-full bg-white px-8 text-xs font-bold uppercase tracking-[0.18em] text-[#111111] shadow-[0_16px_40px_rgba(0,0,0,0.24)] transition-colors duration-150 hover:bg-[#f4efe7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {t("hero.cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
