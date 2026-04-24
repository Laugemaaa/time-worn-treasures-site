import { Link } from "react-router-dom";
import { Heart, Menu, Search, ShieldCheck, ShoppingBag } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ProductGridSection } from "@/components/ProductGridSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LanguageSelector } from "@/components/LanguageSelector";
import { TraderaButton } from "@/components/TraderaButton";
import { useLanguage } from "@/i18n/LanguageProvider";

const Index = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#171717]">
      <a href="#main-content" className="skip-to-content">
        {t("skip.toContent")}
      </a>

      <div
        aria-hidden
        className="pointer-events-none fixed left-1/2 top-4 z-0 w-[160vw] -translate-x-1/2 select-none text-center font-serif text-[clamp(6rem,16vw,17rem)] italic leading-none text-black/[0.035]"
      >
        Grandpa's Heritage
      </div>

      <main
        id="main-content"
        className="relative z-10 min-h-screen w-full overflow-hidden bg-white"
      >
        <div className="flex h-8 items-center justify-center bg-[#111] px-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
          Vintage watches with stories worth hearing
        </div>

        <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 text-[11px] font-medium text-black/70 md:px-8">
            <nav className="hidden items-center gap-5 md:flex" aria-label="Main navigation">
              <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="transition-colors hover:text-black">
                {t("nav.home")}
              </button>
              <button type="button" onClick={() => scrollTo("collection")} className="transition-colors hover:text-black">
                {t("nav.collection")}
              </button>
              <button type="button" onClick={() => scrollTo("philosophy")} className="transition-colors hover:text-black">
                {t("nav.about")}
              </button>
            </nav>

            <Link to="/" className="font-serif text-3xl italic leading-none text-black md:text-5xl">
              Grandpa's Heritage
            </Link>

            <div className="hidden items-center gap-3 text-black/75 md:flex">
              <Search className="h-4 w-4" aria-hidden />
              <ShieldCheck className="h-4 w-4" aria-hidden />
              <Heart className="h-4 w-4" aria-hidden />
              <ShoppingBag className="h-4 w-4" aria-hidden />
              <TraderaButton size="sm" />
            </div>

            <button
              type="button"
              onClick={() => scrollTo("collection")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-black md:hidden"
              aria-label={t("nav.menu")}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </header>

        <HeroSection />
        <ProductGridSection />
        <PhilosophySection />
        <TestimonialsSection />

        <footer className="border-t border-black/10 bg-white px-6 py-10 md:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
            <div>
              <h2 className="font-serif text-3xl italic leading-none">Grandpa's Heritage</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-black/58">
                {t("footer.brandDesc")}
              </p>
            </div>
            <nav className="flex flex-col gap-2 text-sm text-black/58" aria-label="Footer navigation">
              <button type="button" onClick={() => scrollTo("collection")} className="w-fit transition-colors hover:text-black">
                {t("nav.collection")}
              </button>
              <button type="button" onClick={() => scrollTo("philosophy")} className="w-fit transition-colors hover:text-black">
                {t("nav.about")}
              </button>
              <TraderaButton className="mt-2 w-fit" size="sm" />
            </nav>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/42">
                {t("footer.language")}
              </p>
              <LanguageSelector />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
