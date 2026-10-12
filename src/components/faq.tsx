import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { Reveal } from "./reveal";
import { Container, SectionHeading } from "./ui";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-16">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang sering diajukan"
            description="Belum menemukan jawaban yang Anda cari? Hubungi kami melalui email dan kami akan membantu."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-trigger-${index}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-accent-50/60 sm:px-6"
                    >
                      <span className="font-display text-base font-bold text-primary-900 sm:text-lg">
                        {faq.question}
                      </span>
                      <span
                        className={
                          isOpen
                            ? "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-800 text-white"
                            : "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-primary-800"
                        }
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <Plus className="h-4 w-4" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500 sm:px-6 sm:pb-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
