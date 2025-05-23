import { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import Success from './pages/Success'

export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [notification, setNotification] = useState(null)
  const notificationTimeout = useRef(null)

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(p => p.id === product.id)
      if (existing) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, quantity: Math.min(p.quantity + 1, 9) }
            : p
        )
      }

      return [
        ...prev,
        {
          ...product,
          price: product.discountPrice || product.price,
          quantity: 1
        }
      ]
    })

    showNotification('Producto agregado al carrito ✅')
  }

  const handleUpdateQuantity = (id, newQty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.min(Math.max(newQty, 1), 9) }
          : item
      )
    )
  }

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
    showNotification('Producto eliminado del carrito ❌')
  }

  const handleClearCart = () => {
    setCartItems([])
    showNotification('Carrito vaciado 🗑️')
  }

  const showNotification = (message) => {
    setNotification(message)
    if (notificationTimeout.current) clearTimeout(notificationTimeout.current)
    notificationTimeout.current = setTimeout(() => {
      setNotification(null)
    }, 2500)
  }

  return (
    <BrowserRouter>
      <Header />
      {notification && (
        <div style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          background: '#1f3d2b',
          color: 'white',
          padding: '0.8rem 1.2rem',
          borderRadius: '5px',
          zIndex: 1000
        }}>
          {notification}
        </div>
      )}
      <main>
        <Routes>
          <Route path="/" element={<Products onAdd={handleAddToCart} />} />
          <Route path="/producto/:id" element={<ProductDetail onAdd={handleAddToCart} />} />
          <Route path="/favoritos" element={<Favorites onAdd={handleAddToCart} />} />
          <Route path="/carrito" element={
            <Cart
              cartItems={cartItems}
              onUpdate={handleUpdateQuantity}
              onRemove={handleRemoveItem}
              onClear={handleClearCart}
            />
          } />
          <Route path="/orden-exitosa" element={<Success />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
