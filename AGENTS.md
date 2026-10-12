# AGENTS.md

## Stack

- **Framework:** Vite + React 19 (client-side rendering, SPA)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS-first config in `src/globals.css` via `@theme`)
- **Routing:** React Router v7 (`BrowserRouter`)
- **Animations:** Framer Motion
- **Icons:** Lucide

## Konvensi

- Semua konten UI berbahasa Indonesia.
- Tambah token warna di `src/globals.css` (`--color-primary-*` untuk ungu tua, `--color-accent-*` untuk lavender).
- Rute halaman baru: buat file di `src/pages/` dan daftarkan di `src/App.tsx`. SPA di-hydrate di client, langsung akses rute perlu fallback server ke `/index.html`.
- Komponen utama di `src/components/`, data/konfigurasi di `src/lib/content.ts`.

## Perintah

- `npm run dev` — Vite dev server
- `npm run typecheck` — `tsc --noEmit`
- `npm run build` — typecheck + `vite build` (output ke `dist/`)
- `npm run preview` — pratinjau build produksi