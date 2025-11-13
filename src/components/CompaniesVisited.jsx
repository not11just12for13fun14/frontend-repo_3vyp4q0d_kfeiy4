export default function CompaniesVisited({ items = [] }) {
  return (
    <section id="companies" className="relative py-16 sm:py-20 bg-[#070814]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-300 via-white to-cyan-300">Companies Visited</h2>
            <p className="text-white/60 mt-1">Top recruiters and campus partners</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {items.map((c)=> (
            <div key={c.id} className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-violet-400/40 transition-colors">
              <div className="flex items-center gap-3">
                <img src={c.logo_url || `https://api.dicebear.com/7.x/shapes/svg?seed=${encodeURIComponent(c.name)}`} alt={c.name} className="h-12 w-12 rounded-lg object-cover bg-white/10" />
                <div>
                  <div className="text-white font-semibold">{c.name}</div>
                  <div className="text-xs text-white/60">{(c.roles||[]).slice(0,2).join(', ')}</div>
                </div>
              </div>
              <div className="mt-3 rounded-lg bg-[#0c0f22] border border-white/10 p-3 flex items-center justify-between text-sm">
                <div className="text-white/70">Visits</div>
                <div className="text-cyan-300 font-semibold">{c.visits || 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
