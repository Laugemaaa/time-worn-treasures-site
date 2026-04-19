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

function durationFromEndDate(endDateString?: string): string | undefined {
  if (!endDateString) return undefined;

  const endDate = new Date(endDateString);
  const diff = endDate.getTime() - Date.now();
  if (!Number.isFinite(diff) || diff <= 0) return undefined;

  const totalMinutes = Math.floor(diff / 60000);
  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const minutes = totalMinutes % 60;

  let duration = "P";
  if (days > 0) duration += `${days}D`;
  if (hours > 0 || minutes > 0) {
    duration += "T";
    if (hours > 0) duration += `${hours}H`;
    if (minutes > 0) duration += `${minutes}M`;
  }

  return duration === "P" ? "PT0M" : duration;
}

type Props = {
  product: Product;
  compact?: boolean;
};

export function AuctionMetadata({ product, compact = false }: Props) {
  const liveDuration = durationFromEndDate(product.auctionEndDate) ?? product.timeRemaining;
  const hasAnyData =
    product.currentBidPrice || product.startingBidPrice || product.numberOfBids || product.numberOfViewers || liveDuration;
  if (!hasAnyData) return null;

  const urgent = liveDuration ? isUrgent(liveDuration) : false;
  const currency = product.currency || "SEK";
  const currentPrice = product.currentBidPrice;
  const startingPrice = product.startingBidPrice;

  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground ${compact ? "text-xs" : "text-sm"}`}>
      {currentPrice != null && compact && (
        <span className="font-semibold text-foreground">
          {currentPrice.toLocaleString("sv-SE")} {currency}
        </span>
      )}
      {currentPrice != null && !compact && (
        <span className="inline-flex items-center gap-1 font-semibold text-foreground">
          Live: {currentPrice.toLocaleString("sv-SE")} {currency}
        </span>
      )}
      {startingPrice != null && !compact && (
        <span className="inline-flex items-center gap-1">
          Start: {startingPrice.toLocaleString("sv-SE")} {currency}
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
      {liveDuration && (
        <span className={`inline-flex items-center gap-1 ${urgent ? "text-destructive font-medium" : ""}`}>
          <Clock className="h-3 w-3" />
          {parseISO8601Duration(liveDuration)}
        </span>
      )}
    </div>
  );
}
