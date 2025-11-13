import { useState } from 'react'
import { Search, SlidersHorizontal, Building2, GraduationCap, Filter } from 'lucide-react'

export default function Filters({ onChange }) {
  const [q, setQ] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [cgpa, setCgpa] = useState('')
  const [type, setType] = useState('')

  const apply = () => {
    onChange?.({ q, company, role, cgpa, type })
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
      <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
          <input
            value={q}
            onChange={(e)=>setQ(e.target.value)}
            placeholder="Search by company, role, tech..."
            className="w-full pl-10 pr-3 h-11 rounded-xl bg-[#0b0e1a] text-white/90 placeholder:text-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1">
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input
              value={company}
              onChange={(e)=>setCompany(e.target.value)}
              placeholder="Company"
              className="w-full pl-10 pr-3 h-11 rounded-xl bg-[#0b0e1a] text-white/90 placeholder:text-white/40 border border-white/10 focus:outline-none"
            />
          </div>
          <div className="relative">
            <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input
              value={cgpa}
              onChange={(e)=>setCgpa(e.target.value)}
              placeholder="Min CGPA"
              className="w-full pl-10 pr-3 h-11 rounded-xl bg-[#0b0e1a] text-white/90 placeholder:text-white/40 border border-white/10 focus:outline-none"
            />
          </div>
          <div>
            <select
              value={role}
              onChange={(e)=>setRole(e.target.value)}
              className="w-full h-11 rounded-xl bg-[#0b0e1a] text-white/90 border border-white/10 px-3"
            >
              <option value="">Any Role</option>
              <option>Software Engineer</option>
              <option>Data Analyst</option>
              <option>Product</option>
              <option>Design</option>
            </select>
          </div>
          <div>
            <select
              value={type}
              onChange={(e)=>setType(e.target.value)}
              className="w-full h-11 rounded-xl bg-[#0b0e1a] text-white/90 border border-white/10 px-3"
            >
              <option value="">All Types</option>
              <option>Internship</option>
              <option>Full-time</option>
              <option>Apprenticeship</option>
            </select>
          </div>
        </div>
        <button onClick={apply} className="inline-flex items-center gap-2 px-4 h-11 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-semibold">
          <Filter size={16} /> Apply
        </button>
      </div>
    </div>
  )
}
