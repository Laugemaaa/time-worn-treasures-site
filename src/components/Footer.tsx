import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LanguageSelector } from "@/components/LanguageSelector";
import grandpasHeritageLogo from "@/assets/grandpas-heritage-logo.png";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-espresso text-[#eadcc6]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <img
              src={grandpasHeritageLogo}
              alt={t("footer.brandTitle")}
              className="mb-5 h-16 w-auto max-w-[280px] brightness-0 invert sepia saturate-[0.55] hue-rotate-[350deg]"
              loading="lazy"
              decoding="async"
            />
            <p className="text-sm leading-relaxed text-[#d8c8aa]">{t("footer.brandDesc")}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#b9a98f]">{t("footer.navigate")}</h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link to="/" className="text-sm text-[#d8c8aa] transition-colors duration-150 hover:text-[#fff4dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c8aa] rounded-sm w-fit">
                {t("nav.home")}
              </Link>
              <Link to="/#collection" className="text-sm text-[#d8c8aa] transition-colors duration-150 hover:text-[#fff4dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c8aa] rounded-sm w-fit">
                {t("nav.collection")}
              </Link>
              <Link to="/#philosophy" className="text-sm text-[#d8c8aa] transition-colors duration-150 hover:text-[#fff4dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c8aa] rounded-sm w-fit">
                {t("nav.about")}
              </Link>
              <Link to="/solgte-ure" className="text-sm text-[#d8c8aa] transition-colors duration-150 hover:text-[#fff4dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c8aa] rounded-sm w-fit">
                {t("nav.soldWatches")}
              </Link>
              <Link to="/opkoeb" className="text-sm text-[#d8c8aa] transition-colors duration-150 hover:text-[#fff4dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c8aa] rounded-sm w-fit">
                {t("nav.buyWatches")}
              </Link>
              <a
                href="https://www.tradera.com/da/profile/items/6841860/grandpasheritage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[#d8c8aa] transition-colors duration-150 hover:text-[#fff4dc] w-fit"
              >
                {t("nav.tradera")}
                <ExternalLink className="h-3 w-3" />
              </a>
            </nav>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#b9a98f]">{t("footer.trust")}</h4>
              <p className="text-sm text-[#d8c8aa] leading-relaxed">{t("footer.trustDesc")}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-[#b9a98f]">{t("footer.language")}</h4>
              <LanguageSelector />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#eadcc6]/15 pt-6">
          <p className="text-center text-xs text-[#b9a98f]">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
