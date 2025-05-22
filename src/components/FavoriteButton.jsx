import { useState, forwardRef } from 'react'

const FavoriteButton = forwardRef(({ product }, ref) => {
  const [isFav, setIsFav] = useState(false)

  const toggleFav = () => {
    setIsFav(!isFav)
    if (ref?.current && !ref.current.includes(product.id)) {
      ref.current.push(product.id)
    }
  }

  return (
    <button
      onClick={toggleFav}
      className="text-pink-500 hover:text-pink-600 text-xl"
    >
      {isFav ? '💖' : '🤍'}
    </button>
  )
})

export default FavoriteButton
