import { useEffect, useState } from 'react'
import Header from './components/Header'
import ServiceCard from './components/ServiceCard'
import SearchBar from './components/SearchBar'
import AiAssistant from './components/AiAssistant'
import './App.css'

const serviceCatalog = [
  { name: 'GitHub', type: 'Repositorio y CI/CD', icon: 'GH', color: 'orange' },
  { name: 'Vercel', type: 'Despliegues frontend', icon: 'V', color: 'black' },
  { name: 'API de Koronet', type: 'Servicios de datos', icon: 'K', color: 'blue' },
  { name: 'Figma', type: 'Sistema de diseño', icon: 'Fg', color: 'purple' },
]

const simulateServiceCheck = () => new Promise((resolve) => {
  window.setTimeout(() => resolve(serviceCatalog.map((service, index) => ({
    ...service,
    status: index === 2 ? 'offline' : 'online',
    latency: index === 2 ? '—' : `${42 + index * 17} ms`,
  }))), 700)
})

function App() {
  const [services, setServices] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isChecking, setIsChecking] = useState(false)
  const [lastChecked, setLastChecked] = useState(null)

  const checkServices = async () => {
    setIsChecking(true)
    const nextServices = await simulateServiceCheck()
    setServices(nextServices)
    setLastChecked(new Date())
    setIsChecking(false)
  }

  useEffect(() => {
    let isMounted = true
    simulateServiceCheck().then((nextServices) => {
      if (isMounted) {
        setServices(nextServices)
        setLastChecked(new Date())
      }
    })
    return () => { isMounted = false }
  }, [])

  const filteredServices = services.filter((service) => service.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const onlineCount = services.filter((service) => service.status === 'online').length

  return (
    <div className="app-shell">
      <Header />
      <main>
        <section className="welcome-row">
          <div><p className="eyebrow">Panel de operaciones / 28 SEP 2026</p><h1>Todo bajo control.</h1><p className="intro">Una vista rápida para vigilar tus herramientas y desbloquear errores.</p></div>
          <div className="health-summary"><span className="summary-ring"><strong>{services.length ? onlineCount : '—'}</strong><small>/{services.length || '—'}</small></span><span><b>Servicios</b><br />operativos</span></div>
        </section>
        <section className="workspace-grid" id="services">
          <div className="services-section">
            <div className="section-heading"><div><span className="section-kicker">01 / MONITOR</span><h2>Estado de servicios</h2></div><span className="live-label"><i /> LIVE</span></div>
            <div className="toolbar"><SearchBar value={searchTerm} onChange={setSearchTerm} /><button className="check-button" type="button" onClick={checkServices} disabled={isChecking}><span>{isChecking ? 'Consultando...' : 'Consultar estado'}</span><span className="button-arrow">↗</span></button></div>
            <div className="service-list">{filteredServices.map((service) => <ServiceCard key={service.name} service={service} />)}{!filteredServices.length && <p className="empty-state">No encontramos una herramienta con ese nombre.</p>}</div>
            <p className="updated-label">{lastChecked ? `Última consulta ${lastChecked.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}` : 'Preparando consulta...'}</p>
          </div>
          <AiAssistant />
        </section>
      </main>
      <footer><span>Koronet / Developer workspace</span><span>React + Vite <b>●</b></span></footer>
    </div>
  )
}

export default App
