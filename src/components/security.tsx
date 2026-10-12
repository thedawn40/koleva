import { Check, Clock3, Lock, ScrollText } from "lucide-react";
import { securityPoints } from "@/lib/content";
import { Reveal } from "./reveal";
import { Container, SectionHeading } from "./ui";

const ledger = [
  {
    label: "Kontribusi · Rani",
    amount: "+Rp50.000",
    status: "Disetujui" as const,
  },
  {
    label: "Perlengkapan kegiatan",
    amount: "-Rp32.000",
    status: "Disetujui" as const,
  },
  {
    label: "Sharing biaya transportasi",
    amount: "-Rp18.000",
    status: "Disetujui" as const,
  },
  {
    label: "Pencairan · penginapan",
    amount: "-Rp42.000",
    status: "Menunggu" as const,
  },
];

export function Security() {
  return (
    <section id="keamanan" className="py-12 sm:py-16">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Keamanan & transparansi"
                title="Uang bersama yang bisa dilihat siapa saja di dalamnya"
                description="Transparansi adalah dasar kepercayaan. Koleva menampilkan catatan transaksi, hak akses anggota, dan status persetujuan secara jelas."
              />
            </Reveal>

            <ul className="mt-10 space-y-6">
              {securityPoints.map((point, index) => (
                <Reveal key={point.title} delay={index * 0.07}>
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-100 text-primary-700">
                      <point.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-primary-900">
                        {point.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                        {point.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1} y={26}>
            <div className="rounded-4xl border border-line bg-white p-5 shadow-lift sm:p-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-900">
                  <ScrollText className="h-4 w-4" aria-hidden="true" />
                  Catatan transaksi kelompok
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-2.5 py-1 text-[0.68rem] font-semibold text-primary-700">
                  <Lock className="h-3 w-3" aria-hidden="true" />
                  Hanya anggota
                </span>
              </div>

              <ul className="mt-5 divide-y divide-line">
                {ledger.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-primary-900">
                        {row.label}
                      </p>
                      <p className="text-xs text-ink-400">Pembaruan langsung</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <span
                        className={
                          row.amount.startsWith("+")
                            ? "text-sm font-bold text-primary-700"
                            : "text-sm font-bold text-ink-700"
                        }
                      >
                        {row.amount}
                      </span>
                      <span
                        className={
                          row.status === "Disetujui"
                            ? "inline-flex items-center gap-1 rounded-full bg-accent-100 px-2.5 py-1 text-[0.68rem] font-semibold text-primary-700"
                            : "inline-flex items-center gap-1 rounded-full bg-[#fdf3e3] px-2.5 py-1 text-[0.68rem] font-semibold text-[#a86a12]"
                        }
                      >
                        {row.status === "Disetujui" ? (
                          <Check className="h-3 w-3" aria-hidden="true" />
                        ) : (
                          <Clock3 className="h-3 w-3" aria-hidden="true" />
                        )}
                        {row.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between rounded-2xl bg-primary-800 px-4 py-3.5 text-white">
                <div>
                  <p className="text-xs text-accent-200/80">Status persetujuan</p>
                  <p className="text-sm font-semibold">Pencairan penginapan</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-accent-100">
                  4 dari 6 menyetujui
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
