import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CartPage.module.css';
import { removeFromCart, updateQuantity } from '../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
    } else {
      alert("Your cart is empty!");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCart}>Your cart is empty</p>
      ) : (
        <div className={styles.cartGrid}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price} x {item.quantity}</p>
              </div>
              <div className={styles.actions}>
                <button onClick={() => dispatch(updateQuantity({ id: item.id, change: -1 }))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(updateQuantity({ id: item.id, change: 1 }))}>+</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.summary}>
        <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
        <button className={styles.checkoutBtn} onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;

