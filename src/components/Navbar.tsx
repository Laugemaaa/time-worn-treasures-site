import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { TraderaButton } from "@/components/TraderaButton";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { key: "nav.home" as const, to: "/" },
    { key: "nav.collection" as const, to: "/#collection" },
    { key: "nav.about" as const, to: "/#philosophy" },
  ];

  const handleNavClick = (to: string) => {
    setOpen(false);
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        {t("skip.toContent")}
      </a>
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <Link
            to="/"
            className="font-serif text-xl font-semibold tracking-tight text-foreground"
          >
            Vintage Watches
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors duration-150",
                  "hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-1 py-0.5",
                )}
              >
                {t(link.key)}
              </Link>
            ))}
            <TraderaButton size="sm" />
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={t("nav.openMenu")}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile drawer */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="bg-background w-72">
            <SheetTitle className="sr-only">{t("nav.menu")}</SheetTitle>
            <div className="flex justify-end p-4">
              <button
                onClick={() => setOpen(false)}
                className="h-11 w-11 inline-flex items-center justify-center rounded-md text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={t("nav.closeMenu")}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 px-6 pt-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="text-lg font-medium text-foreground py-2 transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="pt-2">
                <TraderaButton />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
