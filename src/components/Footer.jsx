export default function Footer(){
  return (
    <footer id="contact" className="bg-[#070814] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60">© {new Date().getFullYear()} TPO Nexus. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/70">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
