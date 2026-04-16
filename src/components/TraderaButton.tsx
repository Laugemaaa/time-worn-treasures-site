import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageProvider";

const TRADERA_URL = "https://www.tradera.com";

type Props = {
  className?: string;
  size?: "sm" | "md";
};

/**
 * Square yellow Tradera CTA.
 * - Tradera logo slot on the LEFT (drop the official SVG into /src/assets/tradera-logo.svg)
 * - External-link icon appears on the RIGHT, only on hover/focus
 */
export function TraderaButton({ className, size = "md" }: Props) {
  const { t } = useLanguage();
  const dim = size === "sm" ? "h-9" : "h-10";
  const padding = size === "sm" ? "px-3" : "px-4";

  return (
    <a
      href={TRADERA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t("nav.tradera")} (opens in new tab)`}
      className={cn(
        "group relative inline-flex items-center gap-2 rounded-none bg-tradera text-tradera-foreground font-semibold tracking-tight",
        "transition-colors duration-150 hover:bg-tradera-hover",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tradera focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "cta-press",
        dim,
        padding,
        className,
      )}
    >
      {/* Logo slot — replace with official SVG once uploaded */}
      <span
        aria-hidden
        className="flex h-6 w-6 items-center justify-center font-serif text-base font-bold leading-none"
      >
        T
      </span>
      <span className="text-sm">{t("nav.tradera")}</span>
      <ExternalLink
        aria-hidden
        className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
      />
    </a>
  );
}
