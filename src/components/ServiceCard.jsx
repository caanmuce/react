function ServiceCard({ service }) {
  const isOnline = service.status === 'online'

  return (
    <article className="service-card">
      <div className={`service-icon ${service.color}`}>{service.icon}</div>
      <div className="service-copy"><h3>{service.name}</h3><p>{service.type}</p></div>
      <div className={`status ${isOnline ? 'online' : 'offline'}`}><i />{isOnline ? 'Online' : 'Offline'}</div>
      <span className="latency">{service.latency}</span>
      <button className="more-button" type="button" aria-label={`Más opciones de ${service.name}`}>•••</button>
    </article>
  )
}

export default ServiceCard
