export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.svg"
            alt="Armuzna Logo"
            className="w-8 h-8 rounded-full object-cover border border-slate-700 bg-blue-100"
          />
          <span className="text-white font-bold">Armuzna Laundry Balikpapan</span>
        </div>
        <p>&copy; 2026 Armuzna Laundry. All rights reserved.</p>
      </div>
    </footer>
  )
}
