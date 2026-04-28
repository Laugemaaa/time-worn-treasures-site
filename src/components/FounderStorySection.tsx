import heroWatch1 from "@/assets/hero-watch-1.jpg";

export function FounderStorySection() {
  return (
    <section className="border-b border-border/70 bg-[#f7f3eb]">
      <div className="grid min-h-[720px] lg:grid-cols-[1.05fr_1fr]">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
          <img
            src={heroWatch1}
            alt="A vintage watch with warm patina, representing Grandpa's Heritage"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/15" />
        </div>

        <div className="flex items-center px-6 py-16 md:px-12 lg:px-24">
          <div className="max-w-[560px] space-y-7">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              Grandpa's Heritage
            </p>

            <h2 className="font-serif text-4xl font-medium uppercase leading-[1.15] tracking-[0.12em] text-foreground md:text-5xl">
              Built around watches with a life before us
            </h2>

            <div className="space-y-5 text-sm leading-7 text-muted-foreground md:text-[15px]">
              <p>
                I created Grandpa's Heritage because I have always been drawn to objects that carry
                memory. A vintage watch is never just a way to tell the time. It is something that
                has been worn, repaired, kept, forgotten, found again, and passed from one chapter
                of life into another.
              </p>

              <p>
                The name comes from that feeling: the idea that a watch can hold a piece of
                someone's history. Some pieces are inherited, some are discovered, and some simply
                have the kind of character that modern things rarely get the chance to develop.
              </p>

              <p>
                The watches here are chosen for honesty rather than perfection. We look for vintage
                pieces with visible character, good design, mechanical charm, and the small signs of
                age that make each one feel individual. Scratches, patina, softened edges, and a
                dial that has changed with time are not flaws to hide. They are part of the story.
              </p>

              <p>
                Grandpa's Heritage is for people who want something with presence. Not a watch that
                looks untouched, but one that feels like it has already lived and is ready to be
                worn into its next story.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="rounded-full border border-primary/25 px-4 py-2">Vintage</span>
              <span className="rounded-full border border-primary/25 px-4 py-2">Character</span>
              <span className="rounded-full border border-primary/25 px-4 py-2">Provenance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
