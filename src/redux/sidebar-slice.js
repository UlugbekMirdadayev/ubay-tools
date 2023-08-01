import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarVisible(state, { payload }) {
      return (state = payload);
    },
  },
});

const { actions, reducer } = sidebarSlice;

export const { setSidebarVisible } = actions;

export default reducer;
