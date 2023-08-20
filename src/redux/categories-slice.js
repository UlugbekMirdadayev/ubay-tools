import { createSlice } from "@reduxjs/toolkit";

const initialState = { categories: [], sub_categories: [] };

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, { payload }) {
      return { ...state, categories: payload };
    },
    setSubCategories(state, { payload }) {
      return { ...state, sub_categories: payload };
    },
  },
});

const { actions, reducer } = categoriesSlice;

export const { setCategories,setSubCategories } = actions;

export default reducer;
