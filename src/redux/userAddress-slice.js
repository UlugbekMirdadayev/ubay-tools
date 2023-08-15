import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userAddressSlice = createSlice({
  name: "userAddress",
  initialState,
  reducers: {
    setUserAddress(state, { payload }) {
      return (state = payload);
    },
  },
});

const { actions, reducer } = userAddressSlice;

export const { setUserAddress } = actions;

export default reducer;
