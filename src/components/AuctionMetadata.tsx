import { type Product } from "@/data/products";
import { Clock, Eye, Gavel } from "lucide-react";

function parseISO8601Duration(duration: string): string {
  const match = duration.match(/P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return duration;
  const days = parseInt(match[1] || "0");
  const hours = parseInt(match[2] || "0");
  const minutes = parseInt(match[3] || "0");
  const totalHours = days * 24 + hours;

  if (totalHours > 24) return `${days}d ${hours}h`;
  if (totalHours > 0) return `${totalHours}h ${minutes}m`;
  return `${minutes}m`;
}

function isUrgent(duration: string): boolean {
  const match = duration.match(/P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return false;
  const days = parseInt(match[1] || "0");
  const hours = parseInt(match[2] || "0");
  return days === 0 && hours < 1;
}

type Props = {
  product: Product;
  compact?: boolean;
};

export function AuctionMetadata({ product, compact = false }: Props) {
  const hasAnyData = product.currentBidPrice || product.numberOfBids || product.numberOfViewers || product.timeRemaining;
  if (!hasAnyData) return null;

  const urgent = product.timeRemaining ? isUrgent(product.timeRemaining) : false;

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground ${compact ? "text-xs" : "text-sm"}`}>
      {product.currentBidPrice != null && (
        <span className="font-semibold text-foreground">
          {product.currentBidPrice.toLocaleString("sv-SE")} {product.currency || "SEK"}
        </span>
      )}
      {product.numberOfBids != null && (
        <span className="inline-flex items-center gap-1">
          <Gavel className="h-3 w-3" />
          {product.numberOfBids} bids
        </span>
      )}
      {product.numberOfViewers != null && (
        <span className="inline-flex items-center gap-1">
          <Eye className="h-3 w-3" />
          {product.numberOfViewers}
        </span>
      )}
      {product.timeRemaining && (
        <span className={`inline-flex items-center gap-1 ${urgent ? "text-destructive font-medium" : ""}`}>
          <Clock className="h-3 w-3" />
          {parseISO8601Duration(product.timeRemaining)}
        </span>
      )}
    </div>
  );
}
