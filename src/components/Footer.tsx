import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LanguageSelector } from "@/components/LanguageSelector";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-espresso text-primary-foreground">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-3">{t("footer.brandTitle")}</h3>
            <p className="text-sm leading-relaxed opacity-70">{t("footer.brandDesc")}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">{t("footer.navigate")}</h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link to="/" className="text-sm opacity-70 transition-opacity duration-150 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground rounded-sm w-fit">
                {t("nav.home")}
              </Link>
              <Link to="/#collection" className="text-sm opacity-70 transition-opacity duration-150 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground rounded-sm w-fit">
                {t("nav.collection")}
              </Link>
              <Link to="/#philosophy" className="text-sm opacity-70 transition-opacity duration-150 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground rounded-sm w-fit">
                {t("nav.about")}
              </Link>
              <a
                href="https://www.tradera.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm opacity-70 transition-opacity duration-150 hover:opacity-100 w-fit"
              >
                {t("nav.tradera")}
                <ExternalLink className="h-3 w-3" />
              </a>
            </nav>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">{t("footer.trust")}</h4>
              <p className="text-sm opacity-70 leading-relaxed">{t("footer.trustDesc")}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-50">{t("footer.language")}</h4>
              <LanguageSelector />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6">
          <p className="text-xs opacity-40 text-center">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
