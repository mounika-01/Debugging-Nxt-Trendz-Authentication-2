import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import Header from '../Header';
import './index.css';

const Cart = () => {
  const accessToken = Cookies.get('jwt_token');
  
  // Redirect to login if there's no access token
  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-img"
        />
      </div>
    </>
  );
}

export default Cart;
