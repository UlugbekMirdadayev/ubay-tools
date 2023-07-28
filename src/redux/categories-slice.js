import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, { payload }) {
      return (state = payload);
    },
  },
});

const { actions, reducer } = categoriesSlice;

export const { setCategories } = actions;

export default reducer;
