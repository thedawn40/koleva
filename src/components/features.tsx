import { ArrowRight } from "lucide-react";
import { features } from "@/lib/content";
import { Reveal } from "./reveal";
import { Container, SectionHeading } from "./ui";

export function Features() {
  return (
    <section id="fitur" className="py-12 sm:py-16">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Fitur utama"
            title="Semua yang dibutuhkan untuk mengelola dana bersama"
            description="Dari mencatat kontribusi hingga menyetujui pencairan, Koleva menyusun alur keuangan kelompok agar tetap rapi dan dapat dipercaya."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <article className="group h-full rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-lift">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-primary-700 transition-colors group-hover:bg-primary-800 group-hover:text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-primary-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={features.length * 0.05}>
            <article className="flex h-full flex-col justify-between rounded-3xl bg-primary-800 p-6 text-white shadow-soft">
              <div>
                <h3 className="font-display text-lg font-bold">
                  Siap mengelola dana bersama?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-accent-200/80">
                  Daftar sekarang untuk mendapat kabar saat akses Koleva dibuka
                  untuk umum.
                </p>
              </div>
              <a
                href="#daftar-tunggu"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-200 transition-colors hover:text-white"
              >
                Gabung daftar tunggu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
