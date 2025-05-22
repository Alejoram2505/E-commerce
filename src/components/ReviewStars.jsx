export default function ReviewStars({ rating = 0 }) {
  const total = 5
  return (
    <div style={{ fontSize: '0.85rem', color: '#f5b50a', marginBottom: '0.5rem' }}>
      {[...Array(total)].map((_, i) => (
        <span key={i}>{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  )
}
