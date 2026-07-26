import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/loopangan.jpeg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E7EAF3]">
      <nav className="max-w-[1180px] mx-auto px-8 h-[76px] flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3 font-bold text-xl text-[#10142B]">
          <img
            src={logo}
            alt="LoopAngan logo"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-[#E1E5F5]"
          />
          <span>Loop<span className="text-[#F97316]">Angan</span></span>
        </Link>

        <ul className="hidden md:flex items-center gap-9 list-none">
          <li><Link to="/" className="text-sm font-medium text-[#5B6178] hover:text-[#10142B]">Home</Link></li>
          <li><Link to="/about" className="text-sm font-medium text-[#5B6178] hover:text-[#10142B]">About</Link></li>
          <li><Link to="/courses" className="text-sm font-medium text-[#5B6178] hover:text-[#10142B]">Courses</Link></li>
          <li><Link to="/verify" className="text-sm font-medium text-[#5B6178] hover:text-[#10142B]">Verify Certificate</Link></li>
          <li><Link to="/contact" className="text-sm font-medium text-[#5B6178] hover:text-[#10142B]">Contact</Link></li>
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center font-semibold text-sm px-5 py-3 rounded-full border border-[#D8DEF0] text-[#10142B] hover:border-[#1D4ED8] hover:text-[#1D4ED8] transition-colors"
        >
          Enroll Now
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 border border-[#E1E5F5] rounded-lg text-[#10142B]"
          aria-label="Toggle menu"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.6"/>
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-1 px-8 pb-6 list-none">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="block py-2.5 text-[#5B6178] hover:text-[#10142B]">Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)} className="block py-2.5 text-[#5B6178] hover:text-[#10142B]">About</Link></li>
          <li><Link to="/courses" onClick={() => setMenuOpen(false)} className="block py-2.5 text-[#5B6178] hover:text-[#10142B]">Courses</Link></li>
          <li><Link to="/verify" className="text-sm font-medium text-[#5B6178] hover:text-[#10142B]">Verify Certificate</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="block py-2.5 text-[#5B6178] hover:text-[#10142B]">Contact</Link></li>
          <li className="pt-2">
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center font-semibold text-sm px-5 py-3 rounded-full border border-[#D8DEF0] text-[#10142B]">
              Enroll Now
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Navbar
