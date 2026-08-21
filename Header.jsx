import { WHATSAPP_BASE } from '../data/services'

export default function Header() {
  const waLink = `${WHATSAPP_BASE}?text=Halo%20Armuzna%20Laundry,%20saya%20mau%20pesan%20layanan%20laundry.`
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.svg"
            alt="Maskot Armuzna Laundry"
            className="w-11 h-11 rounded-full object-cover border-2 border-blue-600 shadow-sm bg-blue-100"
          />
          <div>
            <span className="text-lg font-bold text-blue-700 block leading-tight">Armuzna Laundry</span>
            <span className="text-xs text-slate-500">Bersih Total, Hasil Maksimal</span>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
          <a href="#beranda" className="hover:text-blue-600 transition">Beranda</a>
          <a href="#layanan" className="hover:text-blue-600 transition">Daftar Harga</a>
          <a href="#kalkulator" className="hover:text-blue-600 transition">Kalkulator Estimasi</a>
          <a href="#lokasi" className="hover:text-blue-600 transition">Lokasi & Kontak</a>
        </nav>
        <div>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-green-700 transition shadow-sm"
          >
            <i className="fa-brands fa-whatsapp mr-1"></i> WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
