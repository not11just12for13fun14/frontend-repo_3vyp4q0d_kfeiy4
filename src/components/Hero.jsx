import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 overflow-hidden bg-[#070814]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.2),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.08] mix-blend-screen" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs font-medium border border-white/10 text-white/70 bg-white/5">
              Futuristic TPO Portal
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-300 via-white to-cyan-300">
              Discover, Track and Ace your Dream Offers
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl">
              One place for curated job listings, campus drives, eligibility filters, real-time stats and application tracking — crafted for students and TPO teams.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a href="#jobs" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-semibold shadow-lg shadow-cyan-500/20">
                Explore Jobs
              </a>
              <a href="#how" className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white">
                How it works
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-white/70">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-2xl font-bold text-white">250+</p>
                <p className="text-xs mt-1">Active Listings</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-2xl font-bold text-white">48</p>
                <p className="text-xs mt-1">Upcoming Drives</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-2xl font-bold text-white">9.2</p>
                <p className="text-xs mt-1">Avg. Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative h-[520px] lg:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070814]" />
          </div>
        </div>
      </div>
    </section>
  )
}
