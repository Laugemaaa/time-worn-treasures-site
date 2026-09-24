import { useLocalizedText } from "@/i18n/localizedText";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { homepageFaqs } from "@/data/homepageFaqs";

export function FAQSection() {
  const tx = useLocalizedText();
  return (
    <section id="faq" className="border-t border-border/70 bg-background py-20 md:py-28 lg:py-32">
      <SectionWrapper as="div" reveal="up" className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">{tx("Frequently asked")}</p>
          <h2 className="mt-5 font-serif text-4xl font-medium uppercase leading-[1.1] tracking-[0.08em] text-foreground md:text-5xl">{tx("A few things worth knowing")}</h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">{tx("Clear expectations are part of buying vintage. These are the questions collectors ask most often.")}</p>
        </div>
        <Accordion type="single" collapsible className="border-t border-primary/25">
          {homepageFaqs.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`} className="border-primary/20">
              <AccordionTrigger className="gap-6 py-6 text-left font-serif text-xl font-medium text-foreground hover:no-underline md:text-2xl [&>svg]:text-primary">
                <span className="flex gap-5"><span className="pt-1 text-[10px] font-semibold tracking-[0.18em] text-primary">{String(index + 1).padStart(2, "0")}</span>{tx(item.question)}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-7 pl-10 pr-10 text-sm leading-7 text-muted-foreground md:max-w-2xl">
                {tx(item.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionWrapper>
    </section>
  );
}
