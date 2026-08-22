import React from 'react'

/**
 * Lokasi - Informasi alamat, kontak, dan jam operasional
 */
export default function Lokasi() {
  const jamOperasional = [
    { hari: 'Senin - Kamis', jam: '07.00 - 21.00 WITA' },
    { hari: 'Jumat', jam: '07.30 - 21.00 WITA' },
    { hari: 'Sabtu - Minggu', jam: '07.00 - 21.00 WITA' },
  ]

  return (
    <section id="lokasi" className="py-16 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Kunjungi Outlet Kami di Balikpapan</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Anda dapat mengantar langsung pakaian bersih Anda ke outlet kami atau menghubungi
          nomor kontak di bawah untuk informasi lebih lanjut.
        </p>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Alamat Lengkap</h4>
              <p className="text-slate-600 text-sm">
                Jl. Soekarno Hatta Km 4, No 1, Balikpapan, Kalimantan Timur
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h4 className="font-bold text-slate-800">Telepon / WhatsApp</h4>
              <p className="text-slate-600 text-sm">0859-2726-2579</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-lg mb-4 text-slate-800">
          <i className="fa-solid fa-clock text-blue-600 mr-2"></i> Jam Operasional Toko
        </h3>
        <ul className="space-y-3 text-sm text-slate-600 divide-y divide-slate-100">
          {jamOperasional.map((item, idx) => (
            <li key={idx} className="flex justify-between pt-2">
              <span>{item.hari}</span>
              <span className="font-semibold text-slate-800">{item.jam}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
