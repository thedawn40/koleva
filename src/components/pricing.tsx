import { Check, Info } from "lucide-react";
import { plans } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { Container, LinkButton, SectionHeading } from "./ui";

export function Pricing() {
  return (
    <section
      id="harga"
      className="border-y border-line bg-accent-50/60 py-12 sm:py-16"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Harga & paket"
            title="Paket yang sesuai ukuran kelompok Anda"
            description="Mulai gratis, lalu pilih paket yang berkembang bersama kebutuhan kelompok. Semua paket memiliki catatan transaksi dan persetujuan mayoritas."
          />
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.07}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-7 sm:p-8",
                  plan.highlighted
                    ? "overflow-hidden border-transparent bg-primary-800 text-white shadow-lift"
                    : "border-line bg-white shadow-soft",
                )}
              >
                {plan.badge ? (
                  <span className="absolute right-6 top-6 rounded-full bg-accent-200 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-primary-800">
                    {plan.badge}
                  </span>
                ) : null}

                <h3
                  className={cn(
                    "font-display text-lg font-bold",
                    plan.highlighted ? "text-white" : "text-primary-900",
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    plan.highlighted ? "text-accent-200/80" : "text-ink-500",
                  )}
                >
                  {plan.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      "font-display text-4xl font-extrabold tracking-tight",
                      plan.highlighted ? "text-white" : "text-primary-900",
                    )}
                  >
                    {plan.price}
                  </span>
                  {plan.period !== "selama masa akses awal" ? (
                    <span
                      className={cn(
                        "text-sm font-medium",
                        plan.highlighted ? "text-accent-200/80" : "text-ink-400",
                      )}
                    >
                      {plan.period}
                    </span>
                  ) : null}
                </div>

                <ul className="mt-6 flex-1 space-y-3.5 border-t pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          plan.highlighted
                            ? "bg-accent-200 text-primary-800"
                            : "bg-accent-100 text-primary-700",
                        )}
                      >
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </span>
                      <span
                        className={
                          plan.highlighted ? "text-accent-100" : "text-ink-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <LinkButton
                  href="#daftar-tunggu"
                  size="lg"
                  variant={plan.highlighted ? "secondary" : "primary"}
                  className="mt-7 w-full"
                >
                  {plan.cta}
                </LinkButton>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 flex max-w-2xl items-start gap-2.5 text-center text-sm leading-relaxed text-ink-400">
            <Info
              className="mt-0.5 h-4 w-4 shrink-0 text-primary-500"
              aria-hidden="true"
            />
            <span className="text-left">
              Paket dan harga di atas masih berupa rencana dan dapat berubah
              sebelum Koleva diluncurkan. Saat ini kami membuka daftar tunggu,
              bukan pendaftaran berbayar.
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}