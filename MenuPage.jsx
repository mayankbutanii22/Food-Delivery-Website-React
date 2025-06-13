import React, { useState } from 'react';
import styles from './MenuPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dishes = useSelector((state) => state.menu.dishes);
  const [filter, setFilter] = useState('All');

  const handleAdd = (item) => {
    dispatch(addToCart(item));
    navigate('/cart');
  };

  const handleFilter = (type) => {
    setFilter(type);
  };


  const categoryLabel = {
    'veg': '🟢 Veg',
    'non-veg': '🔴 Non‑Veg',
    'drink': '🥤 Drink'
  };

  const filteredDishes = dishes.filter((dish) => {
    switch (filter) {
      case 'Veg':
        return dish.category === 'veg';
      case 'Non-Veg':
        return dish.category === 'non-veg';
      case 'Drinks':
        return dish.category === 'drink';
      default:
        return true; // "All"
    }
  });

  return (
  <div className={styles.container}>
      <h1>Explore Our Menu 🍽</h1>
      <p className={styles.subtitle}>Filter by category or taste your favorites!</p>

      {/* Filters */}
      <div className={styles.filters}>
        {['All', 'Veg', 'Non-Veg', 'Drinks'].map((type) => (
          <button
            key={type}
            onClick={() => handleFilter(type)}
            className={`${styles.filterButton} ${filter === type ? styles.activeFilter : ''}`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className={styles.menuGrid}>
        {filteredDishes.length === 0 ? (
          <p className={styles.emptyMessage}>No menu items found.</p>
        ) : (
          filteredDishes.map((item) => (
            <div key={item.id} className={styles.menuCard}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
    
              <p className={styles.tag}>{categoryLabel[item.category] ?? ''}</p>
              <button onClick={() => handleAdd(item)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};


export default MenuPage;

