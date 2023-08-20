import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage["cart_ubay"] || "[]");

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, { payload }) {
      const isOld = state.find(({ ident }) => ident === payload?.ident);
      if (isOld) {
        const response = state?.map((product) => ({
          ...product,
          cart_count:
            isOld?.ident === product?.ident
              ? (product?.cart_count || 1) + 1
              : product?.cart_count || 1,
        }));
        localStorage.setItem("cart_ubay", JSON.stringify(response));
        return response;
      }
      localStorage.setItem(
        "cart_ubay",
        JSON.stringify([...state, { ident: payload?.ident, cart_count: 1 }])
      );
      return [...state, { ident: payload?.ident, cart_count: 1 }];
    },
    setCartAddCount(state, { payload }) {
      const response = state?.map((product) => ({
        ...product,
        cart_count:
          payload?.ident === product?.ident
            ? (product?.cart_count || 1) + 1
            : product?.cart_count || 1,
      }));
      localStorage.setItem("cart_ubay", JSON.stringify(response));
      return response;
    },
    setCartSetCount(state, { payload }) {
      if (+payload.cart_count) {
        const response = state?.map((product) => ({
          ...product,
          cart_count:
            payload?.ident === product?.ident
              ? payload?.cart_count
              : product?.cart_count || 1,
        }));
        localStorage.setItem("cart_ubay", JSON.stringify(response));
        return response;
      } else {
        const response = state?.filter(({ ident }) => ident !== payload?.ident);
        localStorage.setItem("cart_ubay", JSON.stringify(response));
        return response;
      }
    },
    setCartRemoveCount(state, { payload }) {
      const isProduct = state.find(({ ident }) => ident === payload?.ident);
      if (isProduct?.cart_count === 1) {
        const response = state?.filter(({ ident }) => ident !== payload?.ident);
        localStorage.setItem("cart_ubay", JSON.stringify(response));
        return response;
      }
      const response = state?.map((product) => ({
        ...product,
        cart_count:
          payload?.ident === product?.ident
            ? (product?.cart_count || 1) - 1
            : product?.cart_count || 1,
      }));
      localStorage.setItem("cart_ubay", JSON.stringify(response));
      return response;
    },
    setRemoveCart(state, { payload }) {
      const response = state?.filter(({ ident }) => ident !== payload?.ident);
      localStorage.setItem("cart_ubay", JSON.stringify(response));
      return response;
    },
    setClearCart(state, actions) {
      localStorage.removeItem("cart_ubay");
      return (state = []);
    },
  },
});

const { actions, reducer } = cartSlice;

export const {
  setCart,
  setCartAddCount,
  setCartSetCount,
  setCartRemoveCount,
  setRemoveCart,
  setClearCart,
} = actions;

export default reducer;
