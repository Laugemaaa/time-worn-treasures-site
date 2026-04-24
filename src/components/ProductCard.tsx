import { Link } from "react-router-dom";
import { type Product } from "@/data/products";
import { AuctionMetadata } from "./AuctionMetadata";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/watch/${product.slug}`}
      className="group block bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      aria-label={`View ${product.title}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f3f1ec]">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover card-hover-media"
          loading="lazy"
        />
        <span className="absolute left-2 top-2 bg-[#fef880] px-1.5 py-0.5 text-[10px] font-semibold uppercase leading-none text-black">
          Live
        </span>
      </div>

      <div className="pt-3">
        <h3 className="text-sm font-semibold leading-snug text-black line-clamp-2">
          {product.title}
        </h3>

        {product.shortDescription && (
          <p className="mt-1 text-xs leading-relaxed text-black/55 line-clamp-2">
            {product.shortDescription}
          </p>
        )}

        <div className="mt-2">
        <AuctionMetadata product={product} compact />
        </div>
      </div>
    </Link>
  );
}
