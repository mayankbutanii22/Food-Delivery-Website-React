// src/redux/menuSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dishes: [
    { id: 1, name: 'Margherita Pizza', price: 199, image: 'https://kristineskitchenblog.com/wp-content/uploads/2024/07/margherita-pizza-22-2.jpg',category: 'veg' },
    { id: 2, name: 'Veg Biryani', price: 249, image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-biryani-recipe.jpg',category: 'veg' },
    { id: 3, name: 'Chicken Burger', price: 179, image: 'https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg',category: 'non-veg' },
    { id: 4, name: 'Paneer Tikka', price: 229, image: 'https://www.gohealthyeverafter.com/wp-content/uploads/2023/05/Paneer-tikka-2.jpg',category: 'veg' },
    { id: 5, name: 'Spring Rolls', price: 149, image: 'https://www.connoisseurusveg.com/wp-content/uploads/2022/04/baked-spring-rolls-sq.jpg',category: 'veg' },
    { id: 6, name: 'Masala Dosa', price: 129, image: 'https://palatesdesire.com/wp-content/uploads/2022/09/Mysore-masala-dosa-recipe@palates-desire.jpg',category: 'veg' },
    { id: 7, name: 'Tandoori Chicken', price: 299, image: 'https://static01.nyt.com/images/2024/05/16/multimedia/fs-tandoori-chicken-hmjq/fs-tandoori-chicken-hmjq-mediumSquareAt3X.jpg',category: 'non-veg' },
    { id: 8, name: 'Sushi Platter', price: 399, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqL7EP_U14Z7g1KaTiKcX_ROPAbSpQGI5-AQ&s',category: 'non-veg' },
    { id: 9, name: 'Pasta Alfredo', price: 199, image: 'https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg',category: 'veg' },
    { id: 10, name: 'Tacos', price: 159, image: 'https://www.thespruceeats.com/thmb/ereeBcFkDEbDT2VSlDe34sqXO_8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tinga-tinga-de-pollo-4773239-Hero_01-1bd1d960c02a4fdb812323b8c60fd55b.jpg',category: 'non-veg' },
    { id: 11, name: 'Shawarma Roll', price: 179, image:'https://www.yummefy.com/uploads/1625206281Chicken-Shawarma-Recipe.jpg',category: 'non-veg' },
    { id: 12, name: 'Chowmein', price: 149, image: 'https://images.getrecipekit.com/20221130023757-untitled-design-12-3.png?aspect_ratio=16:9&quality=90&',category: 'veg' },
    { id: 13, name: 'Rajma Chawal', price: 129, image: 'https://www.indianfoodforever.com/iffwd/wp-content/uploads/rajma-chawal.jpg',category: 'veg' },
    { id: 14, name: 'Chocolate Cake', price: 99, image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/easy_chocolate_cake_31070_16x9.jpg',category: 'drink' },
    { id: 15, name: 'Ice Cream Sundae', price: 89, image: 'https://m.media-amazon.com/images/I/81KBAvmzImL._AC_UF894,1000_QL80_.jpg',category: 'drink' },
    { id: 16, name: 'Butter Chicken', price: 199, image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/butter-chicken-cf6f9e2.jpg',category: 'non-veg' },
    { id: 17, name: 'Machher Jhol', price: 169, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShcLvlN8aSxSmpsF3bs_OPnwRmQZtqRCFTZA&s',category: 'non-veg' },
    { id: 18, name: 'Mutton curry', price: 89, image: 'https://c.ndtvimg.com/2023-01/oqp7e4cg_mutton-curry_625x300_21_January_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886',category: 'non-veg' },
    { id: 19, name: 'Water', price: 20, image: 'https://images.openfoodfacts.org/images/products/890/601/729/0026/front_en.23.full.jpg',category: 'drink' },
    { id: 20, name: 'Coca Cola', price: 100, image: 'https://5.imimg.com/data5/QV/MN/GO/SELLER-48652903/250ml-coca-cola-500x500.jpg',category: 'drink' },
       { id: 21, name: 'Sprite', price: 95, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_oAV7szSmhd9Nl587-UuI9iueMYpjObMxg&s',category: 'drink' },
       { id: 22, name: 'Fanta', price: 90, image: 'https://cdn.uengage.io/uploads/5/image-177295-1738399815.jpeg',category: 'drink' },
       { id: 23, name: 'Chikoo Juice', price: 50, image: 'https://vaya.in/recipes/wp-content/uploads/2017/11/Chikoo-Milkshake.jpg',category: 'drink' },
      { id: 24, name: 'Punjabi Lassi', price: 50, image: 'https://static.toiimg.com/thumb/58360232.cms?imgsize=1259672&width=800&height=800',category: 'drink' },
  ],
  status: 'idle',
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addDish(state, action) {
      state.dishes.push(action.payload);
    },
    removeDish(state, action) {
      state.dishes = state.dishes.filter(dish => dish.id !== action.payload);
    },
  },
});

export const { addDish, removeDish } = menuSlice.actions;
export default menuSlice.reducer;



