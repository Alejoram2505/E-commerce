import { createContext, useRef, useContext, useState } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const favoritesRef = useRef([])
  const [, forceUpdate] = useState(0)

  const toggleFavorite = (id) => {
    const exists = favoritesRef.current.includes(id)
    favoritesRef.current = exists
      ? favoritesRef.current.filter(favId => favId !== id)
      : [...favoritesRef.current, id]

    forceUpdate(n => n + 1) 
  }

  const isFavorite = (id) => {
    return favoritesRef.current.includes(id)
  }

  return (
    <FavoritesContext.Provider value={{ toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(FavoritesContext)
