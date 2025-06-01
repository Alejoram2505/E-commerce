import { Link } from 'react-router-dom'
import '../styles/header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-left small-text">
        “La aventura también se conecta.”
      </div>

      <div className="header-center site-title">
        🌲 Outernet
      </div>

      <nav className="header-links">
        <Link to="/">Inicio</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  )
}

