import { WHATSAPP_BASE } from '../data/services'

export default function TopBar() {
  return (
    <div className="bg-blue-800 text-white text-xs py-2 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>
          <i className="fa-solid fa-location-dot mr-1"></i> Jl. Soekarno Hatta Km 4, No 1, Balikpapan, Kaltim
        </span>
        <span>
          <i className="fa-solid fa-phone mr-1"></i> 0859-2726-2579
        </span>
      </div>
    </div>
  )
}
