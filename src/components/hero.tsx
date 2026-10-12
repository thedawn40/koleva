import { ArrowRight, Sparkles } from "lucide-react";
import { DashboardMockup } from "./dashboard-mockup";
import { Reveal } from "./reveal";
import { Container, LinkButton } from "./ui";

const highlights = ["Keluarga", "Liburan bersama", "Komunitas", "Kelompok usaha"];

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden pt-10 pb-12 sm:pt-14 sm:pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-14rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent-100/70 blur-3xl" />
        <div className="absolute right-[-8rem] top-40 h-80 w-80 rounded-full bg-accent-200/50 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.7fr] lg:gap-10">
          <div className="max-w-xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-primary-700 shadow-soft">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Sedang dikembangkan · Buka akses bertahap
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-primary-900 sm:text-5xl lg:text-[3.5rem]">
                Uang Bersama,{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Tetap Terkendali.</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1.5 z-0 h-3 rounded-full bg-accent-200 sm:bottom-2 sm:h-4"
                  />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-ink-500 sm:text-lg">
                Koleva membantu keluarga, teman, komunitas, dan kelompok usaha
                mengelola tabungan serta dana bersama dalam satu tempat. Setiap
                kontribusi tercatat, setiap transaksi terlihat, dan setiap
                pencairan melalui persetujuan anggota.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <LinkButton href="#daftar-tunggu" size="lg">
                  Gabung Daftar Tunggu
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </LinkButton>
                <LinkButton
                  href="#cara-kerja"
                  variant="secondary"
                  size="lg"
                >
                  Lihat Cara Kerja
                </LinkButton>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={28}>
            <DashboardMockup />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
