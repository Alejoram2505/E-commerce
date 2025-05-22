import ReviewStars from './ReviewStars'
import PriceDisplay from './PriceDisplay'
import FavoriteButton from './FavoriteButton'

export default function ProductCard({ product, onAdd }) {
  const { name, price, discountPrice, image, rating } = product

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <FavoriteButton product={product} />
      <h3 className="product-title">{name}</h3>
      <div className="price">
        {discountPrice && (
          <span className="old-price">${price.toFixed(2)}</span>
        )}
        <span>${(discountPrice ?? price).toFixed(2)}</span>
      </div>
      <ReviewStars rating={rating} />
      <button className="add-button" onClick={() => onAdd(product)}>
        Agregar al carrito
      </button>
    </div>
  )
}
