import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        🌲 Outernet
      </div>

      <input
        type="text"
        className="search-placeholder"
        placeholder="Buscar productos..."
        readOnly
      />

      <nav className="header-links">
        <Link to="/">Inicio</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  )
}
