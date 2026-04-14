import { SectionWrapper } from "@/components/SectionWrapper";

export function HeroSection() {
  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div className="space-y-6 reveal-up revealed" style={{ animationDelay: "0ms" }}>
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Every watch tells a story worth hearing
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              A curated collection of vintage timepieces — chosen for character, provenance, and the kind of patina that only decades of real life can produce.
            </p>
            <button
              onClick={scrollToCollection}
              className="cta-press inline-flex h-12 items-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Explore the Collection
            </button>
          </div>

          {/* Hero image */}
          <div className="reveal-up revealed" style={{ animationDelay: "200ms" }}>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://placehold.co/600x600/d4c5a9/1a1a1a?text=Curated+Vintage"
                alt="A curated vintage timepiece"
                className="h-full w-full object-cover"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
