"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function FaqsSection({ content }) {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <div className="mb-6 space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {content.heading}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {content.subheading}
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {content.items.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-sm text-left text-foreground md:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground md:text-sm">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
