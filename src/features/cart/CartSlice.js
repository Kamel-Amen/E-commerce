/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://fakestoreapi.com/products';
const initialState = {
  products: [],
  cartItems: [],
  total: 0,
  isLoading: true,
};

export const getProducts = createAsyncThunk('cart/getProducts', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [action.payload, ...state.cartItems];
    },
    removeFormCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.cartId !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    calculateTotal: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price;
      });
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { addToCart, removeFormCart, clearCart, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
