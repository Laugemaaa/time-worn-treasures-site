import { SectionWrapper } from "@/components/SectionWrapper";

export function PhilosophySection() {
  return (
    <SectionWrapper id="philosophy" className="py-16 md:py-24">
      <div className="mx-auto max-w-[680px] space-y-6 text-center">
        <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Why vintage?
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          A new watch tells you the time. A vintage watch tells you about time — decades of it, compressed into scratches on a case back, a dial that's slowly turned from silver to champagne, a movement that's been wound ten thousand mornings in a row.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          We look for watches that have been worn honestly. Not safe queens preserved behind glass, but daily companions that carry the evidence of real life. That's where the character lives — in the imperfections.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          Each piece in this collection has been chosen because it has something to say. A provenance worth knowing, a design that still holds up, or simply a presence on the wrist that modern watches struggle to replicate.
        </p>
      </div>
    </SectionWrapper>
  );
}
