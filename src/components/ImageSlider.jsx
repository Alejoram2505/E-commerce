import { useState } from 'react'
import '../styles/ImageSlider.css'

export default function ImageSlider({ images }) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="slider-container">
      <img className="main-image" src={images[selected]} alt={`product-${selected}`} />

      <div className="thumbnails">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`thumb-${i}`}
            className={i === selected ? 'thumb selected' : 'thumb'}
            onClick={() => setSelected(i)}
          />
        ))}
      </div>
    </div>
  )
}
