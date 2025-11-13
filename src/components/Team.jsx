export default function Team({ items = [] }) {
  return (
    <section id="team" className="relative py-16 sm:py-20 bg-[#070814]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-300 via-white to-cyan-300">TPO Team</h2>
            <p className="text-white/60 mt-1">Meet the coordinators and faculty</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((m)=> (
            <div key={m.id} className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 transition-colors">
              <div className="flex items-center gap-3">
                <img src={m.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(m.name)}`} alt={m.name} className="h-12 w-12 rounded-lg object-cover" />
                <div>
                  <div className="text-white font-semibold">{m.name}</div>
                  <div className="text-xs text-white/60">{m.designation}</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-white/60 break-words">
                {m.email && (<div>Email: <a href={`mailto:${m.email}`} className="text-cyan-300">{m.email}</a></div>)}
                {m.phone && (<div>Phone: <a href={`tel:${m.phone}`} className="text-cyan-300">{m.phone}</a></div>)}
                {m.linkedin && (<div>LinkedIn: <a href={m.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300">Profile</a></div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
