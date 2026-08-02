import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { TraderaButton } from "@/components/TraderaButton";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ArrowRight, Clock3, PackageOpen, RefreshCw } from "lucide-react";

const LIVE_FEED_REFRESH_MS = 30_000;
const HOMEPAGE_PREVIEW_COUNT = 5;

function AuctionInfoCard() {
  const { t } = useLanguage();

  return (
    <article className="group/info overflow-hidden rounded-lg border border-border bg-card shadow-[0_18px_45px_-34px_rgba(29,20,15,0.8)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-[#eadcc6]/45 hover:shadow-[0_28px_70px_-38px_rgba(234,220,198,0.34)]">
      <div className="flex aspect-square flex-col justify-between bg-[radial-gradient(circle_at_24%_18%,rgba(234,220,198,0.18),transparent_34%),linear-gradient(145deg,hsl(var(--card))_0%,hsl(var(--surface-espresso))_100%)] p-6 transition-[filter] duration-300 group-hover/info:brightness-110">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background/35 text-primary transition-[background-color,border-color,transform] duration-300 group-hover/info:rotate-45 group-hover/info:border-[#eadcc6]/65 group-hover/info:bg-[#eadcc6]/12">
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

      <div className="space-y-3 p-4 text-sm text-muted-foreground transition-colors duration-300 group-hover/info:text-[#eadcc6]/86">
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
  const previewProducts = products.slice(0, HOMEPAGE_PREVIEW_COUNT);

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
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
            Live on Tradera
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            {t("collection.title")}
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
            A preview of current auctions. Open the full auction page for the latest live listings and bidding details.
          </p>
        </div>
        <Link
          to="/auctions"
          className="cta-press inline-flex h-11 w-fit items-center gap-2 rounded-md bg-primary px-5 font-serif text-base font-semibold text-primary-foreground transition-colors duration-150 hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          View all auctions
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

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
                {t("collection.emptyDescription")}
              </p>
            </div>
            <TraderaButton className="mt-2" />
          </div>
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          <AuctionInfoCard />
        </div>
      )}
    </SectionWrapper>
  );
}
