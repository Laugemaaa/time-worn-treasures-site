import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLanguage } from "@/i18n/LanguageProvider";

function useScrollCardPresence(threshold = 0.28) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        rootMargin: "-8% 0px -14% 0px",
        threshold,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion, threshold]);

  return { ref, visible };
}

function PhilosophyCard({
  paragraph,
  index,
}: {
  paragraph: string;
  index: number;
}) {
  const { ref, visible } = useScrollCardPresence();

  return (
    <article
      ref={ref}
      className={[
        "group rounded-md border border-primary/18 bg-card/34 p-6 shadow-[0_24px_70px_-54px_rgba(0,0,0,0.85)] transition-[background-color,border-color,box-shadow,filter,opacity,transform] duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:border-[#eadcc6]/45 hover:bg-[#eadcc6]/10 hover:shadow-[0_28px_76px_-48px_rgba(0,0,0,0.95)] lg:p-6 xl:p-7",
        visible
          ? "translate-y-0 scale-100 opacity-100 blur-0"
          : "translate-y-8 scale-[0.97] opacity-0 blur-sm",
      ].join(" ")}
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
    >
      <div className="mb-6 h-px w-full bg-primary/25 transition-colors duration-300 group-hover:bg-[#eadcc6]/55" />
      <span className="mb-5 block font-serif text-2xl text-primary/80 transition-colors duration-300 group-hover:text-[#eadcc6]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="max-w-[18rem] text-sm leading-7 text-muted-foreground transition-colors duration-300 group-hover:text-[#eadcc6]/86 md:text-[15px]">
        {paragraph}
      </p>
    </article>
  );
}

export function PhilosophySection() {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="border-b border-border/70 bg-background text-foreground">
      <SectionWrapper className="py-18 md:py-24 lg:py-28" reveal="fade">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-[480px]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              Grandpa's Heritage
            </p>
            <h2 className="max-w-[420px] font-serif text-4xl font-medium uppercase leading-[1.08] tracking-[0.1em] text-foreground md:text-5xl">
              {t("philosophy.title")}
            </h2>
            <p className="mt-7 max-w-[360px] text-sm leading-7 text-muted-foreground md:text-[15px]">
              {t("philosophy.intro")}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:gap-5 xl:gap-6">
            {[t("philosophy.p1"), t("philosophy.p2"), t("philosophy.p3")].map((paragraph, index) => (
              <PhilosophyCard
                key={paragraph}
                paragraph={paragraph}
                index={index}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
