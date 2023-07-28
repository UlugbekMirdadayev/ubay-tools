import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], topProducts: [] };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, { payload }) {
      return { ...state, products: payload };
    },
    setTopProducts(state, { payload }) {
      return { ...state, topProducts: payload };
    },
  },
});

const { actions, reducer } = productsSlice;

export const { setProducts, setTopProducts } = actions;

export default reducer;
