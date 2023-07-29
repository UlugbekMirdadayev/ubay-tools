import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, { payload }) {
      const isOld = state.find(({ ident }) => ident === payload?.ident);
      if (isOld) {
        return state?.map((product) => ({
          ...product,
          cart_count:
            isOld?.ident === product?.ident
              ? (product?.cart_count || 0) + 1
              : product?.cart_count || 0,
        }));
      }
      return [...state, { ...payload, cart_count: 0 }];
    },
  },
});

const { actions, reducer } = cartSlice;

export const { setCart } = actions;

export default reducer;
