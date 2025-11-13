import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', note: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      setStatus({ state: 'loading', note: 'Sending...' })
      // Optional: POST to backend if contact endpoint exists; fallback to mailto
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus({ state: 'success', note: 'Message sent! We will get back to you soon.' })
        setForm({ name: '', email: '', message: '' })
      } else {
        window.location.href = `mailto:tpo@example.edu?subject=Enquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nReply to: ' + form.email)}`
      }
    } catch (e) {
      window.location.href = `mailto:tpo@example.edu?subject=Enquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nReply to: ' + form.email)}`
    }
  }

  return (
    <div className="min-h-screen bg-[#070814]">
      <div className="pt-24 pb-16 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.2),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.08] mix-blend-screen" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-300 via-white to-cyan-300">Contact the TPO</h1>
            <p className="mt-4 text-white/70">We’re here to help with placements, internships, MoUs, and collaborations. Send us a message and we’ll reach you shortly.</p>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1" htmlFor="name">Full name</label>
                  <input id="name" name="name" value={form.name} onChange={onChange} required className="w-full rounded-lg bg-[#0B0D1C] border border-white/10 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={onChange} required className="w-full rounded-lg bg-[#0B0D1C] border border-white/10 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="john@college.edu" />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="6" value={form.message} onChange={onChange} required className="w-full rounded-lg bg-[#0B0D1C] border border-white/10 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Describe your enquiry..." />
                </div>
                <div className="flex items-center gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-semibold shadow-lg shadow-cyan-500/20">
                    <Send size={16} />
                    Send message
                  </button>
                  {status.state !== 'idle' && (
                    <span className="text-sm text-white/70">{status.note}</span>
                  )}
                </div>
              </form>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-5 h-fit">
              <div className="flex items-start gap-3 text-white/80">
                <Mail className="mt-0.5" size={18} />
                <div>
                  <p className="text-sm">Email</p>
                  <a href="mailto:tpo@example.edu" className="text-white font-medium">tpo@example.edu</a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <Phone className="mt-0.5" size={18} />
                <div>
                  <p className="text-sm">Phone</p>
                  <a href="tel:+911234567890" className="text-white font-medium">+91 12345 67890</a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="mt-0.5" size={18} />
                <div>
                  <p className="text-sm">Address</p>
                  <p className="text-white font-medium">Training & Placement Office, Your College, City, State</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
