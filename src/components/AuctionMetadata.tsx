import { useEffect, useMemo, useState } from "react";
import { type Product } from "@/data/products";
import { Clock, Eye, Gavel } from "lucide-react";

const SECOND_MS = 1000;
const MINUTE_MS = 60 * SECOND_MS;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;

function padTime(value: number): string {
  return value.toString().padStart(2, "0");
}

function formatDuration(milliseconds: number): string {
  const safeMilliseconds = Math.max(0, milliseconds);
  const days = Math.floor(safeMilliseconds / DAY_MS);
  const hours = Math.floor((safeMilliseconds % DAY_MS) / HOUR_MS);
  const minutes = Math.floor((safeMilliseconds % HOUR_MS) / MINUTE_MS);
  const seconds = Math.floor((safeMilliseconds % MINUTE_MS) / SECOND_MS);

  if (days > 0) return `${days}d ${hours}h ${padTime(minutes)}m ${padTime(seconds)}s`;
  if (hours > 0) return `${hours}h ${padTime(minutes)}m ${padTime(seconds)}s`;
  if (minutes > 0) return `${minutes}m ${padTime(seconds)}s`;
  return `${seconds}s`;
}

function parseISO8601DurationToMilliseconds(duration: string): number | undefined {
  const match = duration.match(/P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return undefined;

  const days = parseInt(match[1] || "0");
  const hours = parseInt(match[2] || "0");
  const minutes = parseInt(match[3] || "0");

  return days * DAY_MS + hours * HOUR_MS + minutes * MINUTE_MS;
}

function formatISO8601Duration(duration: string): string {
  const milliseconds = parseISO8601DurationToMilliseconds(duration);
  return milliseconds == null ? duration : formatDuration(milliseconds);
}

function useNow(intervalMs: number): number {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(Date.now());
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs]);

  return now;
}

type Props = {
  product: Product;
  compact?: boolean;
};

export function AuctionMetadata({ product, compact = false }: Props) {
  const now = useNow(SECOND_MS);
  const auctionEndTime = useMemo(() => {
    if (!product.auctionEndDate) return undefined;

    const time = new Date(product.auctionEndDate).getTime();
    return Number.isFinite(time) ? time : undefined;
  }, [product.auctionEndDate]);
  const liveMilliseconds = auctionEndTime == null ? undefined : Math.max(0, auctionEndTime - now);
  const countdownLabel =
    liveMilliseconds != null
      ? formatDuration(liveMilliseconds)
      : product.timeRemaining
        ? formatISO8601Duration(product.timeRemaining)
        : undefined;
  const hasAnyData =
    product.currentBidPrice ||
    product.startingBidPrice ||
    product.numberOfBids ||
    product.numberOfViewers ||
    countdownLabel;
  if (!hasAnyData) return null;

  const currency = product.currency || "SEK";
  const currentPrice = product.currentBidPrice;
  const startingPrice = product.startingBidPrice;
  const countdownClassName = compact
    ? "text-[hsl(var(--auction-countdown)/0.82)]"
    : "rounded-full border border-[hsl(var(--auction-countdown)/0.32)] bg-[hsl(var(--auction-countdown-soft)/0.24)] px-2.5 py-0.5 text-[hsl(var(--auction-countdown)/0.88)]";

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
      {countdownLabel && (
        <span className={`inline-flex items-center gap-1 ${countdownClassName}`}>
          <Clock className="h-3 w-3" />
          {countdownLabel}
        </span>
      )}
    </div>
  );
}
