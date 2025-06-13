import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: true,
  status: 'idle',
  user: null,
  orders: [], 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    showLogin: (state) => {
      state.isLogin = true;
      state.status = 'idle';
    },
    showSignup: (state) => {
      state.isLogin = false;
      state.status = 'idle';
    },
    loginSuccess: (state, { payload }) => {
      state.user = payload;
      state.status = 'success';
    },
    signupSuccess: (state, { payload }) => {
      state.user = payload;
      state.status = 'success';
      state.isLogin = true;
    },
    logout: () => initialState,


    addOrder: (state, { payload }) => {
      state.orders.push(payload);
    },
  },
});

export const {
  showLogin,
  showSignup,
  loginSuccess,
  signupSuccess,
  logout,
  addOrder, 
} = userSlice.actions;

export default userSlice.reducer;



