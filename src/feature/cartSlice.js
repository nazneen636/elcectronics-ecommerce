import { createSlice } from "@reduxjs/toolkit";
import product from "../product.json";

const initialState = {
  cart: [],
  data: product,
  total: 0,
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeToCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementByQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementByQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeToCart,
  incrementByQuantity,
  decrementByQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
