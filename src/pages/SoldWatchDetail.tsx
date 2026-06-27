import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { soldWatches, type SoldWatch } from "@/data/soldWatches";

const formatSoldPrice = (watch: SoldWatch) =>
  new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: watch.currency,
    maximumFractionDigits: 0,
  }).format(watch.soldPrice);

export default function SoldWatchDetail() {
  const { id } = useParams<{ id: string }>();
  const watch = soldWatches.find((item) => item.id === id);

  if (!watch) {
    return (
      <div className="min-h-screen bg-background paper-texture">
        <Navbar />
        <main id="main-content" className="mx-auto max-w-[900px] px-6 py-16 md:py-24">
          <Link
            to="/solgte-ure"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-150 hover:text-navy-hover"
          >
            <ArrowLeft className="h-4 w-4" />
            Tilbage til solgte ure
          </Link>
          <div className="mt-10 rounded-lg border border-border bg-card px-6 py-12">
            <h1 className="font-serif text-3xl font-semibold text-foreground">
              Opslaget blev ikke fundet
            </h1>
            <p className="mt-3 text-muted-foreground">
              Det solgte ur findes ikke i arkivet.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return <SoldWatchDetailContent watch={watch} />;
}

function SoldWatchDetailContent({ watch }: { watch: SoldWatch }) {
  const images = watch.images?.length ? watch.images : [watch.imageUrl];
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="min-h-screen bg-background paper-texture">
      <SEO
        title={`${watch.title} | Solgte ure`}
        description={watch.shortDescription ?? `Tidligere solgt ur: ${watch.title}.`}
        canonicalPath={`/solgte-ure/${watch.id}`}
      />
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <Link
            to="/solgte-ure"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-150 hover:text-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Tilbage til solgte ure
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-start">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                <img
                  src={activeImage}
                  alt={watch.title}
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6">
                  {images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImage(image)}
                      aria-label={`Vis billede ${index + 1} af ${watch.title}`}
                      aria-current={activeImage === image}
                      className={`aspect-square overflow-hidden rounded-md border bg-secondary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        activeImage === image
                          ? "border-primary"
                          : "border-border hover:border-primary/60"
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <article className="rounded-lg border border-border bg-card p-6 md:p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Solgt ur
              </p>
              <h1 className="font-serif text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                {watch.title}
              </h1>
              {watch.soldDate && (
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Afsluttet {watch.soldDate}
                </p>
              )}

              {watch.shortDescription && (
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {watch.shortDescription}
                </p>
              )}

              <div className="mt-6 flex items-center justify-between gap-4 border-y border-border/70 py-4">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {watch.priceLabel ?? "Slutpris"}
                </span>
                <span className="font-serif text-2xl font-semibold text-primary">
                  {formatSoldPrice(watch)}
                </span>
              </div>

              {watch.numberOfBids && (
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {watch.numberOfBids} bud
                </p>
              )}

              {watch.details && (
                <ul className="mt-6 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {watch.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
