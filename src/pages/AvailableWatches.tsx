import { useEffect, useState } from "react";
import { ExternalLink, PackageOpen } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { SEO } from "@/components/SEO";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { getProducts, type Product } from "@/data/products";

const LIVE_FEED_REFRESH_MS = 30_000;
const TRADERA_URL = "https://www.tradera.com/da/profile/items/6841860/grandpasheritage";

export default function AvailableWatches() {
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
    <div className="min-h-screen bg-background paper-texture">
      <SEO
        title="Current auctions | GrandpasHeritage"
        description="Active Tradera auctions from GrandpasHeritage. Vintage watches listed with photos, condition notes, and live bidding details."
        canonicalPath="/auctions"
      />
      <Navbar />

      <main id="main-content">
        <section className="border-b border-border/80 bg-[linear-gradient(180deg,hsl(var(--surface-espresso))_0%,hsl(var(--background))_100%)]">
          <SectionWrapper className="py-16 md:py-24">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.34em] text-primary">
                  Live on Tradera
                </p>
                <h1 className="font-serif text-5xl font-semibold leading-[0.98] text-foreground md:text-7xl">
                  Current auctions
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  A clean overview of the vintage watches currently listed by GrandpasHeritage.
                  Each piece opens with more photos and details before bidding continues on Tradera.
                </p>
              </div>

              <a
                href={TRADERA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-press inline-flex h-11 w-fit items-center gap-2 rounded-md bg-primary px-5 font-serif text-base font-semibold text-primary-foreground transition-colors duration-150 hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Open Tradera
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </SectionWrapper>
        </section>

        <SectionWrapper className="py-14 md:py-20">
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-border">
                  <Skeleton className="aspect-square w-full bg-secondary" />
                  <div className="space-y-3 p-4">
                    <Skeleton className="h-5 w-3/4 bg-secondary" />
                    <Skeleton className="h-4 w-full bg-secondary" />
                    <Skeleton className="h-3 w-1/2 bg-secondary" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <EmptyPanel
              title="We could not load the auctions"
              text="Try again, or open Tradera directly."
              action={
                <button
                  onClick={() => fetchProducts(true)}
                  className="cta-press inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Try again
                </button>
              }
            />
          ) : products.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <EmptyPanel
              title="No live auctions right now"
              text="New auctions will appear here automatically when they go live."
            />
          )}
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}

function EmptyPanel({
  title,
  text,
  action,
}: {
  title: string;
  text: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border bg-card px-6 py-14 text-center shadow-[0_18px_55px_-42px_rgba(0,0,0,0.9)] md:px-10">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-muted-foreground">
          <PackageOpen className="h-6 w-6" />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold text-foreground">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
        </div>
        {action ? <div className="mt-1">{action}</div> : null}
      </div>
    </div>
  );
}
