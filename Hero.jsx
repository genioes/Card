import React from 'react'

/**
 * Hero - Section utama dengan judul, deskripsi, dan keunggulan
 */
export default function Hero() {
  const advantages = [
    'Bersih higienis & dipilah sesuai warna',
    'Pilihan parfum tahan lama (Snappy, Sakura, Downy)',
    'Layanan cuci kiloan & satuan profesional',
    'Lokasi strategis di Jl. Soekarno Hatta Km 4',
  ]

  return (
    <section id="beranda" className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="bg-blue-600 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Terpercaya di Balikpapan
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Solusi Terbaik Pakaian Bersih, Wangi & Rapi
          </h1>
          <p className="text-blue-100 text-base md:text-lg">
            Nikmati kemudahan mencuci di Armuzna Laundry. Hasil cucian bersih higienis,
            setrika licin rapi, dengan pilihan aroma parfum eksklusif.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#kalkulator"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold shadow hover:bg-slate-100 transition"
            >
              Cek Tarif & Pesan
            </a>
            <a
              href="https://wa.me/6285927262579"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 text-white space-y-4 shadow-xl">
          <h3 className="text-xl font-bold border-b border-white/20 pb-3">
            <i className="fa-solid fa-star text-yellow-300 mr-2"></i> Keunggulan Armuzna Laundry
          </h3>
          <ul className="space-y-3 text-sm text-blue-100">
            {advantages.map((item, idx) => (
              <li key={idx} className="flex items-center">
                <i className="fa-solid fa-check text-green-400 mr-3 text-base"></i> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
