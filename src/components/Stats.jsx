export default function Stats() {
  const stats = [
    { label: 'Companies', value: '180+' },
    { label: 'Offers', value: '1200+' },
    { label: 'Highest CTC', value: '₹ 72 LPA' },
    { label: 'Avg CTC', value: '₹ 10.4 LPA' },
  ]
  return (
    <section id="stats" className="relative py-16 sm:py-24 bg-[#070814]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s)=> (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-violet-300 via-white to-cyan-300">{s.value}</div>
                <div className="text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
