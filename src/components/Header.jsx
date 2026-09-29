function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Koronet inicio"><span className="brand-mark">K</span><span>KORONET<span className="brand-dot">.</span></span></a>
      <nav><a className="active" href="#services">Workspace</a><a href="#assistant">Asistente IA</a></nav>
      <div className="profile"><span className="avatar">CM</span><span className="profile-name">Camilo M. <small>⌄</small></span></div>
    </header>
  )
}

export default Header
