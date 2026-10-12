import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { Container } from "./ui";

const groupOptions = [
  "Keluarga",
  "Liburan bersama",
  "Komunitas",
  "Kelompok usaha",
  "Lainnya",
];

type Status = "idle" | "submitting" | "success";
type Errors = { name?: string; email?: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState(groupOptions[0]);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Errors = {};
    if (name.trim().length < 2) {
      nextErrors.name = "Mohon isi nama Anda.";
    }
    if (!emailPattern.test(email.trim())) {
      nextErrors.email = "Masukkan alamat email yang valid.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 700);
  }

  function reset() {
    setName("");
    setEmail("");
    setGroup(groupOptions[0]);
    setErrors({});
    setStatus("idle");
  }

  return (
    <section id="daftar-tunggu" className="pb-12 pt-4 sm:pb-16">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-4xl bg-gradient-to-br from-primary-800 via-primary-800 to-primary-950 shadow-lift">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-14">
              <div className="text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-200">
                  Daftar tunggu
                </span>
                <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  Jadilah yang pertama mengelola dana bersama dengan Koleva
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-accent-200/80">
                  Koleva sedang dalam tahap pengembangan. Tinggalkan email Anda
                  dan kami akan mengabari saat akses dibuka.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    "Tanpa biaya untuk bergabung daftar tunggu",
                    "Kabar langsung ke email saat akses dibuka",
                    "Data Anda hanya digunakan untuk pemberitahuan",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-accent-100"
                    >
                      <CheckCircle2
                        className="h-5 w-5 shrink-0 text-accent-300"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-8">
                <AnimatePresence mode="wait" initial={false}>
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-start"
                      role="status"
                      aria-live="polite"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-100 text-primary-700">
                        <CheckCircle2
                          className="h-7 w-7"
                          aria-hidden="true"
                        />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-bold text-primary-900">
                        Terima kasih, {name.split(" ")[0]}!
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">
                        Anda sudah masuk daftar tunggu Koleva. Kami akan
                        menghubungi <strong>{email}</strong> saat akses dibuka.
                      </p>
                      <button
                        type="button"
                        onClick={reset}
                        className="mt-6 text-sm font-semibold text-primary-700 underline-offset-4 hover:underline"
                      >
                        Daftarkan email lain
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      noValidate
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-5"
                    >
                      <div>
                        <label
                          htmlFor="nama"
                          className="text-sm font-semibold text-primary-900"
                        >
                          Nama
                        </label>
                        <input
                          id="nama"
                          name="nama"
                          type="text"
                          autoComplete="name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          placeholder="Nama lengkap Anda"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={
                            errors.name ? "nama-error" : undefined
                          }
                          className={cn(
                            "mt-2 h-12 w-full rounded-2xl border bg-white px-4 text-sm text-primary-900 outline-none transition-colors placeholder:text-ink-400 focus:border-primary-600",
                            errors.name ? "border-red-400" : "border-line",
                          )}
                        />
                        {errors.name ? (
                          <p
                            id="nama-error"
                            className="mt-1.5 text-xs font-medium text-red-600"
                          >
                            {errors.name}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold text-primary-900"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="nama@email.com"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                          className={cn(
                            "mt-2 h-12 w-full rounded-2xl border bg-white px-4 text-sm text-primary-900 outline-none transition-colors placeholder:text-ink-400 focus:border-primary-600",
                            errors.email ? "border-red-400" : "border-line",
                          )}
                        />
                        {errors.email ? (
                          <p
                            id="email-error"
                            className="mt-1.5 text-xs font-medium text-red-600"
                          >
                            {errors.email}
                          </p>
                        ) : null}
                      </div>

                      <div>
                        <label
                          htmlFor="kelompok"
                          className="text-sm font-semibold text-primary-900"
                        >
                          Jenis kelompok
                        </label>
                        <select
                          id="kelompok"
                          name="kelompok"
                          value={group}
                          onChange={(event) => setGroup(event.target.value)}
                          className="mt-2 h-12 w-full rounded-2xl border border-line bg-white px-4 text-sm text-primary-900 outline-none transition-colors focus:border-primary-600"
                        >
                          {groupOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-primary-800 text-sm font-semibold text-white transition-colors hover:bg-primary-900 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2
                              className="h-4 w-4 animate-spin"
                              aria-hidden="true"
                            />
                            Memproses…
                          </>
                        ) : (
                          <>
                            Gabung Daftar Tunggu
                            <ArrowRight
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </button>

                      <p className="flex items-center gap-2 text-xs text-ink-400">
                        <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                        Kami tidak akan membagikan email Anda ke pihak lain.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
