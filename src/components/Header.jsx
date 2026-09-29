import logoKoronet from '../assets/descarga (1).jpg'

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Koronet inicio">
        <img className="brand-mark" src={logoKoronet} alt="Logo Koronet" />
        <span>KORONET<span className="brand-dot">.</span></span>
      </a>
      <nav><a className="active" href="#services">Workspace</a><a href="#assistant">Asistente IA</a></nav>
      <div className="profile"><span className="avatar">CM</span><span className="profile-name">Camilo M. <small>⌄</small></span></div>
    </header>
  )
}

export default Header
