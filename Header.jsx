import React, { useState } from 'react'

/**
 * Header - Navigasi sticky dengan logo, menu, dan tombol WhatsApp
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#layanan', label: 'Daftar Harga' },
    { href: '#kalkulator', label: 'Kalkulator Estimasi' },
    { href: '#lokasi', label: 'Lokasi & Kontak' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="logo.png"
            alt="Maskot Armuzna Laundry"
            className="w-11 h-11 rounded-full object-cover border-2 border-blue-600 shadow-sm"
          />
          <div>
            <span className="text-lg font-bold text-blue-700 block leading-tight">Armuzna Laundry</span>
            <span className="text-xs text-slate-500">Bersih Total, Hasil Maksimal</span>
          </div>
        </div>

        {/* Navigasi desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-600 transition">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/6285927262579?text=Halo%20Armuzna%20Laundry,%20saya%20mau%20pesan%20layanan%20laundry."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-green-700 transition shadow-sm"
          >
            <i className="fa-brands fa-whatsapp mr-1"></i> WhatsApp
          </a>

          {/* Tombol hamburger mobile */}
          <button
            className="md:hidden text-slate-700 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-slate-100 px-4 py-3 space-y-3 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
