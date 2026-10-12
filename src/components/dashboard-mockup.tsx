import {
  ArrowDownLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Target,
  Users,
} from "lucide-react";
import { dashboard } from "@/lib/content";
import { cn, formatRupiah } from "@/lib/utils";

const progress = Math.round((dashboard.balance / dashboard.target) * 100);
const approveProgress = Math.round(
  (dashboard.withdrawal.approvals / dashboard.withdrawal.totalApprovers) * 100,
);

function Initials({ name }: { name: string }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-200 text-xs font-bold text-primary-800">
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}

export function DashboardMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-x-6 -top-6 bottom-10 -z-10 rounded-[2.5rem] bg-accent-100/70 blur-2xl"
      />

      <div className="overflow-hidden rounded-4xl border border-line bg-white shadow-lift">
        <div className="flex items-center justify-between gap-4 border-b border-line bg-accent-50/60 px-5 py-3.5 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6058]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbe2f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#2acb42]" />
            </div>
            <div className="hidden h-8 items-center gap-2 rounded-full border border-line bg-white px-3 text-xs font-medium text-ink-400 sm:flex">
              koleva.id/kelompok/tabungan-liburan-bali
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-300 bg-white px-2.5 py-1 text-[0.68rem] font-semibold text-primary-700">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500 animate-pulse-soft" />
            Data contoh
          </span>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                {dashboard.period}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold text-primary-900">
                {dashboard.groupName}
              </h3>
            </div>
            <div className="flex items-center -space-x-2.5">
              {dashboard.contributions.slice(0, 4).map((member) => (
                <span
                  key={member.name}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-accent-200 text-[0.7rem] font-bold text-primary-800",
                  )}
                  title={member.name}
                >
                  {member.name.slice(0, 2).toUpperCase()}
                </span>
              ))}
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-primary-800 text-[0.7rem] font-bold text-white">
                +2
              </span>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 via-primary-800 to-primary-950 p-5 text-white sm:p-6">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-accent-200/10"
                />
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-accent-200">
                    <Target className="h-4 w-4" aria-hidden="true" />
                    Saldo kelompok
                  </span>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[0.68rem] font-semibold text-accent-100">
                    {progress}% dari target
                  </span>
                </div>
                <p className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-[2.1rem]">
                  {formatRupiah(dashboard.balance)}
                </p>
                <p className="mt-1 text-sm text-accent-200/80">
                  Target {formatRupiah(dashboard.target)}
                </p>

                <div className="mt-5">
                  <div
                    className="h-2.5 w-full overflow-hidden rounded-full bg-white/15"
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Progres tabungan terhadap target"
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent-300 to-accent-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-[0.7rem] text-accent-200/70">Anggota</p>
                    <p className="mt-0.5 font-display text-lg font-bold">
                      {dashboard.memberCount}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] text-accent-200/70">Kontribusi</p>
                    <p className="mt-0.5 font-display text-lg font-bold">
                      {dashboard.contributionCount}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] text-accent-200/70">Terkumpul</p>
                    <p className="mt-0.5 font-display text-lg font-bold">
                      {progress}%
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-line bg-white p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-primary-900">
                    Kontribusi mingguan
                  </p>
                  <span className="text-xs font-medium text-ink-400">
                    7 minggu terakhir
                  </span>
                </div>
                <div className="mt-4 flex h-28 items-end justify-between gap-2">
                  {dashboard.weeklyBars.map((value, index) => (
                    <div
                      key={index}
                      className="flex flex-1 flex-col items-center gap-2"
                    >
                      <div className="flex h-24 w-full items-end">
                        <div
                          className="w-full rounded-lg bg-gradient-to-t from-accent-300 to-primary-500 transition-all"
                          style={{ height: `${value}%` }}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-[0.62rem] font-medium text-ink-400">
                        M{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5 lg:col-span-5">
              <div className="rounded-3xl border border-line bg-white p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-primary-900">
                    Permintaan pencairan
                  </p>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#fdf3e3] px-2.5 py-1 text-[0.68rem] font-semibold text-[#a86a12]">
                    <Clock3 className="h-3 w-3" aria-hidden="true" />
                    Menunggu
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink-500">
                  {dashboard.withdrawal.title}
                </p>
                <p className="mt-1 font-display text-xl font-bold text-primary-900">
                  {formatRupiah(dashboard.withdrawal.amount)}
                </p>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs font-medium text-ink-500">
                    <span>
                      Persetujuan {dashboard.withdrawal.approvals}/
                      {dashboard.withdrawal.totalApprovers}
                    </span>
                    <span className="text-primary-700">{approveProgress}%</span>
                  </div>
                  <div
                    className="mt-2 flex gap-1.5"
                    role="progressbar"
                    aria-valuenow={dashboard.withdrawal.approvals}
                    aria-valuemin={0}
                    aria-valuemax={dashboard.withdrawal.totalApprovers}
                    aria-label="Progres persetujuan pencairan"
                  >
                    {Array.from({
                      length: dashboard.withdrawal.totalApprovers,
                    }).map((_, index) => (
                      <span
                        key={index}
                        className={cn(
                          "h-2 flex-1 rounded-full",
                          index < dashboard.withdrawal.approvals
                            ? "bg-primary-500"
                            : "bg-accent-200",
                        )}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-2xl bg-accent-50 px-3 py-2.5 text-xs text-primary-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Butuh 1 persetujuan lagi untuk mencapai mayoritas.
                </div>
              </div>

              <div className="rounded-3xl border border-line bg-white p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-primary-900">
                    Kontribusi terbaru
                  </p>
                  <Users className="h-4 w-4 text-ink-400" aria-hidden="true" />
                </div>
                <ul className="mt-4 space-y-3">
                  {dashboard.contributions.map((item, index) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <Initials name={item.name} />
                        <div>
                          <p className="text-sm font-semibold text-primary-900">
                            {item.name}
                          </p>
                          <p className="text-xs text-ink-400">{item.date}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-bold text-primary-700">
                        {index % 2 === 0 ? (
                          <ArrowDownLeft
                            className="h-3.5 w-3.5 text-primary-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-primary-500"
                            aria-hidden="true"
                          />
                        )}
                        {formatRupiah(item.amount)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
