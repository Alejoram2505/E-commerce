export default function PriceDisplay({ price, discount }) {
  return (
    <div className="text-gray-800 space-x-2">
      {discount && (
        <span className="text-sm line-through text-gray-500">
          ${discount.toFixed(2)}
        </span>
      )}
      <strong className="text-lg font-bold">${price.toFixed(2)}</strong>
    </div>
  )
}
