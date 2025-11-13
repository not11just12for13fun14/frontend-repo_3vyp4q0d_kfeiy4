export default function StudentsPlaced({ items = [] }) {
  return (
    <section id="placed" className="relative py-16 sm:py-20 bg-[#070814]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-300 via-white to-cyan-300">Students Placed</h2>
            <p className="text-white/60 mt-1">Recent highlights from campus placements</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((s)=> (
            <div key={s.id} className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 transition-colors">
              <div className="flex items-center gap-3">
                <img src={s.avatar_url || `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(s.name)}`} alt={s.name} className="h-12 w-12 rounded-lg object-cover" />
                <div>
                  <div className="text-white font-semibold">{s.name}</div>
                  <div className="text-xs text-white/60">{s.branch} • {s.year}</div>
                </div>
              </div>
              <div className="mt-3 rounded-lg bg-[#0c0f22] border border-white/10 p-3">
                <div className="text-sm text-white/80">{s.company}</div>
                <div className="text-xs text-white/60">{s.role}</div>
                <div className="text-xs text-cyan-300 mt-1 font-medium">{s.ctc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
