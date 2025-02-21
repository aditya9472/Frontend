import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/CartSlice';
import userReducer from '../features/user/UserSlice';
import productReducer from '../features/product/ProductSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    product: productReducer,
  },
});

export default store;
