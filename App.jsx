import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Calculator from './components/Calculator'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Pricing />
        <Calculator />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
