import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-espresso text-primary-foreground">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-3">Vintage Watches</h3>
            <p className="text-sm leading-relaxed opacity-70">
              Curated vintage timepieces, each with a story worth telling. We believe every scratch, every patina mark, every worn edge is part of what makes a watch worth owning.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Navigate</h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link to="/" className="text-sm opacity-70 transition-opacity duration-150 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground rounded-sm w-fit">
                Home
              </Link>
              <Link to="/#collection" className="text-sm opacity-70 transition-opacity duration-150 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground rounded-sm w-fit">
                Collection
              </Link>
              <Link to="/#philosophy" className="text-sm opacity-70 transition-opacity duration-150 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground rounded-sm w-fit">
                About
              </Link>
              <a
                href="https://www.tradera.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm opacity-70 transition-opacity duration-150 hover:opacity-100 w-fit"
              >
                Tradera
                <ExternalLink className="h-3 w-3" />
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-50">Trust</h4>
            <p className="text-sm opacity-70 leading-relaxed">
              Curated vintage watches since 2024. Every piece is authenticated and described honestly — wear, patina, and all.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6">
          <p className="text-xs opacity-40 text-center">
            © {new Date().getFullYear()} Vintage Watches. All auctions hosted on Tradera.
          </p>
        </div>
      </div>
    </footer>
  );
}
