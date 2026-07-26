import { Link } from 'react-router-dom'
import logo from '../assets/loopangan.jpeg'

function Footer() {
  return (
    <footer className="mt-20 border-t border-[#E7EAF3] bg-white/90">
      <div className="max-w-[1180px] mx-auto px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10">

          {/* Brand + tagline */}
          <div>
            <Link to="/" className="flex items-center gap-3 font-bold text-xl text-[#10142B]">
              <img
                src={logo}
                alt="LoopAngan logo"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-[#E1E5F5]"
              />
              <span>Loop<span className="text-[#F97316]">Angan</span></span>
            </Link>
            <p className="text-sm text-[#5B6178] mt-4 max-w-[32ch] leading-6">
              Project-based courses in web development, taught with a practical, ship-first approach.
            </p>
          </div>

          {/* Site links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#10142B] mb-4">Site</h3>
            <ul className="flex flex-col gap-3 list-none">
              <li><Link to="/" className="text-sm text-[#5B6178] hover:text-[#10142B] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-[#5B6178] hover:text-[#10142B] transition-colors">About</Link></li>
              <li><Link to="/courses" className="text-sm text-[#5B6178] hover:text-[#10142B] transition-colors">Courses</Link></li>
              <li><Link to="/verify" className="text-sm text-[#5B6178] hover:text-[#10142B] transition-colors">Verify Certificate</Link></li>
              <li><Link to="/contact" className="text-sm text-[#5B6178] hover:text-[#10142B] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact + social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[#10142B] mb-4">Get in touch</h3>
            <p className="text-sm text-[#5B6178] font-mono mb-2">loopangan.work@gmail.com</p>
            <p className="text-sm text-[#5B6178] font-mono mb-4">+977 9817824219</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/loopangan" target="_blank" rel="noopener noreferrer" className="text-sm text-[#5B6178] hover:text-[#F97316] transition-colors">Instagram</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#E7EAF3] flex justify-between flex-wrap gap-3 text-[13px] text-[#5B6178]">
          <span>© 2026 LoopAngan. Built with ❤️ in Biratnagar.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer