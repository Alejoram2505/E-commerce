import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Products from './pages/Products'

export default function App() {
  const handleAddToCart = (product) => {
    console.log('Producto agregado:', product)
  }

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Products onAdd={handleAddToCart} />} />
          <Route path="/carrito" element={<h2 style={{ padding: '2rem' }}>Carrito (en construcción)</h2>} />
          <Route path="/favoritos" element={<h2 style={{ padding: '2rem' }}>Favoritos (en construcción)</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
