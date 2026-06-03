import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES, type Language } from "@/i18n/translations";

export function LanguageSelector() {
  const { lang, setLang, t } = useLanguage();

  return (
    <label className="inline-flex items-center gap-2 text-sm text-[#d8c8aa]">
      <Globe aria-hidden className="h-4 w-4 text-[#b9a98f]" />
      <span className="sr-only">{t("footer.language")}</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as Language)}
        aria-label={t("footer.language")}
        className="rounded border border-[#d8c8aa]/30 bg-[#eadcc6]/5 px-2 py-1 text-sm text-[#eadcc6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c8aa]"
      >
        {SUPPORTED_LANGUAGES.map((l) => (
          <option key={l} value={l} className="text-[#1d140f]">
            {LANGUAGE_LABELS[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
