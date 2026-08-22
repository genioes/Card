# 🧺 Armuzna Laundry Balikpapan — React App

Website landing page modern dan interaktif untuk Armuzna Laundry Balikpapan, dibangun menggunakan React, Vite, dan Tailwind CSS. Dilengkapi kalkulator estimasi biaya laundry real-time serta siap di-deploy ke Vercel, Netlify, atau GitHub Pages (By. GraphAI\_NET).  

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
│   └── logo.png              # Armuzna Laundry
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

### Inisialisasi Git Lokal

Open terminal di folder project: 

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
-   Footer tahun copyright GraphAI\_NET (`new Date().getFullYear()`).
-   Logo `logo.png` adalah placeholder — silakan ganti dengan logo asli Armuzna Laundry.

## 📞 Kontak Bisnis

-   **WhatsApp:** 0859-2726-2579 / 08889009698
-   **Alamat:** Jl. Soekarno Hatta Km 4, No 1, Balikpapan, Kalimantan Timur

* * *

© Armuzna Laundry Balikpapan. Dibuat dengan React + Vite + Tailwind CSS.