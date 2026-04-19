import { useEffect, useState } from "react";
import { getProducts, type Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/i18n/LanguageProvider";

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
            onClick={fetchProducts}
            className="cta-press inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {t("collection.retry")}
          </button>
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <p className="text-center text-muted-foreground py-16">{t("collection.empty")}</p>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
