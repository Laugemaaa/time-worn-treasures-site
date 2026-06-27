import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Globe, Instagram, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { TraderaButton } from "@/components/TraderaButton";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES, type Language } from "@/i18n/translations";
import grandpasHeritageLogo from "@/assets/grandpas-heritage-logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: "Hjem", to: "/" },
    { label: "Kollektion", to: "/#collection" },
    { label: "Om", to: "/#philosophy" },
    { label: "Solgte ure", to: "/solgte-ure" },
  ];

  const instagramUrl = "https://www.instagram.com/granpasheritage/";

  const handleNavClick = (to: string) => {
    setOpen(false);
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    setOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        {t("skip.toContent")}
      </a>
      <header className="sticky top-0 z-50 border-b border-[#3a2a1e]/80 bg-[linear-gradient(180deg,#2b2118_0%,#1d140f_74%,#100c09_100%)] shadow-[0_22px_50px_-28px_rgba(5,4,3,0.95)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-[-28px] after:h-7 after:bg-gradient-to-b after:from-[#100c09] after:to-transparent">
        <div className="relative mx-auto h-[96px] max-w-[1920px] px-8 font-sans lg:px-11">
          <nav
            className="absolute left-8 top-1/2 hidden max-w-[calc(50%-175px)] -translate-y-1/2 items-center gap-12 overflow-hidden lg:left-14 lg:flex xl:gap-14"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className="inline-flex items-center whitespace-nowrap rounded-sm py-0.5 font-serif text-[15px] font-semibold leading-none text-[#d8c8aa] transition-colors duration-150 hover:text-[#fff4dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c8aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d140f]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            onClick={handleLogoClick}
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[#eadcc6] leading-[24px] transition-colors duration-150 hover:text-[#fff4dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c8aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d140f]"
            aria-label="GrandpasHeritage home"
          >
            <img
              src={grandpasHeritageLogo}
              alt="Grandpa's Heritage"
              className="h-[72px] w-auto max-w-[min(720px,calc(100vw-112px))] object-contain brightness-0 invert sepia saturate-[0.55] hue-rotate-[350deg]"
              decoding="async"
            />
          </Link>

          <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 items-center justify-end gap-3 lg:right-14 lg:flex">
            <label className="inline-flex h-[32px] items-center gap-2 rounded-[7px] border border-[#d8c8aa]/35 bg-[#eadcc6]/5 px-2.5 font-serif text-[14px] font-semibold leading-none text-[#d8c8aa] focus-within:ring-2 focus-within:ring-[#d8c8aa] focus-within:ring-offset-2 focus-within:ring-offset-[#1d140f]">
              <Globe aria-hidden className="h-3.5 w-3.5" />
              <span className="sr-only">{t("footer.language")}</span>
              <select
                value={lang}
                onChange={(event) => setLang(event.target.value as Language)}
                aria-label={t("footer.language")}
                className="appearance-none bg-transparent pr-5 font-serif text-[14px] font-semibold leading-none text-[#d8c8aa] outline-none"
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option key={language} value={language} className="text-[#2f241b]">
                    {LANGUAGE_LABELS[language]}
                  </option>
                ))}
              </select>
              <ChevronDown aria-hidden className="pointer-events-none -ml-5 h-3 w-3" />
            </label>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (opens in new tab)"
              className="inline-flex h-[42px] items-center gap-2 rounded-[12px] bg-[#eadcc6] px-4 font-serif text-[18px] font-semibold leading-none text-[#1d140f] transition-colors duration-150 hover:bg-[#fff4dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c8aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d140f]"
            >
              <Instagram aria-hidden className="h-4 w-4" />
              <span>Instagram</span>
            </a>
            <TraderaButton size="sm" className="h-[42px] px-5" />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="absolute right-6 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md text-[#d8c8aa] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c8aa]"
            aria-label={t("nav.openMenu")}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile drawer */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="w-72 border-l-[#3a2a1e] bg-[#1d140f]">
            <SheetTitle className="sr-only">{t("nav.menu")}</SheetTitle>
            <div className="flex justify-end p-4">
              <button
                onClick={() => setOpen(false)}
                className="h-11 w-11 inline-flex items-center justify-center rounded-md text-[#d8c8aa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c8aa]"
                aria-label={t("nav.closeMenu")}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 px-6 pt-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="inline-flex items-center rounded-sm py-2 font-serif text-[24px] font-semibold leading-none text-[#d8c8aa] transition-colors duration-150 hover:text-[#fff4dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c8aa]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-5">
                <label className="inline-flex h-[34px] w-fit items-center gap-2 rounded-[7px] border border-[#d8c8aa]/35 bg-[#eadcc6]/5 px-2.5 font-serif text-[14px] font-semibold leading-none text-[#d8c8aa]">
                  <Globe aria-hidden className="h-3.5 w-3.5" />
                  <span className="sr-only">{t("footer.language")}</span>
                  <select
                    value={lang}
                    onChange={(event) => setLang(event.target.value as Language)}
                    aria-label={t("footer.language")}
                    className="appearance-none bg-transparent pr-5 font-serif text-[14px] font-semibold leading-none text-[#d8c8aa] outline-none"
                  >
                    {SUPPORTED_LANGUAGES.map((language) => (
                      <option key={language} value={language} className="text-[#2f241b]">
                        {LANGUAGE_LABELS[language]}
                      </option>
                    ))}
                  </select>
                  <ChevronDown aria-hidden className="pointer-events-none -ml-5 h-3 w-3" />
                </label>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-fit items-center gap-2 rounded-[12px] bg-[#eadcc6] px-4 font-serif text-[18px] font-semibold leading-none text-[#1d140f]"
                >
                  <Instagram aria-hidden className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
                <TraderaButton />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
