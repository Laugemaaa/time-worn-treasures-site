import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductBySlug, type Product } from "@/data/products";
import { AuctionMetadata } from "@/components/AuctionMetadata";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, ChevronLeft, ChevronRight, Expand, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

const LIVE_PRODUCT_REFRESH_MS = 30_000;

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const [product, setProduct] = useState<Product | undefined>();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProduct = async (showLoading = false) => {
    if (!slug) return;
    if (showLoading) {
      setLoading(true);
    }
    setError(false);
    try {
      const data = await getProductBySlug(slug);
      setProduct(data);
      setSelectedImageIndex((currentIndex) => {
        if (!data) return 0;

        const imageCount = data.images?.length || 1;
        return currentIndex >= imageCount ? 0 : currentIndex;
      });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct(true);
    window.scrollTo(0, 0);

    const intervalId = window.setInterval(() => {
      fetchProduct();
    }, LIVE_PRODUCT_REFRESH_MS);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchProduct();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [slug]);

  const galleryImages = product?.images?.length ? product.images : product ? [product.imageUrl] : [];
  const selectedImage = galleryImages[selectedImageIndex] || product?.imageUrl || "";

  const showPreviousImage = () => {
    if (galleryImages.length < 2) return;
    setSelectedImageIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1));
  };

  const showNextImage = () => {
    if (galleryImages.length < 2) return;
    setSelectedImageIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1));
  };

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
                onClick={() => fetchProduct(true)}
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
            <div className="space-y-4">
              <div className="group relative overflow-hidden rounded-lg border border-border/70 bg-secondary shadow-[0_18px_50px_-24px_rgba(44,33,24,0.45)]">
                <img
                  src={selectedImage || product.imageUrl}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.015]"
                  width={600}
                  height={600}
                />

                {galleryImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white backdrop-blur-sm transition-all duration-150 hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={`Show previous image for ${product.title}`}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNextImage}
                      className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white backdrop-blur-sm transition-all duration-150 hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={`Show next image for ${product.title}`}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/55 via-black/10 to-transparent px-4 pb-4 pt-10">
                  <span className="rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {selectedImageIndex + 1} / {galleryImages.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-all duration-150 hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label={`Open larger image view for ${product.title}`}
                  >
                    <Expand className="h-3.5 w-3.5" />
                    View larger
                  </button>
                </div>
              </div>

              {galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
                  {galleryImages.map((image, index) => {
                    const isActive = index === selectedImageIndex;

                    return (
                      <button
                        key={`${product.id}-image-${index}`}
                        type="button"
                        onClick={() => setSelectedImageIndex(index)}
                        className={`overflow-hidden rounded-md border bg-secondary transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                          isActive
                            ? "border-primary shadow-[0_10px_24px_-16px_rgba(27,58,92,0.65)]"
                            : "border-border hover:border-primary/50"
                        }`}
                        aria-label={`Show image ${index + 1} for ${product.title}`}
                      >
                        <img
                          src={image}
                          alt=""
                          aria-hidden="true"
                          className="aspect-square h-full w-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
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

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl border-border/70 bg-card p-3 sm:p-4">
          <DialogTitle className="sr-only">
            {product ? `${product.title} image gallery` : "Image gallery"}
          </DialogTitle>

          {product && (
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg bg-secondary">
                <img
                  src={selectedImage || product.imageUrl}
                  alt={product.title}
                  className="max-h-[78vh] w-full object-contain"
                />

                {galleryImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-sm transition-all duration-150 hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={`Show previous image for ${product.title}`}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNextImage}
                      className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-sm transition-all duration-150 hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={`Show next image for ${product.title}`}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {galleryImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {galleryImages.map((image, index) => {
                    const isActive = index === selectedImageIndex;

                    return (
                      <button
                        key={`${product.id}-lightbox-image-${index}`}
                        type="button"
                        onClick={() => setSelectedImageIndex(index)}
                        className={`shrink-0 overflow-hidden rounded-md border bg-secondary transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                          isActive ? "border-primary" : "border-border hover:border-primary/50"
                        }`}
                        aria-label={`Show image ${index + 1} for ${product.title}`}
                      >
                        <img
                          src={image}
                          alt=""
                          aria-hidden="true"
                          className="h-20 w-20 object-cover"
                          loading="lazy"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDetail;
