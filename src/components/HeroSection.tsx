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
    <section className="relative overflow-hidden bg-[#0f1412]">
      <div className="relative min-h-[620px] md:min-h-[calc(100vh-116px)]">
        <img
          src={heroWatch2}
          alt="Close-up of a vintage Seiko chronograph with a weathered bezel"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,20,18,0.8)_0%,rgba(15,20,18,0.46)_38%,rgba(15,20,18,0.18)_66%,rgba(15,20,18,0.58)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/55 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1240px] items-end px-6 pb-16 pt-24 md:min-h-[calc(100vh-116px)] md:pb-24">
          <div className="max-w-2xl text-left text-white">
            <p className="mb-4 text-xl font-extrabold uppercase tracking-[0.04em] text-[#d7c7ad] md:text-2xl">
              New
            </p>
            <h1 className="font-serif text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-white md:text-7xl lg:text-8xl">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-xl text-xl font-normal leading-relaxed text-white/90 md:text-2xl">
              {t("hero.subtitle")}
            </p>
            <button
              onClick={scrollToCollection}
              className="cta-press mt-9 inline-flex h-14 items-center rounded bg-primary px-9 text-sm font-extrabold text-primary-foreground shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-colors duration-150 hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {t("hero.cta")}
            </button>
          </div>
        </div>

        <div className="pointer-events-none absolute right-[12%] top-1/2 z-10 hidden -translate-y-1/2 text-right md:block">
          <p className="font-serif text-4xl font-medium uppercase leading-[0.92] tracking-[0.03em] text-white/85 lg:text-5xl">
            Vintage
            <br />
            <span className="text-[#d7c7ad]">Heritage</span>
          </p>
        </div>

      </div>
    </section>
  );
}
