import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  SUPPORTED_LANGUAGES,
  translations,
  type Language,
  type TranslationKey,
} from "./translations";

type Ctx = {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "vw.lang";

const COUNTRY_TO_LANG: Record<string, Language> = {
  DK: "da",
  SE: "sv",
  NO: "no",
  GB: "en",
  US: "en",
  IE: "en",
  AU: "en",
  CA: "en",
  NZ: "en",
};

function normalize(code: string | undefined | null): Language | null {
  if (!code) return null;
  const lower = code.toLowerCase().split(/[-_]/)[0];
  if ((SUPPORTED_LANGUAGES as string[]).includes(lower)) return lower as Language;
  if (lower === "nb" || lower === "nn") return "no";
  return null;
}

function detectFromBrowser(): Language | null {
  if (typeof navigator === "undefined") return null;
  const list = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const l of list) {
    const norm = normalize(l);
    if (norm) return norm;
  }
  return null;
}

async function detectFromIp(): Promise<Language | null> {
  try {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 2500);
    const res = await fetch("https://ipapi.co/json/", { signal: ctrl.signal });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const data = await res.json();
    const country = (data?.country_code || data?.country) as string | undefined;
    if (country && COUNTRY_TO_LANG[country.toUpperCase()]) {
      return COUNTRY_TO_LANG[country.toUpperCase()];
    }
    return normalize(data?.languages?.split(",")[0]);
  } catch {
    return null;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    // 1) explicit user choice wins
    const stored = typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    const storedLang = normalize(stored);
    if (storedLang) {
      setLangState(storedLang);
      return;
    }
    // 2) browser language
    const fromBrowser = detectFromBrowser();
    if (fromBrowser) {
      setLangState(fromBrowser);
      return;
    }
    // 3) IP fallback
    detectFromIp().then((ipLang) => {
      if (ipLang) setLangState(ipLang);
    });
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (key: TranslationKey, vars?: Record<string, string | number>) => {
      const dict = translations[lang] ?? translations.en;
      let str = dict[key] ?? translations.en[key] ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          str = str.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
        }
      }
      return str;
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
