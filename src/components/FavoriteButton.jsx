import { useFavorites } from '../context/FavoritesContext'

export default function FavoriteButton({ product }) {
  const { toggleFavorite, isFavorite } = useFavorites()
  const liked = isFavorite(product.id)

  return (
    <button
      onClick={() => toggleFavorite(product.id)}
      style={{
        border: 'none',
        background: 'none',
        fontSize: '1.2rem',
        color: liked ? 'red' : '#aaa',
        cursor: 'pointer'
      }}
    >
      ♥
    </button>
  )
}
