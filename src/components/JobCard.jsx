import { Building2, MapPin, IndianRupee, Calendar, ArrowRight } from 'lucide-react'

export default function JobCard({ job }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/30 border border-white/10 grid place-items-center text-white">
            {job.company?.[0] || 'C'}
          </div>
          <div>
            <h3 className="text-white font-semibold">{job.role}</h3>
            <p className="text-white/60 text-sm flex items-center gap-1"><Building2 size={16}/>{job.company}</p>
          </div>
        </div>
        <a href="#" className="text-cyan-300 hover:text-white inline-flex items-center gap-1 text-sm">
          View <ArrowRight size={14}/>
        </a>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-white/70 text-sm">
        <div className="flex items-center gap-2"><MapPin size={16}/>{job.location}</div>
        <div className="flex items-center gap-2"><IndianRupee size={16}/>{job.ctc}</div>
        <div className="flex items-center gap-2"><Calendar size={16}/>Apply by {job.deadline}</div>
        <div className="flex items-center gap-2">CGPA {job.cgpa || '—'}</div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {(job.skills || []).map((s, i)=> (
          <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">{s}</span>
        ))}
      </div>
    </div>
  )
}
