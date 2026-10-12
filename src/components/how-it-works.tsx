import { steps } from "@/lib/content";
import { Reveal } from "./reveal";
import { Container, SectionHeading } from "./ui";

export function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      className="border-y border-line bg-accent-50/60 py-12 sm:py-16"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Cara kerja"
            title="Mulai dalam empat langkah sederhana"
            description="Koleva dibuat agar mudah dipahami semua anggota, termasuk yang belum terbiasa dengan aplikasi keuangan."
          />
        </Reveal>

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-accent-300 lg:block"
          />

          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <li className="relative flex gap-4 lg:flex-col lg:gap-5">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent-300 bg-white text-primary-800 shadow-soft">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-800 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-primary-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
