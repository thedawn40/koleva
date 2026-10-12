import { useCases } from "@/lib/content";
import { Reveal } from "./reveal";
import { Container, SectionHeading } from "./ui";

export function UseCases() {
  return (
    <section
      id="penggunaan"
      className="border-y border-line bg-accent-50/60 py-12 sm:py-16"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Cocok untuk"
            title="Satu aplikasi, banyak kebutuhan"
            description="Koleva fleksibel digunakan untuk berbagai kelompok dengan tujuan keuangan bersama."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => (
            <Reveal key={useCase.title} delay={index * 0.06}>
              <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-lift">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-800 text-accent-200 transition-colors group-hover:bg-primary-700">
                  <useCase.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-primary-900">
                  {useCase.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                  {useCase.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
