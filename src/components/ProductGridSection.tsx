import { useEffect, useState } from "react";
import { getProducts, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { TraderaButton } from "@/components/TraderaButton";
import { useLanguage } from "@/i18n/LanguageProvider";
import { PackageOpen } from "lucide-react";

export function ProductGridSection() {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
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
    fetchProducts();
  }, []);

  return (
    <section id="collection" className="bg-white px-5 py-8 md:px-8 md:py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="font-serif text-4xl font-semibold leading-none text-black md:text-5xl">
          New In
        </h2>
        <div className="hidden items-center gap-2 md:flex">
          {["Shop Watches", "Shop Stories", "Shop Tradera"].map((label) => (
            <span
              key={label}
              className="rounded-full border border-black/12 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/48"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {loading && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <Skeleton className="aspect-[3/4] w-full bg-[#f3f1ec]" />
              <div className="space-y-2 pt-3">
                <Skeleton className="h-4 w-3/4 bg-[#e8e7e3]" />
                <Skeleton className="h-3 w-full bg-[#e8e7e3]" />
                <Skeleton className="h-3 w-1/2 bg-[#e8e7e3]" />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="space-y-4 border border-black/10 bg-[#f7f6f2] px-6 py-12 text-center">
          <p className="text-sm text-black/58">{t("collection.error")}</p>
          <button
            onClick={fetchProducts}
            className="cta-press inline-flex h-10 items-center rounded-full bg-black px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-150 hover:bg-[#242424] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            {t("collection.retry")}
          </button>
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="border border-black/10 bg-[#f7f6f2] px-6 py-14 text-center md:px-10">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black/45">
              <PackageOpen className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-semibold text-black">
                {t("collection.empty")}
              </h3>
              <p className="text-sm leading-relaxed text-black/58">
                {t("detail.handoff")}
              </p>
            </div>
            <TraderaButton className="mt-2" />
          </div>
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
