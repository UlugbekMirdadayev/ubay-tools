import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage["favorites_ubay"] || "[]");

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setLiked(state, { payload }) {
      const isLiked = state.find(({ ident }) => ident === payload?.ident);
      if (isLiked) {
        const response = state?.filter(({ ident }) => ident !== payload?.ident);
        localStorage.setItem("favorites_ubay", JSON.stringify(response));
        return response;
      }
      localStorage.setItem("favorites_ubay", JSON.stringify([...state, payload]));
      return [...state, payload];
    },
  },
});

const { actions, reducer } = favoritesSlice;

export const { setLiked } = actions;

export default reducer;
