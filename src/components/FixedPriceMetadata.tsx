import { useLanguage } from "@/i18n/LanguageProvider";
import { useLocalizedText } from "@/i18n/localizedText";
import type { Product } from "@/data/products";
export function FixedPriceMetadata({product}: {product: Product}) {
  const {lang} = useLanguage();
  const tx = useLocalizedText();
  return <div><p className="text-xs uppercase tracking-[.2em] text-muted-foreground">{tx("Fixed price")}</p><p className="mt-2 font-serif text-2xl text-primary">{product.fixedPrice ? new Intl.NumberFormat(lang === 'no' ? 'nb-NO' : lang, {style:'currency',currency:product.currency || 'SEK',maximumFractionDigits:0}).format(product.fixedPrice) : tx("See price on Tradera")}</p></div>;
}
