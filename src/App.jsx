import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Footer from './components/Footer'
import StudentsPlaced from './components/StudentsPlaced'
import CompaniesVisited from './components/CompaniesVisited'
import Team from './components/Team'
import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [placed, setPlaced] = useState([])
  const [companies, setCompanies] = useState([])
  const [team, setTeam] = useState([])

  useEffect(()=>{
    const fetchAll = async () => {
      try {
        const [sp, co, tm] = await Promise.all([
          fetch(`${baseUrl}/api/students-placed`).then(r=>r.json()).catch(()=>({items:[]})),
          fetch(`${baseUrl}/api/companies`).then(r=>r.json()).catch(()=>({items:[]})),
          fetch(`${baseUrl}/api/team`).then(r=>r.json()).catch(()=>({items:[]})),
        ])
        setPlaced(sp.items || [])
        setCompanies(co.items || [])
        setTeam(tm.items || [])
      } catch (e) {}
    }
    fetchAll()
  }, [])

  return (
    <div className="min-h-screen bg-[#070814]">
      <Navbar />
      <Hero />

      <main className="relative z-10 -mt-6">
        <Stats />

        <section id="placed">
          <StudentsPlaced items={placed} />
        </section>
        <section id="companies">
          <CompaniesVisited items={companies} />
        </section>
        <section id="team">
          <Team items={team} />
        </section>
      </main>

      <Footer />
    </div>
  )
}
