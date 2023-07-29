import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setLiked(state, { payload }) {
      const isLiked = state.find(({ ident }) => ident === payload?.ident);
      if (isLiked) {
        return state?.filter(({ ident }) => ident !== payload?.ident);
      }
      return [...state, payload];
    },
  },
});

const { actions, reducer } = favoritesSlice;

export const { setLiked } = actions;

export default reducer;
