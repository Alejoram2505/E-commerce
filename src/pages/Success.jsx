import { Link } from 'react-router-dom';
import '../styles/Success.css';

export default function Success() {
  return (
    <div className="success-container">
      <div className="success-icon">✅</div>
      <h2>Your order is successfully placed</h2>
      <p>
        Gracias por tu compra, esperamos que disfrutes de tu producto. Si tienes alguna duda, no dudes en contactarnos.
      </p>
      <Link className="success-btn" to="/">REGRESAR AL HOME</Link>
    </div>
  );
}
