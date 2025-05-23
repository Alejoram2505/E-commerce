import { Link } from 'react-router-dom';
import '../styles/Cart.css';

export default function Cart({ cartItems, onUpdate, onRemove, onClear }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 24;
  const tax = 61.99;
  const totalValue = subtotal - discount + tax;
  const total = Math.min(totalValue, 999.99).toFixed(2);
  const exceedsLimit = totalValue > 999.99;

  return (
    <section className="cart-container">
      <div className="cart-table">
        <h3>Shopping Cart</h3>
        <table>
          <thead>
            <tr>
              <th>PRODUCTS</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td className="cart-product">
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </td>
                <td>${item.price}</td>
                <td className="qty-buttons">
                  <button onClick={() => onUpdate(item.id, item.quantity - 1)}>-</button>
                  <span>{String(item.quantity).padStart(2, '0')}</span>
                  <button onClick={() => onUpdate(item.id, item.quantity + 1)}>+</button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="remove" onClick={() => onRemove(item.id)}>✕</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-actions">
          <Link to="/" className="back">⟵ RETURN TO SHOP</Link>
          <button className="clear" onClick={onClear}>VACIAR CARRITO</button>
        </div>
      </div>

      <div className="cart-summary">
        <h4>Cart Totals</h4>
        <ul>
          <li><span>Sub-total:</span><span>${subtotal.toFixed(2)}</span></li>
          <li><span>Shipping:</span><span>Free</span></li>
          <li><span>Discount:</span><span>${discount}</span></li>
          <li><span>Tax:</span><span>${tax}</span></li>
          <li className="total"><span>Total:</span><span>${total} USD</span></li>
        </ul>

        {exceedsLimit ? (
          <div className="checkout-error">
            El total excede el máximo permitido de $999.99. Reduce tu carrito para continuar. ❌
          </div>
        ) : (
          <Link to="/orden-exitosa" className="checkout">
            PROCEED TO CHECKOUT →
          </Link>
        )}
      </div>
    </section>
  );
}
