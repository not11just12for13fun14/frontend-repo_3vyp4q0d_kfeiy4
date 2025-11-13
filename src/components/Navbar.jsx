import { Menu, Bell, User, ChevronDown, Building2, Users, Phone, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#070814]/80 backdrop-blur supports-[backdrop-filter]:bg-[#070814]/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/20">
            <GraduationCap size={18} />
          </div>
          <span className="text-white font-semibold tracking-wide">TPO Nexus</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a className="hover:text-white transition-colors" href="#stats">Highlights</a>
          <a className="hover:text-white transition-colors" href="#placed">Students Placed</a>
          <a className="hover:text-white transition-colors" href="#companies">Companies</a>
          <a className="hover:text-white transition-colors" href="#team">TPO Team</a>
          <Link className="hover:text-white transition-colors" to="/contact">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="h-9 w-9 grid place-items-center rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white">
            <Bell size={18} />
          </button>
          <button className="flex items-center gap-2 text-white/90 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg">
            <User size={16} />
            <span className="text-sm">Student</span>
            <ChevronDown size={14} />
          </button>
        </div>

        <button className="md:hidden h-9 w-9 grid place-items-center rounded-lg bg-white/5 border border-white/10 text-white/80">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
