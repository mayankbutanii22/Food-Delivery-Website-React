
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchRestaurantDetails = createAsyncThunk(
  'restaurant/fetchRestaurantDetails',
  async (id, { rejectWithValue }) => {
    if (!details) return rejectWithValue('Restaurant not found');
    return details;
  }
);

const initialState = {
  list: [
    { id: 1, name: 'Food Zone Restaurant', rating: 4.8, image: 'https://admin.foodzone.one/storage/app/public/restaurant/cover/2024-10-12-670a5d6b213cc.png' },
   
  ],
  selectedRestaurant: null,
  status: 'idle',
  error: null,
};


const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    clearSelectedRestaurant(state) {
      state.selectedRestaurant = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantDetails.pending, (state) => {
        state.status = 'loading';
        state.error  = null;
      })
      .addCase(fetchRestaurantDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedRestaurant = action.payload;
      })
      .addCase(fetchRestaurantDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error  = action.payload || action.error.message;
      });
  },
});

export const { clearSelectedRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;






