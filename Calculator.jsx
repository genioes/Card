import { useMemo, useState } from 'react'
import { LAYANAN, WHATSAPP_BASE } from '../data/services'
import { formatRupiah } from '../utils/format'

export default function Calculator() {
  const [layananIdx, setLayananIdx] = useState(0)
  const [jumlah, setJumlah] = useState(1)

  const layanan = LAYANAN[layananIdx]
  const isKilo = layanan.type === 'kilo'

  const labelInput = isKilo ? 'Perkiraan Berat (kg)' : `Jumlah (${layanan.unit})`

  const total = useMemo(() => {
    const qty = Math.max(1, Number(jumlah) || 0)
    return layanan.value * qty
  }, [layanan, jumlah])

  const waLink = `${WHATSAPP_BASE}?text=Halo%20Armuzna%20Laundry,%20saya%20mau%20antar%20laundry%20dengan%20estimasi%20biaya%20${encodeURIComponent(
    formatRupiah(total)
  )}%20(${encodeURIComponent(layanan.label)},%20${jumlah}%20${layanan.unit}).`

  return (
    <section id="kalkulator" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Hitung Estimasi Biaya Laundry</h2>
          <p className="text-slate-600 text-sm">Pilih layanan dan masukkan berat atau jumlah barang Anda.</p>
        </div>

        <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Pilih Layanan</label>
              <select
                value={layananIdx}
                onChange={(e) => setLayananIdx(Number(e.target.value))}
                className="w-full bg-white border border-slate-300 rounded-xl p-3 text-sm focus:outline-blue-600"
              >
                {LAYANAN.map((l, i) => (
                  <option key={i} value={i}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{labelInput}</label>
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
              <span className="text-xs uppercase font-bold text-blue-600 tracking-wider">Total Estimasi Biaya</span>
              <h3 className="text-3xl font-extrabold text-blue-900 mt-2">{formatRupiah(total)}</h3>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
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
