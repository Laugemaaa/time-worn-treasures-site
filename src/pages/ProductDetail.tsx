import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductBySlug, type Product } from "@/data/products";
import { AuctionMetadata } from "@/components/AuctionMetadata";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const [product, setProduct] = useState<Product | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProduct = async () => {
    if (!slug) return;
    setLoading(true);
    setError(false);
    try {
      const data = await getProductBySlug(slug);
      setProduct(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-background paper-texture">
      <Navbar />
      <main id="main-content" className="mx-auto max-w-[1200px] px-6 py-8 md:py-16">
        <Link
          to="/#collection"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors duration-150 hover:text-navy-hover mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("detail.back")}
        </Link>

        {loading && (
          <div className="grid gap-8 md:grid-cols-2">
            <Skeleton className="aspect-square w-full rounded-lg bg-secondary" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4 bg-secondary" />
              <Skeleton className="h-4 w-full bg-secondary" />
              <Skeleton className="h-4 w-full bg-secondary" />
              <Skeleton className="h-4 w-2/3 bg-secondary" />
              <Skeleton className="h-12 w-48 bg-secondary mt-6" />
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-16 space-y-4">
            <p className="text-muted-foreground">{t("detail.errorLoad")}</p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={fetchProduct}
                className="cta-press inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {t("detail.tryAgain")}
              </button>
              <a
                href="https://www.tradera.com/da/profile/items/6841860/grandpasheritage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-navy-hover"
              >
                {t("detail.browseTradera")}
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        )}

        {!loading && !error && !product && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">{t("detail.notFound")}</p>
            <Link to="/" className="text-primary hover:text-navy-hover text-sm mt-4 inline-block">
              {t("detail.return")}
            </Link>
          </div>
        )}

        {!loading && !error && product && (
          <article className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Image */}
            <div className="overflow-hidden rounded-lg bg-secondary">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="h-full w-full object-cover"
                width={600}
                height={600}
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                {product.title}
              </h1>

              <div className="rounded-lg border border-border bg-card p-5 space-y-3">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("detail.auctionDetails")}
                </h2>
                <AuctionMetadata product={product} />
                <p className="text-xs leading-relaxed text-muted-foreground">{t("detail.handoff")}</p>
                <a
                  href={product.traderaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-press inline-flex h-12 items-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {t("detail.viewOnTradera")}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {product.fullDescription && (
                <div className="space-y-4">
                  {product.fullDescription.split("\n\n").map((para, i) => (
                    <p key={i} className="text-base leading-relaxed text-muted-foreground">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {product.historyNote && (
                <blockquote className="border-l-2 border-primary/30 pl-4 py-2">
                  <p className="text-sm italic leading-relaxed text-muted-foreground">
                    {product.historyNote}
                  </p>
                </blockquote>
              )}

            </div>
          </article>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
