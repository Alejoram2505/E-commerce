import { Link } from 'react-router-dom'
import ReviewStars from './ReviewStars'
import PriceDisplay from './PriceDisplay'
import FavoriteButton from './FavoriteButton'
import '../styles/ProductCard.css'

export default function ProductCard({ product, onAdd }) {
  const { id, name, price, discountPrice, image, rating } = product

  return (
    <div className="product-card">
      <Link to={`/producto/${id}`}>
        <img src={image} alt={name} />
      </Link>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to={`/producto/${id}`} className="product-title">{name}</Link>
        <FavoriteButton product={product} />
      </div>

      <div className="price">
        {discountPrice ? (
          <>
            <span className="old-price">${price.toFixed(2)}</span>{' '}
            <span className="new-price">${discountPrice.toFixed(2)}</span>
          </>
        ) : (
          <span>${price.toFixed(2)}</span>
        )}
      </div>

      <ReviewStars rating={rating} />

      <button className="add-button" onClick={() => onAdd(product)}>
        Agregar al carrito
      </button>
    </div>
  )
}
