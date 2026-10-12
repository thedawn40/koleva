import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { navLinks } from "@/lib/content";
import { Container } from "./ui";
import { LogoMark } from "./logo";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-line bg-accent-50/60">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-9 w-9" />
              <span className="font-display text-xl font-extrabold tracking-tight text-primary-900">
                Koleva
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">
              Uang Bersama, Tetap Terkendali. Aplikasi pengelolaan tabungan dan
              dana bersama untuk keluarga, teman, komunitas, dan kelompok usaha.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="text-sm font-semibold text-primary-900">Jelajahi</h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-500 transition-colors hover:text-primary-800"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#daftar-tunggu"
                  className="text-sm text-ink-500 transition-colors hover:text-primary-800"
                >
                  Daftar Tunggu
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-primary-900">Legal</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/privasi"
                  className="text-sm text-ink-500 transition-colors hover:text-primary-800"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  to="/syarat"
                  className="text-sm text-ink-500 transition-colors hover:text-primary-800"
                >
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <a
                  href="mailto:halo@koleva.id"
                  className="inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-primary-800"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  halo@koleva.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Koleva. Seluruh hak cipta dilindungi.</p>
          <p>Koleva sedang dalam tahap pengembangan.</p>
        </div>
      </Container>
    </footer>
  );
}
