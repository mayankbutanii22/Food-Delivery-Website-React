
import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.about}>
          <h3>About FoodZone</h3>
          <p>FoodZone is your go-to destination for delicious food delivered fast. Explore top restaurants, curated dishes, and unbeatable offers.</p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/cart">Cart</a>
          <a href="/checkout">Checkout</a>
          <a href="/login">Login</a>
        </div>

        <div className={styles.newsletter}>
          <h4>Subscribe to Newsletter</h4>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>

        <div className={styles.social}>
          <h4>Follow Us</h4>
          <div className={styles.icons}>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>© {year} FoodZone. All rights reserved.</p>
        <div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
