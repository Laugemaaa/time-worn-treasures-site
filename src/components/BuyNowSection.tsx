import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Film } from "lucide-react";
import { getProducts, isActiveProduct, isFixedPriceProduct, type Product } from "@/data/products";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useLocalizedContent } from "@/i18n/localizedContent";
import { FixedPriceMetadata } from "./FixedPriceMetadata";
import { SectionWrapper } from "./SectionWrapper";
import seikoVideo from "@/assets/seiko-serviced.mp4";

const videos: Record<string, string> = { "755495019": seikoVideo };
const copy = {
  en: { label: "A different way to find your watch", title: "Buy now", body: "Vintage watches, without the auction. These watches are often serviced and checked before sale. Discover the details and service information in each listing, and choose your next watch at a fixed price.", cta: "Explore Buy now", latest: "New to the collection", photo: "A closer look", video: "In motion", missing: "Video coming soon", empty: "New watches will appear here when available.", error: "The latest watches could not be loaded.", loading: "Finding the latest watches…", view: "Discover this watch" },
  da: { label: "En anden vej til dit næste ur", title: "Køb nu", body: "Vintageure, uden auktionen. Disse ure er ofte serviceret og tjekket igennem inden salg. Se detaljer og oplysninger om service i den enkelte annonce, og find dit næste ur til en fast pris.", cta: "Se alle Køb nu-ure", latest: "Nyt i samlingen", photo: "Helt tæt på", video: "I bevægelse", missing: "Video på vej", empty: "Nye ure vises her, når de er tilgængelige.", error: "De nyeste ure kunne ikke hentes.", loading: "Henter de nyeste ure…", view: "Se nærmere på uret" },
  sv: { label: "En annan väg till din nästa klocka", title: "Köp nu", body: "Vintageklockor, utan auktion. Dessa klockor är ofta servade och kontrollerade före försäljning. Läs detaljer och serviceinformation i varje annons och välj din nästa klocka till fast pris.", cta: "Se alla Köp nu-klockor", latest: "Nytt i samlingen", photo: "På nära håll", video: "I rörelse", missing: "Video kommer snart", empty: "Nya klockor visas här när de är tillgängliga.", error: "De senaste klockorna kunde inte hämtas.", loading: "Hämtar de senaste klockorna…", view: "Upptäck klockan" },
  no: { label: "En annen vei til din neste klokke", title: "Kjøp nå", body: "Vintageklokker, uten auksjonen. Disse klokkene er ofte overhalt og kontrollert før salg. Se detaljer og serviceinformasjon i hver annonse, og finn din neste klokke til fast pris.", cta: "Se alle Kjøp nå-klokker", latest: "Nytt i samlingen", photo: "På nært hold", video: "I bevegelse", missing: "Video kommer snart", empty: "Nye klokker vises her når de er tilgjengelige.", error: "De nyeste klokkene kunne ikke hentes.", loading: "Henter de nyeste klokkene…", view: "Se nærmere på klokken" },
};

export function BuyNowSection() {
  const { lang } = useLanguage();
  const text = copy[lang];
  const localize = useLocalizedContent();
  const [product, setProduct] = useState<Product>();
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    let cancelled = false;
    async function refresh() {
      try {
        const items = await getProducts();
        if (!cancelled) { setProduct(items.find(p => isFixedPriceProduct(p) && isActiveProduct(p))); setStatus("ready"); }
      } catch { if (!cancelled) setStatus("error"); }
    }
    void refresh();
    const timer = window.setInterval(() => { if (!document.hidden) void refresh(); }, 30000);
    return () => { cancelled = true; window.clearInterval(timer); };
  }, []);
  return <div className="buy-now-editorial border-y border-primary/15">
    <SectionWrapper id="buy-now-preview" className="py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
        <div className="max-w-md">
          <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-primary">{text.label}</p>
          <h2 className="mb-7 font-serif text-5xl uppercase tracking-wide md:text-6xl">{text.title}</h2>
          <p className="text-base leading-8 text-muted-foreground">{text.body}</p>
          <Link to="/buy-now" className="mt-8 inline-flex min-h-11 items-center gap-4 rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">{text.cta}<ArrowUpRight size={17}/></Link>
        </div>
        <div className="min-w-0">
          <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-primary">{text.latest}</p>
          {product ? <article className="overflow-hidden rounded-2xl border border-primary/25 bg-[#211a14] shadow-[0_24px_65px_-28px_rgba(0,0,0,0.7)]">
            <div className="grid grid-cols-2 gap-px bg-primary/20">
              <Link to={`/watch/${product.slug}`} className="group relative block overflow-hidden bg-background" aria-label={text.view}>
                <img className="aspect-[9/16] w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]" src={product.imageUrl} alt={localize(product.title)} loading="lazy"/>
                <span className="absolute bottom-3 left-3 bg-background/80 px-2 py-1 text-[9px] uppercase tracking-widest">{text.photo}</span>
              </Link>
              <div className="overflow-hidden bg-background">
                {videos[product.id] ? <video key={product.id} className="pointer-events-none aspect-[9/16] w-full object-cover" src={videos[product.id]} poster={product.imageUrl} autoPlay muted loop playsInline controls={false} disablePictureInPicture disableRemotePlayback preload="auto" tabIndex={-1} aria-label={`${text.video}: ${localize(product.title)}`} /> : <div className="flex aspect-[9/16] flex-col items-center justify-center gap-4 p-4 text-center text-sm text-muted-foreground"><Film aria-hidden size={24}/>{text.missing}</div>}
              </div>
            </div>
            <div className="space-y-5 p-5 sm:p-7">
              <h3 className="font-serif text-xl leading-snug text-[#eadcc6] sm:text-2xl"><Link to={`/watch/${product.slug}`} className="hover:text-primary">{localize(product.title)}</Link></h3>
              <FixedPriceMetadata product={product} />
              <Link to={`/watch/${product.slug}`} className="flex min-h-12 items-center justify-center gap-3 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">{text.view}<ArrowUpRight size={17}/></Link>
            </div>
          </article> : <div className="flex min-h-64 items-center justify-center border border-primary/20 p-8 text-center text-muted-foreground" role="status">{status === "loading" ? text.loading : status === "error" ? text.error : text.empty}</div>}
        </div>
      </div>
    </SectionWrapper>
  </div>;
}
