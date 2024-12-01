import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import ProductItem from "../component/product/ProductItem";
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
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
