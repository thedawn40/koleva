import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "./ui";
import { PageTitle } from "./page-title";

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <PageTitle title={title} />
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-900"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Kembali ke beranda
      </Link>

      <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-ink-400">
        Terakhir diperbarui: {updated}
      </p>
      <p className="mt-6 text-base leading-relaxed text-ink-500">{intro}</p>

      <div className="mt-10 space-y-8">{children}</div>

      <div className="mt-12 rounded-3xl border border-accent-300 bg-accent-50 p-5 text-sm leading-relaxed text-primary-700">
        Dokumen ini masih berupa draf dan dapat berubah. Koleva sedang dalam
        tahap pengembangan, sehingga ketentuan final akan diperbarui sebelum
        layanan tersedia untuk umum.
      </div>
    </Container>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold text-primary-900">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-500">
        {children}
      </div>
    </section>
  );
}