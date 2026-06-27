import { PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { TraderaButton } from "@/components/TraderaButton";
import { soldWatches, type SoldWatch } from "@/data/soldWatches";

const formatSoldPrice = (watch: SoldWatch) =>
  new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: watch.currency,
    maximumFractionDigits: 0,
  }).format(watch.soldPrice);

export default function SoldWatches() {
  return (
    <div className="min-h-screen bg-background paper-texture">
      <SEO
        title="Solgte ure | GrandpasHeritage"
        description="Se tidligere solgte vintage ure fra GrandpasHeritage med billeder, salgspriser og links til tidligere Tradera-annoncer."
        canonicalPath="/solgte-ure"
      />
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Arkiv
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Solgte ure
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Et arkiv over tidligere solgte vintage-ure fra GrandpasHeritage med billeder,
              salgspriser og links til de afsluttede Tradera-annoncer.
            </p>
          </div>

          {soldWatches.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {soldWatches.map((watch) => (
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
                    Solgte ure kommer snart
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Tidligere salg kan tilføjes her med billede, salgspris og link til den
                    afsluttede Tradera-annonce.
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
  return (
    <article className="group h-full overflow-hidden rounded-lg border border-border bg-card">
      <Link
        to={`/solgte-ure/${watch.id}`}
        className="block aspect-square overflow-hidden bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={`Se opslag for ${watch.title}`}
      >
        <img
          src={watch.imageUrl}
          alt={watch.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
          loading="lazy"
          decoding="async"
        />
      </Link>
      <div className="space-y-3 p-4">
        <div>
          <h2 className="font-serif text-lg font-semibold leading-tight text-foreground">
            <Link
              to={`/solgte-ure/${watch.id}`}
              className="transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {watch.title}
            </Link>
          </h2>
          {watch.soldDate && (
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Afsluttet {watch.soldDate}
            </p>
          )}
        </div>
        {watch.shortDescription && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {watch.shortDescription}
          </p>
        )}
        <div className="flex items-center justify-between gap-4 border-t border-border/70 pt-3">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {watch.priceLabel ?? "Slutpris"}
          </span>
          <span className="font-serif text-lg font-semibold text-primary">
            {formatSoldPrice(watch)}
          </span>
        </div>
        {watch.numberOfBids && (
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {watch.numberOfBids} bud
          </p>
        )}
        {watch.details && (
          <ul className="space-y-1 border-t border-border/70 pt-3 text-sm leading-relaxed text-muted-foreground">
            {watch.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
        <Link
          to={`/solgte-ure/${watch.id}`}
          className="inline-flex text-sm font-semibold text-primary transition-colors duration-150 hover:text-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Se opslag
        </Link>
        {watch.traderaUrl && (
          <a
            href={watch.traderaUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm font-semibold text-primary transition-colors duration-150 hover:text-navy-hover"
          >
            Se tidligere annonce
          </a>
        )}
      </div>
    </article>
  );
}
