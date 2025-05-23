import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useFavorites } from '../context/FavoritesContext'

export default function Favorites({ onAdd }) {
  const { isFavorite } = useFavorites()

  // Filtra productos que estén marcados como favoritos
  const favoriteProducts = products.filter(p => isFavorite(p.id))

  return (
    <section className="container">
      <h2>Mis Favoritos</h2>

      {favoriteProducts.length === 0 ? (
        <p>No has marcado ningún producto como favorito.</p>
      ) : (
        <div className="grid">
          {favoriteProducts.map(product => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>
      )}
    </section>
  )
}
