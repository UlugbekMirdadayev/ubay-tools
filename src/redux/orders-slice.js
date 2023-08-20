import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders(state, { payload }) {
      return (state = payload);
    },
  },
});

const { actions, reducer } = cartSlice;

export const { setOrders } = actions;

export default reducer;
