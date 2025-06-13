import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Navbar.module.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">FoodZone</Link>
      </div>

      <div className={styles.navLinks}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
        <NavLink to="/menu" className={({ isActive }) => (isActive ? styles.active : '')}>Menu</NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? styles.active : '')}>
        Cart {cartItemsCount > 0 && <span className={styles.cartCount}>{cartItemsCount}</span>}
        </NavLink>
        <NavLink to="/checkout" className={({ isActive }) => (isActive ? styles.active : '')}>Checkout</NavLink>
        <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : '')}>Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

