export default function Pricing() {
  const layanan = [
    {
      icon: 'fa-scale-balanced',
      title: 'Cuci Kiloan Reguler',
      durasi: 'Estimasi selesai 2-3 hari',
      harga: 'Rp 7.000',
      satuan: '/ kg',
      desc: 'Cuci bersih, kering, disetrika rapi, dan dipacking plastik satuan.',
    },
    {
      icon: 'fa-bolt',
      title: 'Cuci Kiloan Kilat',
      durasi: 'Estimasi selesai 1 hari',
      harga: 'Rp 20.000',
      satuan: '/ kg',
      desc: 'Prioritas pengerjaan cepat untuk pakaian yang mendadak harus dipakai.',
    },
    {
      icon: 'fa-shirt',
      title: 'Cuci Satuan / Premium',
      durasi: 'Jas, Selimut, Bed Cover',
      harga: 'Mulai Rp 35.000',
      satuan: '/ pcs',
      desc: 'Perawatan khusus bahan sensitif agar serat kain tetap awet dan tidak rusak.',
    },
  ]

  return (
    <section id="layanan" className="py-16 max-w-6xl mx-auto px-4">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Daftar Tarif Layanan</h2>
        <p className="text-slate-600 text-sm">
          Transparan dan terjangkau untuk kebutuhan harian maupun pakaian khusus Anda.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {layanan.map((l) => (
          <div
            key={l.title}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-4 font-bold">
              <i className={`fa-solid ${l.icon}`}></i>
            </div>
            <h3 className="font-bold text-lg mb-1">{l.title}</h3>
            <p className="text-xs text-slate-500 mb-4">{l.durasi}</p>
            <div className="text-xl font-extrabold text-blue-700 mb-4">
              {l.harga} <span className="text-xs text-slate-500 font-normal">{l.satuan}</span>
            </div>
            <p className="text-slate-600 text-sm">{l.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
