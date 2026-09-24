import { useLocalizedContent } from "@/i18n/localizedContent";
import { useLocalizedText } from "@/i18n/localizedText";
import { Link } from "react-router-dom";
import { type Product } from "@/data/products";
import { AuctionMetadata } from "./AuctionMetadata";
import { useLanguage } from "@/i18n/LanguageProvider";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const content = useLocalizedContent();
  const tx = useLocalizedText();
  const { lang, t } = useLanguage();
  const description = t("collection.productSummary");

  return (
    <Link
      to={`/watch/${product.slug}`}
      className="group block rounded-lg border border-border bg-card overflow-hidden card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={tx("View {name}", {name: content(product.title)})}
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={product.imageUrl}
          alt={content(product.title)}
          className="h-full w-full object-cover card-hover-media"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-serif text-lg font-semibold leading-tight text-foreground line-clamp-2">
          {product.title}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        <AuctionMetadata product={product} compact />
      </div>
    </Link>
  );
}
