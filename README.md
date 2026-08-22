# 🧺 Armuzna Laundry Balikpapan — React App

Website landing page **Armuzna Laundry Balikpapan** yang sudah dikonversi dari HTML statis menjadi aplikasi **React + Vite + Tailwind CSS**. Siap di-push ke GitHub dan deploy ke GitHub Pages / Vercel / Netlify.

## ✨ Fitur

-   ⚛️ **React 18** dengan komponen modular & reusable
-   ⚡ **Vite** untuk development super cepat & build optimal
-   🎨 **Tailwind CSS** untuk styling yang konsisten
-   🧮 **Kalkulator estimasi biaya** interaktif (React state + `useMemo`)
-   📱 **Responsive** — tampil bagus di mobile, tablet, desktop
-   📲 Tombol **WhatsApp** dengan pesan otomatis (sudah include total biaya)
-   🍔 Menu navigasi **mobile hamburger**
-   🚀 Siap deploy ke **GitHub Pages** & **Vercel/Netlify**

## 📁 Struktur Project

```
armuzna-laundry/
├── public/
│   └── logo.png              # Logo Armuzna Laundry
├── src/
│   ├── components/
│   │   ├── TopBar.jsx        # Bar kontak atas
│   │   ├── Header.jsx        # Navigasi + menu mobile
│   │   ├── Hero.jsx          # Section utama
│   │   ├── Layanan.jsx       # Daftar tarif
│   │   ├── Kalkulator.jsx    # Kalkulator biaya (interaktif)
│   │   ├── Lokasi.jsx        # Alamat & jam operasional
│   │   └── Footer.jsx        # Footer
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point React
│   └── index.css             # Tailwind directives
├── index.html
├── vite.config.js            # Konfigurasi Vite (base path GitHub Pages)
├── tailwind.config.js
├── postcss.config.js
├── vercel.json               # Konfigurasi SPA routing Vercel
├── package.json
└── README.md
```

## 🚀 Cara Menjalankan Lokal

### Prasyarat

-   **Node.js** versi 18 atau lebih baru → download di [https://nodejs.org](https://nodejs.org)
-   **Git** → download di [https://git-scm.com](https://git-scm.com)

### Langkah

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev
```

Buka browser ke alamat yang ditampilkan (biasanya `http://localhost:5173`).

### Build untuk produksi

```bash
npm run build      # hasil di folder dist/
npm run preview    # preview hasil build secara lokal
```

* * *

## 📤 Cara Push ke GitHub

### 1\. Buat Repository di GitHub

1.  Login ke [https://github.com](https://github.com)
2.  Klik tombol **New** (atau **+** → New repository)
3.  Nama repository: `armuzna-laundry` (atau bebas)
4.  Pilih **Public** (gratis untuk GitHub Pages)
5.  **Jangan** centang "Add a README" / "Add .gitignore" (sudah ada di project)
6.  Klik **Create repository**

### 2\. Inisialisasi Git Lokal

Buka terminal di folder project, lalu:

```bash
git init
git add .
git commit -m "Initial commit: React app Armuzna Laundry"
git branch -M main
git remote add origin https://github.com/USERNAME-KAMU/armuzna-laundry.git
git push -u origin main
```

> Ganti `USERNAME-KAMU` dengan username GitHub Anda.

* * *

## 🌐 Deploy ke GitHub Pages (Gratis)

### Langkah 1 — Edit `package.json`

Ubah baris `homepage` dan `base` di `vite.config.js` sesuai repo Anda:

**`package.json`:**

```json
"homepage": "https://USERNAME-KAMU.github.io/armuzna-laundry"
```

**`vite.config.js`:**

```js
base: '/armuzna-laundry/',   // nama repo dengan slash di awal & akhir
```

> Jika nama repo Anda berbeda, sesuaikan kedua nilai ini.

### Langkah 2 — Install gh-pages

```bash
npm install --save-dev gh-pages
```

_(Sudah terdaftar di package.json, jadi `npm install` saja sudah cukup)_

### Langkah 3 — Deploy

```bash
npm run deploy
```

Perintah ini akan:

1.  Build project (`npm run build`)
2.  Push folder `dist/` ke branch `gh-pages`

### Langkah 4 — Aktifkan GitHub Pages

1.  Buka repo di GitHub → tab **Settings**
2.  Menu **Pages** (sidebar kiri)
3.  **Source** → pilih branch **`gh-pages`** → folder **`/ (root)`**
4.  Klik **Save**

Tunggu 1–2 menit, website online di:

```
https://USERNAME-KAMU.github.io/armuzna-laundry/
```

* * *

## ☁️ Deploy ke Vercel (Alternatif, Lebih Powerful)

1.  Buka [https://vercel.com](https://vercel.com) → login dengan akun GitHub
2.  Klik **New Project** → **Import** repository `armuzna-laundry`
3.  Vercel auto-detect Vite, klik **Deploy** (tanpa perlu ubah setting apa pun)
4.  Selesai! Website online di `https://armuzna-laundry.vercel.app`

> File `vercel.json` sudah disiapkan agar routing SPA berjalan mulus.

## ☁️ Deploy ke Netlify (Alternatif)

1.  Buka [https://app.netlify.com](https://app.netlify.com) → login dengan GitHub
2.  **Add new site** → **Import an existing project**
3.  Pilih repo `armuzna-laundry`
4.  Setting:
    -   **Build command:** `npm run build`
    -   **Publish directory:** `dist`
5.  Klik **Deploy**

* * *

## 🛠️ Kustomisasi

| Yang ingin diubah | File |
| --- | --- |
| Nomor WhatsApp | Cari `6285927262579` di seluruh `src/components/*.jsx` |
| Daftar harga layanan | `src/components/Layanan.jsx` & `src/components/Kalkulator.jsx` (`layananOptions`) |
| Alamat & jam buka | `src/components/Lokasi.jsx` & `src/components/TopBar.jsx` |
| Logo | Ganti `public/logo.png` |
| Warna tema | Edit class Tailwind (mis. `blue-700`) di komponen |

## 📝 Catatan

-   Saat ini website adalah **Single Page Application** (semua section dalam 1 halaman dengan anchor navigation `#beranda`, `#layanan`, dst).
-   Footer tahun copyright di-generate otomatis (`new Date().getFullYear()`).
-   Logo `logo.png` adalah placeholder — silakan ganti dengan logo asli Armuzna Laundry.

## 📞 Kontak Bisnis

-   **WhatsApp:** 0859-2726-2579
-   **Alamat:** Jl. Soekarno Hatta Km 4, No 1, Balikpapan, Kalimantan Timur

* * *

© Armuzna Laundry Balikpapan. Dibuat dengan React + Vite + Tailwind CSS.