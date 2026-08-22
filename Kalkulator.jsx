import React, { useState, useMemo } from 'react'

/**
 * Kalkulator - Estimasi biaya laundry interaktif dengan React state.
 * Menghitung otomatis saat layanan atau jumlah berubah.
 */
export default function Kalkulator() {
  // Daftar layanan: value = harga satuan, type = "kilo" (per kg) atau "unit" (per pcs/meter)
  const layananOptions = [
    { value: 7000, type: 'kilo', label: 'Cuci Kiloan Reguler (Rp 7.000/kg)' },
    { value: 20000, type: 'kilo', label: 'Cuci Kiloan Kilat (Rp 20.000/kg)' },
    { value: 25000, type: 'unit', label: 'Cuci Karpet Besar (Rp 25.000/Meter)' },
    { value: 10000, type: 'unit', label: 'Cuci Karpet Kecil (Rp 10.000/Meter)' },
    { value: 10000, type: 'unit', label: 'Cuci Selimut kecil (Rp 10.000/Satuan)' },
    { value: 20000, type: 'unit', label: 'Cuci Selimut Besar (Rp 20.000/Satuan)' },
    { value: 35000, type: 'unit', label: 'Cuci Tas (Rp 35.000/Satuan)' },
    { value: 30000, type: 'unit', label: 'Cuci Sepatu (Rp 30.000/Set)' },
    { value: 25000, type: 'unit', label: 'Cuci Bed Cover Kecil (Rp 25.000/Satuan)' },
    { value: 40000, type: 'unit', label: 'Cuci Bed Cover Besar (Rp 40.000/Satuan)' },
    { value: 25000, type: 'unit', label: 'Cuci Sprei 1 Set (Rp 25.000/Set)' },
  ]

  // State: index layanan terpilih + jumlah barang
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [jumlah, setJumlah] = useState(1)

  const selectedLayanan = layananOptions[selectedIndex]

  // Hitung total otomatis dengan useMemo (efisien, recompute hanya saat input berubah)
  const total = useMemo(() => {
    const j = Math.max(1, Number(jumlah) || 1)
    return selectedLayanan.value * j
  }, [selectedLayanan, jumlah])

  // Format rupiah
  const formatRupiah = (angka) => 'Rp ' + angka.toLocaleString('id-ID')

  // Label input dinamis sesuai tipe layanan
  const labelInput =
    selectedLayanan.type === 'kilo'
      ? 'Perkiraan Berat (kg)'
      : 'Jumlah (pcs / meter / set)'

  // Pesan WhatsApp dengan total yang sudah dihitung
  const waText = encodeURIComponent(
    `Halo Armuzna Laundry, saya mau antar laundry:\n` +
      `• Layanan: ${selectedLayanan.label}\n` +
      `• Jumlah: ${jumlah}\n` +
      `• Estimasi biaya: ${formatRupiah(total)}\n` +
      `Mohon konfirmasi ya, terima kasih.`
  )
  const waLink = `https://wa.me/6285927262579?text=${waText}`

  return (
    <section id="kalkulator" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Hitung Estimasi Biaya Laundry</h2>
          <p className="text-slate-600 text-sm">
            Pilih layanan dan masukkan berat atau jumlah barang Anda.
          </p>
        </div>

        <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                Pilih Layanan
              </label>
              <select
                value={selectedIndex}
                onChange={(e) => setSelectedIndex(Number(e.target.value))}
                className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm focus:outline-blue-600"
              >
                {layananOptions.map((opt, idx) => (
                  <option key={idx} value={idx}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                {labelInput}
              </label>
              <input
                type="number"
                value={jumlah}
                min="1"
                onChange={(e) => setJumlah(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm focus:outline-blue-600"
              />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-blue-600 tracking-wider">
                Total Estimasi Biaya
              </span>
              <h3 className="text-3xl font-extrabold text-blue-900 mt-2">{formatRupiah(total)}</h3>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition shadow text-sm"
            >
              Pesan via WhatsApp Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
