import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageProvider";
import traderaIcon from "@/assets/tradera-icon.png";

const TRADERA_URL = "https://www.tradera.com";

type Props = {
  className?: string;
  size?: "sm" | "md";
};

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
      <img
        src={traderaIcon}
        alt=""
        aria-hidden="true"
        className="h-4 w-4 shrink-0"
      />
      <span className="text-sm">{t("nav.tradera")}</span>
      <ExternalLink
        aria-hidden
        className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
      />
    </a>
  );
}
