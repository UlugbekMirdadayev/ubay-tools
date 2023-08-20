import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: false,
  password: false,
  login: false,
  update: false,
};

const cartSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setOpenAddressModal(state, { payload }) {
      return { ...state, address: payload };
    },
    setOpenPasswordModal(state, { payload }) {
      return { ...state, password: payload };
    },
    setOpenUpdateModal(state, { payload }) {
      return { ...state, update: payload };
    },
    setOpenLoginModal(state, { payload }) {
      return { ...state, login: payload };
    },
  },
});

const { actions, reducer } = cartSlice;

export const {
  setOpenAddressModal,
  setOpenPasswordModal,
  setOpenUpdateModal,
  setOpenLoginModal,
} = actions;

export default reducer;
