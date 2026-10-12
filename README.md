# Koleva — Landing Page

Landing page untuk **Koleva**, aplikasi pengelolaan tabungan dan dana bersama
untuk keluarga, teman, komunitas, dan kelompok usaha di Indonesia.

Tagline: _Jaring Uang Bersama, Tetap Terkendali._

## Stack

- **Vite + React 19** (client-side rendering, SPA)
- **TypeScript** (strict)
- **Tailwind CSS v4** (konfigurasi tema di `src/globals.css`)
- **React Router v7** (rute `/`, `/privasi`, `/syarat`)
- **Framer Motion** untuk animasi
- **Lucide** untuk ikon

## Menjalankan

```bash
npm install
npm run dev      # dev server
npm run build    # typecheck + build ke dist/
npm run preview  # pratinjau build produksi
```

## Struktur

- `src/components/` — komponen UI landing page
- `src/pages/` — halaman & rute
- `src/lib/content.ts` — data konten (fitur, langkah, FAQ, contoh dashboard)
- `src/globals.css` — tema Tailwind (`--color-primary-*` ungu tua, `--color-accent-*` lavender)

## Deploy

SPA di-hydrate di client. Akses langsung ke rute (mis. `/privasi`) membutuhkan
fallback server ke `/index.html`; contoh konfigurasi ada di `vercel.json`.