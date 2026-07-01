import { useMemo, useState } from "react";
import { CalendarDays, Filter, Gavel, PackageCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { TraderaButton } from "@/components/TraderaButton";
import { soldWatches, type SoldWatch } from "@/data/soldWatches";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Language } from "@/i18n/translations";

const LOCALES: Record<Language, string> = {
  en: "en-US",
  da: "da-DK",
  sv: "sv-SE",
  no: "nb-NO",
};

const formatSoldPrice = (watch: SoldWatch, lang: Language) =>
  new Intl.NumberFormat(LOCALES[lang], {
    style: "currency",
    currency: watch.currency,
    maximumFractionDigits: 0,
  }).format(watch.soldPrice);

const BRAND_NAMES = [
  "Breitling",
  "Casio",
  "Certina",
  "Citizen",
  "CYMA",
  "Dugena",
  "Eterna",
  "H. Moser",
  "Junghans",
  "Lemania",
  "Longines",
  "Nisus",
  "Omega",
  "Oris",
  "Rado",
  "Revue",
  "Seiko",
  "Sekel",
  "Technos",
  "Timex",
  "Tissot",
  "Wilson",
  "Zenith",
  "Zodiac",
] as const;

const FEATURED_FILTER_BRANDS = [
  "Omega",
  "Casio",
  "Tissot",
  "Certina",
  "Seiko",
  "Citizen",
  "Rado",
  "H. Moser",
  "Longines",
  "Timex",
] as const;

function getSoldWatchBrand(watch: SoldWatch): string {
  const title = watch.title.toLowerCase();
  return BRAND_NAMES.find((brand) => title.includes(brand.toLowerCase())) ?? "Other";
}

export default function SoldWatches() {
  const { t } = useLanguage();
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const brandOptions = useMemo(
    () =>
      FEATURED_FILTER_BRANDS.filter((brand) =>
        soldWatches.some((watch) => getSoldWatchBrand(watch) === brand),
      ),
    [],
  );
  const visibleWatches = useMemo(
    () => {
      const filteredWatches =
        selectedBrand === "all"
          ? soldWatches
          : soldWatches.filter((watch) => getSoldWatchBrand(watch) === selectedBrand);

      return [...filteredWatches].sort((a, b) => b.soldPrice - a.soldPrice);
    },
    [selectedBrand],
  );

  return (
    <div className="min-h-screen bg-background paper-texture">
      <SEO
        title={`${t("sold.title")} | GrandpasHeritage`}
        description={t("sold.description")}
        canonicalPath="/solgte-ure"
      />
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              {t("sold.archive")}
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              {t("sold.title")}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("sold.description")}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="text-sm text-muted-foreground">
              {t("sold.showingCount", { count: visibleWatches.length, total: soldWatches.length })}
            </div>

            <div className="w-full rounded-lg border border-border/80 bg-card/70 p-3 shadow-[0_18px_45px_-34px_rgba(29,20,15,0.75)] lg:max-w-[520px]">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <Filter className="h-3.5 w-3.5" />
                {t("sold.filterByBrand")}
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedBrand("all")}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors duration-150 ${
                    selectedBrand === "all"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/80 bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {t("sold.allBrands")}
                </button>
                {brandOptions.map((brand) => (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => setSelectedBrand(brand)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors duration-150 ${
                      selectedBrand === brand
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border/80 bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {soldWatches.length > 0 ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {visibleWatches.map((watch) => (
                <SoldWatchCard key={watch.id} watch={watch} />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-lg border border-border bg-card px-6 py-14 text-center md:px-10">
              <div className="mx-auto flex max-w-xl flex-col items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                  <PackageCheck className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    {t("sold.emptyTitle")}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t("sold.emptyDescription")}
                  </p>
                </div>
                <TraderaButton className="mt-2" />
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

function SoldWatchCard({ watch }: { watch: SoldWatch }) {
  const { lang, t } = useLanguage();

  return (
    <article className="group overflow-hidden rounded-lg border border-border/80 bg-card shadow-[0_18px_45px_-34px_rgba(29,20,15,0.8)] transition duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_22px_55px_-34px_rgba(29,20,15,0.95)]">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={watch.imageUrl}
          alt={watch.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.07]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="space-y-2.5 p-3">
        {watch.itemNumber && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] leading-none text-muted-foreground">
            <span>
              {t("sold.itemNumber")} {watch.itemNumber}
            </span>
          </div>
        )}

        <h2 className="font-serif text-base font-semibold leading-tight text-foreground line-clamp-2">
          {watch.title}
        </h2>

        {watch.shortDescription && (
          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {watch.shortDescription}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">{formatSoldPrice(watch, lang)}</span>
          {watch.numberOfBids && (
            <span className="inline-flex items-center gap-1">
              <Gavel className="h-3 w-3" />
              {t("sold.bids", { count: watch.numberOfBids })}
            </span>
          )}
          {watch.soldDate && (
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />
              {watch.soldDate}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
