import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Filters from './components/Filters'
import JobCard from './components/JobCard'
import Stats from './components/Stats'
import Footer from './components/Footer'
import StudentsPlaced from './components/StudentsPlaced'
import CompaniesVisited from './components/CompaniesVisited'
import Team from './components/Team'
import { useEffect, useMemo, useState } from 'react'

const MOCK_JOBS = [
  { id:1, company:'TCS', role:'Software Engineer', location:'PAN India', ctc:'₹ 7 LPA', deadline:'Nov 28', cgpa:'7.0', skills:['Java', 'DSA', 'Spring'] },
  { id:2, company:'Google', role:'Data Analyst Intern', location:'Bengaluru', ctc:'₹ 1.2 LPM', deadline:'Dec 02', cgpa:'8.0', skills:['SQL', 'Python', 'Tableau'] },
  { id:3, company:'Accenture', role:'Associate Engineer', location:'Hyderabad', ctc:'₹ 6.5 LPA', deadline:'Dec 05', cgpa:'6.5', skills:['JavaScript', 'React', 'API'] },
  { id:4, company:'Adobe', role:'Product Intern', location:'Noida', ctc:'₹ 1.4 LPM', deadline:'Nov 30', cgpa:'8.5', skills:['Figma', 'UX', 'Research'] },
  { id:5, company:'Infosys', role:'System Engineer', location:'Pune', ctc:'₹ 5.5 LPA', deadline:'Dec 08', cgpa:'6.0', skills:['.NET', 'SQL', 'Azure'] },
]

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [filters, setFilters] = useState({})
  const [placed, setPlaced] = useState([])
  const [companies, setCompanies] = useState([])
  const [team, setTeam] = useState([])

  useEffect(()=>{
    // Prefetch dashboard data (students placed, companies, team)
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
      } catch (e) {
        // Silently ignore for now
      }
    }
    fetchAll()
  }, [])

  const filtered = useMemo(()=>{
    return MOCK_JOBS.filter(j=>{
      const q = (filters.q||'').toLowerCase()
      const matchesQ = !q || [j.company, j.role, ...(j.skills||[])].join(' ').toLowerCase().includes(q)
      const matchesCompany = !filters.company || j.company.toLowerCase().includes(filters.company.toLowerCase())
      const matchesRole = !filters.role || j.role.toLowerCase().includes(filters.role.toLowerCase())
      const matchesType = !filters.type || true // placeholder for type logic
      const matchesCgpa = !filters.cgpa || parseFloat(j.cgpa||'0') >= parseFloat(filters.cgpa)
      return matchesQ && matchesCompany && matchesRole && matchesType && matchesCgpa
    })
  }, [filters])

  return (
    <div className="min-h-screen bg-[#070814]">
      <Navbar />
      <Hero />

      <main className="relative z-10 -mt-6">
        <section id="jobs" className="py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Job Listings</h2>
              <a href="/test" className="text-sm text-white/60 hover:text-white">System status</a>
            </div>
            <Filters onChange={setFilters} />
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </section>

        <Stats />

        <StudentsPlaced items={placed} />
        <CompaniesVisited items={companies} />
        <Team items={team} />
      </main>

      <Footer />
    </div>
  )
}
