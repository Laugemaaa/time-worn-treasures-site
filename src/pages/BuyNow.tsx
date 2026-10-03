import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Watch, RefreshCw } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { FixedPriceMetadata } from "@/components/FixedPriceMetadata";
import { getProducts, isFixedPriceProduct, isActiveProduct, type Product } from "@/data/products";
import { useLocalizedText } from "@/i18n/localizedText";
import { useLocalizedContent } from "@/i18n/localizedContent";
import "./BuyNow.css";

export default function BuyNow() {
  const tx = useLocalizedText();
  const content = useLocalizedContent();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    let cancelled = false;
    async function refresh() {
      try {
        const items = await getProducts();
        if (!cancelled) { setProducts(items.filter(p => isFixedPriceProduct(p) && isActiveProduct(p))); setError(false); }
      } catch { if (!cancelled) setError(true); }
      finally { if (!cancelled) setLoading(false); }
    }
    refresh();
    const timer = window.setInterval(refresh, 30000);
    const onVisible = () => { if (document.visibilityState === 'visible') refresh(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => { cancelled = true; clearInterval(timer); document.removeEventListener('visibilitychange', onVisible); };
  }, [retry]);
  return <div className="buy-page min-h-screen bg-background text-foreground">
    <SEO title={`${tx('Buy now')} | GrandpasHeritage`} description={tx('Vintage watches, ready for their next chapter. Discover our fixed-price selection.')} canonicalPath="/buy-now" />
    <Navbar />
    <main id="main-content">
      <section className="buy-intro">
        <p className="buy-eyebrow">GRANDPAS HERITAGE</p>
        <h1>{tx('Buy now')}</h1>
        <p className="buy-description">{tx('Vintage watches at a fixed price. Choose your watch and buy through Tradera.')}</p>
      </section>
      <section id="buy-selection" className="buy-selection" aria-label={tx('Buy now')}>
        {loading ? <div className="buy-grid" aria-label={tx('Loading watches')}>{[0,1,2].map(n=><div key={n} className="buy-skeleton motion-safe:animate-pulse" />)}</div> : error ? <div className="buy-empty" role="alert"><RefreshCw size={28} /><h3>{tx('We could not load the watches')}</h3><p>{tx('Try again, or open Tradera directly.')}</p><button className="buy-button" onClick={()=>{setLoading(true);setRetry(n=>n+1)}}>{tx('Try again')}</button></div> : products.length ? <div className="buy-grid">{products.map((product,index)=><article className="buy-card" key={product.id} style={{animationDelay:`${Math.min(index,5)*80}ms`}}>
          <Link to={`/watch/${product.slug}`} className="buy-card-image" aria-label={tx('View {name}',{name:content(product.title)})}><img src={product.imageUrl} alt={content(product.title)} loading="lazy" /></Link>
          <div className="buy-card-info"><Link to={`/watch/${product.slug}`}><h3>{content(product.title)}</h3></Link><FixedPriceMetadata product={product}/><Link to={`/watch/${product.slug}`} className="buy-text-link">{tx('Discover this watch')}<ArrowUpRight size={16} /></Link></div>
        </article>)}</div> : <div className="buy-empty"><div className="buy-empty-icon"><Watch size={30} strokeWidth={1} /></div><h3>{tx('The next chapter is coming.')}</h3><p>{tx('Our fixed-price selection is being prepared. New watches will appear here as soon as they are available.')}</p><Link className="buy-text-link" to="/#collection">{tx('Explore live auctions')}<ArrowUpRight size={17}/></Link></div>}
        <p className="buy-footnote">{tx('Purchases are completed on Tradera. Shipping and any additional fees are shown on the listing.')}</p>
      </section>
    </main><Footer />
  </div>;
}
