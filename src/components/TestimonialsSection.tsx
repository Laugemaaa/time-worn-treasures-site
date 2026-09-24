import { useLocalizedText } from "@/i18n/localizedText";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star, Pause, Play } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TestimonialCard } from "@/components/TestimonialCard";
import { fallbackTestimonials, getTestimonials, type Testimonial } from "@/data/testimonials";
import { useLanguage } from "@/i18n/LanguageProvider";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const TRADERA_URL = "https://www.tradera.com/da/profile/items/6841860/grandpasheritage";

export function TestimonialsSection() {
  const tx = useLocalizedText();
  const { t } = useLanguage();
  const ratingRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [ratingVisible, setRatingVisible] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    let cancelled = false;
    getTestimonials().then((items) => {
      if (!cancelled) setTestimonials(items.slice(0, 12));
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const element = ratingRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRatingVisible(true);
        observer.unobserve(element);
      }
    }, { rootMargin: "-12% 0px", threshold: 0.5 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setSelected(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => { api.off("select", update); api.off("reInit", update); };
  }, [api]);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const move = useCallback((direction: 1 | -1) => {
    setPaused(true);
    if (direction === 1) api?.scrollNext(reducedMotion);
    else api?.scrollPrev(reducedMotion);
  }, [api, reducedMotion]);

  useEffect(() => {
    if (!api || reducedMotion || paused || hovered || !inView || snapCount <= 1) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") api.scrollNext();
    }, 6500);
    return () => window.clearInterval(timer);
  }, [api, paused, hovered, reducedMotion, inView, snapCount]);


  return (
    <section ref={sectionRef} id="reviews" className="relative isolate overflow-hidden bg-sand py-20 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_60%,hsl(var(--primary)/0.08),transparent_65%)]" />
      <SectionWrapper as="div" reveal="fade" className="space-y-10">
        <div className="grid gap-7 border-b border-primary/20 pb-9 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">{tx("Collector feedback")}</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-foreground md:text-5xl">{t("testimonials.title")}</h2>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <div ref={ratingRef} className={cn("testimonial-rating-badge inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-foreground", ratingVisible && "is-visible")}>
              <span className="inline-flex items-center gap-1 text-primary" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="testimonial-star h-4 w-4 fill-current" style={{ animationDelay: `${index * 90}ms` }} />)}
              </span>
              <span>{tx("5/5 på Tradera")}</span>
            </div>
            <div className="flex gap-2" aria-label={tx("Review carousel controls")}>
              <button type="button" onClick={() => move(-1)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-foreground transition-colors hover:border-primary/55 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={tx("Previous reviews")}><ArrowLeft className="h-4 w-4" /></button>
              <button type="button" onClick={() => move(1)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-foreground transition-colors hover:border-primary/55 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label={tx("Next reviews")}><ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "center", duration: reducedMotion ? 0 : 35 }}
          aria-label={tx("Collector reviews")}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setPaused(true)}
          onPointerDown={() => setPaused(true)}
        >
          <CarouselContent className="-ml-5 py-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id ?? `${testimonial.name}-${index}`} className="basis-[90%] pl-5 sm:basis-[60%] lg:basis-[38%]" aria-label={tx("{n} of {total}", { n: index + 1, total: testimonials.length })}>
                <div className={cn(
                  "h-full origin-center transition-[transform,opacity,filter] duration-700 motion-reduce:transition-none [&_.testimonial-card]:rounded-xl [&_.testimonial-card]:border-primary/25 [&_.testimonial-card]:bg-background/35 [&_.testimonial-card]:shadow-[inset_0_1px_0_hsl(var(--primary)/0.12)] [&_.testimonial-card_p]:text-base [&_.testimonial-card_p]:leading-8",
                  selected === index ? "scale-100 opacity-100 [&_.testimonial-card]:border-primary/60 [&_.testimonial-card]:bg-card" : "scale-[0.94] opacity-70 hover:opacity-100 focus-within:opacity-100"
                )}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
            <div className="flex max-w-full flex-wrap justify-center gap-1" aria-label={tx("Choose review")}>
              {Array.from({ length: snapCount }, (_, index) => (
                <button key={index} type="button" aria-label={tx("Show review {n}", { n: index + 1 })} aria-current={selected === index ? "true" : undefined}
                  onClick={() => { setPaused(true); api?.scrollTo(index, reducedMotion); }}
                  className="group flex h-8 min-w-8 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <span className={cn("h-1.5 rounded-full transition-all duration-500 motion-reduce:transition-none", selected === index ? "w-7 bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.4)]" : "w-1.5 bg-primary/30 group-hover:bg-primary/70")} />
                </button>
              ))}
            </div>
            <span className="text-xs tabular-nums tracking-widest text-muted-foreground">{String(selected + 1).padStart(2, "0")} / {String(snapCount).padStart(2, "0")}</span>
            {!reducedMotion && snapCount > 1 && (
              <button type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? tx("Start automatic reviews") : tx("Pause automatic reviews")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
              </button>
            )}
          </div>
        </Carousel>
        <a href={TRADERA_URL} target="_blank" rel="noopener noreferrer" className="editorial-link inline-flex items-center gap-3 border-b border-primary/35 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">{tx("See all feedback on Tradera")}<span aria-hidden="true">→</span>
        </a>
      </SectionWrapper>
    </section>
  );
}
