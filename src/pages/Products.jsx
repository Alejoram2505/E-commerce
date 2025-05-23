import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import '../styles/products.css'  // revisa que el nombre coincida


export default function Products({ onAdd }) {
  return (
    <section className="container">
      <h2>Productos destacados</h2>
      <div className="grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}
