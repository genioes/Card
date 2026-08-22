# 🚀 Cara Cepat Push ke GitHub & Deploy

## Langkah 1 — Persiapan

1.  Install **Node.js 18+** → [https://nodejs.org](https://nodejs.org)
2.  Install **Git** → [https://git-scm.com](https://git-scm.com)

## Langkah 2 — Buat Repo di GitHub

1.  Buka [https://github.com](https://github.com) → klik **New repository**
2.  Nama: `armuzna-laundry` (harus sama persis!)
3.  Pilih **Public**
4.  **JANGAN** centang README/.gitignore (sudah ada)
5.  Klik **Create repository**

## Langkah 3 — Push ke GitHub

Buka terminal di folder `armuzna-laundry`, lalu jalankan:

```bash
npm install
git init
git add .
git commit -m "Initial commit: React app Armuzna Laundry"
git branch -M main
git remote add origin https://github.com/USERNAME-KAMU/armuzna-laundry.git
git push -u origin main
```

> Ganti `USERNAME-KAMU` dengan username GitHub Anda.

## Langkah 4A — Deploy ke GitHub Pages (Gratis, dari repo GitHub)

```bash
npm run deploy
```

Lalu di GitHub:

1.  Repo → **Settings** → **Pages**
2.  Source: branch **gh-pages** → folder **/ (root)**
3.  **Save**

Website online di: `https://USERNAME-KAMU.github.io/armuzna-laundry/`

## Langkah 4B — Deploy ke Vercel (Alternatif)

1.  Buka [https://vercel.com](https://vercel.com) → login dengan GitHub
2.  **New Project** → import repo `armuzna-laundry`
3.  Klik **Deploy** (tanpa ubah setting apa pun)
4.  Online di: `https://armuzna-laundry.vercel.app`

## Langkah 4C — Deploy ke Netlify (Alternatif)

1.  Buka [https://app.netlify.com](https://app.netlify.com) → login GitHub
2.  **Add new site** → **Import existing project**
3.  Pilih repo `armuzna-laundry`
4.  Build command: `npm run build` | Publish dir: `dist`
5.  Klik **Deploy**

* * *

## ⚠️ PENTING: Ganti Username

Jika username GitHub Anda bukan `USERNAME-KAMU` atau nama repo berbeda, edit 2 file:

1.  **`package.json`** → baris `"homepage": "https://USERNAME-KAMU.github.io/armuzna-laundry"`
2.  **`vite.config.js`** → baris `base: '/armuzna-laundry/'`

## 🧪 Test Lokal

```bash
npm install
npm run dev      # buka http://localhost:5173
npm run build    # build produksi
```