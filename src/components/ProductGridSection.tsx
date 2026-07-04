import { Fragment, useEffect, useState } from "react";
import { getProducts, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { TraderaButton } from "@/components/TraderaButton";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Clock3, PackageOpen, RefreshCw } from "lucide-react";

const LIVE_FEED_REFRESH_MS = 30_000;

function AuctionInfoCard() {
  const { t } = useLanguage();

  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card shadow-[0_18px_45px_-34px_rgba(29,20,15,0.8)]">
      <div className="flex aspect-square flex-col justify-between bg-[radial-gradient(circle_at_24%_18%,rgba(234,220,198,0.18),transparent_34%),linear-gradient(145deg,hsl(var(--card))_0%,hsl(var(--surface-espresso))_100%)] p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background/35 text-primary">
          <RefreshCw className="h-5 w-5" />
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            {t("collection.infoEyebrow")}
          </p>
          <h3 className="font-serif text-3xl font-semibold leading-tight text-foreground">
            {t("collection.infoTitle")}
          </h3>
          <p className="max-w-[18rem] text-sm leading-7 text-muted-foreground">
            {t("collection.infoBody")}
          </p>
        </div>
      </div>

      <div className="space-y-3 p-4 text-sm text-muted-foreground">
        <div className="flex items-start gap-2">
          <Clock3 className="mt-1 h-4 w-4 shrink-0 text-primary" />
          <span>{t("collection.infoPoint1")}</span>
        </div>
        <div className="flex items-start gap-2">
          <RefreshCw className="mt-1 h-4 w-4 shrink-0 text-primary" />
          <span>{t("collection.infoPoint2")}</span>
        </div>
      </div>
    </article>
  );
}

export function ProductGridSection() {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProducts = async (showLoading = false) => {
    if (showLoading) {
      setLoading(true);
    }
    setError(false);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(true);

    const intervalId = window.setInterval(() => {
      fetchProducts();
    }, LIVE_FEED_REFRESH_MS);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchProducts();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <SectionWrapper id="collection" className="py-16 md:py-24">
      <h2 className="font-serif text-3xl font-semibold text-foreground mb-8 md:text-4xl">
        {t("collection.title")}
      </h2>

      {loading && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-lg border border-border overflow-hidden">
              <Skeleton className="aspect-square w-full bg-secondary" />
              <div className="p-4 space-y-3">
                <Skeleton className="h-5 w-3/4 bg-secondary" />
                <Skeleton className="h-4 w-full bg-secondary" />
                <Skeleton className="h-3 w-1/2 bg-secondary" />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="text-center py-16 space-y-4">
          <p className="text-muted-foreground">{t("collection.error")}</p>
          <button
            onClick={() => fetchProducts(true)}
            className="cta-press inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {t("collection.retry")}
          </button>
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="rounded-lg border border-border bg-card px-6 py-14 text-center md:px-10">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-muted-foreground">
              <PackageOpen className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                {t("collection.empty")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("detail.handoff")}
              </p>
            </div>
            <TraderaButton className="mt-2" />
          </div>
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Fragment key={product.id}>
              <ProductCard product={product} />
              {index === 0 ? <AuctionInfoCard /> : null}
            </Fragment>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
