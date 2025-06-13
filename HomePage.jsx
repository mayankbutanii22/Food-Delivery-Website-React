
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';
import { addToCart } from '../Redux/cartSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const restaurants = useSelector(state => state.restaurant.list) || [];
  const dishes = useSelector((state) => state.menu.dishes || []);
 const vegDishes = dishes.filter(dish => dish.category === 'veg');
const nonVegDishes = dishes.filter(dish => dish.category === 'non-veg');
const drinkDishes = dishes.filter(dish => dish.category === 'drink');

  const handleAddToCart = (dish) => {
    dispatch(addToCart(dish));
    navigate('/cart');
  };

  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Delicious Food, Delivered Fast 🍔</h1>
          <p>Order from your favorite restaurants and enjoy hot meals at your doorstep.</p>
          <Link to="/menu" className={styles.orderBtn}>Order Now</Link>
        </div>
        <div className={styles.heroImage}>
          <img
            src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98="
          />
        </div>
      </section>


  <section className={styles.section}>
  <h2>Restaurants</h2>
  <div className={styles.cardGridRestaurant}>
    {restaurants.map(res =>
        <div className={styles.cardRestaurant} key={res.id}>
          <img src={res.image} alt={res.name} />
          <h3>{res.name}</h3>
        </div>
    )}
  </div>
</section>

{/* Popular Dishes - Veg */}
<section className={styles.section}>
  <h2>Veg Dishes 🟢</h2>
  <div className={styles.cardGrid}>
    {vegDishes.map(dish => (
      <div key={dish.id} className={styles.card}>
        <img src={dish.image} alt={dish.name} />
        <h3>{dish.name}</h3>
        <p>₹{dish.price}</p>
        <button className={styles.addBtn} onClick={() => handleAddToCart(dish)}>
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</section>

{/* Popular Dishes - Non-Veg */}
<section className={styles.section}>
  <h2>Non-Veg Dishes 🔴</h2>
  <div className={styles.cardGrid}>
    {nonVegDishes.map(dish => (
      <div key={dish.id} className={styles.card}>
        <img src={dish.image} alt={dish.name} />
        <h3>{dish.name}</h3>
        <p>₹{dish.price}</p>
        <button className={styles.addBtn} onClick={() => handleAddToCart(dish)}>
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</section>

    {/* Popular Dishes - Drinks */}
    <section className={styles.section}>
    <h2>Drinks & Desserts 🍹</h2>
    <div className={styles.cardGrid}>
    {drinkDishes.map(dish => (
      <div key={dish.id} className={styles.card}>
        <img src={dish.image} alt={dish.name} />
        <h3>{dish.name}</h3>
        <p>₹{dish.price}</p>
        <button className={styles.addBtn} onClick={() => handleAddToCart(dish)}>
          Add to Cart
        </button>
      </div>
    ))}
    </div>
    </section>


      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Ready to order?</h2>
        <p>Discover dishes you love and get them delivered fast.</p>
        <Link to="/menu" className={styles.orderBtnLarge}>Browse Menu</Link>
      </section>
    </div>
  );
};

export default HomePage;




