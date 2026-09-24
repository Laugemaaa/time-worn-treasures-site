import { useEffect, useRef, useState } from "react";
import { SectionWrapper } from "@/components/SectionWrapper";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useReveal } from "@/hooks/useReveal";
import "./HeritageStandardSection.css";

const steps = [
  { title: "Research", body: "Model, reference, approximate age and relevant historical details are researched." },
  { title: "Component review", body: "Dial, case, crown, caseback, movement and bracelet or strap are reviewed for consistency and known replacement parts." },
  { title: "Function test", body: "Winding, time setting, date, day and other applicable functions are tested." },
  { title: "Timekeeping", body: "Mechanical watches are checked for running behaviour and accuracy when possible." },
  { title: "Condition inspection", body: "Case, crystal, dial, hands and other visible details are inspected for wear, patina, damage and imperfections." },
  { title: "Documented & listed", body: "The watch is measured, photographed and described with the relevant observations before being offered for sale." },
];

export function HeritageStandardSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const headingReveal = useReveal(0.25);

  useEffect(() => {
    const element = timelineRef.current;
    if (!element || prefersReducedMotion) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const update = () => {
      const rect = element.getBoundingClientRect();
      const start = window.innerHeight * 0.82;
      const end = window.innerHeight * 0.2;
      const value = (start - rect.top) / Math.max(1, rect.height + start - end);
      setProgress(Math.max(0, Math.min(1, value * 1.35)));
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [prefersReducedMotion]);

  return (
    <section id="standard" className="standard-effects sell-watch-hero relative isolate overflow-hidden border-b border-border/70 bg-background py-20 md:py-28 lg:py-36">
      <div className="sell-watch-aurora" aria-hidden="true" />
      <div className="sell-watch-dial sell-watch-dial-large" aria-hidden="true" />
      <div className="sell-watch-dial sell-watch-dial-small" aria-hidden="true" />
      <SectionWrapper as="div" className="relative z-10">
        <div ref={headingReveal.ref} className={`max-w-3xl standard-heading-group ${headingReveal.revealed ? "is-visible" : ""}`}>
          <p className="standard-heading-reveal text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
            The GrandpasHeritage Standard
          </p>
          <h2 className="standard-heading-reveal mt-5 font-serif text-4xl font-medium uppercase leading-[1.08] tracking-[0.08em] text-foreground md:text-5xl lg:text-6xl">
            Every watch deserves a closer look
          </h2>
          <p className="standard-heading-reveal mt-7 max-w-2xl text-sm leading-7 text-muted-foreground md:text-[15px]">
            Before a watch is offered for sale, the details that matter are examined, tested and documented. Vintage watches are not expected to be perfect — but their condition should be understood.
          </p>
        </div>

        <div
          ref={timelineRef}
          className="standard-timeline relative mt-16 lg:mt-24"
          style={{ "--timeline-progress": progress } as React.CSSProperties}
        >
          <div className="standard-timeline-track" aria-hidden="true"><span /></div>
          <ol className="grid gap-0 lg:grid-cols-6">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="standard-step group relative border-l border-primary/20 pb-11 pl-10 last:pb-0 lg:min-h-[310px] lg:border-l-0 lg:px-3 lg:pb-0 xl:px-5"
                style={{
                  opacity: prefersReducedMotion ? 1 : Math.max(0.85, Math.min(1, (progress * 1.45 - index * 0.105) * 2.2)),
                  "--step-index": index,
                } as React.CSSProperties}
              >
                <span className="standard-step-dot" aria-hidden="true" />
                <div className={index % 2 === 1 ? "lg:pt-14" : ""}>
                  <span className="standard-step-number block font-serif text-5xl font-light leading-none text-primary/30 transition-colors duration-500 group-hover:text-primary/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-xs leading-6 text-muted-foreground transition-colors duration-500 group-hover:text-foreground/80">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </SectionWrapper>
    </section>
  );
}
