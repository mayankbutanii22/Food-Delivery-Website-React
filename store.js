import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import menuReducer from './menuSlice';
import restaurantReducer from './restaurantSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    menu: menuReducer,
    restaurant: restaurantReducer,
  },
});

export default store;