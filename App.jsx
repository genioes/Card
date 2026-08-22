import React from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Layanan from './components/Layanan'
import Kalkulator from './components/Kalkulator'
import Lokasi from './components/Lokasi'
import Footer from './components/Footer'

/**
 * App - Root component Armuzna Laundry Balikpapan
 * Menggabungkan semua section menjadi satu halaman landing.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Layanan />
        <Kalkulator />
        <Lokasi />
      </main>
      <Footer />
    </div>
  )
}
