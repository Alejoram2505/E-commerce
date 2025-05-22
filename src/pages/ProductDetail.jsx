import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products'
import ReviewStars from '../components/ReviewStars'
import FavoriteButton from '../components/FavoriteButton'
import ImageSlider from '../components/ImageSlider'
import '../styles/ProductDetail.css'

export default function ProductDetail({ onAdd }) {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  const [quantity, setQuantity] = useState(1)

  if (!product) return <p style={{ padding: '2rem' }}>Producto no encontrado</p>

  const { name, price, discountPrice, images, rating } = product

  const finalPrice = (discountPrice ?? price) * quantity

  return (
    <section className="product-detail">
      <div className="product-images">
        <ImageSlider images={images ?? [product.image]} />
      </div>

      <div className="product-info">
        <div className="top-row">
          <h2>{name}</h2>
          <FavoriteButton product={product} />
        </div>

        <ReviewStars rating={rating} />

        <div className="price">
          {discountPrice && <span className="old-price">${price.toFixed(2)}</span>}
          <span className="final-price">${(discountPrice ?? price).toFixed(2)}</span>
        </div>

        <div className="quantity">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>–</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => Math.min(9, q + 1))}>+</button>
        </div>

        <button className="add-to-cart" onClick={() => onAdd(product)}>
          Agregar al carrito (${finalPrice.toFixed(2)})
        </button>

        <ul className="features">
          <li>Envío gratuito a todo el país</li>
          <li>Garantía de 1 año</li>
          <li>Hecho para exploradores y nómadas digitales</li>
        </ul>

        <p className="description">
          Este producto fue diseñado para ofrecer la mejor experiencia al aire libre sin sacrificar conectividad ni energía.
        </p>
      </div>
    </section>
  )
}
