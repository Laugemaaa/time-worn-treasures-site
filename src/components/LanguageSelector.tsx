import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES, type Language } from "@/i18n/translations";

export function LanguageSelector() {
  const { lang, setLang, t } = useLanguage();

  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <Globe aria-hidden className="h-4 w-4 opacity-70" />
      <span className="sr-only">{t("footer.language")}</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as Language)}
        aria-label={t("footer.language")}
        className="bg-transparent border border-primary-foreground/20 rounded px-2 py-1 text-sm text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
      >
        {SUPPORTED_LANGUAGES.map((l) => (
          <option key={l} value={l} className="text-foreground">
            {LANGUAGE_LABELS[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
